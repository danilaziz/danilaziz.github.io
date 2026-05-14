import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2, MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ImageLightbox from "../components/ImageLightbox";
import templates from "../data/templates";
import NotFound from "./NotFound";

const WA_NUMBER = "6282189855746";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const item = templates.find((template) => template.slug === slug);

  if (!item) {
    return <NotFound />;
  }

  const images = item.images || [item.image];
  const waText = `Halo Danil, saya tertarik membuat website seperti ${item.title}. Bisa konsultasi?`;

  return (
    <main className="overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-12 md:pb-16">
        <div className="shell">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-[var(--accent)]">
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div>
              <p className="section-label">Detail Portfolio</p>
              <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{item.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">{item.summary}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button">
                    Lihat Demo
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className={`premium-button ${item.demo ? "theme-secondary-button" : "theme-primary-button"}`}>
                  Konsultasi Serupa
                  <MessageCircleMore size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <aside className="soft-card p-6">
              <p className="text-sm font-semibold text-[color:var(--text-muted)]">Kategori</p>
              <p className="heading-font mt-2 text-2xl font-extrabold">{item.category}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech?.map((tech) => (
                  <span key={tech} className="theme-badge rounded-md px-3 py-1 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-panel overflow-hidden rounded-lg p-3">
              <button type="button" onClick={() => setLightboxIndex(0)} className="group relative block w-full cursor-zoom-in" aria-label={`Perbesar preview utama ${item.title}`}>
                <img src={images[0]} alt={`${item.title} preview utama`} loading="eager" decoding="async" className="h-[320px] w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.01] md:h-[520px]" />
                <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/45 text-white transition group-hover:bg-black/65">
                  <Maximize2 size={19} />
                </span>
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {images.slice(1, 3).map((image, index) => (
                <div key={image} className="soft-card overflow-hidden p-2">
                  <button type="button" onClick={() => setLightboxIndex(index + 1)} className="group relative block w-full cursor-zoom-in" aria-label={`Perbesar preview ${index + 2} ${item.title}`}>
                    <img src={image} alt={`${item.title} preview ${index + 2}`} loading="lazy" decoding="async" className="h-52 w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.02] lg:h-[250px]" />
                    <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/45 text-white transition group-hover:bg-black/65">
                      <Maximize2 size={18} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell grid gap-5 lg:grid-cols-3">
          <article className="soft-card p-6 lg:col-span-1">
            <p className="section-label">Tujuan</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">Apa yang ingin dicapai</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{item.objective}</p>
          </article>

          <article className="soft-card p-6">
            <p className="section-label">Scope</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">Bagian yang dibuat</h2>
            <ul className="mt-5 space-y-3">
              {item.scope?.map((scope) => (
                <li key={scope} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {scope}
                </li>
              ))}
            </ul>
          </article>

          <article className="soft-card p-6">
            <p className="section-label">Output</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">Hasil utama</h2>
            <ul className="mt-5 space-y-3">
              {item.result?.map((result) => (
                <li key={result} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {result}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <p className="section-label">Buat Website Serupa</p>
              <h2 className="heading-font mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Ingin portfolio seperti ini untuk bisnis kamu?</h2>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button">
              Chat WhatsApp
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <ImageLightbox images={images} title={item.title} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
      <Footer />
    </main>
  );
}

