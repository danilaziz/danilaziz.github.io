import { ArrowRight, BookOpenCheck, GraduationCap, Layers3, School, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const educationHistory = [
  {
    level: "SD",
    levelEn: "Elementary",
    title: "SDN Salam Sukur",
    period: "Masa dasar",
    year: "Foundation",
    description: "Pondasi belajar, disiplin, dan rasa ingin tahu.",
    descriptionEn: "A foundation for learning, discipline, and curiosity.",
    focus: ["Literasi dasar", "Disiplin belajar", "Kerja sama"],
    focusEn: ["Basic literacy", "Learning discipline", "Teamwork"],
    tone: "Fondasi",
    toneEn: "Foundation",
    icon: School,
  },
  {
    level: "SMP",
    levelEn: "Junior High",
    title: "SMPN 1 Pringgarata",
    period: "Masa eksplorasi",
    year: "Growth",
    description: "Mulai terbiasa berpikir terstruktur dan mandiri.",
    descriptionEn: "Started building structured thinking and independence.",
    focus: ["Problem solving", "Adaptasi", "Kemandirian"],
    focusEn: ["Problem solving", "Adaptation", "Independence"],
    tone: "Eksplorasi",
    toneEn: "Exploration",
    icon: BookOpenCheck,
  },
  {
    level: "SMA",
    levelEn: "Senior High",
    title: "SMAN 1 Pringgarata",
    period: "Ilmu Pengetahuan Sosial",
    year: "Focus",
    description: "Belajar memahami sosial, komunikasi, dan pola analitis.",
    descriptionEn: "Learned social understanding, communication, and analytical patterns.",
    focus: ["Teknologi", "Kreativitas", "Presentasi"],
    focusEn: ["Technology", "Creativity", "Presentation"],
    tone: "Analitis",
    toneEn: "Analytical",
    icon: Layers3,
  },
  {
    level: "Kuliah",
    levelEn: "University",
    title: "Universitas Nahdlatul Ulama NTB",
    period: "S1 Sistem Informasi",
    year: "Digital",
    description: "Fokus pada analisis sistem dan solusi digital.",
    descriptionEn: "Focused on system analysis and digital solutions.",
    focus: ["Riset", "Eksekusi proyek", "Profesionalisme"],
    focusEn: ["Research", "Project execution", "Professionalism"],
    tone: "Digital",
    toneEn: "Digital",
    icon: GraduationCap,
  },
];

const copy = {
  id: {
    label: "Riwayat Pendidikan",
    title: "Perjalanan belajar yang membentuk cara kerja.",
    description: "Dari fondasi akademik sampai Sistem Informasi, setiap tahap membentuk pola pikir yang rapi, analitis, dan dekat dengan solusi digital.",
    viewWork: "Lihat Karya",
    contact: "Hubungi Saya",
    summary: "Fokus pada disiplin, komunikasi, problem solving, dan pengembangan sistem.",
    timelineTitle: "Riwayat pendidikan",
    timelineDescription: "Disusun sebagai perjalanan singkat yang menunjukkan perkembangan fokus belajar dari tahap dasar sampai perguruan tinggi.",
    ctaTitle: "Lihat bagaimana latar belajar ini diterapkan ke karya digital.",
    portfolio: "Lihat Portfolio",
  },
  en: {
    label: "Education History",
    title: "A learning journey that shaped the way I work.",
    description: "From academic foundations to Information Systems, each stage shaped a neat, analytical mindset close to digital solutions.",
    viewWork: "View Work",
    contact: "Contact Me",
    summary: "Focused on discipline, communication, problem solving, and system development.",
    timelineTitle: "Education history",
    timelineDescription: "Presented as a short journey showing how my learning focus developed from elementary school to university.",
    ctaTitle: "See how this learning background is applied to digital work.",
    portfolio: "View Portfolio",
  },
};

export default function Education() {
  const { language, isEnglish } = useLanguage();
  const text = copy[language];

  return (
    <main className="education-page reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="education-hero pb-14 md:pb-18">
        <div className="shell">
          <div className="education-hero-panel glass-panel rounded-lg p-6 md:p-10" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="section-label">{text.label}</p>
                <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">{text.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
                  {text.description}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link to="/portfolio" className="premium-button theme-primary-button">
                    {text.viewWork}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/kontak" className="premium-button theme-secondary-button">
                    {text.contact}
                  </Link>
                </div>
              </div>

              <aside className="education-summary-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">Academic Path</p>
                <p className="heading-font mt-2 text-3xl font-extrabold text-[color:var(--text-main)]">{isEnglish ? "Elementary - University" : "SD - Kuliah"}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{text.summary}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {educationHistory.map((item) => (
                    <div key={item.level} className="education-summary-item">
                      <span>{isEnglish ? item.levelEn : item.level}</span>
                      <strong>{isEnglish ? item.toneEn : item.tone}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <div className="mb-8 max-w-3xl" data-reveal>
            <p className="section-label">Timeline</p>
            <h2 className="section-title mt-3">{text.timelineTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)] md:text-base">
              {text.timelineDescription}
            </p>
          </div>

          <div className="education-timeline">
            {educationHistory.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.level} className="education-card soft-card p-6 md:p-7" data-reveal style={{ "--reveal-delay": `${index * 90}ms`, "--step": index + 1 }}>
                  <div className="education-step-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="education-card-top">
                    <div className="education-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon size={23} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="theme-badge rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">{isEnglish ? item.levelEn : item.level}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-muted)]">{isEnglish ? item.year : item.period}</span>
                      </div>
                      <h3 className="heading-font mt-4 text-2xl font-bold text-[color:var(--text-main)]">{item.title}</h3>
                    </div>
                    <span className="education-year">{item.year}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[color:var(--text-muted)]">{isEnglish ? item.descriptionEn : item.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {(isEnglish ? item.focusEn : item.focus).map((focus) => (
                      <span key={focus} className="education-skill-chip">
                        <Sparkles size={14} />
                        <span>{focus}</span>
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="education-cta cta-band">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="heading-font mt-3 text-2xl font-extrabold leading-tight md:text-5xl">{text.ctaTitle}</h2>
            </div>
            <Link to="/portfolio" className="premium-button theme-primary-button">
              {text.portfolio}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


