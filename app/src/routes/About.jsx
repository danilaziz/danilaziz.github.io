import { Atom, Code2, GitBranch, Github, MonitorSmartphone, Palette, Sparkles, Wind } from "lucide-react";
import Footer from "../components/Footer";
import profileImage from "../assets/images/danilaziz-hero.webp";

const expertise = [
  {
    title: "UI yang Terarah",
    description: "Antarmuka dirancang dengan hierarki visual yang jelas agar website terlihat profesional dan mudah dipahami.",
    icon: Palette,
  },
  {
    title: "Pengalaman Responsif",
    description: "Tampilan dan interaksi tetap konsisten di desktop, tablet, maupun mobile tanpa kehilangan kualitas presentasi.",
    icon: MonitorSmartphone,
  },
  {
    title: "Frontend Modern",
    description: "Pengembangan dilakukan dengan struktur kode yang rapi, performa baik, dan mudah dikembangkan ke depannya.",
    icon: Code2,
  },
];

const techIcons = [Atom, Wind, GitBranch, Github, Sparkles];

const skills = [
  { name: "Perancangan UI", value: "95%" },
  { name: "Frontend Development", value: "92%" },
  { name: "Strategi Landing Page", value: "94%" },
  { name: "Responsive Build", value: "96%" },
];

export default function About() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="glass-panel rounded-[28px] p-4">
            <div className="theme-panel relative overflow-hidden p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_40%)]" />
              <img src={profileImage} alt="Danil Aziz" width="720" height="900" loading="lazy" decoding="async" className="relative h-[420px] w-full rounded-[18px] object-cover md:h-[520px]" />
            </div>
          </div>

          <div>
            <p className="section-label">Tentang Saya</p>
            <h1 className="section-title mt-4">Saya adalah frontend developer yang fokus membangun website dengan kualitas visual yang kuat dan komunikasi yang jelas.</h1>
            <p className="mt-6 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Saya membantu bisnis, personal brand, dan profesional tampil lebih meyakinkan melalui website yang rapi,
              responsif, dan dirancang untuk memberi kesan profesional sejak kunjungan pertama.
            </p>
            <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Pendekatan saya menitikberatkan pada detail layout, tipografi, warna, dan pengalaman pengguna agar setiap halaman
              tidak hanya menarik secara estetika, tetapi juga efektif dalam menyampaikan nilai sebuah brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {techIcons.map((Icon, index) => (
                <div key={index} className="soft-card flex h-14 w-14 items-center justify-center">
                  <Icon className="text-2xl text-[var(--accent)]" />
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
                <Icon size={24} className="text-[var(--accent)]" />
                <h2 className="mt-5 heading-font text-2xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[28px] px-8 py-10 md:px-12 md:py-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Keunggulan Inti</p>
                <h2 className="section-title mt-4">Kemampuan utama yang saya gunakan untuk menghasilkan website yang profesional, fungsional, dan siap dipresentasikan.</h2>
              </div>
              <div className="theme-secondary-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <Sparkles size={16} className="text-[var(--accent)]" />
                Standar kerja yang konsisten
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill.name} className="soft-card p-6">
                  <p className="text-sm text-[color:var(--text-muted)]">{skill.name}</p>
                  <p className="mt-3 heading-font text-4xl font-extrabold text-[color:var(--text-main)]">{skill.value}</p>
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
