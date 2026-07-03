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
    summary: "Website bisnis pupuk yang dirancang untuk membuat produk terlihat terpercaya, mudah dipilih, dan langsung mengarahkan calon pembeli ke pemesanan.",
    objective: "Membangun etalase digital yang membantu bisnis pupuk terlihat profesional, menjelaskan produk dengan ringkas, dan mempercepat calon pembeli masuk ke WhatsApp.",
    caseStudy: {
      problem: "Produk sudah siap dipasarkan, tetapi informasi usaha belum punya tampilan online yang cukup rapi untuk membangun kepercayaan sejak kunjungan pertama.",
      solution: "Menyusun halaman dengan hero yang jelas, katalog produk, keunggulan usaha, informasi layanan, dan tombol WhatsApp yang mudah ditemukan.",
      impact: "Website menjadi profil online yang siap dipakai untuk promosi, membantu calon pembeli memahami produk, dan membuat alur pemesanan lebih cepat dari mobile.",
    },
    scope: ["Hero penawaran utama", "Katalog produk", "Highlight keunggulan usaha", "Informasi layanan dan pemesanan", "CTA WhatsApp yang menonjol"],
    result: ["Brand terlihat lebih dipercaya", "Produk lebih mudah dibandingkan", "Alur kontak lebih singkat", "Siap dipakai untuk promosi toko pupuk dan supplier pertanian"],
  },
  {
    id: 4,
    slug: "website-travel-hasil-kerja",
    title: "Website Travel",
    category: "Hasil Kerja",
    images: [travelHome, travelCard, travelDetailCard, travelGaleri],
    demo: "https://ptberkahcintawisata.com",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    summary: "Website travel yang menonjolkan paket perjalanan, destinasi, galeri, dan CTA kontak agar calon pelanggan lebih cepat percaya dan bertanya.",
    objective: "Membuat website travel yang kuat secara visual, mudah dipahami, dan siap membantu promosi paket perjalanan secara lebih profesional.",
    caseStudy: {
      problem: "Paket perjalanan perlu ditampilkan dengan visual yang meyakinkan dan struktur informasi yang membuat calon pelanggan mudah membandingkan pilihan.",
      solution: "Membangun halaman travel dengan hero visual, card paket, detail layanan, galeri destinasi, dan CTA kontak yang konsisten.",
      impact: "Website terasa lebih siap untuk promosi, membantu pengunjung memahami paket lebih cepat, dan memudahkan mereka menghubungi tim travel.",
    },
    scope: ["Hero promosi travel", "Card paket destinasi", "Detail layanan perjalanan", "Galeri destinasi", "CTA konsultasi paket"],
    result: ["Visual lebih premium", "Paket mudah dipindai", "Halaman siap untuk promosi", "Cocok untuk travel, tour, dan wisata"],
  },
  {
    id: 1,
    slug: "website-umkm",
    title: "UMKM Website",
    category: "Business",
    images: [umkm1, umkm2, umkm3, umkm4, umkm5],
    demo: "https://umkm-website.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    summary: "Landing page UMKM yang fokus menjual produk utama, menampilkan manfaat, membangun kepercayaan, dan mengarahkan pembeli ke CTA.",
    objective: "Membuat calon pelanggan cepat memahami produk, melihat alasan untuk membeli, lalu diarahkan ke WhatsApp dengan alur yang sederhana.",
    caseStudy: {
      problem: "Produk UMKM sering kalah menonjol karena manfaat, bukti sosial, dan tombol pembelian tidak disusun dalam alur yang menjual.",
      solution: "Membuat landing page dengan urutan hero, produk unggulan, manfaat, testimoni, dan tombol pembelian yang mudah terlihat.",
      impact: "Pesan jualan menjadi lebih fokus, tampilan produk lebih menarik, dan pengunjung lebih cepat diarahkan ke tindakan utama.",
    },
    scope: ["Hero penjualan", "Produk unggulan", "Benefit dan keunggulan", "Testimoni pelanggan", "CTA WhatsApp pembelian"],
    result: ["Tampilan mobile-first", "Alur konten lebih menjual", "Produk lebih mudah dipahami", "Siap dipakai sebagai demo promosi"],
  },
  {
    id: 2,
    slug: "website-konstruksi",
    title: "Website Konstruksi",
    category: "Business",
    images: [konstruksi1, konstruksi2, konstruksi3],
    demo: "https://website-konstruksi.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    summary: "Company profile konstruksi dengan visual tegas untuk memperlihatkan kredibilitas, layanan, proyek, dan jalur kontak penawaran.",
    objective: "Membangun profil digital yang membuat calon klien lebih percaya sebelum meminta penawaran atau membahas kebutuhan proyek.",
    caseStudy: {
      problem: "Bisnis konstruksi perlu menunjukkan kemampuan, layanan, dan hasil proyek dalam tampilan yang tegas agar calon klien merasa yakin.",
      solution: "Menyusun company profile dengan visual solid, daftar layanan, highlight proyek, keunggulan tim, dan CTA penawaran.",
      impact: "Profil bisnis terlihat lebih kredibel, lebih mudah dipresentasikan, dan siap dipakai sebagai referensi saat menawarkan jasa.",
    },
    scope: ["Profil perusahaan", "Layanan konstruksi", "Highlight proyek", "Keunggulan tim", "CTA penawaran proyek"],
    result: ["Struktur informasi profesional", "Visual tegas dan clean", "Kepercayaan calon klien meningkat", "Cocok untuk bisnis jasa konstruksi"],
  },
  {
    id: 3,
    slug: "website-desa",
    title: "Website Desa",
    category: "Government",
    images: [websitedesa1, websitedesa2, websitedesa3],
    demo: "https://website-desa.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    summary: "Website informasi desa yang membuat profil, layanan publik, berita, galeri, dan potensi desa lebih rapi serta mudah diakses warga.",
    objective: "Membuat kanal informasi publik yang terlihat resmi, mudah dibuka dari mobile, dan membantu warga menemukan informasi penting lebih cepat.",
    caseStudy: {
      problem: "Informasi desa sering tersebar dan sulit dipindai, sehingga warga atau pengunjung butuh kanal resmi yang lebih tertata.",
      solution: "Membuat struktur website resmi dengan profil desa, layanan publik, berita, potensi, galeri, dan tampilan responsive.",
      impact: "Informasi desa tampil lebih modern, lebih mudah diakses, dan siap dikembangkan untuk kebutuhan pelayanan publik.",
    },
    scope: ["Profil desa", "Layanan publik", "Berita dan pengumuman", "Potensi desa", "Galeri kegiatan"],
    result: ["Informasi lebih mudah dipindai", "Tampilan resmi dan bersih", "Struktur halaman lebih lengkap", "Siap dikembangkan dengan CMS"],
  },
];

export default templates;
