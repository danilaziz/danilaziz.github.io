import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

const filters = ["Semua", "Hasil Kerja", "Business", "Government"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const visibleItems = useMemo(() => (activeFilter === "Semua" ? templates : templates.filter((item) => item.category === activeFilter)), [activeFilter]);

  return (
    <main className="reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="section-label">Portfolio</p>
            <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">Hasil kerja & template website.</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
              Lihat project dan referensi tampilan yang bisa membantu menentukan arah website baru secara lebih jelas.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`filter-chip ${activeFilter === filter ? "is-active" : ""}`}>
                {filter}
              </button>
            ))}
          </div>

          <section className="mt-12">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">{activeFilter === "Semua" ? "Semua Portfolio" : activeFilter}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {visibleItems.map((item, index) => (
                <div key={item.id}>
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
