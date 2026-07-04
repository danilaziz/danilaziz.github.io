import { useState } from "react";
import { ArrowUpRight, CircleAlert, Facebook, Github, Instagram, Mail, Send } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/useLanguage";
import { externalLinkProps, FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, whatsappHref } from "../utils/externalLinks";

const MAX_NAME_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 500;

const sanitizeInput = (value) =>
  value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trimStart();

const contactLinks = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: Instagram,
    description: "Lihat update karya dan aktivitas terbaru.",
    descriptionEn: "See recent work updates and activities.",
  },
  {
    label: "Facebook",
    href: FACEBOOK_URL,
    icon: Facebook,
    description: "Terhubung lewat halaman Facebook resmi.",
    descriptionEn: "Connect through the official Facebook page.",
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: Github,
    description: "Lihat repository dan eksperimen pengembangan.",
    descriptionEn: "View repositories and development experiments.",
  },
];

const copy = {
  id: {
    label: "Kontak",
    title: "Ceritakan kebutuhan website Anda.",
    description: "Tulis nama dan kebutuhan website secara singkat. Ringkasan akan langsung diarahkan ke WhatsApp.",
    formTitle: "Ringkasan Proyek",
    formDescription: "Isi singkat agar kebutuhan website lebih mudah dipahami.",
    name: "Nama",
    namePlaceholder: "Nama Anda",
    need: "Kebutuhan website",
    needPlaceholder: "Contoh: Saya butuh website company profile untuk bisnis jasa, berisi profil, layanan, portfolio, dan kontak.",
    hint: "Tulis kebutuhan utama secara singkat.",
    botError: "Permintaan tidak dapat diproses.",
    nameError: "Nama minimal 2 karakter.",
    messageError: "Jelaskan kebutuhan proyek minimal 10 karakter.",
    tooLongError: "Pesan terlalu panjang.",
    whatsappIntro: "Halo Danil, saya ingin konsultasi website.",
    whatsappName: "Nama",
    whatsappNeed: "Kebutuhan",
    success: "WhatsApp sudah dibuka dengan ringkasan kebutuhan Anda.",
    sending: "Memproses...",
    submit: "Kirim Ringkasan",
  },
  en: {
    label: "Contact",
    title: "Tell me what website you need.",
    description: "Write your name and website needs briefly. The summary will be sent directly to WhatsApp.",
    formTitle: "Project Summary",
    formDescription: "Keep it short so the website need is easy to understand.",
    name: "Name",
    namePlaceholder: "Your name",
    need: "Website needs",
    needPlaceholder: "Example: I need a company profile website for a service business, with profile, services, portfolio, and contact sections.",
    hint: "Briefly write the main need.",
    botError: "The request cannot be processed.",
    nameError: "Name must be at least 2 characters.",
    messageError: "Describe the project need in at least 10 characters.",
    tooLongError: "The message is too long.",
    whatsappIntro: "Hi Danil, I would like to consult about a website.",
    whatsappName: "Name",
    whatsappNeed: "Need",
    success: "WhatsApp has opened with your project summary.",
    sending: "Processing...",
    submit: "Send Summary",
  },
};

export default function Contact() {
  const { language, isEnglish } = useLanguage();
  const text = copy[language];
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const maxLength = name === "name" ? MAX_NAME_LENGTH : MAX_MESSAGE_LENGTH;
    const nextValue = sanitizeInput(value).slice(0, maxLength);

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanedName = sanitizeInput(formData.name).trim();
    const cleanedMessage = sanitizeInput(formData.message).trim();

    if (botField) {
      setErrorMessage(text.botError);
      return;
    }

    if (!cleanedName || cleanedName.length < 2) {
      setErrorMessage(text.nameError);
      return;
    }

    if (!cleanedMessage || cleanedMessage.length < 10) {
      setErrorMessage(text.messageError);
      return;
    }

    if (cleanedMessage.length > MAX_MESSAGE_LENGTH) {
      setErrorMessage(text.tooLongError);
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = [
      text.whatsappIntro,
      "",
      `${text.whatsappName}: ${cleanedName}`,
      `${text.whatsappNeed}: ${cleanedMessage}`,
    ].join("\n");

    window.open(whatsappHref(whatsappMessage), "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setFormData({ name: "", message: "" });
      setIsSubmitting(false);
      setErrorMessage("");
      setSuccessMessage(text.success);
    }, 400);
  };

  return (
    <main className="contact-page reveal-scope overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="contact-intro-card soft-card p-8 md:p-10">
            <p className="section-label">{text.label}</p>
            <h1 className="heading-font mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[color:var(--text-main)] md:text-6xl">{text.title}</h1>
            <p className="mt-6 leading-8 text-[color:var(--text-muted)] md:text-lg">
              {text.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} {...externalLinkProps(item.href)} className="contact-link-card glass-panel flex items-start gap-4 rounded-lg p-5 transition hover:-translate-y-1">
                    <div className="theme-primary-button rounded-md p-3">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p className="heading-font text-xl font-bold text-[color:var(--text-main)]">{item.label}</p>
                        <ArrowUpRight size={16} className="text-[color:var(--text-muted)]" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{isEnglish ? item.descriptionEn : item.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-form-panel glass-panel rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-[var(--accent)]/20 p-3 text-[var(--accent)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="heading-font text-2xl font-bold text-[color:var(--text-main)]">{text.formTitle}</p>
                <p className="text-sm text-[color:var(--text-muted)]">{text.formDescription}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <input type="text" name="company" value={botField} onChange={(event) => setBotField(event.target.value)} className="hidden" tabIndex="-1" autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">{text.name}</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder={text.namePlaceholder} autoComplete="name" minLength={2} maxLength={MAX_NAME_LENGTH} className="theme-input w-full rounded-md px-4 py-3 text-sm outline-none transition" required />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">{text.need}</label>
                <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} placeholder={text.needPlaceholder} minLength={10} maxLength={MAX_MESSAGE_LENGTH} className="theme-input w-full rounded-md px-4 py-3 text-sm outline-none transition" required />
                <div className="mt-2 flex items-center justify-between gap-4 text-xs text-[color:var(--text-muted)]">
                  <span>{text.hint}</span>
                  <span>{formData.message.length}/{MAX_MESSAGE_LENGTH}</span>
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
                  <CircleAlert size={16} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {successMessage && (
                <div className="rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm font-medium text-[color:var(--text-main)]">
                  {successMessage}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="premium-button theme-primary-button w-full disabled:cursor-not-allowed disabled:opacity-60">
                <Send size={16} className="mr-2" />
                {isSubmitting ? text.sending : text.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
