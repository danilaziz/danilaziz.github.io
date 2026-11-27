import {
  ArrowRight,
  ChartNoAxesCombined,
  Code2,
  MonitorSmartphone,
  Palette,
  Rocket,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";

const services = [
  {
    id: "01",
    icon: Code2,
    title: { id: "Website Development", en: "Website Development" },
    desc: {
      id: "Bangun website cepat, modern, dan responsif sesuai kebutuhan Anda.",
      en: "Build fast, modern, and responsive websites tailored to your needs.",
    },
  },
  {
    id: "02",
    icon: ShoppingCart,
    title: { id: "E-Commerce Solutions", en: "E-Commerce Solutions" },
    desc: {
      id: "Buat toko online yang kuat dengan pengalaman pengguna yang mulus.",
      en: "Create powerful online stores with seamless user experience.",
    },
  },
  {
    id: "03",
    icon: MonitorSmartphone,
    title: { id: "Web Application", en: "Web Application" },
    desc: {
      id: "Kembangkan aplikasi web yang skalabel untuk pertumbuhan bisnis Anda.",
      en: "Develop scalable web applications for your business growth.",
    },
  },
  {
    id: "04",
    icon: Palette,
    title: { id: "UI/UX Design", en: "UI/UX Design" },
    desc: {
      id: "Desain antarmuka modern dan menarik untuk meningkatkan engagement.",
      en: "Design modern and attractive interfaces for better engagement.",
    },
  },
  {
    id: "05",
    icon: Settings,
    title: { id: "Website Maintenance", en: "Website Maintenance" },
    desc: {
      id: "Jaga website tetap aman, terupdate, dan berjalan lancar.",
      en: "Keep your website secure, updated, and running smoothly.",
    },
  },
  {
    id: "06",
    icon: ChartNoAxesCombined,
    title: { id: "SEO Optimization", en: "SEO Optimization" },
    desc: {
      id: "Tingkatkan ranking website dan dapatkan lebih banyak traffic organik.",
      en: "Improve your website ranking and get more organic traffic.",
    },
  },
];

const copy = {
  id: {
    badge: "OUR SERVICES",
    headingMain: "Professional",
    headingAccent: "Web Development",
    subtitle:
      "Kami menyediakan solusi web modern dan andal untuk membantu bisnis Anda berkembang secara online.",
    ctaTitle: "Let's Work Together!",
    ctaDesc:
      "Wujudkan ide Anda menjadi solusi digital yang kuat bersama DA Code.",
    ctaButton: "Hubungi Kami",
  },
  en: {
    badge: "OUR SERVICES",
    headingMain: "Professional",
    headingAccent: "Web Development",
    subtitle:
      "We provide modern and reliable web solutions to help you grow your business online.",
    ctaTitle: "Let's Work Together!",
    ctaDesc:
      "Turn your ideas into a powerful digital solution with DA Code.",
    ctaButton: "Contact Us",
  },
};

export default function Services() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main className="reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-20">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="section-label">{text.badge}</p>
            <h1 className="heading-font mt-4 max-w-full break-words text-3xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">
              <span>{text.headingMain} </span>
              <span className="text-[var(--accent)]">{text.headingAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[color:var(--text-muted)] md:text-lg">
              {text.subtitle}
            </p>
            <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-[color:var(--accent)]" />
          </div>

          <div className="mt-7 grid gap-6 sm:mt-10 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group relative flex h-full flex-col rounded-[20px] border border-[#E6EDFA] bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0866F5]/35 hover:shadow-[0_20px_40px_-24px_rgba(8,102,245,0.22)] dark:border-[color:var(--border-soft)] dark:bg-[color:var(--surface-card)] dark:hover:border-[#0866F5]/35 dark:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] md:p-8"
                  data-reveal
                  style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0866F5] transition-colors duration-300 group-hover:bg-[#0866F5] group-hover:text-white dark:bg-[color:var(--accent-soft)]">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h2 className="mt-8 break-words text-xl font-semibold tracking-tight text-[#14264A] dark:text-[color:var(--text-main)] md:text-[1.35rem]">
                    {service.title[language]}
                  </h2>
                  <p className="mt-3 max-w-[34ch] text-sm leading-7 text-[#64748B] dark:text-[color:var(--text-muted)] md:text-[15px]">
                    {service.desc[language]}
                  </p>

                  <div className="mt-auto pt-2" />
                </article>
              );
            })}
          </div>

          <div
            className="mt-16 rounded-[28px] border border-[#E6EDFA] bg-gradient-to-r from-[#F8FAFF] via-[#EFF6FF] to-[#F8FAFF] p-6 dark:border-[color:var(--border-soft)] dark:from-[color:var(--surface-card)] dark:via-[color:var(--accent-soft)] dark:to-[color:var(--surface-card)] md:p-8 lg:p-10"
            data-reveal
          >
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0866F5] text-white shadow-[0_12px_24px_-12px_rgba(8,102,245,0.7)]">
                <Rocket size={26} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="break-words text-2xl font-bold tracking-tight text-[#14264A] dark:text-[color:var(--text-main)] md:text-3xl">
                  {text.ctaTitle}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#64748B] dark:text-[color:var(--text-muted)] md:text-base">
                  {text.ctaDesc}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0866F5] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_4px_0_#0554cc,0_10px_18px_-10px_rgba(8,102,245,0.55)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#1a75ff] hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_5px_0_#0554cc,0_14px_22px_-10px_rgba(8,102,245,0.6)] active:translate-y-[2px] active:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_2px_0_#0554cc,0_6px_12px_-8px_rgba(8,102,245,0.45)] md:w-auto"
              >
                <span>{text.ctaButton}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
