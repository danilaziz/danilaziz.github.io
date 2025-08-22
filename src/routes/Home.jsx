import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import heroImage from "../assets/images/danilaziz.webp";
import landingPageIcon from "../assets/icons/landing-page.svg";
import Responsive from "../assets/icons/responsive.svg";
import WebApp from "../assets/icons/web-app.svg";
import Footer from "../components/Footer"; // ✅ Import Footer

const Home = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const aboutControls = useAnimation();

  useEffect(() => {
    const animateHero = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      await Promise.all([
        textControls.start({
          x: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: {
            x: { duration: 0.8, ease: [0.8, 0.2, 0.2, 1] },
            clipPath: { duration: 1, ease: [0.8, 0.2, 0.2, 1] },
          },
        }),
        imageControls.start({
          x: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: {
            x: { duration: 0.8, ease: [0.8, 0.2, 0.2, 1] },
            clipPath: { duration: 1, ease: [0.8, 0.2, 0.2, 1] },
          },
        }),
      ]);

      aboutControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    };

    animateHero();
  }, []);

  const projects = [
    {
      img: landingPageIcon,
      title: "Landing Page",
      categories: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      img: Responsive,
      title: "Responsive Web Design",
      categories: ["Desktop", "Tablet", "Mobile"],
    },
    {
      img: WebApp,
      title: "Web Application",
      categories: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[70vh] bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left overflow-hidden pt-8 md:pt-0"
      >
        <div className="absolute inset-0 bg-white/20 dark:bg-white/5 backdrop-blur-md pointer-events-none transition-colors duration-500"></div>

        <motion.div
          className="relative z-10 max-w-xl md:max-w-lg lg:max-w-xl order-2 md:order-1"
          initial={{ x: -150, clipPath: "inset(0% 100% 0% 0%)" }}
          animate={textControls}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Hello, I'm <span className="text-yellow-400">Danil Aziz</span>
          </h1>
          <p className="text-gray-700 dark:text-white/90 text-base md:text-xl font-normal mb-5">
            Professional web developers who create fast, responsive, and modern
            applications.
          </p>
          <a
            href="https://wa.me/6287728890135?text=Halo%20saya%20tertarik%20dengan%20jasa%20anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition mb-3"
          >
            Contact me
          </a>

        </motion.div>

        <motion.div
          className="relative z-10 mt-12 md:mt-24 md:ml-12 w-[270px] md:w-[350px] lg:w-[450px] order-1 md:order-2"
          initial={{ x: 150, clipPath: "inset(0% 0% 0% 100%)" }}
          animate={imageControls}
        >
          <img
            src={heroImage}
            alt="Danil Aziz"
            className="relative w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Tentang Saya Section */}
      <motion.section
        className="min-h-[40vh] bg-white dark:bg-gray-900 flex flex-col items-center px-6 md:px-20 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutControls}
      >
        <div className="flex items-center justify-center w-full max-w-7xl mb-8">
          <div className="flex-[0.4] border-t border-gray-300 dark:border-gray-700"></div>
          <h2 className="px-6 text-sm tracking-widest text-gray-500 dark:text-gray-400">
            SOME OF MY SKILLS
          </h2>
          <div className="flex-[0.4] border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg m-2 h-40 lg:h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto max-h-40 object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-normal text-gray-900 dark:text-white pb-3">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {item.categories?.slice(0, 3).map((cat, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200 rounded-full px-3 py-1 transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 hover:scale-105 cursor-pointer"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer di bawah */}
      <Footer />
    </main>
  );
};

export default Home;
