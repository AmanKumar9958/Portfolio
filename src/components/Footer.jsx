import React from 'react';
import { FaGithub, FaLinkedin, FaRegSmileWink } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                                Aman Kumar
                            </span>
                            <FaRegSmileWink className="text-purple-500 animate-wiggle" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Crafting digital experiences with passion and precision
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center md:items-start space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Let's Connect
                        </h3>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://github.com/AmanKumar9958/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center md:text-right space-y-2"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} Aman Kumar
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;