import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 relative">
      {/* Tombol scroll ke atas */}
      <div
        className="absolute -top-11 md:-top-14 left-1/2 transform -translate-x-1/2 
                   bg-gray-100 dark:bg-gray-800 w-24 md:w-32 h-24 md:h-32 rounded-t-full 
                   flex items-center justify-center cursor-pointer transition-transform 
                   duration-300 hover:-translate-y-1"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 md:h-14 w-12 md:w-14 text-gray-300 dark:text-gray-600 -translate-y-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>

      {/* Konten Footer */}
      <div
        className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row 
                      items-center justify-between space-y-4 md:space-y-0"
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm z-10 relative">
          © 2025 Danil Aziz
        </p>
        <nav
          className="hidden md:flex flex-wrap justify-start space-x-6 
                        text-gray-500 dark:text-gray-400 text-sm z-10 relative"
        >
          <a
            href="/"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            home
          </a>
          <a
            href="/about"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            about
          </a>
          <a
            href="/contact"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            contact
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
