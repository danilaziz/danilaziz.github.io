import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Star, Smartphone } from "lucide-react";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import Footer from "../components/Footer";
import profileImage from "../assets/images/danilaziz.webp";

const About = () => {
  const skills = [
    { name: "Futsal", level: 95, color: "from-teal-400 to-teal-500" },
    {
      name: "Exercising",
      level: 80,
      color: "from-pink-200 to-pink-300",
    },
    {
      name: "Web Developer",
      level: 95,
      color: "from-yellow-400 to-yellow-500",
    },
    { name: "Front End", level: 90, color: "from-amber-300 to-amber-400" },
    { name: "Landing Page", level: 95, color: "from-red-400 to-red-500" },
  ];

  return (
    <>
      {/* Section Tentang Saya */}
      <section className="min-h-[85vh] bg-gray-50 dark:bg-gray-900 px-6 flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="justify-center hidden md:flex"
          >
            <img
              src={profileImage}
              alt="Profil"
              className="w-full max-w-sm rounded-2xl shadow-lg mt-16"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-6 text-gray-900 dark:text-white pt-16">
              about.
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am a{" "}
              <span className="text-1xl font-semibold text-gray-600 dark:text-gray-50 font-mono border rounded-md p-1 border-gray-300 dark:border-gray-700">
                Web Developer{" "}
              </span>
              and{" "}
              <span className="text-1xl font-semibold text-gray-600 dark:text-gray-50 font-mono border rounded-md p-1 border-gray-300 dark:border-gray-700">
                Front End Developer
              </span>{" "}
              focused on creating modern, interactive, and responsive websites.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-5 md:mb-10">
              With experience in a wide range of projects, I am committed to
              helping businesses and individuals build a strong and professional
              digital presence.
            </p>

            {/* Icons */}
            <h1 className="text-1xl md:text-2xl font-medium text-gray-600 dark:text-gray-50">
              Technologies I Use
            </h1>
            <div className="flex mt-4 space-x-2 md:space-x-4">
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                <FaReact className="text-3xl text-blue-500" title="React" />
              </div>

              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                <SiTailwindcss
                  className="text-3xl text-teal-400"
                  title="Tailwind CSS"
                />
              </div>

              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                <FaGitAlt className="text-3xl text-orange-600" title="Git" />
              </div>

              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                <FaGithub
                  className="text-3xl text-gray-800 dark:text-white"
                  title="GitHub"
                />
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                <SiFramer
                  className="text-3xl text-pink-500"
                  title="Framer Motion"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Skills */}
      <section className="bg-gray-50 dark:bg-gray-900 px-6 pb-16 py-3">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-start text-gray-900 dark:text-white mb-2 p-1">
            My Skills
          </h2>

          {/* Grid vertikal di desktop, horizontal di mobile */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-t-lg overflow-hidden pt-3 md:pt-6 md:pl-6">
            <div className="flex flex-row sm:flex-row md:grid md:grid-cols-5 overflow-x-auto">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Component SkillBar dengan animasi bar & counter satu per satu
const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const startDelay = index * 0.4;
      const timerId = setTimeout(() => {
        let start = 0;
        const end = skill.level;
        const duration = 800;
        const stepTime = Math.floor(duration / end);

        const counter = setInterval(() => {
          start += 1;
          if (start > end) {
            clearInterval(counter);
          } else {
            setCount(start);
          }
        }, stepTime);
      }, startDelay * 1000);

      return () => clearTimeout(timerId);
    }
  }, [inView, skill.level, index]);

  return (
    <div className="flex flex-col sm:flex-row items-center min-w-[68px]">
      <div className="w-14 sm:w-44 h-40 sm:h-96 bg-gray-200 dark:bg-gray-700 rounded-t-lg flex items-end overflow-hidden">
        <motion.div
          ref={ref}
          className={`w-full rounded-t-lg bg-gradient-to-t ${skill.color} flex flex-col justify-end items-center p-1 sm:p-2`}
          initial={{ height: "0%" }}
          animate={{ height: inView ? `${skill.level}%` : "0%" }}
          transition={{
            duration: 0.8,
            delay: index * 0.4,
            ease: "easeOut",
          }}
        >
          <span className="text-white text-md sm:text-5xl font-medium">
            {count}%
          </span>
          <p className="mt-1 sm:mt-3 text-center text-white font-medium text-xs sm:text-base">
            {skill.name}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
