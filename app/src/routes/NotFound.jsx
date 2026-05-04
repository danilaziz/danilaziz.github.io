import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-20 pt-8 md:pb-28">
        <div className="shell">
          <div className="soft-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <SearchX className="mx-auto text-[var(--accent)]" size={42} />
            <p className="section-label mt-6">404 Not Found</p>
            <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Halaman tidak ditemukan.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[color:var(--text-muted)]">
              URL yang kamu akses tidak tersedia atau sudah dipindahkan. Kembali ke beranda untuk melihat layanan dan portfolio yang aktif.
            </p>
            <Link to="/" replace className="premium-button theme-primary-button mt-8">
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
