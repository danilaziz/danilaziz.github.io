import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Templates = lazy(() => import("./routes/Templates"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<main className="shell min-h-screen pt-28 text-sm text-[color:var(--text-muted)] md:pt-32">Memuat halaman...</main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/template" element={<Templates />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}
