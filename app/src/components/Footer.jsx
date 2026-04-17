import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Template", path: "/template" },
  { name: "Kontak", path: "/kontak" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="pb-10 pt-6">
      <div className="shell">
        <div className="glass-panel rounded-[36px] px-8 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="heading-font text-2xl font-bold text-stone-950 dark:text-stone-50">Danil Aziz</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-stone-600 dark:text-stone-300">
                Pengembang frontend yang fokus pada website elegan, rapi, dan siap membantu bisnis tampil lebih profesional.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-medium text-stone-600 dark:text-stone-300">
              {links.map((item) => (
                <Link key={item.path} to={item.path} className="transition hover:text-[var(--accent)]">
                  {item.name}
                </Link>
              ))}
            </div>

            <button onClick={scrollToTop} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-white transition hover:bg-stone-800 dark:bg-[var(--accent)] dark:text-stone-950" aria-label="Kembali ke atas">
              <ArrowUp size={18} />
            </button>
          </div>

          <div className="mt-8 border-t border-stone-200/80 pt-5 text-sm text-stone-500 dark:border-white/10 dark:text-stone-400">
            Copyright {new Date().getFullYear()} Danil Aziz. Dibangun untuk memperkuat kehadiran digital.
          </div>
        </div>
      </div>
    </footer>
  );
}

