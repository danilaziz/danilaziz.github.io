import umkm1 from "../assets/images/umkm1.webp";
import umkm2 from "../assets/images/umkm2.webp";
import umkm3 from "../assets/images/umkm3.webp";
import umkm4 from "../assets/images/umkm4.webp";
import umkm5 from "../assets/images/umkm5.webp";
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
import pupuk1 from "../assets/images/pupuk1.webp";
import pupuk2 from "../assets/images/pupuk2.webp";
import pupuk3 from "../assets/images/pupuk3.webp";
import pupuk4 from "../assets/images/pupuk4.webp";

const templates = [
  {
    id: 5,
    slug: "website-pupuk-hasil-kerja",
    title: "Website Pupuk",
    category: "Hasil Kerja",
    images: [pupuk1, pupuk2, pupuk3, pupuk4],
    coverImage: pupuk4,
    demo: "https://berkahcintamadinah.com",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    summary: "Hasil kerja website bisnis pupuk dengan tampilan rapi untuk menampilkan produk, informasi layanan, keunggulan usaha, dan CTA pemesanan.",
    objective: "Membuat website bisnis pupuk yang terlihat terpercaya, mudah dipindai calon pembeli, dan siap dipakai untuk promosi produk serta konsultasi pemesanan.",
    caseStudy: {
      problem: "Produk dan informasi usaha perlu terlihat lebih rapi agar calon pembeli cepat percaya sebelum menghubungi.",
      solution: "Menyusun homepage dengan katalog produk, keunggulan, informasi layanan, dan CTA WhatsApp yang mudah ditemukan.",
      impact: "Bisnis punya profil online yang lebih profesional dan alur pemesanan lebih jelas dari mobile.",
    },
    scope: ["Homepage bisnis pupuk", "Katalog produk", "Highlight keunggulan", "Section informasi layanan", "CTA pemesanan WhatsApp"],
    result: ["Tampilan lebih profesional", "Produk mudah dilihat dari mobile", "Alur kontak lebih jelas", "Cocok untuk toko pupuk dan supplier pertanian"],
  },
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
    caseStudy: {
      problem: "Paket perjalanan butuh tampilan visual yang kuat dan struktur informasi yang mudah dibandingkan calon pelanggan.",
      solution: "Membuat halaman travel dengan hero visual, card paket, detail layanan, dan galeri destinasi yang rapi.",
      impact: "Website terasa lebih siap untuk promosi dan membantu pengunjung memahami paket sebelum bertanya.",
    },
    scope: ["Homepage travel", "Card paket destinasi", "Detail paket perjalanan", "Galeri destinasi", "Tampilan responsive"],
    result: ["Visual lebih premium", "Konten paket mudah dipindai", "Struktur halaman siap promosi", "Cocok untuk bisnis travel dan wisata"],
  },
  {
    id: 1,
    slug: "website-umkm",
    title: "UMKM Website",
    category: "Business",
    images: [umkm1, umkm2, umkm3, umkm4, umkm5],
    demo: "https://umkm-website.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    summary: "Website promosi untuk UMKM yang ingin menampilkan produk, keunggulan, testimoni, dan CTA pembelian dengan tampilan modern.",
    objective: "Membuat calon pelanggan cepat memahami produk utama dan diarahkan untuk menghubungi bisnis melalui WhatsApp.",
    caseStudy: {
      problem: "Produk UMKM sering sulit terlihat menonjol jika informasi, keunggulan, dan CTA tersebar tidak rapi.",
      solution: "Membuat landing page promosi dengan urutan hero, produk, manfaat, testimoni, dan tombol pembelian.",
      impact: "Pesan jualan menjadi lebih fokus dan pengunjung lebih cepat diarahkan ke tindakan utama.",
    },
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
    caseStudy: {
      problem: "Bisnis konstruksi perlu menunjukkan kredibilitas, layanan, dan proyek dengan kesan tegas serta profesional.",
      solution: "Menyusun company profile dengan visual solid, daftar layanan, highlight proyek, dan kontak penawaran.",
      impact: "Profil bisnis terlihat lebih kredibel dan siap dipakai sebagai referensi saat menawarkan jasa.",
    },
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
    caseStudy: {
      problem: "Informasi desa perlu disusun agar warga dan pengunjung mudah menemukan profil, layanan, berita, dan potensi desa.",
      solution: "Membuat struktur website resmi dengan halaman profil, layanan publik, berita, potensi, dan galeri.",
      impact: "Informasi desa tampil lebih modern, mudah diakses, dan siap dikembangkan untuk kebutuhan publik.",
    },
    scope: ["Profil desa", "Layanan publik", "Berita desa", "Potensi desa", "Galeri kegiatan"],
    result: ["Informasi mudah dipindai", "Tampilan resmi dan bersih", "Struktur halaman lengkap", "Siap dikembangkan dengan CMS"],
  },
];

export default templates;
