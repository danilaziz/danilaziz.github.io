import { ArrowRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";
import travelHome from "../assets/images/travel-home.webp";
import pupuk4 from "../assets/images/pupuk4.webp";
import obylomboktour from "../assets/images/obylomboktour.avif";
import { externalLinkProps } from "../utils/externalLinks";

const featuredWork = [
  {
    id: 6,
    slug: "website-tour-travel",
    title: "Website Tour & Travel",
    category: "Hasil Kerja",
    image: obylomboktour,
    demo: "https://obylomboktour.com",
    summary: "Website Tour & Travel untuk menampilkan paket wisata, destinasi pilihan, galeri, serta dilengkapi payment gateway dan halaman admin agar transaksi serta pengelolaan paket lebih profesional dan mudah.",
    summaryEn: "A Tour & Travel website designed to present travel packages, featured destinations, and galleries, complete with a payment gateway and an admin panel so transactions and package management are professional and easy.",
  },
  {
    id: 5,
    slug: "website-pupuk-hasil-kerja",
    title: "Website Pupuk",
    category: "Hasil Kerja",
    image: pupuk4,
    demo: "https://berkahcintamadinah.com",
    summary: "Website bisnis pupuk dengan katalog, trust point, dan CTA pemesanan yang jelas.",
    summaryEn: "A fertilizer business website with catalog sections, trust points, and clear order CTAs.",
  },
  {
    id: 4,
    slug: "website-travel-hasil-kerja",
    title: "Website Travel",
    category: "Hasil Kerja",
    image: travelHome,
    demo: "https://ptberkahcintawisata.com",
    summary: "Website travel untuk menampilkan paket, destinasi, galeri, dan kontak yang mudah ditemukan.",
    summaryEn: "A travel website for packages, destinations, galleries, and easy-to-find contact CTAs.",
  },
];

const copy = {
  id: {
    processLabel: "Proses kerja",
    processTitle: "Alur singkat dari brief sampai online.",
    process: [
      { title: "Brief", copy: "Tujuan website dan materi utama dikunci dulu." },
      { title: "Desain", copy: "Struktur konten dan tampilan dibuat rapi." },
      { title: "Build", copy: "Website dikembangkan responsive dan ringan." },
      { title: "Launch", copy: "Final check, domain-hosting, lalu online." },
    ],
    portfolioLabel: "Portfolio",
    portfolioTitle: "Portfolio website yang siap jadi referensi bisnis.",
    viewAll: "Lihat semua portfolio",
    testimonialsLabel: "Testimonial",
    testimonialsTitle: "Dipercaya oleh bisnis yang ingin tampil lebih profesional.",
    testimonials: [
      {
        name: "Oby Lombok Tour",
        role: "Website Tour & Travel",
        quote: "Website tour & travel tampil premium, pemesanan online dengan payment gateway, dan pengelolaan paket jauh lebih mudah lewat admin panel.",
      },
      {
        name: "Berkah Cinta Madinah",
        role: "Website Pupuk",
        quote: "Website pupuk tampil lebih profesional, produk lebih mudah dilihat, dan calon pembeli lebih cepat diarahkan ke pemesanan.",
      },
      {
        name: "Berkah Cinta Wisata",
        role: "Website Travel Umroh",
        quote: "Tampilan website travel umroh rapi, responsif, dan cocok untuk menampilkan paket perjalanan serta membangun kepercayaan jamaah.",
      },
    ],
    rating: "5.0 dari 5",
  },
  en: {
    processLabel: "Work process",
    processTitle: "A short flow from brief to launch.",
    process: [
      { title: "Brief", copy: "Website goals and main materials are clarified first." },
      { title: "Design", copy: "Content structure and visuals are arranged cleanly." },
      { title: "Build", copy: "The website is developed to be responsive and lightweight." },
      { title: "Launch", copy: "Final checks, domain-hosting, then the site goes live." },
    ],
    portfolioLabel: "Portfolio",
    portfolioTitle: "Website portfolio built as business references.",
    viewAll: "View all portfolio",
    testimonialsLabel: "Testimonials",
    testimonialsTitle: "Trusted by businesses that want a more professional presence.",
    testimonials: [
      {
        name: "Oby Lombok Tour",
        role: "Tour & Travel Website",
        quote: "The tour & travel website looks premium, supports online booking with a payment gateway, and package management is much easier through the admin panel.",
      },
      {
        name: "Berkah Cinta Madinah",
        role: "Fertilizer Website",
        quote: "The fertilizer website looks more professional, makes products easier to browse, and guides buyers faster toward ordering.",
      },
      {
        name: "Berkah Cinta Wisata",
        role: "Umrah Travel Website",
        quote: "The umrah travel website is neat, responsive, and suitable for presenting travel packages while building pilgrim trust.",
      },
    ],
    rating: "5.0 out of 5",
  },
};

export default function HomeDeferred() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const text = copy[language];

  return (
    <>
      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 max-w-3xl">
            <p className="section-label">{text.processLabel}</p>
            <h2 className="section-title mt-3">{text.processTitle}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {text.process.map((item, index) => (
              <article key={item.title} className="process-card soft-card p-5">
                <div className="process-number flex h-10 w-10 items-center justify-center rounded-md bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">0{index + 1}</div>
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
              <p className="section-label">{text.portfolioLabel}</p>
              <h2 className="section-title mt-3">{text.portfolioTitle}</h2>
            </div>
            <Link to="/portfolio" className="hidden text-sm font-semibold text-[var(--accent)] md:inline">
              {text.viewAll}
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <article key={item.id} className="work-card soft-card cursor-pointer overflow-hidden" onClick={() => navigate(`/portfolio/${item.slug}`)}>
                <div className="work-image-wrap">
                  <img src={item.image} alt={item.title} width="720" height="540" loading="lazy" decoding="async" sizes="(min-width: 1024px) 33vw, 100vw" className="h-56 w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">{language === "en" && item.category === "Hasil Kerja" ? "Work" : item.category}</p>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="heading-font text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[color:var(--text-muted)]">{language === "en" ? item.summaryEn : item.summary}</p>
                    </div>
                    <a {...externalLinkProps(item.demo)} className="theme-icon-button rounded-md p-3 transition" aria-label={`${language === "en" ? "Open demo website" : "Buka demo website"} ${item.title}`} onClick={(event) => event.stopPropagation()}>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <Link to="/portfolio" className="md:hidden flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-card)] p-5 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)]">
              {text.viewAll}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="deferred-section pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7 max-w-3xl">
            <p className="section-label">{text.testimonialsLabel}</p>
            <h2 className="section-title mt-3">{text.testimonialsTitle}</h2>
          </div>

          <div className="testimonials-marquee">
            <div className="testimonials-track">
              {[...text.testimonials, ...text.testimonials].map((item, index) => (
                <article key={`${item.name}-${index}`} className="testimonial-card soft-card p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="heading-font text-2xl font-bold text-[color:var(--text-main)]">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-[color:var(--text-muted)]">{item.role}</p>
                    </div>
                    <div className="rating-badge" aria-label={text.rating}>
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[color:var(--text-muted)]">{item.quote}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{text.rating}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
