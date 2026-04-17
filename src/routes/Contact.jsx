import { useState } from "react";
import { motion } from "framer-motion";
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
    description: "Respon cepat untuk diskusi proyek, revisi, dan kebutuhan website baru.",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/danilaziz__",
    icon: Instagram,
    description: "Tempat paling mudah untuk melihat update dan menghubungi saya secara santai.",
  },
  {
    label: "GitHub",
    href: "https://github.com/danilaziz",
    icon: Github,
    description: "Lihat proyek dan pendekatan coding yang saya gunakan.",
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
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="soft-card p-8 md:p-10">
            <p className="section-label">Kontak</p>
            <h1 className="section-title mt-4">Siap membantu jika Anda butuh website yang lebih profesional dan terasa premium.</h1>
            <p className="mt-6 text-base leading-8 text-stone-600 dark:text-stone-300 md:text-lg">
              Jika Anda punya ide, butuh redesign, atau ingin mulai proyek baru, kirim pesan lewat platform yang paling nyaman.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="glass-panel flex items-start gap-4 rounded-[28px] p-5 transition hover:-translate-y-1">
                    <div className="rounded-2xl bg-stone-950 p-3 text-white dark:bg-[var(--accent)] dark:text-stone-950">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p className="heading-font text-xl font-bold text-stone-950 dark:text-stone-50">{item.label}</p>
                        <ArrowUpRight size={16} className="text-stone-500" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">{item.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="glass-panel rounded-[36px] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[var(--accent)]/20 p-3 text-[var(--accent)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="heading-font text-2xl font-bold text-stone-950 dark:text-stone-50">Kirim Pesan</p>
                <p className="text-sm text-stone-500 dark:text-stone-400">Pesan akan langsung dikirim ke WhatsApp.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <input type="text" name="company" value={botField} onChange={(event) => setBotField(event.target.value)} className="hidden" tabIndex="-1" autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">Nama</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Nama Anda" autoComplete="name" minLength={2} maxLength={MAX_NAME_LENGTH} className="w-full rounded-2xl border border-stone-300 bg-white/85 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[var(--accent)] dark:border-white/10 dark:bg-white/[0.05] dark:text-stone-100" required />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nama@email.com" inputMode="email" autoComplete="email" maxLength={MAX_EMAIL_LENGTH} className="w-full rounded-2xl border border-stone-300 bg-white/85 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[var(--accent)] dark:border-white/10 dark:bg-white/[0.05] dark:text-stone-100" required />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300">Ringkasan proyek</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Ceritakan kebutuhan website Anda..." minLength={10} maxLength={MAX_MESSAGE_LENGTH} className="w-full rounded-2xl border border-stone-300 bg-white/85 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-[var(--accent)] dark:border-white/10 dark:bg-white/[0.05] dark:text-stone-100" required />
                <div className="mt-2 flex items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
                  <span>Tulis kebutuhan secara singkat dan jelas.</span>
                  <span>{formData.message.length}/{MAX_MESSAGE_LENGTH}</span>
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
                  <CircleAlert size={16} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="premium-button w-full bg-stone-950 text-white hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[var(--accent)] dark:text-stone-950">
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
