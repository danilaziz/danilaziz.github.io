import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Facebook, Github, GraduationCap, Home, Instagram, Layers3, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { externalLinkProps, FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, whatsappHref } from "../utils/externalLinks";

const logo = "/danilaziz-hero.avif";

const navItems = [
  { label: { id: "Beranda", en: "Home" }, path: "/", icon: Home },
  { label: { id: "Portfolio", en: "Portfolio" }, path: "/portfolio", icon: Layers3 },
  { label: { id: "Pendidikan", en: "Education" }, path: "/pendidikan", icon: GraduationCap },
  { label: { id: "Kontak", en: "Contact" }, path: "/kontak", icon: Phone },
];

export default function Navbar() {
  const location = useLocation();
  const { language, isEnglish, setLanguage } = useLanguage();
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
    document.body.classList.toggle("mobile-menu-is-open", mobileMenuOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-is-open");
    };
  }, [mobileMenuOpen]);

  const navClass = scrolled
    ? "border-[color:var(--border-strong)] bg-[color:var(--surface-glass)] shadow-[var(--shadow-soft)]"
    : "border-transparent bg-[color:var(--surface-glass)]/60";
  const tagline = isEnglish ? "Modern, fast, professional" : "Modern, cepat, profesional";
  const consultationLabel = isEnglish ? "Consultation" : "Konsultasi";
  const websiteConsultationLabel = isEnglish ? "Website Consultation" : "Konsultasi Website";
  const languageLabel = isEnglish ? "Switch to Indonesian" : "Switch to English";

  const LanguageToggle = ({ compact = false }) => (
    <div className={`language-toggle ${compact ? "language-toggle-mobile" : ""}`} aria-label="Pilihan bahasa">
      {["id", "en"].map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} className={language === item ? "is-active" : ""} aria-label={item === "en" ? languageLabel : "Gunakan bahasa Indonesia"}>
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div className={`shell rounded-lg border transition-colors duration-200 ${navClass}`}>
          <div className="flex items-center justify-between gap-3 py-2.5 md:py-3">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-1.5 shadow-sm md:h-14 md:w-14 md:p-2">
                <img src={logo} alt="Danil Aziz" width="52" height="52" loading="eager" fetchPriority="low" decoding="async" className="h-full w-full rounded-md object-cover object-top" />
              </span>
              <div className="min-w-0">
                <p className="heading-font truncate text-sm font-bold text-[color:var(--text-main)]">Danil Aziz</p>
                <p className="line-clamp-1 text-xs leading-5 text-[color:var(--text-muted)]">{tagline}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
              {navItems.map((item) => {
                const active = item.path === "/" ? location.pathname === item.path : location.pathname.startsWith(item.path);
                return (
                  <Link key={item.path} to={item.path} className={`text-sm font-medium transition ${active ? "text-[color:var(--text-main)]" : "text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]"}`}>
                    {item.label[language]}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a {...externalLinkProps(INSTAGRAM_URL)} className="nav-social-link theme-icon-button rounded-md p-2 transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a {...externalLinkProps(FACEBOOK_URL)} className="nav-social-link theme-icon-button rounded-md p-2 transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a {...externalLinkProps(GITHUB_URL)} className="nav-social-link theme-icon-button rounded-md p-2 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <button onClick={() => setDarkMode((value) => !value)} className="theme-icon-button rounded-md p-2 transition" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <LanguageToggle />
              <a {...externalLinkProps(whatsappHref())} className="premium-button theme-primary-button">
                {consultationLabel}
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <button onClick={() => setDarkMode((value) => !value)} className="theme-icon-button rounded-md p-2" aria-label="Ubah tema">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <LanguageToggle compact />
              <button onClick={() => setMobileMenuOpen((value) => !value)} className="theme-icon-button rounded-md p-2" aria-label="Buka navigasi">
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-backdrop fixed inset-0 z-30 bg-black/25" aria-label="Tutup navigasi" />

          <div className="mobile-menu-panel fixed inset-x-3 top-24 z-40 rounded-lg border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-5 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = item.path === "/" ? location.pathname === item.path : location.pathname.startsWith(item.path);
                return (
                  <Link key={item.path} to={item.path} className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition ${active ? "theme-primary-button" : "theme-badge text-[color:var(--text-main)]"}`}>
                    <Icon size={17} />
                    {item.label[language]}
                  </Link>
                );
              })}
              <div className="grid grid-cols-3 gap-3">
                <a {...externalLinkProps(INSTAGRAM_URL)} className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a {...externalLinkProps(FACEBOOK_URL)} className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a {...externalLinkProps(GITHUB_URL)} className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </div>
              <a {...externalLinkProps(whatsappHref())} className="premium-button theme-primary-button mt-2">
                {websiteConsultationLabel}
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
