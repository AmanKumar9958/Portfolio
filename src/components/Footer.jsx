import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-surface-secondary border-t border-white/[0.04]">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-accent-gradient opacity-40" />

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-txt-muted mb-4">
                        Have a project in mind?
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
                        Let&apos;s <span className="text-gradient">work together</span>
                    </h2>
                    <MagneticButton
                        as="a"
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-4 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
                    >
                        Start a Conversation
                        <FiArrowUpRight className="w-5 h-5" />
                    </MagneticButton>
                </motion.div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.04]">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="font-display text-lg font-bold text-txt-primary">
                            Aman<span className="text-gradient">.</span>
                        </Link>
                        <span className="text-txt-muted text-sm">|</span>
                        <p className="text-sm text-txt-secondary">
                            Crafting digital experiences
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <MagneticButton
                            as="a"
                            href="https://github.com/AmanKumar9958/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                        >
                            <FaGithub className="w-4 h-4 text-txt-secondary" />
                        </MagneticButton>
                        <MagneticButton
                            as="a"
                            href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                        >
                            <FaLinkedin className="w-4 h-4 text-txt-secondary" />
                        </MagneticButton>
                    </div>

                    {/* Copyright */}
                    <p className="font-mono text-xs text-txt-muted">
                        &copy; {new Date().getFullYear()} Aman Kumar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;