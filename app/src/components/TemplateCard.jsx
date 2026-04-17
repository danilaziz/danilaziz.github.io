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

      {/* === GAMBAR SLIDER === */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={images[current]}
          alt={`${item.title} ${current + 1}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

        {/* Tombol Prev */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70 transition"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Tombol Next */}
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70 transition"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      {/* === END GAMBAR === */}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              {item.category}
            </p>
            <h3 className="mt-2 heading-font text-2xl font-bold text-stone-950 dark:text-stone-50">
              {item.title}
            </h3>
          </div>

          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone-300 p-3 text-stone-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-stone-200"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-white/[0.06] dark:text-stone-300"
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
            className="premium-button border border-stone-300 bg-white/70 text-stone-800 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-100"
          >
            Lihat Demo
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button bg-stone-950 text-white hover:bg-stone-800 dark:bg-[var(--accent)] dark:text-stone-950"
          >
            <MessageCircleMore size={16} className="mr-2" />
            Pesan
          </a>
        </div>

        <p className="mt-4 text-sm leading-7 text-stone-500 dark:text-stone-400">
          Cocok untuk kebutuhan promosi digital, presentasi layanan, dan peningkatan citra brand.
        </p>
      </div>
    </article>
  );
}
