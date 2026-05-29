import { ArrowLeft, ArrowRight, Check, Clock3, MessageCircleMore } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { packages } from "../data/pricing";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const item = packages.find((pkg) => pkg.slug === slug);

  if (!item) {
    return <NotFound />;
  }

  const waText = `Halo Danil, saya ingin konsultasi detail paket ${item.name}.`;

  return (
    <main className="reveal-scope overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-14 md:pb-18">
        <div className="shell">
          <Link to="/layanan" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-[var(--accent)]">
            <ArrowLeft size={16} />
            Kembali ke Layanan
          </Link>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
            <div className="soft-card p-7 md:p-10">
              <p className="section-label">Detail Layanan</p>
              <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{item.name}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">{item.summary}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface-inset)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Harga Mulai Dari</p>
                  <p className="heading-font mt-2 text-3xl font-extrabold">{item.price}</p>
                </div>
                <div className="rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface-inset)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Estimasi</p>
                  <p className="heading-font mt-2 text-3xl font-extrabold">{item.timeline}</p>
                </div>
              </div>
            </div>

            <aside className="price-card h-fit">
              <p className="text-sm font-semibold text-[color:var(--text-muted)]">Mulai diskusi paket</p>
              <h2 className="heading-font mt-2 text-3xl font-extrabold">{item.price}</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                Harga bisa dibahas lagi lewat WhatsApp sesuai fitur, jumlah halaman, dan materi yang dibutuhkan.
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                Cocok untuk: <strong className="text-[color:var(--text-main)]">{item.bestFor}</strong>
              </p>
              <a
                {...externalLinkProps(whatsappHref(waText))}
                className="premium-button theme-primary-button mt-7 w-full"
              >
                Chat WhatsApp
                <MessageCircleMore size={16} className="ml-2" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <div className="soft-card p-6 md:p-8">
            <h2 className="heading-font text-2xl font-extrabold md:text-3xl">Semua layanan</h2>
            <ul className="mt-6 space-y-4">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={17} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-card p-6 md:p-8">
            <h2 className="heading-font text-2xl font-extrabold md:text-3xl">Output yang didapat</h2>
            <ul className="mt-6 space-y-4">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={17} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Clock3 size={20} />
                <p className="section-label">Siap dibuat</p>
              </div>
              <h2 className="heading-font mt-3 text-2xl font-extrabold leading-tight md:text-5xl">Cek kebutuhan fitur dan nego harga lewat WhatsApp.</h2>
            </div>
            <Link to="/kontak" className="premium-button theme-primary-button">
              Isi Form Kontak
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
