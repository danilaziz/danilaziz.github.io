import { ArrowRight, Check, Clock3, Gauge, MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { packages } from "../data/pricing";

const process = [
  { icon: MessageCircleMore, title: "Diskusi", copy: "Tentukan tujuan, paket, dan materi." },
  { icon: Sparkles, title: "Desain", copy: "Layout dibuat ringkas dan menjual." },
  { icon: Gauge, title: "Build", copy: "Website dibuat responsive dan cepat." },
  { icon: ShieldCheck, title: "Online", copy: "Final check lalu siap dipublikasikan." },
];

export default function Pricing() {
  return (
    <main className="overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="section-label">Harga Website</p>
            <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Paket jelas, sudah termasuk domain dan hosting 1 tahun.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Pilih paket sesuai kebutuhan: landing page, kesehatan, company profile, sekolah, desa, atau website custom.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className={`price-card ${item.featured ? "price-card-featured" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-muted)]">{item.name}</p>
                  <h2 className="heading-font mt-2 text-3xl font-extrabold">{item.price}</h2>
                </div>
                <span className="theme-badge whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold">{item.bestFor}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{item.summary}</p>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="shrink-0 text-[var(--accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={`/harga/${item.slug}`} className="theme-secondary-button mt-6 flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition">
                Detail layanan
              </Link>

              <a
                href={`https://wa.me/6287728890135?text=${encodeURIComponent(`Halo Danil, saya tertarik paket ${item.name}. Bisa konsultasi?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`premium-button mt-7 w-full ${item.featured ? "theme-primary-button" : "theme-secondary-button"}`}
              >
                Pilih Paket
                <ArrowRight size={16} className="ml-2" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="mb-7 flex items-center gap-3">
            <Clock3 className="text-[var(--accent)]" size={22} />
            <h2 className="heading-font text-3xl font-extrabold">Alur pengerjaan</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="soft-card p-5">
                <Icon className="text-[var(--accent)]" size={22} />
                <h3 className="heading-font mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <p className="section-label">Konsultasi</p>
              <h2 className="heading-font mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Mau hitung estimasi website kamu?</h2>
            </div>
            <a href="https://wa.me/6287728890135" target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
