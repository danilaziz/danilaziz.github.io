import { Code2, FileCheck2, MonitorSmartphone, Palette, SearchCheck, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";

const profileImage = "/danilaziz-hero.webp";

const expertise = [
  {
    title: "Strategi Halaman",
    description: "Struktur konten disusun agar pengunjung cepat paham jasa, manfaat, bukti, dan cara menghubungi bisnis Anda.",
    icon: SearchCheck,
  },
  {
    title: "Visual Profesional",
    description: "Tampilan dibuat clean, konsisten, dan sesuai karakter bisnis tanpa elemen yang berlebihan.",
    icon: Palette,
  },
  {
    title: "Website Responsive",
    description: "Website nyaman dibuka dari HP, tablet, dan desktop karena calon pelanggan sering datang dari berbagai perangkat.",
    icon: MonitorSmartphone,
  },
];

const skills = [
  { name: "UI Website Bisnis", value: "Clean" },
  { name: "Landing Page", value: "Fokus" },
  { name: "Frontend", value: "Rapi" },
  { name: "Launch", value: "Siap" },
];

export default function About() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="glass-panel rounded-lg p-3">
            <img src={profileImage} alt="Danil Aziz" width="720" height="900" loading="lazy" decoding="async" className="h-[420px] w-full rounded-md object-cover object-top md:h-[520px]" />
          </div>

          <div>
            <p className="section-label">Tentang Studio</p>
            <h1 className="section-title mt-4">Saya membantu bisnis punya website yang terlihat profesional, jelas, dan siap dipakai untuk menjual.</h1>
            <p className="mt-6 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Fokus saya adalah membangun website untuk bisnis jasa, UMKM, personal brand, sekolah, desa, dan instansi yang membutuhkan tampilan digital lebih kredibel.
            </p>
            <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Proses kerja dibuat sederhana: pahami kebutuhan, rapikan pesan utama, desain tampilan, bangun website, lalu bantu sampai siap online.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Code2, text: "React & Tailwind" },
                { icon: ShieldCheck, text: "Struktur aman" },
                { icon: FileCheck2, text: "Setup launch" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="soft-card flex items-center gap-3 p-4">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <span className="text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="soft-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 heading-font text-2xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="glass-panel rounded-lg px-6 py-9 md:px-10 md:py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Standar Kerja</p>
                <h2 className="section-title mt-4">Setiap proyek dibuat dengan arah bisnis yang jelas dan tampilan yang mudah dipercaya.</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill.name} className="soft-card p-6">
                  <p className="text-sm text-[color:var(--text-muted)]">{skill.name}</p>
                  <p className="mt-3 heading-font text-3xl font-extrabold text-[color:var(--text-main)]">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
