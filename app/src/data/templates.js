import umkm1 from "../assets/images/umkm1.webp";
import umkm2 from "../assets/images/umkm2.webp";
import umkm3 from "../assets/images/umkm3.webp";
import umkm4 from "../assets/images/umkm4.webp";
import konstruksi1 from "../assets/images/konstruksi1.webp";
import konstruksi2 from "../assets/images/konstruksi2.webp";
import konstruksi3 from "../assets/images/konstruksi3.webp";
import websitedesa1 from "../assets/images/websitedesa1.webp";
import websitedesa2 from "../assets/images/websitedesa2.webp";
import websitedesa3 from "../assets/images/websitedesa3.webp";

const templates = [
  {
    id: 1,
    title: "UMKM Website",
    category: "Business",
    images: [umkm1, umkm2, umkm3, umkm4],
    demo: "https://umkm-website.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Website Konstruksi",
    category: "Business",
    images: [konstruksi1, konstruksi2, konstruksi3],
    demo: "https://website-konstruksi.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Website Desa",
    category: "Government",
    images: [websitedesa1, websitedesa2, websitedesa3],
    demo: "https://website-desa.netlify.app/",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

export default templates;
