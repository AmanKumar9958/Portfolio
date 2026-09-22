import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Footer = () => {
    const quickLinks = [
        { name: 'Index', path: '/' },
        { name: 'Selected Work', path: '/projects' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' },
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
                            >
                                <FaGithub className="w-4 h-4" />
                            </MagneticButton>

                            <MagneticButton
                                as="a"
                                href="https://www.linkedin.com/in/aman-kumar-47407823b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/[0.1] bg-surface-tertiary flex items-center justify-center text-txt-secondary hover:text-white hover:border-accent transition-all duration-300"
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

                {/* Bottom Legal / Colophon Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-txt-muted">
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