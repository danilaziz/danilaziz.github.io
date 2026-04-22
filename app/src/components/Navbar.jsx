import { useEffect, useState } from "react";
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
    window.addEventListener("scroll", onScroll, { passive: true });
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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div className={`shell rounded-[22px] border backdrop-blur-xl transition-all duration-300 ${navClass}`}>
          <div className="flex items-center justify-between gap-3 py-2.5 md:py-3">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img src={logo} alt="Danil Aziz" width="44" height="44" loading="eager" decoding="async" className="h-10 w-10 shrink-0 rounded-full border border-white/70 object-cover shadow-sm dark:border-white/10 md:h-11 md:w-11" />
              <div className="min-w-0">
                <p className="heading-font truncate text-[0.95rem] font-bold uppercase tracking-[0.24em] text-[color:var(--text-main)] md:text-sm md:tracking-[0.28em]">Danil Aziz</p>
                <p className="line-clamp-2 text-xs leading-5 text-[color:var(--text-muted)] md:line-clamp-1">Frontend Developer & Website Specialist</p>
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

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <button onClick={() => setDarkMode((value) => !value)} className="theme-icon-button rounded-full p-2" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setMobileMenuOpen((value) => !value)} className="theme-icon-button rounded-full p-2" aria-label="Buka navigasi">
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px]"
            aria-label="Tutup navigasi"
          />

          <div className="fixed inset-x-3 top-24 z-40 rounded-[22px] border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-5 shadow-2xl backdrop-blur-xl">
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
          </div>
        </div>
      )}
    </>
  );
}
