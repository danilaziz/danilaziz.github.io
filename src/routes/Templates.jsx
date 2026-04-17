import { motion } from "framer-motion";
import Footer from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import templates from "../data/templates";

export default function Templates() {
  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-panel rounded-[36px] px-8 py-10 md:px-12 md:py-14">
            <p className="section-label">Template</p>
            <h1 className="section-title mt-4">Pilihan template website dengan tampilan yang lebih bersih, modern, dan siap dipresentasikan.</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 dark:text-stone-300 md:text-lg">
              Cocok untuk bisnis, UMKM, dan company profile yang ingin terlihat lebih profesional sejak halaman pertama.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {templates.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
                <TemplateCard item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
