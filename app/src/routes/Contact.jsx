import { useState } from "react";
import { ArrowUpRight, CircleAlert, Github, Instagram, Mail, Send } from "lucide-react";
import Footer from "../components/Footer";

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
    href: "https://instagram.com/danilaziz__",
    icon: Instagram,
    description: "Lihat update karya dan aktivitas terbaru.",
  },
  {
    label: "GitHub",
    href: "https://github.com/danilaziz",
    icon: Github,
    description: "Lihat repository dan eksperimen pengembangan.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = sanitizeInput(value).slice(0, name === "name" ? MAX_NAME_LENGTH : MAX_MESSAGE_LENGTH);

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanedName = sanitizeInput(formData.name).trim();
    const cleanedMessage = sanitizeInput(formData.message).trim();

    if (botField) {
      setErrorMessage("Permintaan tidak dapat diproses.");
      return;
    }

    if (!cleanedName || cleanedName.length < 2) {
      setErrorMessage("Nama minimal 2 karakter.");
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

    setTimeout(() => {
      setFormData({ name: "", message: "" });
      setIsSubmitting(false);
      setErrorMessage("");
      setSuccessMessage("Ringkasan kebutuhan sudah siap. Terima kasih, saya akan meninjau detail proyek Anda.");
    }, 400);
  };

  return (
    <main className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card p-8 md:p-10">
            <p className="section-label">Kontak</p>
            <h1 className="section-title mt-4">Ceritakan kebutuhan website Anda.</h1>
            <p className="mt-6 text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
              Tulis gambaran singkat proyek, jenis website, dan tujuan utama. Saya akan bantu arahkan paket yang paling sesuai.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="glass-panel flex items-start gap-4 rounded-lg p-5 transition hover:-translate-y-1">
                    <div className="theme-primary-button rounded-md p-3">
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

          <div className="glass-panel rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-[var(--accent)]/20 p-3 text-[var(--accent)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="heading-font text-2xl font-bold text-[color:var(--text-main)]">Ringkasan Proyek</p>
                <p className="text-sm text-[color:var(--text-muted)]">Isi singkat agar kebutuhan website lebih mudah dipahami.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <input type="text" name="company" value={botField} onChange={(event) => setBotField(event.target.value)} className="hidden" tabIndex="-1" autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">Nama</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Nama Anda" autoComplete="name" minLength={2} maxLength={MAX_NAME_LENGTH} className="theme-input w-full rounded-md px-4 py-3 text-sm outline-none transition" required />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[color:var(--text-main)]">Kebutuhan website</label>
                <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} placeholder="Contoh: Saya butuh website company profile untuk jasa konstruksi, berisi profil, layanan, portfolio, dan kontak." minLength={10} maxLength={MAX_MESSAGE_LENGTH} className="theme-input w-full rounded-md px-4 py-3 text-sm outline-none transition" required />
                <div className="mt-2 flex items-center justify-between gap-4 text-xs text-[color:var(--text-muted)]">
                  <span>Tulis kebutuhan utama secara singkat.</span>
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
                {isSubmitting ? "Memproses..." : "Kirim Ringkasan"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
