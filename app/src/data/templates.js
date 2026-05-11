import umkm1 from "../assets/images/umkm1.webp";
import umkm2 from "../assets/images/umkm2.webp";
import umkm3 from "../assets/images/umkm3.webp";
import umkm4 from "../assets/images/umkm4.webp";
import konstruksi1 from "../assets/images/konstruksi1.webp";
import konstruksi2 from "../assets/images/konstruksi2.webp";
import konstruksi3 from "../assets/images/konstruksi3.webp";
import travelCard from "../assets/images/travel-card.webp";
import travelDetailCard from "../assets/images/travel-detail-card.webp";
import travelGaleri from "../assets/images/travel-galeri.webp";
import travelHome from "../assets/images/travel-home.webp";
import websitedesa1 from "../assets/images/websitedesa1.webp";
import websitedesa2 from "../assets/images/websitedesa2.webp";
import websitedesa3 from "../assets/images/websitedesa3.webp";

const templates = [
  {
    id: 4,
    slug: "website-travel-hasil-kerja",
    title: "Website Travel",
    category: "Hasil Kerja",
    images: [travelHome, travelCard, travelDetailCard, travelGaleri],
    demo: "https://ptberkahcintawisata.com",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    summary: "Hasil kerja website travel dengan tampilan bersih untuk menampilkan destinasi, paket perjalanan, detail layanan, dan galeri visual.",
    objective: "Membuat website travel yang terlihat profesional, mudah dipahami calon pelanggan, dan kuat secara visual untuk promosi paket perjalanan.",
    scope: ["Homepage travel", "Card paket destinasi", "Detail paket perjalanan", "Galeri destinasi", "Tampilan responsive"],
    result: ["Visual lebih premium", "Konten paket mudah dipindai", "Struktur halaman siap promosi", "Cocok untuk bisnis travel dan wisata"],
  },
  {
    id: 1,
    slug: "website-umkm",
    title: "UMKM Website",
    category: "Business",
    images: [umkm1, umkm2, umkm3, umkm4],
    demo: "https://umkm-website.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    summary: "Website promosi untuk UMKM yang ingin menampilkan produk, keunggulan, testimoni, dan CTA pembelian dengan tampilan modern.",
    objective: "Membuat calon pelanggan cepat memahami produk utama dan diarahkan untuk menghubungi bisnis melalui WhatsApp.",
    scope: ["Hero promosi", "Section produk unggulan", "Keunggulan bisnis", "Testimoni", "CTA WhatsApp"],
    result: ["Tampilan mobile-first", "Alur konten lebih menjual", "Navigasi sederhana", "Demo siap dipresentasikan"],
  },
  {
    id: 2,
    slug: "website-konstruksi",
    title: "Website Konstruksi",
    category: "Business",
    images: [konstruksi1, konstruksi2, konstruksi3],
    demo: "https://website-konstruksi.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    summary: "Company profile untuk bisnis konstruksi yang membutuhkan kesan tegas, kredibel, dan mudah dipakai untuk menampilkan layanan serta proyek.",
    objective: "Membangun profil digital yang memberi rasa percaya kepada calon klien sebelum mereka meminta penawaran proyek.",
    scope: ["Profil perusahaan", "Layanan konstruksi", "Highlight proyek", "Keunggulan tim", "Kontak penawaran"],
    result: ["Struktur informasi profesional", "Visual tegas dan clean", "CTA konsultasi proyek", "Cocok untuk bisnis jasa"],
  },
  {
    id: 3,
    slug: "website-desa",
    title: "Website Desa",
    category: "Government",
    images: [websitedesa1, websitedesa2, websitedesa3],
    demo: "https://website-desa.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    summary: "Website informasi desa untuk menampilkan profil, layanan publik, berita, galeri, dan potensi desa secara rapi dan mudah diakses warga.",
    objective: "Membuat kanal informasi publik yang lebih modern, informatif, dan mudah dibuka dari perangkat mobile.",
    scope: ["Profil desa", "Layanan publik", "Berita desa", "Potensi desa", "Galeri kegiatan"],
    result: ["Informasi mudah dipindai", "Tampilan resmi dan bersih", "Struktur halaman lengkap", "Siap dikembangkan dengan CMS"],
  },
];

export default templates;
