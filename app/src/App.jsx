import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Home = lazy(() => import("./routes/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const NotFound = lazy(() => import("./routes/NotFound"));
const Pricing = lazy(() => import("./routes/Pricing"));
const PricingDetail = lazy(() => import("./routes/PricingDetail"));
const PortfolioDetail = lazy(() => import("./routes/PortfolioDetail"));
const Templates = lazy(() => import("./routes/Templates"));

function RouteFallback() {
  return <main className="min-h-screen bg-[color:var(--bg-start)] pt-28" aria-label="Memuat halaman" />;
}

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Pricing />} />
          <Route path="/layanan/:slug" element={<PricingDetail />} />
          <Route path="/portfolio" element={<Templates />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/harga" element={<Navigate to="/layanan" replace />} />
          <Route path="/harga/:slug" element={<PricingDetail />} />
          <Route path="/contoh" element={<Navigate to="/portfolio" replace />} />
          <Route path="/contoh/:slug" element={<PortfolioDetail />} />
          <Route path="/template" element={<Navigate to="/portfolio" replace />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
