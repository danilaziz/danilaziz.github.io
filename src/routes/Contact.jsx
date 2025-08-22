import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Github } from "lucide-react";
import Footer from "../components/Footer";
import profileImage from "../assets/icons/social-media.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // buka email client
        window.location.href = `mailto:danilaziz548@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;

        // reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* Section Contact Intro */}
            <section className="min-h-[50vh] md:min-h-[65vh] bg-gray-50 dark:bg-gray-900 px-6 md:px-12 flex items-center justify-center border-b dark:border-gray-800">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white pt-16">
                            contact.
                        </h1>
                        <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-5 md:mb-10">
                            Get in touch with me via social media or send me an email.
                        </p>

                        {/* Sosmed */}
                        <div className="flex flex-row items-center space-x-4 sm:space-x-6 mt-6">
                            <a
                                href="https://instagram.com/danilaziz__"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 hover:scale-105 transition-transform"
                            >
                                <div className="p-2 sm:p-3 rounded-full bg-pink-400 dark:bg-pink-600 flex items-center justify-center">
                                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                                    Instagram
                                </span>
                            </a>

                            <a
                                href="https://github.com/danilaziz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:scale-105 transition-transform"
                            >
                                <div className="p-2 sm:p-3 rounded-full bg-gray-400 dark:bg-gray-700 flex items-center justify-center">
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                                    Github
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="justify-center hidden md:flex"
                    >
                        <img
                            src={profileImage}
                            alt="Profil"
                            className="w-full max-w-sm rounded-2xl shadow-lg pt-14"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Form Email */}
            <section className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-4 md:py-10 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl md:text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6 md:mb-10"
                    >
                        Send me an email
                    </motion.h2>

                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        animate="show"
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    >
                        {/* Left column */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            <motion.div variants={itemVariants} className="flex flex-col">
                                <label htmlFor="name" className="mb-1 md:mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="p-3 rounded-md border border-gray-500 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col">
                                <label htmlFor="email" className="mb-1 md:mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="p-3 rounded-md border border-gray-500 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Right column */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label htmlFor="message" className="mb-1 md:mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message..."
                                className="p-2 md:p-3 rounded-md border border-gray-500 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm md:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                                required
                            ></textarea>
                        </motion.div>

                        {/* Button */}
                        <motion.div variants={itemVariants} className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 md:px-6 md:py-3 bg-gray-900 dark:bg-gray-500 text-white rounded-lg shadow hover:bg-gray-700 dark:hover:bg-gray-600 font-medium md:font-semibold transition-colors duration-300 text-sm md:text-base"
                            >
                                Send email
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
