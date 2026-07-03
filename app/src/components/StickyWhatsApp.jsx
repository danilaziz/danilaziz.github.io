import { MessageCircleMore } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

export default function StickyWhatsApp() {
  const { isEnglish } = useLanguage();
  const label = isEnglish ? "Free consultation via WhatsApp" : "Konsultasi gratis via WhatsApp";

  return (
    <a {...externalLinkProps(whatsappHref())} className="mobile-sticky-cta" aria-label={label}>
      <MessageCircleMore size={18} />
      <span>{isEnglish ? "Free Consultation" : "Konsultasi Gratis"}</span>
    </a>
  );
}
