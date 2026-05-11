import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

export default function Templates() {
  const workItems = templates.filter((item) => item.category === "Hasil Kerja");
  const templateItems = templates.filter((item) => item.category !== "Hasil Kerja");

  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="glass-panel rounded-lg px-6 py-8 md:px-10 md:py-12">
            <p className="section-label">Portfolio</p>
            <h1 className="section-title mt-3">Hasil kerja dan contoh template website.</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
              Lihat hasil kerja yang sudah dibuat dan beberapa contoh template yang bisa jadi referensi arah website baru.
            </p>
          </div>

          {workItems.length > 0 && (
            <section className="mt-8">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label">Hasil Kerja</p>
                  <h2 className="heading-font mt-2 text-3xl font-extrabold text-[color:var(--text-main)]">Project yang sudah dibuat.</h2>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {workItems.map((item, index) => (
                  <div key={item.id}>
                    <TemplateCard item={item} priority={index === 0} />
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Contoh Template</p>
                <h2 className="heading-font mt-2 text-3xl font-extrabold text-[color:var(--text-main)]">Referensi tampilan website.</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {templateItems.map((item, index) => (
                <div key={item.id}>
                  <TemplateCard item={item} priority={workItems.length === 0 && index === 0} />
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
