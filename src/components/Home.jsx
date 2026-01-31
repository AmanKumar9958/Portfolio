import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import Typed from "typed.js";
import { FaReact, FaHtml5, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiAppwrite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { Link } from "react-router-dom";

const Counter = ({ from, to }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef); // Removed once: true to animate every time
  
    useEffect(() => {
      if (isInView) {
        const node = nodeRef.current;
        const controls = animate(from, to, {
          duration: 1.5,
          onUpdate: (value) => {
            node.textContent = Math.floor(value).toFixed(0);
          },
        });
        return () => controls.stop();
      }
    }, [from, to, isInView]);
  
    return <span ref={nodeRef} />;
};

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
            <section className="relative w-full h-screen overflow-hidden flex items-center bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-900/30 dark:to-purple-900/30 animate-gradient-x pointer-events-none" />
                
                <div className="container mx-auto px-6 pt-28 md:pt-0 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full z-10">
                    
                    {/* Left Column: Text Content */}
                    <motion.div 
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent leading-tight"
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            Hi, I&apos;am <br className="hidden md:block"/> <span className="wave-animate">Aman Kumar</span> <span className="wave">👋</span>
                        </motion.h1>

                        <motion.div
                            className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <span ref={typedRef} className="text-blue-600 dark:text-blue-400" />
                            <span className="ml-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Development
                            </span>
                        </motion.div>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Full Stack Developer & Tech Enthusiast
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 mt-8"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                             <Link
                                to="/projects"
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Explore Work <span aria-hidden="true" className="text-xl">→</span>
                            </Link>
                            <a
                                href="/assets/Aman_Kumar_Resume.pdf"
                                download="Aman_Resume.pdf"
                                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 hover:border-blue-500 dark:hover:border-blue-400"
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: 3D Image */}
                    <motion.div 
                        className="flex justify-center md:justify-end items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                         <motion.img 
                            src="/3D_Figure.webp" 
                            alt="3D Character" 
                            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl hidden md:block"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ 
                                duration: 6, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <motion.section 
                id="about"
                className="py-20 px-6 sm:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Image */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <img 
                                src="/3D_Figure.webp" 
                                alt="About Me" 
                                className="w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
                            />
                        </motion.div>

                        {/* Right Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm mb-8">
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Hey there! I&apos;am <strong className="text-orange-500">Aman Kumar</strong>, a 
                                    passionate developer specializing in creating beautiful and functional 
                                    <span className="text-blue-600 dark:text-blue-400"> Web </span> 
                                    and <span className="text-purple-600">Mobile</span> experiences.
                                    With a focus on modern technologies, I build
                                    <span className="font-semibold text-gradient"> scalable solutions</span> that not only look great but also solve real-world problems.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold dark:text-white mb-2 text-orange-500">
                                        <Counter from={0} to={8} />+
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Projects</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold dark:text-white mb-2 text-orange-500">
                                        <Counter from={0} to={5} />+
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Clients</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold dark:text-white mb-2 text-orange-500">
                                        <Counter from={0} to={2} />+
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
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
                                    { name: "React Native", icon: <FaReact className="w-6 h-6 text-blue-500" /> },
                                    { name: "Next.js", icon: <RiNextjsFill className="w-6 h-6 text-blue-500"/> },
                                    { name: "TypeScript", icon: <BiLogoTypescript className="w-6 h-6 text-blue-500" /> },
                                    { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-yellow-400" /> },
                                    { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-6 h-6 text-cyan-500" /> },
                                    { name: "HTML5", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
                                    { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-blue-400" /> },
                                    
                                ]
                            },
                            {
                                title: "Backend & Databases",
                                items: [
                                    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
                                    { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-green-500" /> },
                                    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
                                    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-green-500" /> },
                                    { name: "MySQL", icon: <DiMysql className="w-6 h-6 text-blue-500" /> }
                                ]
                            },
                            {
                                title: "Dev Tools",
                                items: [
                                    { name: "Firebase", icon: <IoLogoFirebase className="w-6 h-6 text-yellow-500" /> },
                                    { name: "AppWrite", icon: <SiAppwrite className="w-6 h-6 text-red-500" /> },
                                    { name: "Git & GitHub", icon: <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" /> },
                                    { name: "Postman", icon: <SiPostman className="w-6 h-6 text-orange-500" /> }
                                ]
                            },
                            {
                                title: "Programming Languages",
                                items: [
                                    { name: "JavaScript", icon: <IoLogoJavascript className="w-6 h-6 text-yellow-400" /> },
                                    { name: "Python", icon: <FaPython className="text-yellow-400 text-xl" /> },
                                    { name: "C++", icon: <TbBrandCpp className="text-2xl text-blue-500" />}
                                ]
                            },
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
                        Let&apos;s build something amazing! Check out my resume to see my full experience.
                    </p>
                    <motion.a
                        href="/assets/Aman_Kumar_Resume.pdf"
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

            {/* Floating Resume Download Button */}
            <a
                href="/assets/Aman_Kumar_Resume.pdf"
                download="Aman_Resume.pdf"
                className="fixed bottom-20 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2"
                title="Download Resume"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline font-semibold">Resume</span>
            </a>
        </div>
    );
};

export default Home;