import { ArrowUpRight } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

const ImageLightbox = lazy(() => import("./ImageLightbox"));

const englishSummaries = {
  "website-tour-travel":
    "A Tour & Travel website designed to present packages, destinations, and galleries, complete with payment gateway and an admin panel for easy management.",
  "website-pupuk-hasil-kerja":
    "A fertilizer business website with a neat layout for products, service information, business strengths, and order CTAs.",
  "website-travel-hasil-kerja":
    "A clean travel website for destinations, travel packages, service details, and visual galleries.",
  "website-umkm":
    "A promotional website for small businesses to present products, strengths, testimonials, and purchase CTAs.",
  "website-konstruksi":
    "A construction company profile with a strong, credible look for services and project highlights.",
  "website-desa":
    "A village information website for profiles, public services, news, galleries, and village potential.",
};

const categoryLabels = {
  id: {
    "Hasil Kerja": "Landing Page",
    Business: "Business",
    Government: "Company Profile",
  },
  en: {
    "Hasil Kerja": "Landing Page",
    Business: "Business",
    Government: "Company Profile",
  },
};

export default function TemplateCard({ item, priority = false }) {
  const { language, isEnglish } = useLanguage();
  const displayCategory =
    categoryLabels[language]?.[item.category] || item.category;
  const summary = isEnglish
    ? englishSummaries[item.slug] || item.summary
    : item.summary;
  const images = (item.images || [item.image]).slice(0, 6);
  const cardImages = item.coverImage
    ? [item.coverImage, ...images.filter((image) => image !== item.coverImage)]
    : images;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <article className="portfolio-card group flex h-full flex-col">
      <button
        type="button"
        onClick={() => setLightboxIndex(0)}
        className="portfolio-card-media relative block w-full overflow-hidden"
        aria-label={`${isEnglish ? "Preview image" : "Lihat gambar"} ${item.title}`}
      >
        <img
          src={cardImages[0]}
          alt={item.title}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          width="1600"
          height="1000"
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="portfolio-card-image"
        />
      </button>

      <div className="flex min-w-0 flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0866F5]">
          {displayCategory}
        </p>
        <h3 className="mt-3 break-words text-xl font-semibold tracking-tight text-[#14264A] dark:text-[color:var(--text-main)]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#64748B] dark:text-[color:var(--text-muted)]">
          {summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(item.tech || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="portfolio-tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Link
            to={`/portfolio/${item.slug}`}
            className="portfolio-view-btn"
          >
            <span>{isEnglish ? "View Project" : "Lihat Proyek"}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <ImageLightbox
            images={cardImages}
            title={item.title}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onChange={setLightboxIndex}
          />
        </Suspense>
      )}
    </article>
  );
}
