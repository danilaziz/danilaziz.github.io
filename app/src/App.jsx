import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Home = lazy(() => import("./routes/Home"));
const NotFound = lazy(() => import("./routes/NotFound"));
const Pricing = lazy(() => import("./routes/Pricing"));
const PricingDetail = lazy(() => import("./routes/PricingDetail"));
const Templates = lazy(() => import("./routes/Templates"));

function RouteFallback() {
  return <main className="min-h-screen bg-[color:var(--surface-base)] pt-28" aria-label="Memuat halaman" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/harga" element={<Pricing />} />
          <Route path="/harga/:slug" element={<PricingDetail />} />
          <Route path="/contoh" element={<Templates />} />
          <Route path="/template" element={<Navigate to="/contoh" replace />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
