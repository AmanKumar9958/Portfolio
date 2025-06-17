import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Hirenix',
            description: 'A full-featured job portal app where recruiters post jobs and candidates apply—built to streamline the hiring process.',
            imageUrl: '/assets/Hirenix.png',
            link: 'https://hirenix.netlify.app/',
            github: 'https://github.com/AmanKumar9958/Hirenix',
        },
        {
            title: 'Trip Genius',
            description: 'Plan your next trip with AI powered trip planner',
            imageUrl: '/assets/Trip-Genius.png',
            link: 'https://trip-genius.netlify.app/',
            github: 'https://github.com/AmanKumar9958/Trip-Planner',
        },
        {
            title: 'News-365',
            description: 'A real-time application providing whole world news at one place',
            imageUrl: '/assets/News-365.png',
            link: 'https://news-365.netlify.app/',
            github: 'https://github.com/AmanKumar9958/News-365',
        },
        {
            title: 'KeyClash',
            description: "A real-time typing speed test application with a user-friendly interface",
            imageUrl: '/assets/keyClash.png',
            link: 'https://news-365.netlify.app/',
            github: 'https://github.com/AmanKumar9958/KeyClash',
        },
        {
            title: 'Weather App',
            description: 'A real-time weather application providing city-specific weather updates.',
            imageUrl: '/assets/WeatherApp.png',
            link: 'https://amankumar9958.github.io/weatherApp',
            github: 'https://github.com/AmanKumar9958/weatherApp',
        },
        {
            title: 'QR Generator',
            description: 'Generates QR codes for text or links quickly and easily.',
            imageUrl: '/assets/QRGenerator.png',
            link: 'https://amankumar9958.github.io/QRGenerator/',
            github: 'https://github.com/AmanKumar9958/QRGenerator',
        },
    ];

    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 mt-8"
                >
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                        My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Showcasing my development journey
                    </p>
                </motion.div>

                <motion.div 
                    className="relative space-y-24"
                    variants={staggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={projectVariants}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 group`}
                        >
                            {/* Connector Line Animation */}
                            {index > 0 && (
                                <motion.div 
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 50 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hidden md:block absolute top-[-40px] left-1/2 w-[2px] bg-gray-300 dark:bg-gray-600"
                                />
                            )}
                            
                            {/* Image Container */}
                            <motion.div 
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-3 rounded-2xl relative z-10 transition-transform duration-300 shadow-md w-full max-w-lg 
                                    hover:shadow-lg hover:-translate-y-1"
                            >
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>

                            {/* Content Container */}
                            <motion.div 
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                className={`bg-white dark:bg-gray-800 p-6 rounded-2xl relative z-10 flex-1 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 ${
                                    index % 2 === 0 ? 'md:ml-[-30px]' : 'md:mr-[-30px]'
                                }`}
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-3">
                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                                    >
                                        <FiGithub className="w-4 h-4" />
                                        Source Code
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;