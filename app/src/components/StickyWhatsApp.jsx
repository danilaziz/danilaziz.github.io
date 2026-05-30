import { MessageCircleMore } from "lucide-react";
import { externalLinkProps, whatsappHref } from "../utils/externalLinks";

export default function StickyWhatsApp() {
  return (
    <a {...externalLinkProps(whatsappHref())} className="mobile-sticky-cta" aria-label="Konsultasi gratis via WhatsApp">
      <MessageCircleMore size={18} />
      <span>Konsultasi Gratis</span>
    </a>
  );
}
