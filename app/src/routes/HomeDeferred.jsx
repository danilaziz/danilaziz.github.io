import { ArrowRight, Building2, Check, Globe2, MessagesSquare, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { packages } from "../data/pricing";
import travelHome from "../assets/images/travel-home.webp";
import pupuk4 from "../assets/images/pupuk4.webp";
import umkm1 from "../assets/images/umkm1.webp";
import konstruksi1 from "../assets/images/konstruksi1.webp";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const featuredWork = [
  {
    id: 5,
    slug: "website-pupuk-hasil-kerja",
    title: "Website Pupuk",
    category: "Hasil Kerja",
    image: pupuk4,
    summary: "Hasil kerja website bisnis pupuk dengan tampilan rapi untuk menampilkan produk, informasi layanan, keunggulan usaha, dan CTA pemesanan.",
  },
  {
    id: 4,
    slug: "website-travel-hasil-kerja",
    title: "Website Travel",
    category: "Hasil Kerja",
    image: travelHome,
    summary: "Hasil kerja website travel dengan tampilan bersih untuk menampilkan destinasi, paket perjalanan, detail layanan, dan galeri visual.",
  },
  {
    id: 1,
    slug: "website-umkm",
    title: "UMKM Website",
    category: "Business",
    image: umkm1,
    summary: "Website promosi untuk UMKM yang ingin menampilkan produk, keunggulan, testimoni, dan CTA pembelian dengan tampilan modern.",
  },
  {
    id: 2,
    slug: "website-konstruksi",
    title: "Website Konstruksi",
    category: "Business",
    image: konstruksi1,
    summary: "Company profile untuk bisnis konstruksi yang membutuhkan kesan tegas, kredibel, dan mudah dipakai untuk menampilkan layanan serta proyek.",
  },
];

const services = [
  { icon: Rocket, title: "Landing Page Penjualan", copy: "Satu halaman yang fokus pada promosi, CTA WhatsApp, dan konversi dari iklan atau media sosial." },
  { icon: Building2, title: "Company Profile", copy: "Website profil bisnis yang rapi untuk menjelaskan layanan, kredibilitas, portofolio, dan kontak resmi." },
  { icon: Globe2, title: "Website Instansi & Custom", copy: "Website sekolah, desa, katalog, sampai kebutuhan khusus dengan struktur konten yang mudah dikelola." },
];

const stats = [
  { value: "3-14", label: "hari pengerjaan" },
  { value: "1 th", label: "domain & hosting" },
  { value: "100%", label: "responsive" },
];

const process = [
  { title: "Brief", copy: "Tujuan website dan materi utama dikunci dulu." },
  { title: "Desain", copy: "Struktur konten dan tampilan dibuat rapi." },
  { title: "Build", copy: "Website dikembangkan responsive dan ringan." },
  { title: "Launch", copy: "Final check, domain-hosting, lalu online." },
];

export default function HomeDeferred() {
  return (
    <>
      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="soft-card p-6">
              <p className="heading-font text-4xl font-extrabold text-[color:var(--text-main)]">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-[color:var(--text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Layanan</p>
              <h2 className="section-title mt-3">Solusi website untuk kebutuhan bisnis.</h2>
            </div>
            <a {...externalLinkProps(whatsappHref())} className="text-sm font-semibold text-[var(--accent)]">
              Tanya paket custom
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="soft-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon size={24} />
                </div>
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
            <p className="section-label">Paket</p>
            <h2 className="section-title mt-3">Harga jelas untuk mulai online.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.slice(0, 3).map((item) => (
              <article key={item.name} className={`price-card ${item.featured ? "price-card-featured" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--text-muted)]">{item.name}</p>
                    <h3 className="heading-font mt-2 text-3xl font-extrabold whitespace-nowrap">{item.price}</h3>
                  </div>
                  <span className="theme-badge whitespace-nowrap rounded-md px-3 py-1 text-xs font-semibold">{item.bestFor}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--text-main)]">
                      <Check size={16} className="shrink-0 text-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={`/layanan/${item.slug}`} className={`premium-button mt-7 w-full ${item.featured ? "theme-primary-button" : "theme-secondary-button"}`}>
                  Detail Paket
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Link to="/layanan" className="premium-button theme-secondary-button">
              Lihat Semua Paket
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 max-w-3xl">
            <p className="section-label">Proses kerja</p>
            <h2 className="section-title mt-3">Alur singkat dari brief sampai online.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <article key={item.title} className="soft-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">0{index + 1}</div>
                <h3 className="heading-font mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-title mt-3">Contoh website yang bisa jadi referensi.</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold text-[var(--accent)]">
              Lihat semua
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <article key={item.id} className="soft-card overflow-hidden">
                <img src={item.image} alt={item.title} width="720" height="540" loading="lazy" decoding="async" sizes="(min-width: 1024px) 33vw, 100vw" className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">{item.category}</p>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="heading-font text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[color:var(--text-muted)]">{item.summary}</p>
                    </div>
                    <Link to={`/portfolio/${item.slug}`} className="theme-icon-button rounded-md p-3 transition" aria-label={`Detail ${item.title}`}>
                      <ArrowRight size={16} />
                    </Link>
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
              <h2 className="heading-font mt-3 text-2xl font-extrabold leading-tight md:text-5xl">Siap punya website bisnis yang terlihat lebih serius?</h2>
            </div>
            <a {...externalLinkProps(whatsappHref())} className="premium-button theme-primary-button">
              Chat WhatsApp
              <MessagesSquare size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
