import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import { useLanguage } from "../context/useLanguage";
import templates from "../data/templates";

const filters = [
  { value: "Semua", label: { id: "Semua Proyek", en: "All Projects" } },
  { value: "Business", label: { id: "Bisnis", en: "Business" } },
  { value: "Hasil Kerja", label: { id: "Landing Page", en: "Landing Page" } },
  { value: "Government", label: { id: "Company Profile", en: "Company Profile" } },
];

const copy = {
  id: {
    label: "MY WORK",
    title: "Selected Projects",
    description:
      "Koleksi website dan pengalaman digital yang saya desain dan kembangkan.",
    filterLabel: "Filter proyek",
  },
  en: {
    label: "MY WORK",
    title: "Selected Projects",
    description:
      "A collection of websites and digital experiences I've designed and developed.",
    filterLabel: "Project filter",
  },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Semua");
  const visibleItems = useMemo(
    () =>
      activeFilter === "Semua"
        ? templates
        : templates.filter((item) => item.category === activeFilter),
    [activeFilter],
  );
  const text = copy[language];

  return (
    <main className="portfolio-page reveal-scope overflow-hidden bg-[#F8FAFF] pt-28 dark:bg-[color:var(--bg-page)] md:pt-32">
      <section className="pb-20 md:pb-28">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0866F5]">
              {text.label}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#14264A] dark:text-[color:var(--text-main)] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {text.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[#64748B] dark:text-[color:var(--text-muted)] md:text-lg">
              {text.description}
            </p>
          </div>

          <div
            className="mt-12 flex flex-wrap justify-center gap-3"
            role="group"
            aria-label={text.filterLabel}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`filter-chip ${activeFilter === filter.value ? "is-active" : ""}`}
              >
                {filter.label[language]}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item, index) => (
              <div key={item.id} className="portfolio-grid-item h-full">
                <TemplateCard item={item} priority={index < 3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
