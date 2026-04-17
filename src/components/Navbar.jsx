import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Github, Instagram, Menu, Moon, Sun, X } from "lucide-react";
import logo from "../assets/images/danil.webp";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Template", path: "/templates" },
  { name: "Kontak", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? "border-stone-200/70 bg-white/80 shadow-[0_20px_60px_-35px_rgba(28,25,23,0.45)] dark:border-white/10 dark:bg-black/40"
    : "border-transparent bg-transparent";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div className={`shell rounded-full border backdrop-blur-xl transition-all duration-300 ${navClass}`}>
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Danil Aziz" className="h-11 w-11 rounded-full border border-white/70 object-cover shadow-sm dark:border-white/10" />
              <div>
                <p className="heading-font text-sm font-bold uppercase tracking-[0.28em] text-stone-900 dark:text-stone-100">Danil Aziz</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">Web Developer</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition ${active ? "text-stone-950 dark:text-stone-50" : "text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-50"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="https://instagram.com/danilaziz__" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300/70 p-2 text-stone-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-stone-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://github.com/danilaziz" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300/70 p-2 text-stone-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-stone-200" aria-label="GitHub">
                <Github size={18} />
              </a>
              <button onClick={() => setDarkMode((value) => !value)} className="rounded-full border border-stone-300/70 p-2 text-stone-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-stone-200" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/contact" className="premium-button bg-stone-950 text-white hover:bg-stone-800 dark:bg-[var(--accent)] dark:text-stone-950">
                Hubungi Saya
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => setDarkMode((value) => !value)} className="rounded-full border border-stone-300/70 p-2 text-stone-700 dark:border-white/10 dark:text-stone-200" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setMobileMenuOpen((value) => !value)} className="rounded-full border border-stone-300/70 p-2 text-stone-700 dark:border-white/10 dark:text-stone-200" aria-label="Buka navigasi">
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="fixed inset-x-4 top-24 z-40 rounded-[28px] border border-stone-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? "bg-stone-950 text-white dark:bg-[var(--accent)] dark:text-stone-950" : "bg-stone-100 text-stone-700 dark:bg-white/[0.05] dark:text-stone-200"}`}>
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-3">
              <a href="https://instagram.com/danilaziz__" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-2xl border border-stone-200 px-4 py-3 text-center text-sm font-medium dark:border-white/10">Instagram</a>
              <a href="https://github.com/danilaziz" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-2xl border border-stone-200 px-4 py-3 text-center text-sm font-medium dark:border-white/10">GitHub</a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
