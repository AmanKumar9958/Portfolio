import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
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
        { path: '/', sectionId: 'hero', name: 'Index' },
        { path: '/projects', sectionId: 'projects', name: 'Work' },
        { path: '/service', sectionId: 'services', name: 'Services' },
        { path: '/contact', sectionId: 'contact', name: 'Contact' },
    ];

    const handleNavClick = (e, item) => {
        if (location.pathname === '/' && item.sectionId) {
            e.preventDefault();
            const el = document.getElementById(item.sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isActive = (item) => {
        if (item.path === '/') return location.pathname === '/';
        return location.pathname.startsWith(item.path);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? 'py-3' : 'py-5 sm:py-6'
                }`}
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div
                        className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
                            scrolled
                                ? 'bg-surface-secondary/85 backdrop-blur-md border border-white/10 shadow-card'
                                : 'bg-surface-secondary/40 backdrop-blur-sm border border-white/[0.06]'
                        }`}
                    >
                        {/* Logo / Brand Mark */}
                        <Link
                            to="/"
                            className="group flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-txt-primary"
                            data-cursor="pointer"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
                            <span>AMAN KUMAR</span>
                            <span className="font-mono text-xs text-txt-muted hidden sm:inline font-normal">/ 2026</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const active = isActive(item);
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={(e) => handleNavClick(e, item)}
                                        data-cursor="pointer"
                                        className="relative px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200"
                                    >
                                        <span
                                            className={`relative z-10 ${
                                                active ? 'text-txt-primary font-semibold' : 'text-txt-secondary hover:text-txt-primary'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                        {active && (
                                            <motion.div
                                                layoutId="navbarActiveIndicator"
                                                className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        {/* Right: Quick CTA & Availability */}
                        <div className="hidden md:flex items-center gap-4">
                            <span className="flex items-center gap-2 font-mono text-[11px] text-txt-muted uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available
                            </span>
                            <Link
                                to="/contact"
                                data-cursor="pointer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-txt-primary px-4 py-1.5 text-xs font-semibold text-surface transition-all duration-300 hover:bg-accent hover:text-white"
                            >
                                Let&apos;s Talk
                                <FiArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            data-cursor="pointer"
                            aria-label="Toggle Navigation"
                            className="md:hidden p-2 text-txt-primary hover:text-accent transition-colors"
                        >
                            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden"
                    >
                        <div className="space-y-6">
                            <span className="font-mono text-xs uppercase tracking-widest text-txt-muted">
                                // Navigation
                            </span>
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={(e) => {
                                            handleNavClick(e, item);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="group flex items-baseline justify-between py-2 border-b border-white/[0.06]"
                                    >
                                        <span className="font-display text-3xl font-bold text-txt-primary group-hover:text-accent transition-colors">
                                            {item.name}
                                        </span>
                                        <span className="font-mono text-xs text-txt-muted">
                                            0{idx + 1}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                            <div className="flex items-center justify-between text-xs font-mono text-txt-muted">
                                <span>STATUS</span>
                                <span className="text-emerald-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Available for Q2 2026
                                </span>
                            </div>
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-white"
                            >
                                Get In Touch
                                <FiArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;