import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RevealObserver from "./components/RevealObserver";
import StickyWhatsApp from "./components/StickyWhatsApp";

const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Home = lazy(() => import("./routes/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const NotFound = lazy(() => import("./routes/NotFound"));
const Portfolio = lazy(() => import("./routes/Portfolio"));
const PortfolioDetail = lazy(() => import("./routes/PortfolioDetail"));
const Services = lazy(() => import("./routes/Services"));
const ServiceDetail = lazy(() => import("./routes/ServiceDetail"));

function RouteFallback() {
  return <main className="min-h-screen bg-[color:var(--bg-start)] pt-28" aria-label="Memuat halaman" />;
}

export default function App() {
  return (
    <>
      <RevealObserver />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/layanan/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/harga" element={<Navigate to="/layanan" replace />} />
          <Route path="/harga/:slug" element={<ServiceDetail />} />
          <Route path="/contoh" element={<Navigate to="/portfolio" replace />} />
          <Route path="/contoh/:slug" element={<PortfolioDetail />} />
          <Route path="/template" element={<Navigate to="/portfolio" replace />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <StickyWhatsApp />
    </>
  );
}
