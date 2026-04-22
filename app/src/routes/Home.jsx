import { ArrowRight, Award, BriefcaseBusiness, MessagesSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/danilaziz-hero.webp";
import Footer from "../components/Footer";
import templates from "../data/templates";

const stats = [
  { label: "Spesialisasi", value: "Frontend & UI Website" },
  { label: "Pendekatan", value: "Strategis dan detail" },
  { label: "Layanan", value: "Portfolio, bisnis, company profile" },
];

const highlights = [
  "Desain antarmuka yang rapi, modern, dan mudah dipercaya calon klien.",
  "Pengembangan responsif dengan pengalaman yang konsisten di berbagai perangkat.",
  "Kolaborasi kerja yang jelas, efisien, dan berorientasi pada hasil bisnis.",
];

export default function Home() {
  return (
    <main className="overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-24">
      <section className="relative pb-16 pt-6 md:pb-24 md:pt-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_62%)] md:h-[380px]" />
        <div className="shell grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="section-label">Portfolio</p>
            <h1 className="heading-font mt-4 max-w-3xl text-3xl font-extrabold leading-[1.15] text-[color:var(--text-main)] md:mt-5 md:text-6xl md:leading-tight">
              Saya merancang dan membangun website profesional yang memperkuat citra brand dan meningkatkan kepercayaan.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--text-muted)] md:mt-6 md:text-lg md:leading-8">
              Fokus saya adalah menghadirkan website yang tidak hanya menarik secara visual, tetapi juga terstruktur,
              responsif, dan siap mendukung kebutuhan komunikasi bisnis maupun personal branding.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="https://wa.me/6287728890135"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button theme-primary-button"
              >
                Konsultasi Proyek
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#selected-work" className="premium-button theme-secondary-button">
                Tinjau Portofolio
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {stats.map((item) => (
                <div key={item.label} className="soft-card px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--text-muted)] sm:text-xs sm:tracking-[0.22em]">{item.label}</p>
                  <p className="mt-2 heading-font text-base font-bold leading-6 text-[color:var(--text-main)] sm:text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-[24px] p-3 sm:rounded-[28px] sm:p-4">
              <div className="theme-panel relative overflow-hidden p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_38%)]" />
                <img src={heroImage} alt="Danil Aziz" width="720" height="900" fetchPriority="high" decoding="async" className="relative h-[420px] w-full rounded-[18px] object-cover object-top sm:h-[520px]" />
                <div className="hero-overlay absolute inset-x-5 bottom-5 rounded-[18px] p-4 sm:inset-x-8 sm:bottom-8 sm:p-5">
                  <div className="hero-overlay-eyebrow flex items-center gap-2">
                    <Sparkles size={14} className="shrink-0 sm:h-4 sm:w-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.24em]">Tersedia untuk kolaborasi profesional</span>
                  </div>
                  <p className="hero-overlay-copy mt-3 max-w-[15rem] text-sm leading-7 sm:max-w-sm sm:text-base">
                    Berpengalaman mengerjakan landing page, company profile, dan website portfolio dengan presentasi yang bersih dan meyakinkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card p-6 sm:p-8">
            <p className="section-label">Alasan Bekerja Sama</p>
            <h2 className="section-title mt-4 text-2xl md:text-4xl">Desain tidak hanya menarik, tapi siap dipakai untuk jualan dan membangun kepercayaan.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="soft-card p-6">
              <Award className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Presentasi Visual Profesional</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">Setiap halaman dirancang agar terlihat matang, kredibel, dan relevan dengan identitas brand Anda.</p>
            </div>
            <div className="soft-card p-6">
              <BriefcaseBusiness className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Siap Digunakan untuk Bisnis</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">Struktur informasi disusun agar pengunjung cepat memahami layanan, nilai, dan keunggulan Anda.</p>
            </div>
            <div className="soft-card p-6">
              <MessagesSquare className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Kolaborasi yang Terarah</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">Komunikasi, revisi, dan pengembangan dilakukan secara jelas agar proses proyek tetap efisien.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="pb-20 md:pb-24">
        <div className="shell">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Proyek Pilihan</p>
              <h2 className="section-title mt-4">Beberapa proyek yang menunjukkan pendekatan saya dalam membangun website yang rapi, modern, dan profesional.</h2>
            </div>
            <Link to="/template" className="whitespace-nowrap text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-[var(--accent)]">
              Lihat semua template
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {templates.slice(0, 3).map((item) => (
              <article key={item.id} className="soft-card overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.images?.[0] ?? item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">{item.category}</p>
                      <h3 className="mt-2 heading-font text-2xl font-bold">{item.title}</h3>
                    </div>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="theme-icon-button rounded-full p-3 transition" aria-label={`Buka ${item.title}`}>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="theme-badge rounded-full px-3 py-1 text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[28px] px-8 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="section-label">Kerja Sama</p>
                <h2 className="section-title mt-4">Jika Anda membutuhkan website yang kuat secara visual dan jelas secara komunikasi, saya siap membantu mewujudkannya.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">Layanan ini cocok untuk company profile, landing page, website portfolio, dan kebutuhan digital presence yang ingin tampil lebih profesional.</p>
              </div>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="soft-card px-5 py-4 text-sm leading-7 text-[color:var(--text-main)]">{item}</div>
                ))}
                <a
                  href="https://wa.me/6287728890135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button w-full bg-[var(--accent)] text-slate-950 hover:opacity-90"
                >
                  Mulai Diskusi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
