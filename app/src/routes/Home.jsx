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
    <main className="overflow-hidden pt-24 text-[color:var(--text-main)] md:pt-28">
      <section className="relative pb-16 pt-6 md:pb-24 md:pt-10">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label">Portfolio bisnis pembuatan website</p>
            <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">
              Website profesional untuk bisnis yang ingin tampil lebih dipercaya.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Saya membantu UMKM, bisnis jasa, sekolah, desa, dan personal brand membangun website yang bersih, cepat, mudah dipahami, dan siap dipakai untuk jualan.
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

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {wins.map((item) => (
                <div key={item} className="quick-win">
                  <BadgeCheck size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-lg p-3">
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
