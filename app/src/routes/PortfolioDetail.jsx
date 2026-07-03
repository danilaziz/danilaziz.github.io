import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2, MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ImageLightbox from "../components/ImageLightbox";
import { useLanguage } from "../context/LanguageContext";
import templates from "../data/templates";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";
import NotFound from "./NotFound";

const detailCopy = {
  id: {
    back: "Kembali ke Portfolio",
    label: "Detail Portfolio",
    demo: "Lihat Demo",
    consult: "Konsultasi Serupa",
    category: "Kategori",
    liveDemo: "Demo aktif",
    salesReady: "Siap promosi",
    mainPreview: "Perbesar preview utama",
    preview: "Perbesar preview",
    processLabel: "Problem - Solusi - Hasil",
    processTitle: "Arah pengerjaan dibuat berdasarkan kebutuhan bisnis.",
    problem: "Problem",
    solution: "Solusi",
    impact: "Hasil",
    objective: "Tujuan",
    objectiveTitle: "Apa yang ingin dicapai",
    scope: "Scope",
    scopeTitle: "Bagian yang dibuat",
    output: "Output",
    outputTitle: "Hasil utama",
    ctaLabel: "Buat Website Serupa",
    ctaTitle: "Ingin portfolio seperti ini untuk bisnis kamu?",
    chat: "Chat WhatsApp",
    waText: (title) => `Halo Danil, saya tertarik membuat website seperti ${title}. Bisa konsultasi?`,
  },
  en: {
    back: "Back to Portfolio",
    label: "Portfolio Detail",
    demo: "View Demo",
    consult: "Discuss Similar Work",
    category: "Category",
    liveDemo: "Live demo",
    salesReady: "Sales-ready",
    mainPreview: "Open main preview",
    preview: "Open preview",
    processLabel: "Problem - Solution - Result",
    processTitle: "The direction is shaped around real business needs.",
    problem: "Problem",
    solution: "Solution",
    impact: "Result",
    objective: "Objective",
    objectiveTitle: "What this project aims to achieve",
    scope: "Scope",
    scopeTitle: "Sections built",
    output: "Output",
    outputTitle: "Main results",
    ctaLabel: "Build a Similar Website",
    ctaTitle: "Want a portfolio like this for your business?",
    chat: "Chat on WhatsApp",
    waText: (title) => `Hi Danil, I am interested in building a website like ${title}. Can we discuss it?`,
  },
};

const englishDetails = {
  "website-pupuk-hasil-kerja": {
    summary: "A fertilizer business website designed to present products clearly, build trust, and guide visitors toward consultation or ordering.",
    objective: "Create a professional digital storefront that makes the business look credible, easier to contact, and ready for promotion.",
    caseStudy: {
      problem: "The business needed a cleaner way to explain fertilizer products and make customer inquiries easier to start.",
      solution: "The website was structured with product highlights, credibility sections, visual previews, and direct WhatsApp calls to action.",
      impact: "Visitors can understand the offer faster and contact the business without searching for separate information.",
    },
    scope: ["Homepage with strong product positioning", "Product and service sections", "Trust-focused visual layout", "WhatsApp conversion buttons"],
    result: ["More professional fertilizer brand presence", "Clearer product communication", "Sales-ready website flow"],
  },
  "website-travel-hasil-kerja": {
    summary: "A travel and Umrah website built to showcase packages, destinations, service quality, and quick inquiry paths for prospective pilgrims.",
    objective: "Help the travel business look trustworthy online while making package discovery and consultation simple.",
    caseStudy: {
      problem: "Prospective customers need clear package information, strong trust signals, and an easy way to ask questions before booking.",
      solution: "The layout highlights Umrah travel offers, service benefits, gallery content, and direct WhatsApp actions.",
      impact: "The website feels premium, easier to browse, and better prepared to convert interest into consultation.",
    },
    scope: ["Travel and Umrah package presentation", "Service benefit sections", "Gallery and destination visuals", "Inquiry-focused CTA flow"],
    result: ["More credible travel brand image", "Packages easier to understand", "Faster route from browsing to WhatsApp"],
  },
  "website-umkm": {
    summary: "A promotional website for small businesses to introduce products, strengths, testimonials, and purchase actions in one polished place.",
    objective: "Make the business easier to discover, understand, and contact through a lightweight website that is ready for promotion.",
    caseStudy: {
      problem: "Many small businesses rely only on social media, so product information can feel scattered and less credible.",
      solution: "A focused landing experience brings products, proof, and contact actions together in a clean structure.",
      impact: "Customers get the key information faster and the business has a stronger link to share in promotions.",
    },
    scope: ["Product showcase", "Business strengths", "Testimonials", "Order CTA sections"],
    result: ["Clearer business presentation", "More convincing promotion link", "Simple customer inquiry path"],
  },
  "website-konstruksi": {
    summary: "A construction company profile with a strong visual tone for services, project credibility, and consultation flow.",
    objective: "Present the company as credible, organized, and ready to handle construction inquiries professionally.",
    caseStudy: {
      problem: "Construction services need trust, proof, and clear service information before potential clients make contact.",
      solution: "The page combines service highlights, project-style visuals, credibility copy, and direct consultation buttons.",
      impact: "The company appears more established and visitors can move from interest to consultation more easily.",
    },
    scope: ["Company profile sections", "Service highlights", "Project-oriented visuals", "Consultation CTA"],
    result: ["Stronger professional impression", "Clearer service positioning", "Better inquiry readiness"],
  },
  "website-desa": {
    summary: "A village information website for public profiles, services, news, galleries, and local potential in a clean digital format.",
    objective: "Make village information easier to access while presenting local identity and public services more professionally.",
    caseStudy: {
      problem: "Village information often sits across different channels, making it harder for residents and visitors to find updates.",
      solution: "A structured website organizes profile content, services, news, gallery items, and village potential in one place.",
      impact: "The village gains a clearer digital presence and public information becomes easier to browse.",
    },
    scope: ["Village profile", "Public service information", "News and gallery sections", "Local potential highlights"],
    result: ["Cleaner public information access", "More modern village identity", "Organized content structure"],
  },
};

