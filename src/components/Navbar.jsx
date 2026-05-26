import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/projects', name: 'Projects' },
        { path: '/service', name: 'Services' },
        { path: '/contact', name: 'Contact' },
    ];

    const isActivePath = (item) => {
        if (item.path === '/projects') {
            return ['/projects', '/projects-web-development', '/projects-app-development'].includes(location.pathname);
        }
        if (item.path === '/service') {
            return ['/service', '/service-web-development', '/service-app-development', '/web-development-info', '/app-development-info'].includes(location.pathname);
        }
        return location.pathname === item.path;
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'py-3'
                        : 'py-5'
                }`}
            >
                <div className={`mx-auto max-w-6xl px-6 transition-all duration-500`}>
                    <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
                        scrolled
                            ? 'glass shadow-glass'
                            : 'bg-transparent'
                    }`}>
                        {/* Logo */}
                        <Link
                            to="/"
                            className="group relative font-display text-xl font-bold tracking-tight text-txt-primary"
                        >
                            <span className="relative z-10 transition-all duration-300 group-hover:text-gradient">
                                Aman
                            </span>
                            <span className="text-gradient ml-1">.</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const active = isActivePath(item);
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className="relative px-4 py-2 font-body text-sm font-medium transition-all duration-300 group"
                                    >
                                        <span className={`relative z-10 transition-colors duration-300 ${
                                            active ? 'text-white' : 'text-txt-secondary group-hover:text-txt-primary'
                                        }`}>
                                            {item.name}
                                        </span>
                                        {active && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                );
                            })}

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="ml-4 inline-flex items-center gap-1.5 rounded-full bg-accent-gradient px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow hover:scale-105"
                            >
                                Let&apos;s Talk
                                <FiArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-txt-primary hover:bg-white/5 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 flex items-start justify-center pt-28 px-6 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Card */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-sm glass rounded-2xl p-6 shadow-glass"
                        >
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item, index) => {
                                    const active = isActivePath(item);
                                    return (
                                        <motion.div
                                            key={item.path}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.08 }}
                                        >
                                            <NavLink
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                                    active
                                                        ? 'bg-accent-violet/10 text-accent-violet'
                                                        : 'text-txt-secondary hover:text-txt-primary hover:bg-white/5'
                                                }`}
                                            >
                                                {item.name}
                                                <FiArrowUpRight className={`w-4 h-4 transition-colors ${active ? 'text-accent-violet' : 'text-txt-muted'}`} />
                                            </NavLink>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            <div className="mt-4 pt-4 border-t border-white/5">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-accent-gradient px-5 py-3 text-sm font-semibold text-white"
                                >
                                    Let&apos;s Talk
                                    <FiArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;