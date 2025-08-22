import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Instagram, Github, Linkedin } from "lucide-react";
import logo from "../assets/images/danil.webp";

const navItems = [
  { name: "home", id: "home", path: "/" },
  { name: "about", id: "about", path: "/about" },
  { name: "contact", id: "contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Set active berdasarkan halaman, bukan scroll
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setActiveSection(path);
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleLinkClick = (item) => {
    setMobileMenuOpen(false);
    setActiveSection(item.id);
    navigate(item.path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled
          ? darkMode
            ? "bg-gray-900 shadow-lg text-white"
            : "bg-white shadow-lg text-black"
          : darkMode
            ? "bg-gray-900/30 backdrop-blur-md text-white"
            : "bg-white/90 backdrop-blur-md text-black"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick(navItems[0])}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover shadow-sm"
              whileHover={{ rotate: 8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center font-medium">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => handleLinkClick(item)}
                  className={`inline-block px-1 py-1 transition-colors duration-200 ${activeSection === item.id
                    ? "text-yellow-400"
                    : scrolled
                      ? darkMode
                        ? "text-white hover:text-yellow-400"
                        : "text-black hover:text-yellow-400"
                      : darkMode
                        ? "text-white hover:text-yellow-400"
                        : "text-black hover:text-yellow-400"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300 ${activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Sosial Media + Dark Mode + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-5 mr-7">
              <a
                href="https://instagram.com/danilaziz__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={30} />
              </a>
              <a
                href="https://github.com/danilaziz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={30} />
              </a>
            </div>

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full shadow hover:scale-[1.06] transition-transform ${darkMode
                ? "bg-gray-700/70 text-white"
                : "bg-gray-200 text-black"
                }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`md:hidden p-2 rounded-md ${darkMode
                ? "text-white hover:text-yellow-400"
                : "text-black hover:text-yellow-400"
                }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-[64px] left-0 right-0 shadow-lg z-40 md:hidden ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
        >
          <ul className="flex flex-col p-4 gap-4 font-medium text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item)}
                  className={`block w-full text-center px-3 py-2 rounded transition ${activeSection === item.id
                    ? "bg-yellow-400 text-gray-900"
                    : "hover:bg-yellow-400 hover:text-gray-900"
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}

            {/* Social Media Mobile */}
            <li className="flex gap-4 mt-2 items-center justify-center">
              <a
                href="https://instagram.com/danilaziz__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={30} />
              </a>
              <a
                href="https://github.com/danilaziz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={30} />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
