import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

export default function Templates() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[28px] px-8 py-10 md:px-12 md:py-14">
            <p className="section-label">Template</p>
            <h1 className="section-title mt-4">Pilihan desain website yang menampilkan pendekatan visual saya dalam membangun tampilan yang profesional dan meyakinkan.</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Halaman ini menampilkan beberapa karya dan template presentasi website yang cocok untuk bisnis, company profile, dan personal branding.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {templates.map((item) => (
              <div key={item.id}>
                <TemplateCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
