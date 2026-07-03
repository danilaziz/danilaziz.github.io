import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import RevealObserver from "./components/RevealObserver";
import StickyWhatsApp from "./components/StickyWhatsApp";

const Contact = lazy(() => import("./routes/Contact"));
const Education = lazy(() => import("./routes/Education"));
const Home = lazy(() => import("./routes/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const NotFound = lazy(() => import("./routes/NotFound"));
const Portfolio = lazy(() => import("./routes/Portfolio"));
const PortfolioDetail = lazy(() => import("./routes/PortfolioDetail"));

function RouteFallback() {
  return <main className="min-h-screen bg-[color:var(--bg-start)] pt-28" aria-label="Memuat halaman" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RevealObserver />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pendidikan" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
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
