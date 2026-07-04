import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";

const copy = {
  id: {
    title: "Halaman tidak ditemukan.",
    body: "URL yang kamu akses tidak tersedia atau sudah dipindahkan. Kembali ke beranda untuk melihat portfolio yang aktif.",
    button: "Kembali ke Beranda",
  },
  en: {
    title: "Page not found.",
    body: "The URL you opened is unavailable or has been moved. Go back home to view the active portfolio.",
    button: "Back to Home",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main className="reveal-scope overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-20 pt-8 md:pb-28">
        <div className="shell">
          <div className="soft-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <SearchX className="mx-auto text-[var(--accent)]" size={42} />
            <p className="section-label mt-6">404 Not Found</p>
            <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{text.title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[color:var(--text-muted)]">{text.body}</p>
            <Link to="/" replace className="premium-button theme-primary-button mt-8">
              <ArrowLeft size={16} className="mr-2" />
              {text.button}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
