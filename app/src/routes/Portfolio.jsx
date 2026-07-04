import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import { useLanguage } from "../context/useLanguage";
import templates from "../data/templates";

const filters = [
  { value: "Semua", label: { id: "Semua", en: "All" } },
  { value: "Hasil Kerja", label: { id: "Hasil Kerja", en: "Work" } },
  { value: "Business", label: { id: "Business", en: "Business" } },
  { value: "Government", label: { id: "Government", en: "Government" } },
];

const copy = {
  id: {
    title: "Portfolio website yang bisa langsung jadi referensi bisnis.",
    description: "Lihat hasil kerja, demo aktif, dan struktur halaman yang dirancang untuk membuat bisnis terlihat profesional, dipercaya, dan mudah dihubungi.",
    allPortfolio: "Semua Portfolio",
  },
  en: {
    title: "Website portfolio ready to become business references.",
    description: "Explore live demos and page structures designed to help businesses look professional, build trust, and make contact easier.",
    allPortfolio: "All Portfolio",
  },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Semua");
  const visibleItems = useMemo(() => (activeFilter === "Semua" ? templates : templates.filter((item) => item.category === activeFilter)), [activeFilter]);
  const text = copy[language];

  return (
    <main className="portfolio-page reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="section-label">Portfolio</p>
            <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">{text.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
              {text.description}
            </p>
          </div>

          <div className="portfolio-filter-bar mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button key={filter.value} type="button" onClick={() => setActiveFilter(filter.value)} className={`filter-chip ${activeFilter === filter.value ? "is-active" : ""}`}>
                {filter.label[language]}
              </button>
            ))}
          </div>

          <section className="mt-12">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">{activeFilter === "Semua" ? text.allPortfolio : filters.find((item) => item.value === activeFilter)?.label[language]}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {visibleItems.map((item, index) => (
                <div key={item.id} className="portfolio-grid-item">
                  <TemplateCard item={item} priority={index === 0} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
