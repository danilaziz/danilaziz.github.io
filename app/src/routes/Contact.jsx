import { useState } from "react";
import { ArrowUpRight, CircleAlert, Github, Instagram, Mail, MessageCircleMore } from "lucide-react";
import Footer from "../components/Footer";

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 500;

const sanitizeInput = (value) =>
  value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trimStart();

const sanitizeEmail = (value) => sanitizeInput(value).replace(/\s+/g, "").toLowerCase();
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6287728890135",
    icon: MessageCircleMore,
    description: "Saluran utama untuk mendiskusikan kebutuhan website, penawaran kerja sama, maupun konsultasi proyek.",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/danilaziz__",
    icon: Instagram,
    description: "Media sosial untuk melihat update karya, aktivitas, dan terhubung secara lebih informal.",
  },
  {
    label: "GitHub",
    href: "https://github.com/danilaziz",
    icon: Github,
    description: "Tempat untuk melihat repository, eksperimen, dan pendekatan pengembangan yang saya gunakan.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    const nextValue =
      name === "email"
        ? sanitizeEmail(value).slice(0, MAX_EMAIL_LENGTH)
        : sanitizeInput(value).slice(0, name === "name" ? MAX_NAME_LENGTH : MAX_MESSAGE_LENGTH);

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanedName = sanitizeInput(formData.name).trim();
    const cleanedEmail = sanitizeEmail(formData.email).trim();
    const cleanedMessage = sanitizeInput(formData.message).trim();

    if (botField) {
      setErrorMessage("Permintaan tidak dapat diproses.");
      return;
    }

    if (!cleanedName || cleanedName.length < 2) {
      setErrorMessage("Nama minimal 2 karakter.");
      return;
    }

    if (!cleanedEmail || !isValidEmail(cleanedEmail)) {
      setErrorMessage("Masukkan email yang valid.");
      return;
    }

    if (!cleanedMessage || cleanedMessage.length < 10) {
      setErrorMessage("Jelaskan kebutuhan proyek minimal 10 karakter.");
      return;
    }

    if (cleanedMessage.length > MAX_MESSAGE_LENGTH) {
      setErrorMessage("Pesan terlalu panjang.");
      return;
    }

    setIsSubmitting(true);

    const phoneNumber = "6287728890135";

    const message = `
Halo, saya ingin konsultasi proyek:

Nama: ${cleanedName}
Email: ${cleanedEmail}

Pesan:
${cleanedMessage}
`;

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(waLink, "_blank");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setErrorMessage("");
    }, 500);
  };

  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="soft-card p-8 md:p-10">
            <p className="section-label">Kontak</p>
            <h1 className="section-title mt-4">Mari bahas kebutuhan website Anda dan temukan solusi digital yang paling tepat.</h1>
            <p className="mt-6 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Jika Anda sedang menyiapkan website baru, membutuhkan redesign, atau ingin meningkatkan kualitas presentasi digital,
              saya terbuka untuk diskusi dan kolaborasi.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="glass-panel flex items-start gap-4 rounded-[22px] p-5 transition hover:-translate-y-1">
                    <div className="theme-primary-button rounded-xl p-3">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p className="heading-font text-xl font-bold text-[color:var(--text-main)]">{item.label}</p>
                        <ArrowUpRight size={16} className="text-[color:var(--text-muted)]" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{item.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass-panel rounded-[28px] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[var(--accent)]/20 p-3 text-[var(--accent)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="heading-font text-2xl font-bold text-[color:var(--text-main)]">Kirim Pesan</p>
                <p className="text-sm text-[color:var(--text-muted)]">Pesan Anda akan langsung diarahkan ke WhatsApp.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <input type="text" name="company" value={botField} onChange={(event) => setBotField(event.target.value)} className="hidden" tabIndex="-1" autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">Nama</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Nama Anda" autoComplete="name" minLength={2} maxLength={MAX_NAME_LENGTH} className="theme-input w-full rounded-xl px-4 py-3 text-sm outline-none transition" required />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nama@email.com" inputMode="email" autoComplete="email" maxLength={MAX_EMAIL_LENGTH} className="theme-input w-full rounded-xl px-4 py-3 text-sm outline-none transition" required />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">Ringkasan kebutuhan</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Jelaskan jenis website, tujuan, atau gambaran proyek Anda..." minLength={10} maxLength={MAX_MESSAGE_LENGTH} className="theme-input w-full rounded-xl px-4 py-3 text-sm outline-none transition" required />
                <div className="mt-2 flex items-center justify-between gap-4 text-xs text-[color:var(--text-muted)]">
                  <span>Tuliskan kebutuhan utama Anda secara singkat dan jelas.</span>
                  <span>{formData.message.length}/{MAX_MESSAGE_LENGTH}</span>
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
                  <CircleAlert size={16} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="premium-button theme-primary-button w-full disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
