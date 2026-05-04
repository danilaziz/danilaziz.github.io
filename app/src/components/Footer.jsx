import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { name: "Beranda", path: "/" },
  { name: "Harga", path: "/harga" },
  { name: "Contoh", path: "/template" },
  { name: "Kontak", path: "/kontak" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="pb-10 pt-6">
      <div className="shell">
        <div className="glass-panel rounded-[28px] px-8 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="heading-font text-2xl font-bold text-[color:var(--text-main)]">Danil Aziz</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-[color:var(--text-muted)]">
                Pembuatan company profile, landing page, dan website custom yang cepat dibuka.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-medium text-[color:var(--text-muted)]">
              {links.map((item) => (
                <Link key={item.path} to={item.path} className="transition hover:text-[var(--accent)]">
                  {item.name}
                </Link>
              ))}
            </div>

            <button onClick={scrollToTop} className="theme-primary-button inline-flex h-12 w-12 items-center justify-center rounded-full transition" aria-label="Kembali ke atas">
              <ArrowUp size={18} />
            </button>
          </div>

          <div className="mt-8 border-t border-[color:var(--border-soft)] pt-5 text-sm text-[color:var(--text-muted)]">
            Copyright {new Date().getFullYear()} Danil Aziz. Website cepat untuk bisnis yang ingin tampil lebih menjual.
          </div>
        </div>
      </div>
    </footer>
  );
}

