import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, MessageCircleMore } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const ImageLightbox = lazy(() => import("./ImageLightbox"));

export default function TemplateCard({ item, priority = false }) {
  const message = `Halo, saya tertarik dengan contoh website *${item.title}*. Bisa minta info lebih lanjut?`;
  const waLink = whatsappHref(message);

  const images = (item.images || [item.image]).slice(0, 5);
  const cardImages = item.coverImage ? [item.coverImage, ...images.filter((image) => image !== item.coverImage)] : images;
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cardImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cardImages.length) % cardImages.length);
  };

  return (
    <article className="soft-card h-full overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden sm:h-56 sm:aspect-auto">
        <button type="button" onClick={() => setLightboxIndex(current)} className="group block h-full w-full cursor-zoom-in" aria-label={`Perbesar gambar ${item.title}`}>
          <img
            src={cardImages[current]}
            alt={`${item.title} ${current + 1}`}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            width="720"
            height="540"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/45 text-white opacity-100 transition group-hover:bg-black/65 md:opacity-0 md:group-hover:opacity-100">
            <Maximize2 size={18} />
          </span>
        </button>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

        {cardImages.length > 1 && (
          <>
            <button type="button" onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-black/32 p-2 text-white transition hover:bg-black/55" aria-label="Gambar sebelumnya">
              <ChevronLeft size={18} />
            </button>

            <button type="button" onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-black/32 p-2 text-white transition hover:bg-black/55" aria-label="Gambar berikutnya">
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">{item.category}</p>
            <h3 className="mt-2 heading-font text-2xl font-bold text-[color:var(--text-main)]">{item.title}</h3>
          </div>

          <Link to={`/portfolio/${item.slug}`} className="theme-icon-button rounded-md p-3 transition" aria-label={`Detail ${item.title}`}>
            <ExternalLink size={16} />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{item.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech?.map((tech) => (
            <span key={tech} className="theme-badge rounded-md px-3 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link to={`/portfolio/${item.slug}`} className="premium-button theme-secondary-button px-4">
            Detail
          </Link>

          <a {...externalLinkProps(waLink)} className="premium-button theme-primary-button px-4">
            <MessageCircleMore size={16} className="mr-2" />
            Pesan
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <ImageLightbox images={cardImages} title={item.title} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
        </Suspense>
      )}
    </article>
  );
}
