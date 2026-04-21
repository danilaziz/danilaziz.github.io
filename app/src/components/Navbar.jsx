import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Github, Instagram, Menu, Moon, Sun, X } from "lucide-react";
import logo from "../assets/images/danil.webp";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Template", path: "/template" },
  { name: "Kontak", path: "/kontak" },
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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navClass = scrolled
    ? "border-[color:var(--border-strong)] bg-[color:var(--surface-glass)] shadow-[var(--shadow-soft)]"
    : "border-transparent bg-transparent";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div className={`shell rounded-[22px] border backdrop-blur-xl transition-all duration-300 ${navClass}`}>
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Danil Aziz" className="h-11 w-11 rounded-full border border-white/70 object-cover shadow-sm dark:border-white/10" />
              <div>
                <p className="heading-font text-sm font-bold uppercase tracking-[0.28em] text-[color:var(--text-main)]">Danil Aziz</p>
                <p className="text-xs text-[color:var(--text-muted)]">Frontend Developer & Website Specialist</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition ${active ? "text-[color:var(--text-main)]" : "text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="https://instagram.com/danilaziz__" target="_blank" rel="noopener noreferrer" className="theme-icon-button rounded-full p-2 transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://github.com/danilaziz" target="_blank" rel="noopener noreferrer" className="theme-icon-button rounded-full p-2 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <button onClick={() => setDarkMode((value) => !value)} className="theme-icon-button rounded-full p-2 transition" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/kontak" className="premium-button theme-primary-button">
                Hubungi Saya
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => setDarkMode((value) => !value)} className="theme-icon-button rounded-full p-2" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setMobileMenuOpen((value) => !value)} className="theme-icon-button rounded-full p-2" aria-label="Buka navigasi">
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px]"
            aria-label="Tutup navigasi"
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-4 top-24 z-40 rounded-[22px] border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path} className={`rounded-xl px-4 py-3 text-sm font-medium transition ${active ? "theme-primary-button" : "theme-badge text-[color:var(--text-main)]"}`}>
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-2 flex items-center gap-3">
                <a href="https://instagram.com/danilaziz__" target="_blank" rel="noopener noreferrer" className="theme-secondary-button flex-1 rounded-xl px-4 py-3 text-center text-sm font-medium">Instagram</a>
                <a href="https://github.com/danilaziz" target="_blank" rel="noopener noreferrer" className="theme-secondary-button flex-1 rounded-xl px-4 py-3 text-center text-sm font-medium">GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
