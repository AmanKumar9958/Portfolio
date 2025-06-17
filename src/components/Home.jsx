import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiAppwrite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
            const options = {
                strings: ["Mobile ", "Web "],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 1000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            };

            const typed = new Typed(typedRef.current, options);
            return () => typed.destroy();
        }
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-900/30 dark:to-purple-900/30 animate-gradient-x" />
                
                <motion.div
                    className="relative max-w-4xl px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        Hi, I'm <span className="wave-animate">Aman Kumar</span> <span className="wave">👋</span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Full Stack Developer & Tech Enthusiast
                    </motion.p>

                    <motion.div
                        className="mt-8 text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <span ref={typedRef} className="text-blue-600 dark:text-blue-400" />
                        <span className="ml-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            Development
                        </span>
                    </motion.div>

                    <motion.a
                        href="#about"
                        className="inline-block mt-12 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Explore My Work →
                    </motion.a>
                </motion.div>
            </section>

            {/* About Section */}
            <motion.section 
                id="about"
                className="py-20 px-6 sm:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                            Hey there! I'm <strong className="text-blue-600 dark:text-blue-400">Aman Kumar</strong>, a 
                            passionate developer specializing in creating beautiful and functional 
                            <span className="text-purple-600 dark:text-purple-400"> Web </span> 
                            and <span className="text-pink-500">Mobile</span> experiences.
                        </p>
                        <p>
                            With a focus on modern technologies, I build 
                            <span className="font-semibold text-gradient">
                                {" "}scalable solutions
                            </span> that not only look great but also solve real-world problems.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
                id="skills"
                className="py-20 px-6 sm:px-8 bg-gray-50 dark:bg-gray-900"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Technical Arsenal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Frontend Mastery",
                                items: [
                                    { name: "React", icon: <FaReact className="w-6 h-6 text-blue-500" /> },
                                    { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-yellow-400" /> },
                                    { name: "HTML5", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
                                    { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-blue-400" /> },
                                    { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-6 h-6 text-cyan-500" /> }
                                ]
                            },
                            {
                                title: "Backend & Databases",
                                items: [
                                    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
                                    { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-green-500" /> },
                                    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
                                    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-green-500" /> }
                                ]
                            },
                            {
                                title: "Dev Tools",
                                items: [
                                    { name: "Firebase", icon: <IoLogoFirebase className="w-6 h-6 text-yellow-500" /> },
                                    { name: "AppWrite", icon: <SiAppwrite className="w-6 h-6 text-red-500" /> },
                                    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" /> }
                                ]
                            }
                        ].map((category, idx) => (
                            <motion.div
                                key={idx}
                                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                                <ul className="space-y-4">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className={`flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 ${
                                                item.className || "text-gray-700 dark:text-gray-300"
                                            }`}
                                        >
                                            {item.icon}
                                            <span className="font-medium">{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Resume Section */}
            <motion.section 
                id="resume"
                className="py-20 px-6 sm:px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's build something amazing! Check out my resume to see my full experience.
                    </p>
                    <motion.a
                        href="public/assets/Aman_Kumar_Resume.pdf"
                        download="Aman_Resume.pdf"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Download Resume</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                        </svg>
                    </motion.a>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;