import { ArrowRight, BadgeCheck, Building2, Check, Globe2, MessagesSquare, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { packages } from "../data/pricing";
import templates from "../data/templates";

const mobileHeroImage = "/danilaziz-hero-mobile.webp";
const desktopHeroImage = "/danilaziz-hero.webp";

const services = [
  { icon: Rocket, title: "Landing Page", copy: "Halaman promosi cepat untuk bisnis, campaign, dan kesehatan." },
  { icon: Building2, title: "Website Sekolah & Desa", copy: "Profil resmi, berita, galeri, layanan, dan kontak publik." },
  { icon: Globe2, title: "Company & Custom", copy: "Website bisnis, company profile, katalog, dan fitur khusus." },
];

const wins = ["Domain 1 tahun", "Hosting 1 tahun", "Mobile first", "Cepat dibuka"];

export default function Home() {
  return (
    <main className="overflow-hidden pt-24 text-[color:var(--text-main)] md:pt-28">
      <section className="relative pb-14 pt-6 md:pb-20 md:pt-10">
        <div className="shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label">Website untuk bisnis</p>
            <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">
              Website cepat, rapi, dan siap bantu jualan.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Saya bantu buat landing page, website sekolah, website desa, company profile, dan website custom dengan tampilan profesional tanpa membuat halaman terasa berat.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/6287728890135" target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button">
                Konsultasi Gratis
                <ArrowRight size={16} className="ml-2" />
              </a>
              <Link to="/harga" className="premium-button theme-secondary-button">
                Lihat Harga
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {wins.map((item) => (
                <div key={item} className="quick-win">
                  <BadgeCheck size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <picture>
              <source media="(max-width: 767px)" srcSet={mobileHeroImage} />
              <img
                src={desktopHeroImage}
                alt="Danil Aziz web developer"
                width="720"
                height="900"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-[430px] w-full rounded-[24px] border border-[color:var(--border-soft)] object-cover object-top shadow-[var(--shadow-soft)] md:h-[560px]"
              />
            </picture>
            <div className="hero-offer">
              <span>Mulai Rp1,2jt</span>
              <strong>Website siap online</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Layanan</p>
              <h2 className="section-title mt-3">Pilih kebutuhan website.</h2>
            </div>
            <a href="https://wa.me/6287728890135" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--accent)]">
              Tanya paket custom
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="soft-card p-6">
                <Icon className="text-[var(--accent)]" size={24} />
                <h3 className="mt-5 heading-font text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="harga" className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7">
            <p className="section-label">Harga</p>
            <h2 className="section-title mt-3">Paket pembuatan website.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.slice(0, 3).map((item) => (
              <article key={item.name} className={`price-card ${item.featured ? "price-card-featured" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--text-muted)]">{item.name}</p>
                    <h3 className="heading-font mt-2 text-3xl font-extrabold">{item.price}</h3>
                  </div>
                  <span className="theme-badge whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold">{item.bestFor}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--text-main)]">
                      <Check size={16} className="shrink-0 text-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={`/harga/${item.slug}`} className={`premium-button mt-7 w-full ${item.featured ? "theme-primary-button" : "theme-secondary-button"}`}>
                  Detail Paket
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/harga" className="premium-button theme-secondary-button">
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </section>

      <section id="selected-work" className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Contoh</p>
              <h2 className="section-title mt-3">Website yang pernah dibuat.</h2>
            </div>
            <Link to="/contoh" className="text-sm font-semibold text-[var(--accent)]">
              Lihat semua
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {templates.slice(0, 3).map((item) => (
              <article key={item.id} className="soft-card overflow-hidden">
                <img src={item.images?.[0] ?? item.image} alt={item.title} loading="lazy" decoding="async" className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">{item.category}</p>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="heading-font text-2xl font-bold">{item.title}</h3>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" className="theme-icon-button rounded-full p-3 transition" aria-label={`Buka ${item.title}`}>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deferred-section pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <p className="section-label">Mulai proyek</p>
              <h2 className="heading-font mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Butuh website yang lebih menjual?</h2>
            </div>
            <a href="https://wa.me/6287728890135" target="_blank" rel="noopener noreferrer" className="premium-button theme-primary-button">
              Chat WhatsApp
              <MessagesSquare size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
