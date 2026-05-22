export const WHATSAPP_NUMBER = "6282189855746";

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589413059391";
export const GITHUB_URL = "https://github.com/danilaziz";
export const INSTAGRAM_URL = "https://instagram.com/danilaziz__";

const ALLOWED_EXTERNAL_HOSTS = new Set([
  "github.com",
  "instagram.com",
  "berkahcintamadinah.com",
  "ptberkahcintawisata.com",
  "umkm-website.netlify.app",
  "wa.me",
  "website-desa.netlify.app",
  "website-konstruksi.netlify.app",
  "www.facebook.com",
  "www.berkahcintamadinah.com",
]);

export function getSafeExternalHref(href) {
  try {
    const url = new URL(href);
    if (url.protocol !== "https:" || !ALLOWED_EXTERNAL_HOSTS.has(url.hostname)) {
      return "#";
    }
    return url.toString();
  } catch {
    return "#";
  }
}

export function externalLinkProps(href) {
  return {
    href: getSafeExternalHref(href),
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    referrerPolicy: "no-referrer",
  };
}

export function whatsappHref(message = "") {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
