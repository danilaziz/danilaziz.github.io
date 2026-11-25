import {
  ArrowRight,
  Briefcase,
  Clock,
  Rocket,
  Star,
} from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechnologyBar from "../components/TechnologyBar";
import { useLanguage } from "../context/useLanguage";

const heroIllustration = "/dahero.webp";

const HomeDeferred = lazy(() => import("./HomeDeferred"));

const copy = {
  id: {
    badge: "Web Developer Freelance",
    available: "Tersedia",
    headlineTop: "Bangun",
    headlineAccent: "Website Impian",
    headlineBottom: "bersama DA Code",
    description:
      "Layanan pembuatan website profesional untuk mewujudkan ide Anda. Solusi web modern, cepat, dan responsif untuk kebutuhan bisnis maupun personal.",
    primaryCta: "Lihat Portofolio",
    stats: [
      { value: "3+", label: "Proyek Selesai" },
      { value: "5.0/5", label: "Rating Klien" },
      { value: "Cepat", label: "Support" },
    ],
  },
  en: {
    badge: "Freelance Web Developer",
    available: "Available",
    headlineTop: "Build Your",
    headlineAccent: "Dream Website",
    headlineBottom: "with DA Code",
    description:
      "Professional website development services to bring your ideas to life. Modern, fast, and responsive web solutions for your business or personal needs.",
    primaryCta: "View My Portfolio",
    stats: [
      { value: "3+", label: "Projects Done" },
      { value: "5.0/5", label: "Client Rating" },
      { value: "Fast", label: "Support" },
    ],
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

const statIcons = [Briefcase, Star, Clock];

export default function Home() {
  const showDeferredContent = useIdleDeferredContent();
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main className="reveal-scope overflow-hidden lg:overflow-visible bg-white text-[#101828] dark:bg-[color:var(--bg-page)] dark:text-[color:var(--text-main)]">
      <section className="relative pt-20 md:pt-24 lg:pt-24 xl:pt-24 2xl:pt-28">
        <div className="shell relative">
          <div className="grid items-center gap-8 lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[660px]">
            <div className="relative z-10 max-w-[640px] pt-4 sm:pt-0 xl:max-w-[700px] 2xl:max-w-[740px]" data-reveal>
              <div className="hero-fade-in inline-flex items-center gap-2 rounded-full border border-[#0866F5]/15 bg-[#EFF6FF]/80 px-4 py-2 text-sm font-medium text-[#0866F5] dark:border-[color:var(--border-soft)] dark:bg-[color:var(--accent-soft)]">
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" aria-hidden="true" />
                <span>{text.badge}</span>
              </div>

              <h1 className="hero-slide-up mt-7 max-w-[720px] text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#101828] dark:text-[color:var(--text-main)] md:mt-8">
                <span className="block">{text.headlineTop}</span>
                <span className="block bg-gradient-to-r from-[#0866F5] to-[#60A5FA] bg-clip-text text-transparent">
                  {text.headlineAccent}
                </span>
                <span className="block">{text.headlineBottom}</span>
              </h1>

              <p className="hero-fade-in-delayed mt-6 max-w-[560px] text-base leading-7 text-[#52627A] dark:text-[color:var(--text-muted)] md:text-lg md:leading-8 xl:max-w-[600px] xl:text-[19px]">
                {text.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-9">
                <Link
                  to="/portfolio"
                  className="btn-hero-primary px-7 py-4 text-base"
                >
                  <Rocket size={18} aria-hidden="true" />
                  <span>{text.primaryCta}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

              </div>

              <div className="mt-9 grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-0 lg:mt-10">
                {text.stats.map((stat, index) => {
                  const Icon = statIcons[index];
                  return (
                    <div key={stat.label} className="flex items-center justify-center sm:justify-start">
                      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:pr-6 sm:text-left">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-[#0866F5] dark:bg-[color:var(--accent-soft)] sm:h-11 sm:w-11">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-base font-bold leading-none text-[#101828] dark:text-[color:var(--text-main)] sm:text-lg">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-[11px] leading-tight text-[#52627A] dark:text-[color:var(--text-muted)] sm:text-sm">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                      {index < text.stats.length - 1 && (
                        <div
                          className="hidden h-12 w-px bg-[#E5EAF3] sm:mr-6 sm:block dark:bg-[color:var(--border-soft)]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hero-visual relative mx-auto w-full max-w-[640px] lg:absolute lg:right-0 lg:top-1/2 lg:z-0 lg:mx-0 lg:w-[54%] lg:max-w-none lg:-translate-y-1/2 xl:w-[52%] 2xl:w-[50%]" data-reveal>
              <div className="hero-fluid-shape" aria-hidden="true" />
              <div className="hero-fluid-shape--alt" aria-hidden="true" />
              <div className="hero-fluid-glow" aria-hidden="true" />

              <div className="relative z-[4] flex min-h-[340px] items-center justify-center px-2 pb-2 pt-0 sm:min-h-[420px] md:min-h-[520px] md:px-4 lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[660px]">
                <img
                  src={heroIllustration}
                  alt="Foto DA Code developer"
                  width="720"
                  height="900"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full max-h-[420px] w-full object-contain object-center drop-shadow-[0_20px_40px_rgba(16,24,40,0.12)] sm:max-h-[500px] md:max-h-[560px] lg:max-h-[600px] xl:max-h-[640px] 2xl:max-h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 md:mt-6 lg:mt-8" data-reveal>
        <TechnologyBar />
      </div>

      {showDeferredContent && (
        <Suspense fallback={null}>
          <HomeDeferred />
        </Suspense>
      )}
    </main>
  );
}
