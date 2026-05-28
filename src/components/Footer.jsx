import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="relative w-full overflow-hidden bg-surface-secondary">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-accent-gradient opacity-40" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
                {/* ── Top Grid: Tagline | Quick Links | Contact ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16"
                >
                    {/* Tagline */}
                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-txt-primary">
                            Building Digital
                            <br />
                            Products
                            <br />
                            for <span className="text-gradient">Growth.</span>
                        </h2>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-txt-muted mb-5 tracking-wide">
                            <span className="text-accent-violet">/</span>Quick links
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-txt-secondary hover:text-txt-primary hover:border-accent-violet/25 hover:bg-accent-violet/5 transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-txt-muted mb-5 tracking-wide">
                            <span className="text-accent-violet">/</span>Contact
                        </h3>
                        <a
                            href="mailto:[EMAIL_ADDRESS]"
                            className="text-sm text-txt-secondary hover:text-accent-violet transition-colors duration-300 font-medium"
                        >
                            amancollege04@gmail.com
                        </a>

                        {/* Social */}
                        <div className="flex items-center gap-3 mt-5">
                            <MagneticButton
                                as="a"
                                href="https://github.com/AmanKumar9958/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                            >
                                <FaGithub className="w-4 h-4 text-txt-secondary" />
                            </MagneticButton>
                            <MagneticButton
                                as="a"
                                href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                            >
                                <FaLinkedin className="w-4 h-4 text-txt-secondary" />
                            </MagneticButton>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Giant Background Text ── */}
            <div className="relative overflow-hidden">
                {/* The large "AMAN" text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <h2
                        className="font-display font-bold text-center select-none leading-[0.75] tracking-[30px] text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[20rem] xl:text-[24rem]"
                        style={{ color: 'rgba(255,255,255,0.03)' }}
                    >
                        AMAN
                    </h2>
                </motion.div>

                {/* Bottom bar sits over the big text */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="font-mono text-xs text-txt-muted">
                            &copy; {new Date().getFullYear()} Aman Kumar
                        </p>
                        <p className="font-mono text-xs text-txt-muted">
                            Designed & Built by Aman
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;