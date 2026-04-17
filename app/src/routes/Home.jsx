import { motion } from "framer-motion";
import { ArrowRight, Award, BriefcaseBusiness, MessagesSquare, Sparkles } from "lucide-react";
import heroImage from "../assets/images/danilaziz.webp";
import Footer from "../components/Footer";
import templates from "../data/templates";

const stats = [
  { label: "Fokus", value: "Interface Premium" },
  { label: "Gaya kerja", value: "Cepat dan rapi" },
  { label: "Cocok untuk", value: "Website bisnis" },
];

const highlights = [
  "Antarmuka elegan dengan hierarki visual yang kuat",
  "Pengembangan responsif untuk desktop dan mobile",
  "Proses kerja yang rapi untuk brand, bisnis, dan klien freelance",
];

export default function Home() {
  return (
    <main className="overflow-hidden pt-28 text-stone-900 dark:text-stone-100 md:pt-32">
      <section className="relative pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(184,139,90,0.22),transparent_58%)]" />
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="section-label">Portfolio</p>
            <h1 className="heading-font mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-stone-950 dark:text-stone-50 md:text-6xl">
              Website yang terlihat mahal, tenang, dan dipercaya sejak kesan pertama.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-300 md:text-lg">
              Saya membantu bisnis, personal brand, dan UMKM tampil lebih profesional lewat website yang cepat,
              rapi, dan punya arah visual yang kuat.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/6287728890135"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button bg-stone-950 text-white hover:bg-stone-800 dark:bg-[var(--accent)] dark:text-stone-950"
              >
                Konsultasi Proyek
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#selected-work" className="premium-button border border-stone-300 bg-white/60 text-stone-800 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-100">
                Lihat Proyek
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="soft-card px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">{item.label}</p>
                  <p className="mt-2 heading-font text-lg font-bold text-stone-900 dark:text-stone-50">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }} className="relative">
            <div className="glass-panel rounded-[36px] p-4">
              <div className="relative overflow-hidden rounded-[28px] bg-stone-950 p-5 dark:bg-stone-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,139,90,0.35),transparent_35%)]" />
                <img src={heroImage} alt="Danil Aziz" className="relative h-[420px] w-full rounded-[24px] object-cover md:h-[520px]" />
                <div className="absolute bottom-10 left-10 right-10 rounded-[24px] border border-white/15 bg-black/30 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <Sparkles size={16} />
                    <span className="text-xs font-semibold uppercase tracking-[0.24em]">Tersedia untuk freelance</span>
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-stone-100 md:text-base">
                    Fokus pada landing page, company profile, dan website bisnis yang tampil rapi sekaligus meyakinkan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card p-8">
            <p className="section-label">Alasan Bekerja Sama</p>
            <h2 className="section-title mt-4 text-2xl md:text-4xl">Desain tidak hanya menarik, tapi siap dipakai untuk jualan dan membangun kepercayaan.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="soft-card p-6">
              <Award className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Tampilan Profesional</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">Tampilan lebih bersih, premium, dan lebih mewakili value bisnis Anda.</p>
            </div>
            <div className="soft-card p-6">
              <BriefcaseBusiness className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Siap untuk Bisnis</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">Struktur konten dibuat jelas supaya pengunjung langsung paham layanan dan kualitas Anda.</p>
            </div>
            <div className="soft-card p-6">
              <MessagesSquare className="text-[var(--accent)]" size={22} />
              <h3 className="mt-5 heading-font text-xl font-bold">Kolaborasi Nyaman</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">Proses komunikasi dibuat simpel, cepat, dan nyaman untuk klien maupun partner.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="pb-20 md:pb-24">
        <div className="shell">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Proyek Pilihan</p>
              <h2 className="section-title mt-4">Project pilihan dengan presentasi yang lebih rapi dan profesional.</h2>
            </div>
            <a href="/templates" className="text-sm font-semibold text-stone-700 transition hover:text-[var(--accent)] dark:text-stone-200">
              Lihat semua template
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {templates.slice(0, 3).map((item, index) => (
              <motion.article key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.12 }} className="soft-card overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.images?.[0] ?? item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">{item.category}</p>
                      <h3 className="mt-2 heading-font text-2xl font-bold">{item.title}</h3>
                    </div>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 p-3 text-stone-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-stone-200" aria-label={`Buka ${item.title}`}>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-white/[0.06] dark:text-stone-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[36px] px-8 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="section-label">Kerja Sama</p>
                <h2 className="section-title mt-4">Mari bangun website yang terasa premium dan benar-benar siap dipresentasikan ke klien Anda.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-300">Cocok untuk company profile, landing page, personal branding, dan kebutuhan digital presence yang ingin terlihat lebih serius.</p>
              </div>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="soft-card px-5 py-4 text-sm leading-7 text-stone-700 dark:text-stone-200">{item}</div>
                ))}
                <a
                  href="https://wa.me/6287728890135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button w-full bg-[var(--accent)] text-stone-950 hover:opacity-90"
                >
                  Mulai Proyek
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

