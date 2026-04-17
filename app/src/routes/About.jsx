import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Palette, Sparkles } from "lucide-react";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import Footer from "../components/Footer";
import profileImage from "../assets/images/danilaziz.webp";

const expertise = [
  {
    title: "Interface Premium",
    description: "Tampilan yang bersih, elegan, dan terasa matang untuk bisnis maupun personal brand.",
    icon: Palette,
  },
  {
    title: "Pengalaman Responsif",
    description: "Tetap solid di desktop, tablet, dan mobile tanpa kehilangan kualitas presentasi.",
    icon: MonitorSmartphone,
  },
  {
    title: "Frontend Modern",
    description: "Membangun website modern dengan struktur yang rapi, cepat, dan mudah dikembangkan.",
    icon: Code2,
  },
];

const techIcons = [FaReact, SiTailwindcss, FaGitAlt, FaGithub, SiFramer];

const skills = [
  { name: "Komposisi UI", value: "95%" },
  { name: "Pengembangan Frontend", value: "92%" },
  { name: "Strategi Landing Page", value: "94%" },
  { name: "Build Responsif", value: "96%" },
];

export default function About() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="glass-panel rounded-[36px] p-4">
            <div className="relative overflow-hidden rounded-[28px] bg-stone-950 p-5 dark:bg-stone-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,139,90,0.32),transparent_35%)]" />
              <img src={profileImage} alt="Danil Aziz" className="relative h-[420px] w-full rounded-[24px] object-cover md:h-[520px]" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
            <p className="section-label">Tentang Saya</p>
            <h1 className="section-title mt-4">Saya membangun website yang tampil lebih tenang, rapi, dan meyakinkan untuk bisnis modern.</h1>
            <p className="mt-6 text-base leading-8 text-stone-600 dark:text-stone-300 md:text-lg">
              Fokus saya ada pada frontend dan presentasi visual. Saya suka mengubah website yang terlihat biasa menjadi lebih elegan,
              lebih profesional, dan lebih siap dipakai untuk menawarkan layanan maupun membangun personal brand.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300 md:text-lg">
              Dengan pendekatan yang detail pada layout, tipografi, warna, dan pengalaman pengguna, saya berusaha membuat setiap halaman terasa premium sejak pertama kali dibuka.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {techIcons.map((Icon, index) => (
                <div key={index} className="soft-card flex h-14 w-14 items-center justify-center">
                  <Icon className="text-2xl text-[var(--accent)]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.12 }} className="soft-card p-7">
                <Icon size={24} className="text-[var(--accent)]" />
                <h2 className="mt-5 heading-font text-2xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="glass-panel rounded-[36px] px-8 py-10 md:px-12 md:py-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Keunggulan Inti</p>
                <h2 className="section-title mt-4">Kemampuan yang paling sering saya pakai untuk menghasilkan website yang terasa matang dan rapi.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm text-stone-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300">
                <Sparkles size={16} className="text-[var(--accent)]" />
                Alur kerja yang detail
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill.name} className="soft-card p-6">
                  <p className="text-sm text-stone-500 dark:text-stone-400">{skill.name}</p>
                  <p className="mt-3 heading-font text-4xl font-extrabold text-stone-950 dark:text-stone-50">{skill.value}</p>
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
