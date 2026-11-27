import { useEffect } from "react";

const revealSelector = [
  ".reveal-scope [data-reveal]",
  ".reveal-scope .soft-card",
  ".reveal-scope .cta-band",
  ".reveal-scope .glass-panel",
].join(",");

export default function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add("reveal-item", "is-visible");
      });
      return undefined;
    }

    document.documentElement.classList.add("reveal-ready");
    let revealCount = 0;
    const timers = new Set();

    const revealElement = (element) => {
      if (element.classList.contains("is-visible")) return;
      element.classList.add("is-visible");
      const timerId = window.setTimeout(() => {
        timers.delete(timerId);
        if (element.isConnected) {
          element.classList.add("reveal-complete");
        }
      }, 760);
      timers.add(timerId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
    };

    const registerElement = (element) => {
      element.classList.add("reveal-item");
      element.classList.remove("is-visible", "reveal-complete");
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(revealCount % 5, 4) * 45}ms`,
      );
      revealCount += 1;

      // Above-the-fold content must never depend on an IO callback: after a
      // client-side route change that callback can arrive late (or not at all
      // in some browsers), leaving the freshly mounted page blank. Reveal it
      // synchronously; offscreen elements still animate via IntersectionObserver.
      if (isInViewport(element)) {
        revealElement(element);
        return;
      }

      observer.observe(element);
    };

    const observeElements = (root = document) => {
      const elements = root.matches?.(revealSelector)
        ? [root, ...root.querySelectorAll(revealSelector)]
        : Array.from(root.querySelectorAll(revealSelector));

      elements.forEach((element) => {
        if (element.classList.contains("reveal-item")) return;
        registerElement(element);
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          observeElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId));
      timers.clear();
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
