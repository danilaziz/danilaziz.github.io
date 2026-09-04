import { ArrowUpRight, Code2, Image as ImageIcon, Layers } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const mobileHeroImage = "/danilaziz.avif";
const desktopHeroImage = "/danilaziz.avif";
const HomeDeferred = lazy(() => import("./HomeDeferred"));

const copy = {
  id: {
    kicker: "Portfolio web developer",
    title: "Portfolio website bisnis yang clean, cepat, dan siap menjual.",
    description: "Saya membuat website yang membantu bisnis terlihat profesional, mudah dipercaya, dan punya alur jelas menuju WhatsApp atau demo produk.",
    consult: "Konsultasi Website",
    portfolio: "Lihat Portfolio",
    note: "Clean digital presence",
    wa: "Halo Danil, saya ingin konsultasi website.",
  },
  en: {
    kicker: "Web developer portfolio",
    title: "Clean business website portfolio built to convert.",
    description: "I build websites that help businesses look professional, earn trust faster, and guide visitors clearly toward WhatsApp or product demos.",
    consult: "Website Consultation",
    portfolio: "View Portfolio",
    note: "Clean digital presence",
    wa: "Hi Danil, I would like to consult about a website.",
  },
};

function useIdleDeferredContent() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return undefined;

    const show = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(show, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(show, 700);
    return () => window.clearTimeout(timeoutId);
  }, [ready]);

  return ready;
}

export default function Home() {
  const showDeferredContent = useIdleDeferredContent();
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main className="reveal-scope overflow-hidden pt-24 text-[color:var(--text-main)] md:pt-28">
      <section className="hero-stage relative pb-16 pt-6 md:pb-24 md:pt-10">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-copy" data-reveal>
            <p className="hero-kicker section-label">{text.kicker}</p>
            <h1 className="home-hero-title heading-font mt-4 max-w-3xl text-3xl font-extrabold leading-snug text-[color:var(--text-main)] sm:text-4xl sm:leading-tight md:text-6xl">
              {text.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              {text.description}
            </p>

            <div className="hero-actions mt-7 flex flex-col gap-3 sm:flex-row">
              <a {...externalLinkProps(whatsappHref(text.wa))} className="premium-button theme-primary-button hidden md:inline-flex">
                {text.consult}
                <ArrowUpRight size={16} className="ml-2" />
              </a>
              <Link to="/portfolio" className="premium-button theme-secondary-button">
                {text.portfolio}
              </Link>
            </div>
          </div>

          <div className="hero-media relative" data-reveal>
            <div className="hero-media-profile">
              <div className="hero-media-bg-circle" aria-hidden="true" />
              <span className="hero-media-ring-glow" aria-hidden="true" />
              <div className="hero-media-ring" aria-hidden="true" />

              <div className="hero-media-img-wrap" role="img" aria-label="Foto Danil Aziz">
                <picture>
                  <source media="(max-width: 767px)" srcSet={mobileHeroImage} />
                  <img
                    src={desktopHeroImage}
                    alt="Danil Aziz web developer"
                    width="720"
                    height="900"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="hero-portrait-img"
                  />
                </picture>
              </div>

              <div className="hero-float-icon hero-float-icon--left" aria-hidden="true">
                <Code2 size={22} />
              </div>
              <div className="hero-float-icon hero-float-icon--top-right" aria-hidden="true">
                <Layers size={22} />
              </div>
              <div className="hero-float-icon hero-float-icon--bottom-right" aria-hidden="true">
                <ImageIcon size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showDeferredContent && (
        <Suspense fallback={null}>
          <HomeDeferred />
        </Suspense>
      )}
    </main>
  );
}
