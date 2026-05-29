import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  ".reveal-scope [data-reveal]",
  ".reveal-scope .soft-card",
  ".reveal-scope .price-card",
  ".reveal-scope .cta-band",
  ".reveal-scope .glass-panel",
].join(",");

export default function RevealObserver() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add("reveal-item", "is-visible");
      });
      return undefined;
    }

    document.documentElement.classList.add("reveal-ready");
    let revealCount = 0;
    let frameId = null;

    const revealElement = (element) => {
      element.classList.add("is-visible");
      window.setTimeout(() => {
        element.classList.add("reveal-complete");
      }, 760);
    };

    const checkVisibleElements = () => {
      frameId = null;
      document.querySelectorAll(".reveal-item:not(.is-visible)").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88 && rect.bottom >= 0) {
          revealElement(element);
          observer.unobserve(element);
        }
      });
    };

    const scheduleVisibilityCheck = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(checkVisibleElements);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    const observeElements = (root = document) => {
      const elements = root.matches?.(revealSelector)
        ? [root, ...root.querySelectorAll(revealSelector)]
        : Array.from(root.querySelectorAll(revealSelector));

      elements.forEach((element) => {
        if (element.classList.contains("reveal-item")) return;

        element.classList.add("reveal-item");
        element.classList.remove("is-visible", "reveal-complete");
        element.style.setProperty("--reveal-delay", `${Math.min(revealCount % 5, 4) * 45}ms`);
        revealCount += 1;
        observer.observe(element);
      });

      scheduleVisibilityCheck();
    };

    observeElements();
    window.addEventListener("scroll", scheduleVisibilityCheck, { passive: true });
    window.addEventListener("resize", scheduleVisibilityCheck);

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
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleVisibilityCheck);
      window.removeEventListener("resize", scheduleVisibilityCheck);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}
