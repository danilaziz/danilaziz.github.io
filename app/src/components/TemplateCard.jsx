import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";

const WA_NUMBER = "6287728890135";

export default function TemplateCard({ item, priority = false }) {
  const message = `Halo, saya tertarik dengan contoh website *${item.title}*. Bisa minta info lebih lanjut?`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  const images = (item.images || [item.image]).slice(0, 4);
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="soft-card h-full overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden sm:h-56 sm:aspect-auto">
        <button type="button" onClick={() => setLightboxIndex(current)} className="group block h-full w-full cursor-zoom-in" aria-label={`Perbesar gambar ${item.title}`}>
          <img
            src={images[current]}
            alt={`${item.title} ${current + 1}`}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/45 text-white opacity-100 transition group-hover:bg-black/65 md:opacity-0 md:group-hover:opacity-100">
            <Maximize2 size={18} />
          </span>
        </button>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

        {images.length > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-black/32 p-2 text-white transition hover:bg-black/55" aria-label="Gambar sebelumnya">
              <ChevronLeft size={18} />
            </button>

            <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-black/32 p-2 text-white transition hover:bg-black/55" aria-label="Gambar berikutnya">
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

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button px-4">
            <MessageCircleMore size={16} className="mr-2" />
            Pesan
          </a>
        </div>
      </div>

      <ImageLightbox images={images} title={item.title} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
    </article>
  );
}
