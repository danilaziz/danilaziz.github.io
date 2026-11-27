import { MessageCircleMore } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

export default function StickyWhatsApp() {
  const { pathname } = useLocation();
  const { isEnglish } = useLanguage();
  const label = isEnglish
    ? "Free consultation via WhatsApp"
    : "Konsultasi gratis via WhatsApp";

  // Home renders its own sticky CTA once the hero CTA is scrolled out of view.
  if (pathname === "/" || pathname === "/kontak") return null;

  return (
    <a
      {...externalLinkProps(whatsappHref())}
      className="mobile-sticky-cta"
      aria-label={label}
    >
      <MessageCircleMore size={18} />
      <span>{isEnglish ? "Free Consultation" : "Konsultasi Gratis"}</span>
    </a>
  );
}
