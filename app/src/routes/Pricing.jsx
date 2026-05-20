import { ArrowRight, Check, Clock3, Gauge, Info, MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { packages } from "../data/pricing";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

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
            <h1 className="section-title mt-4">Paket website jelas & siap online.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Pilih paket sesuai kebutuhan: landing page, kesehatan, company profile, sekolah, desa, atau website custom.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className={`price-card flex h-full flex-col overflow-hidden ${item.featured ? "price-card-featured" : ""}`}>
              <div className="mb-6 border-b border-[color:var(--border-soft)] pb-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-[color:var(--text-muted)]">{item.name}</p>
                  <span className="theme-badge shrink-0 whitespace-nowrap rounded-md px-3 py-1 text-xs font-semibold">{item.bestFor}</span>
                </div>
                <h2 className="heading-font mt-2 text-3xl font-extrabold tracking-tight">{item.price}</h2>
                <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:tracking-[0.16em]">
                  {item.adminLabel}
                </p>
              </div>

              <p className="text-sm leading-7 text-[color:var(--text-muted)]">{item.summary}</p>

              <ul className="mt-6 grid gap-2.5 rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface-inset)] p-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Check size={13} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
                <Link to={`/layanan/${item.slug}`} className="theme-secondary-button flex min-h-11 items-center justify-center rounded-md px-3 py-3 text-center text-xs font-semibold transition sm:text-sm">
                  <span className="hidden sm:inline">Detail layanan</span>
                  <span className="sm:hidden">Detail</span>
                </Link>

                <a
                  {...externalLinkProps(whatsappHref(`Halo Danil, saya tertarik paket ${item.name}. Bisa konsultasi?`))}
                  className={`flex min-h-11 items-center justify-center rounded-md px-3 py-3 text-center text-xs font-semibold transition sm:text-sm ${item.featured ? "theme-primary-button" : "theme-secondary-button"}`}
                >
                  <MessageCircleMore size={15} className="mr-1.5 shrink-0" />
                  <span>Pilih paket</span>
                </a>
              </div>
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
            <a {...externalLinkProps(whatsappHref())} className="premium-button theme-primary-button">
              <MessageCircleMore size={16} className="mr-2" />
              Chat WhatsApp
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
