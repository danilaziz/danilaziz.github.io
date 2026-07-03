import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const mobileHeroImage = "/danilaziz-hero.avif";
const desktopHeroImage = "/danilaziz-hero.avif";
const HomeDeferred = lazy(() => import("./HomeDeferred"));

const copy = {
  id: {
    kicker: "Portfolio web developer",
    title: "Portfolio website bisnis yang clean, cepat, dan siap menjual.",
    description: "Saya membuat website yang membantu bisnis terlihat profesional, mudah dipercaya, dan punya alur jelas menuju WhatsApp atau demo produk.",
    consult: "Konsultasi Website",
    portfolio: "Lihat Portfolio",
    wins: ["Demo aktif", "Mobile first", "CTA menjual"],
    note: "Clean digital presence",
    wa: "Halo Danil, saya ingin konsultasi website.",
  },
  en: {
    kicker: "Web developer portfolio",
    title: "Clean business website portfolio built to convert.",
    description: "I build websites that help businesses look professional, earn trust faster, and guide visitors clearly toward WhatsApp or product demos.",
    consult: "Website Consultation",
    portfolio: "View Portfolio",
    wins: ["Live demos", "Mobile first", "Sales CTA"],
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

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
              {text.wins.map((item, index) => (
                <div key={item} className="quick-win" style={{ "--quick-delay": `${index * 120}ms` }}>
                  <BadgeCheck size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media relative" data-reveal>
            <div className="home-hero-portrait about-portrait glass-panel hero-frame rounded-lg p-3">
              <div className="about-portrait-line" aria-hidden="true" />
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
                  className="h-[430px] w-full rounded-md object-cover object-top md:h-[560px]"
                />
              </picture>
              <div className="about-floating-note">
                <Sparkles size={16} />
                <span>{text.note}</span>
              </div>
            </div>
            <div className="hero-offer">
              <span className="typing-name">I'm Danil Aziz</span>
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
