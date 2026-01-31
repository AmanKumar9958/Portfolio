import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/projects', name: 'Projects' },
        { path: '/contact', name: 'Contact' },
        { path: '/service', name: 'Services' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="w-11/12 m-auto mt-4 rounded-2xl flex justify-between items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-800 fixed top-0 left-0 right-0 z-50 shadow-lg dark:shadow-gray-800/20"
            >
                <Link 
                    to='/' 
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent hover:bg-gradient-to-l transition-all duration-500 hover:scale-105"
                >
                    Aman Kumar
                </Link>
                
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.path}
                            to={item.path} 
                            className={({ isActive }) => {
                                const isProjectActive = item.path === '/projects' && (
                                    location.pathname === '/projects-web-development' || 
                                    location.pathname === '/projects-app-development'
                                );
                                const activeState = isActive || isProjectActive;
                                
                                return `relative px-4 py-2 font-medium transition-all group ${activeState 
                                    ? 'text-blue-500 dark:text-purple-400' 
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-purple-400'}`;
                            }}
                        >
                            {item.name}
                            <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 dark:bg-purple-400 transition-all duration-300 ${
                                (location.pathname === item.path || (item.path === '/projects' && (location.pathname === '/projects-web-development' || location.pathname === '/projects-app-development'))) ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </NavLink>
                    ))}
                    
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMode}
                        className="ml-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        {darkMode ? (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiSun className="w-5 h-5 text-purple-400" />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiMoon className="w-5 h-5 text-blue-500" />
                            </motion.div>
                        )}
                    </motion.button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMode}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        {darkMode ? (
                            <FiSun className="w-5 h-5 text-purple-400" />
                        ) : (
                            <FiMoon className="w-5 h-5 text-blue-500" />
                        )}
                    </motion.button>
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMobileMenu}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        ) : (
                            <FiMenu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        )}
                    </motion.button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        ref={menuRef}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-24 right-6 z-50 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                    >
                        <nav className="flex flex-col p-4 gap-3">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavLink 
                                        to={item.path} 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) => 
                                            `flex items-center justify-between px-4 py-3 rounded-lg font-medium ${isActive 
                                                ? 'bg-blue-50 dark:bg-purple-900/50 text-blue-600 dark:text-purple-400' 
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`
                                        }
                                    >
                                        {item.name}
                                        <FiChevronRight className="text-gray-400" />
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;