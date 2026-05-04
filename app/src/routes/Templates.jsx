import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

export default function Templates() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[24px] px-6 py-7 md:rounded-[28px] md:px-12 md:py-14">
            <p className="section-label">Contoh</p>
            <h1 className="section-title mt-3">Preview website yang bisa jadi referensi.</h1>
          </div>

          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3">
            {templates.map((item, index) => (
              <div key={item.id}>
                <TemplateCard item={item} priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
