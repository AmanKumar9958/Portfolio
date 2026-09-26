import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUp, FiInfo, FiCode, FiLayers, FiType, FiCpu, FiGlobe, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Footer = () => {
    const [isColophonOpen, setIsColophonOpen] = useState(false);

    const quickLinks = [
        { name: 'Index', path: '/' },
        { name: 'Selected Work', path: '/projects' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' },
    ];

    const colophonSpecs = [
        {
            label: "Framework & Core",
            value: "React 18.3 • Vite 6.2",
            icon: <FiCode className="w-3.5 h-3.5 text-accent" />
        },
        {
            label: "Motion & Smooth Scroll",
            value: "Framer Motion 12.4 • Lenis 1.3",
            icon: <FiCpu className="w-3.5 h-3.5 text-accent" />
        },
        {
            label: "Styling Architecture",
            value: "Tailwind CSS 3.4 • Custom CSS Variables",
            icon: <FiLayers className="w-3.5 h-3.5 text-accent" />
        },
        {
            label: "Typography System",
            value: "Space Grotesk • Inter • JetBrains Mono",
            icon: <FiType className="w-3.5 h-3.5 text-accent" />
        },
        {
            label: "Design Ethos",
            value: "Swiss Industrial Grid • Obsidian & Signal Orange",
            icon: <FiInfo className="w-3.5 h-3.5 text-accent" />
        },
        {
            label: "Infrastructure",
            value: "Production Edge Network • Lighthouse 95+",
            icon: <FiGlobe className="w-3.5 h-3.5 text-accent" />
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full overflow-hidden bg-surface-secondary border-t border-white/[0.08]">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
                    {/* Brand / Tagline */}
                    <div className="md:col-span-5 space-y-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent block">
                            // Studio 2026
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-txt-primary">
                            Engineering High-Caliber Web &amp; Mobile Experiences.
                        </h2>
                        <p className="text-sm text-txt-secondary max-w-sm font-body">
                            Available for select contracts, full-stack architectures, and product development opportunities.
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <div className="md:col-span-3 space-y-4">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-txt-muted">
                            / Navigation
                        </h3>
                        <div className="flex flex-col space-y-2.5">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="font-mono text-xs text-txt-secondary hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2"
                                >
                                    <span className="text-txt-dim">→</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Socials */}
                    <div className="md:col-span-4 space-y-4">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-txt-muted">
                            / Direct Channels
                        </h3>
                        <a
                            href="mailto:tech.aman2799@gmail.com"
                            className="font-mono text-xs sm:text-sm text-txt-primary hover:text-accent transition-colors block"
                        >
                            tech.aman2799@gmail.com
                        </a>

                        <div className="flex items-center gap-3 pt-2">
                            <MagneticButton
                                as="a"
                                href="https://github.com/AmanKumar9958/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/[0.1] bg-surface-tertiary flex items-center justify-center text-txt-secondary hover:text-white hover:border-accent transition-all duration-300"
                                title="GitHub"
                            >
                                <FaGithub className="w-4 h-4" />
                            </MagneticButton>

                            <MagneticButton
                                as="a"
                                href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/[0.1] bg-surface-tertiary flex items-center justify-center text-txt-secondary hover:text-white hover:border-accent transition-all duration-300"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-4 h-4 text-sky-400" />
                            </MagneticButton>

                            <MagneticButton
                                as="button"
                                onClick={scrollToTop}
                                className="ml-auto w-10 h-10 rounded-full border border-white/[0.1] bg-surface-tertiary flex items-center justify-center text-txt-secondary hover:text-white hover:border-accent transition-all duration-300"
                                title="Back to top"
                            >
                                <FiArrowUp className="w-4 h-4" />
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* Interactive Colophon Note Section */}
                <div className="py-6 border-b border-white/[0.08]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs uppercase tracking-widest text-txt-muted">
                                // Colophon
                            </span>
                            <span className="font-mono text-[11px] text-txt-dim hidden sm:inline">
                                Architecture, Typography &amp; Toolchain Specifications
                            </span>
                        </div>

                        <button
                            onClick={() => setIsColophonOpen(!isColophonOpen)}
                            data-cursor="pointer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-surface-tertiary px-3.5 py-1.5 font-mono text-[11px] text-txt-secondary hover:text-white hover:border-accent transition-all duration-200"
                        >
                            <span>{isColophonOpen ? "Hide Specs" : "View System Specs"}</span>
                            {isColophonOpen ? (
                                <FiChevronUp className="w-3.5 h-3.5 text-accent" />
                            ) : (
                                <FiChevronDown className="w-3.5 h-3.5 text-accent" />
                            )}
                        </button>
                    </div>

                    {/* Expandable Specifications Tray */}
                    <AnimatePresence>
                        {isColophonOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                    {colophonSpecs.map((spec, i) => (
                                        <div
                                            key={i}
                                            className="p-3.5 rounded-xl border border-white/[0.06] bg-surface-tertiary/60 flex items-start gap-3"
                                        >
                                            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.04] mt-0.5">
                                                {spec.icon}
                                            </div>
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-wider text-txt-muted block">
                                                    {spec.label}
                                                </span>
                                                <span className="font-mono text-xs text-txt-primary font-medium block mt-0.5">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="font-mono text-[11px] text-txt-dim pt-4">
                                    * Designed with architectural precision. No generic AI templates or unoptimized assets.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Legal Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-txt-muted">
                    <div>
                        &copy; {new Date().getFullYear()} Aman Kumar • All Rights Reserved
                    </div>
                    <div className="flex items-center gap-6">
                        <span>New Delhi, India</span>
                        <span className="text-txt-dim">•</span>
                        <span>Designed &amp; Engineered by Aman</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;