export default function PortfolioDetail() {
  const { slug } = useParams();
  const { language, isEnglish } = useLanguage();
  const text = detailCopy[language];
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const item = templates.find((template) => template.slug === slug);

  if (!item) {
    return <NotFound />;
  }

  const localized = isEnglish ? englishDetails[item.slug] || {} : {};
  const images = item.images || [item.image];
  const waText = text.waText(item.title);
  const summary = localized.summary || item.summary;
  const objective = localized.objective || item.objective;
  const caseStudy = localized.caseStudy || item.caseStudy;
  const scope = localized.scope || item.scope;
  const result = localized.result || item.result;

  return (
    <main className="portfolio-detail-page reveal-scope overflow-hidden pt-28 text-[color:var(--text-main)] md:pt-32">
      <section className="pb-12 md:pb-16">
        <div className="shell">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-[var(--accent)]">
            <ArrowLeft size={16} />
            {text.back}
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div>
              <p className="section-label">{text.label}</p>
              <h1 className="heading-font mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{item.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] md:text-lg">{summary}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {item.demo && (
                  <a {...externalLinkProps(item.demo)} className="premium-button theme-primary-button">
                    {text.demo}
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                <a {...externalLinkProps(whatsappHref(waText))} className={`premium-button ${item.demo ? "theme-secondary-button" : "theme-primary-button"}`}>
                  {text.consult}
                  <MessageCircleMore size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <aside className="project-meta-card soft-card p-6">
              <p className="text-sm font-semibold text-[color:var(--text-muted)]">{text.category}</p>
              <p className="heading-font mt-2 text-2xl font-extrabold">{item.category}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="theme-badge rounded-md px-3 py-1 text-xs font-semibold">{text.liveDemo}</span>
                <span className="theme-badge rounded-md px-3 py-1 text-xs font-semibold">{text.salesReady}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech?.map((tech) => (
                  <span key={tech} className="theme-badge rounded-md px-3 py-1 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="shell">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="project-preview glass-panel overflow-hidden rounded-lg p-3">
              <button type="button" onClick={() => setLightboxIndex(0)} className="group relative block w-full cursor-zoom-in" aria-label={`${text.mainPreview} ${item.title}`}>
                <img
                  src={images[0]}
                  alt={`${item.title} ${isEnglish ? "main preview" : "preview utama"}`}
                  width="960"
                  height="720"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="h-[320px] w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.01] md:h-[520px]"
                />
                <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/45 text-white transition group-hover:bg-black/65">
                  <Maximize2 size={19} />
                </span>
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {images.slice(1, 3).map((image, index) => (
                <div key={image} className="project-preview-thumb soft-card overflow-hidden p-2">
                  <button type="button" onClick={() => setLightboxIndex(index + 1)} className="group relative block w-full cursor-zoom-in" aria-label={`${text.preview} ${index + 2} ${item.title}`}>
                    <img
                      src={image}
                      alt={`${item.title} ${isEnglish ? "preview" : "preview"} ${index + 2}`}
                      width="720"
                      height="540"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                      className="h-52 w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.02] lg:h-[250px]"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/45 text-white transition group-hover:bg-black/65">
                      <Maximize2 size={18} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell">
          <div className="mb-7">
            <p className="section-label">{text.processLabel}</p>
            <h2 className="section-title mt-3">{text.processTitle}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: text.problem, value: caseStudy?.problem },
              { label: text.solution, value: caseStudy?.solution },
              { label: text.impact, value: caseStudy?.impact },
            ].map((caseItem, index) => (
              <article key={caseItem.label} className="case-card soft-card p-6">
                <div className="process-number flex h-10 w-10 items-center justify-center rounded-md bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">0{index + 1}</div>
                <h3 className="heading-font mt-4 text-2xl font-bold">{caseItem.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{caseItem.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="shell grid gap-5 lg:grid-cols-3">
          <article className="case-card soft-card p-6 lg:col-span-1">
            <p className="section-label">{text.objective}</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">{text.objectiveTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{objective}</p>
          </article>

          <article className="case-card soft-card p-6">
            <p className="section-label">{text.scope}</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">{text.scopeTitle}</h2>
            <ul className="mt-5 space-y-3">
              {scope?.map((scopeItem) => (
                <li key={scopeItem} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {scopeItem}
                </li>
              ))}
            </ul>
          </article>

          <article className="case-card soft-card p-6">
            <p className="section-label">{text.output}</p>
            <h2 className="heading-font mt-3 text-2xl font-extrabold">{text.outputTitle}</h2>
            <ul className="mt-5 space-y-3">
              {result?.map((resultItem) => (
                <li key={resultItem} className="flex items-start gap-3 text-sm leading-7">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                  {resultItem}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell">
          <div className="cta-band">
            <div>
              <p className="section-label">{text.ctaLabel}</p>
              <h2 className="heading-font mt-3 text-2xl font-extrabold leading-tight md:text-5xl">{text.ctaTitle}</h2>
            </div>
            <a {...externalLinkProps(whatsappHref(waText))} className="premium-button theme-primary-button">
              {text.chat}
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <ImageLightbox images={images} title={item.title} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
      <Footer />
    </main>
  );
}
