import { ExternalLink, MessageCircleMore, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const WA_NUMBER = "6287728890135";

export default function TemplateCard({ item }) {
  const message = `Halo, saya tertarik dengan template *${item.title}*. Bisa minta info lebih lanjut?`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  const images = (item.images || [item.image]).slice(0, 4);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="soft-card h-full overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <img
          src={images[current]}
          alt={`${item.title} ${current + 1}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/32 p-2 text-white transition hover:bg-black/55"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/32 p-2 text-white transition hover:bg-black/55"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              {item.category}
            </p>
            <h3 className="mt-2 heading-font text-2xl font-bold text-[color:var(--text-main)]">
              {item.title}
            </h3>
          </div>

          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-icon-button rounded-full p-3 transition"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tech?.map((tech) => (
            <span
              key={tech}
              className="theme-badge rounded-full px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button theme-secondary-button px-4"
          >
            Lihat Demo
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button theme-primary-button px-4"
          >
            <MessageCircleMore size={16} className="mr-2" />
            Pesan
          </a>
        </div>

        <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
          Cocok untuk presentasi bisnis, promosi layanan, dan kebutuhan brand yang ingin tampil lebih profesional.
        </p>
      </div>
    </article>
  );
}
