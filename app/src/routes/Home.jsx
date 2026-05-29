import { ArrowRight, BadgeCheck } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const mobileHeroImage = "/danilaziz-hero-mobile.webp";
const desktopHeroImage = "/danilaziz-hero.webp";
const HomeDeferred = lazy(() => import("./HomeDeferred"));

const wins = ["Desain clean", "Mobile first", "SEO dasar", "WhatsApp CTA"];

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

  return (
    <main className="reveal-scope overflow-hidden pt-24 text-[color:var(--text-main)] md:pt-28">
      <section className="relative pb-16 pt-6 md:pb-24 md:pt-10">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-reveal>
            <p className="section-label">Portfolio bisnis pembuatan website</p>
            <h1 className="heading-font mt-4 max-w-3xl text-3xl font-extrabold leading-snug text-[color:var(--text-main)] sm:text-4xl sm:leading-tight md:text-6xl">
              Website cepat dan profesional untuk bisnis yang ingin terlihat dipercaya.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Saya membantu UMKM, bisnis jasa, sekolah, desa, dan personal brand membangun website yang bersih, ringan, dan siap mengarahkan calon pelanggan ke tindakan yang jelas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a {...externalLinkProps(whatsappHref())} className="premium-button theme-primary-button">
                Konsultasi Gratis
                <ArrowRight size={16} className="ml-2" />
              </a>
              <Link to="/portfolio" className="premium-button theme-secondary-button">
                Lihat Portfolio
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
              {wins.map((item) => (
                <div key={item} className="quick-win">
                  <BadgeCheck size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-reveal>
            <div className="glass-panel hero-frame rounded-lg p-3">
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
            </div>
            <div className="hero-offer">
              <span>Mulai Rp1,2jt</span>
              <strong>Website siap online</strong>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">Sudah termasuk setup dasar, domain, dan hosting 1 tahun.</p>
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
