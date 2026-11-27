import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Briefcase,
  Facebook,
  Github,
  Home,
  Instagram,
  Layers3,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import {
  externalLinkProps,
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  whatsappHref,
} from "../utils/externalLinks";

const logo = "/dacode.avif";

const navItems = [
  { label: { id: "Beranda", en: "Home" }, path: "/", icon: Home },
  {
    label: { id: "Portfolio", en: "Portfolio" },
    path: "/portfolio",
    icon: Layers3,
  },
  {
    label: { id: "Layanan", en: "Services" },
    path: "/layanan",
    icon: Briefcase,
  },
  { label: { id: "Kontak", en: "Contact" }, path: "/kontak", icon: Phone },
];

function LanguageToggle({ compact = false, language, isEnglish, setLanguage }) {
  const target = language === "id" ? "en" : "id";
  return (
    <div
      className={`language-toggle ${compact ? "language-toggle-mobile" : ""}`}
      aria-label="Pilihan bahasa"
      title={isEnglish ? "Gunakan bahasa Indonesia" : "Switch to English"}
    >
      <button
        type="button"
        onClick={() => setLanguage(target)}
        aria-label={
          target === "en" ? "Switch to English" : "Gunakan bahasa Indonesia"
        }
      >
        {target.toUpperCase()}
      </button>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const { language, isEnglish, setLanguage } = useLanguage();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuRendered, setMobileMenuRendered] = useState(false);
  const menuCloseTimer = useRef(null);
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

  useEffect(() => {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);

    if (mobileMenuOpen) {
      setMobileMenuRendered(true);
      return undefined;
    }

    if (mobileMenuRendered) {
      menuCloseTimer.current = setTimeout(() => {
        setMobileMenuRendered(false);
        menuCloseTimer.current = null;
      }, 560);
    }

    return () => {
      if (menuCloseTimer.current) {
        clearTimeout(menuCloseTimer.current);
        menuCloseTimer.current = null;
      }
    };
  }, [mobileMenuOpen, mobileMenuRendered]);

  const navClass = scrolled
    ? "border-[color:var(--border-strong)] bg-[color:var(--surface-glass)] shadow-[var(--shadow-soft)]"
    : "border-transparent bg-[color:var(--surface-glass)]/60";
  const tagline = isEnglish ? "Web Developer" : "Pengembang Web";
  const consultationLabel = isEnglish ? "Consultation" : "Konsultasi";
  const websiteConsultationLabel = isEnglish
    ? "Website Consultation"
    : "Konsultasi Website";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-1 pt-3 md:px-6 md:pt-4">
        <div
          className={`shell rounded-lg border transition-colors duration-200 ${navClass}`}
        >
          <div className="flex items-center justify-between gap-2 py-2.5 md:gap-3 md:py-3">
            <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-1 shadow-sm sm:h-[3.25rem] sm:w-[3.25rem] md:h-14 md:w-14">
                <img
                  src={logo}
                  alt="DA Code"
                  width="52"
                  height="52"
                  loading="eager"
                  fetchPriority="low"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </span>
              <div className="min-w-0">
                <p className="heading-font truncate text-[13px] font-bold text-[color:var(--text-main)] sm:text-sm md:text-base lg:text-[17px]">
                  DA Code
                </p>
                <p className="line-clamp-1 text-[0.65rem] leading-4 text-[color:var(--text-muted)] sm:text-xs sm:leading-5 md:text-[13px] lg:text-sm">
                  {tagline}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-5 lg:flex lg:gap-7">
              {navItems.map((item) => {
                const active =
                  item.path === "/"
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition md:text-[15px] lg:text-base ${active ? "text-[color:var(--text-main)]" : "text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]"}`}
                  >
                    {item.label[language]}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="hidden items-center gap-1.5 xl:flex">
                <a
                  {...externalLinkProps(INSTAGRAM_URL)}
                  className="nav-social-link theme-icon-button rounded-md p-2 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  {...externalLinkProps(FACEBOOK_URL)}
                  className="nav-social-link theme-icon-button rounded-md p-2 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  {...externalLinkProps(GITHUB_URL)}
                  className="nav-social-link theme-icon-button rounded-md p-2 transition"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
              <button
                onClick={() => setDarkMode((value) => !value)}
                className="theme-icon-button rounded-md p-2 transition"
                aria-label="Ubah tema"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <LanguageToggle
                language={language}
                isEnglish={isEnglish}
                setLanguage={setLanguage}
              />
              <a
                {...externalLinkProps(whatsappHref())}
                className="btn-hero-primary shrink-0 lg:px-7 lg:py-3.5 lg:text-[15px]"
              >
                {consultationLabel}
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 lg:hidden">
              <button
                onClick={() => setDarkMode((value) => !value)}
                className="theme-icon-button flex h-10 w-10 shrink-0 items-center justify-center rounded-md p-0 sm:h-11 sm:w-11"
                aria-label="Ubah tema"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                ) : (
                  <Moon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                )}
              </button>
              <LanguageToggle
                compact
                language={language}
                isEnglish={isEnglish}
                setLanguage={setLanguage}
              />
              <button
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="theme-icon-button flex h-10 w-10 shrink-0 items-center justify-center rounded-md p-0 sm:h-11 sm:w-11"
                aria-label={mobileMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                <span className={`mobile-menu-icon ${mobileMenuOpen ? "is-open" : ""}`} aria-hidden="true">
                  <Menu className="mobile-menu-icon-menu h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                  <X className="mobile-menu-icon-close h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuRendered && (
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
            className={`mobile-menu-backdrop fixed inset-0 z-30 bg-black/25 ${mobileMenuOpen ? "is-open" : "is-closing"}`}
            aria-label="Tutup navigasi"
          />

          <div
            className={`mobile-menu-panel fixed inset-x-3 top-24 z-40 max-h-[calc(100dvh-7rem)] overflow-hidden overflow-y-auto rounded-lg border border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-5 shadow-2xl ${mobileMenuOpen ? "is-open" : "is-closing"}`}
            style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active =
                  item.path === "/"
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path);
                const total = navItems.length + 2;
                const delay = mobileMenuOpen ? index * 55 : (total - 1 - index) * 45;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-menu-item ${mobileMenuOpen ? "is-open" : "is-closing"} flex min-h-12 items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition ${active ? "theme-primary-button" : "theme-badge text-[color:var(--text-main)]"}`}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <Icon size={17} />
                    {item.label[language]}
                  </Link>
                );
              })}
              <div
                className={`mobile-menu-item ${mobileMenuOpen ? "is-open" : "is-closing"} grid grid-cols-3 gap-2`}
                style={{ animationDelay: `${mobileMenuOpen ? navItems.length * 55 : 45}ms` }}
              >
                <a
                  {...externalLinkProps(INSTAGRAM_URL)}
                  className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  {...externalLinkProps(FACEBOOK_URL)}
                  className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  {...externalLinkProps(GITHUB_URL)}
                  className="nav-social-link theme-icon-button flex min-h-11 items-center justify-center rounded-md p-3"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
              <a
                {...externalLinkProps(whatsappHref())}
                className={`mobile-menu-item ${mobileMenuOpen ? "is-open" : "is-closing"} btn-hero-primary mt-2 min-h-[3.25rem] w-full`}
                style={{ animationDelay: `${mobileMenuOpen ? (navItems.length + 1) * 55 : 0}ms` }}
              >
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
