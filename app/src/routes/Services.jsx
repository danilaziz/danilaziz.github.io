import { ArrowRight, Building2, Globe, Home as HomeIcon, MessagesSquare, MonitorSmartphone, Rocket, Store } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

const services = [
  {
    icon: Store,
    title: "Landing Page UMKM",
    titleEn: "UMKM Landing Page",
    desc: "Halaman fokus untuk menonjolkan produk, benefit, testimoni, dan CTA pembelian.",
    descEn: "A focused page to highlight products, benefits, testimonials, and purchase CTAs.",
  },
  {
    icon: Building2,
    title: "Company Profile",
    titleEn: "Company Profile",
    desc: "Profil bisnis profesional untuk membangun kredibilitas dan permintaan penawaran.",
    descEn: "A professional business profile to build credibility and encourage quote requests.",
  },
  {
    icon: Globe,
    title: "Website Sekolah",
    titleEn: "School Website",
    desc: "Informasi sekolah, pengumuman, dan profil yang rapi untuk wali murid dan publik.",
    descEn: "Clean school info, announcements, and profiles for parents and the public.",
  },
  {
    icon: HomeIcon,
    title: "Website Desa",
    titleEn: "Village Website",
    desc: "Profil desa, layanan, dan berita yang mudah diakses oleh warga dan pemerintah.",
    descEn: "Village profile, services, and news that are easy for residents and officials to access.",
  },
  {
    icon: Rocket,
    title: "Website Travel",
    titleEn: "Travel Website",
    desc: "Tampilkan paket perjalanan, destinasi, dan galeri untuk membangun kepercayaan.",
    descEn: "Showcase packages, destinations, and galleries to build trust.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Custom",
    titleEn: "Custom Website",
    desc: "Kebutuhan khusus dengan desain dan fitur yang disesuaikan dengan bisnis Anda.",
    descEn: "Specific needs with design and features tailored to your business.",
  },
];

const copy = {
  id: {
    title: "Jasa website yang ringan, cepat, dan siap online.",
    description: "Saya membantu UMKM, bisnis jasa, sekolah, desa, dan personal brand membuat website yang terlihat profesional dan memandu pengunjung menuju WhatsApp atau demo produk.",
    cta: "Konsultasi Gratis",
    portfolio: "Lihat Portfolio",
    servicesTitle: "Jenis layanan",
    servicesSubtitle: "Website yang disesuaikan dengan kebutuhan bisnis.",
    ctaLabel: "Mulai proyek",
    ctaTitle: "Siap tampil lebih profesional?",
    ctaButton: "Chat WhatsApp",
  },
  en: {
    title: "Websites that are light, fast, and ready to go online.",
    description: "I help SMEs, service businesses, schools, villages, and personal brands create professional websites that guide visitors toward WhatsApp or product demos.",
    cta: "Free Consultation",
    portfolio: "View Portfolio",
    servicesTitle: "Service types",
    servicesSubtitle: "Websites tailored to your business needs.",
    ctaLabel: "Start a project",
    ctaTitle: "Ready to look more professional?",
    ctaButton: "Chat on WhatsApp",
  },
};

export default function Services() {
  const { language, isEnglish } = useLanguage();
  const text = copy[language];

  const waMessage = isEnglish
    ? "Hi Danil, I want to consult about a website."
    : "Halo Danil, saya ingin konsultasi website.";

  return (
    <main className="services-page reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="section-label">Layanan</p>
            <h1 className="heading-font mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">{text.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">{text.description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a {...externalLinkProps(whatsappHref(waMessage))} className="premium-button theme-primary-button hidden md:inline-flex">
              {text.cta}
              <ArrowRight size={16} className="ml-2" />
            </a>
            <Link to="/portfolio" className="premium-button theme-secondary-button">
              {text.portfolio}
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">{text.servicesTitle}</p>
            <h2 className="section-title mt-3">{text.servicesSubtitle}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.titleEn} className="soft-card p-6" data-reveal style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon size={23} />
                  </div>
                  <h3 className="heading-font mt-4 text-xl font-bold">{isEnglish ? item.titleEn : item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{isEnglish ? item.descEn : item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <p className="section-label">{text.ctaLabel}</p>
              <h2 className="heading-font mt-3 text-2xl font-extrabold leading-tight md:text-5xl">{text.ctaTitle}</h2>
            </div>
            <a {...externalLinkProps(whatsappHref(waMessage))} className="premium-button theme-primary-button">
              {text.ctaButton}
              <MessagesSquare size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
