import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiCheck, FiCopy } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const Contact = () => {
    const [result, setResult] = useState('');
    const [sending, setSending] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("tech.aman2799@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2400);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        setResult("Transmitting message...");

        try {
            const formData = new FormData(event.target);
            formData.append("access_key", "cc329a4e-142d-45e5-90c3-b964aa88f312");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message successfully sent! I will respond promptly.");
                event.target.reset();
            } else {
                setResult(data.message || "Submission failed. Please email directly.");
            }
        } catch (err) {
            setResult("An error occurred. Please contact via email directly.");
        } finally {
            setSending(false);
            setTimeout(() => setResult(""), 4500);
        }
    };

    return (
        <section className="w-full min-h-screen bg-surface px-6 sm:px-10 py-32 sm:py-40 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 sm:mb-20"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                        // Direct Contact &amp; Inquiries
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-txt-primary">
                        Initiate A Conversation.
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-txt-secondary leading-relaxed font-body">
                        Have an engineering requirement, mobile application, or product launch? Fill out the brief below or reach out directly via email.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Direct Email Card */}
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-6 sm:p-8 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-wider text-txt-muted block">
                                Primary Email
                            </span>
                            <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/[0.06] bg-surface-tertiary">
                                <span className="font-mono text-xs sm:text-sm text-txt-primary select-all truncate">
                                    tech.aman2799@gmail.com
                                </span>
                                <button
                                    onClick={handleCopyEmail}
                                    data-cursor="pointer"
                                    title="Copy Email"
                                    className="p-2 rounded-lg bg-white/5 hover:bg-accent text-txt-primary hover:text-white transition-colors flex-shrink-0"
                                >
                                    {emailCopied ? (
                                        <FiCheck className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <FiCopy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            {emailCopied && (
                                <span className="font-mono text-xs text-emerald-400 block">
                                    ✓ Email address copied to clipboard!
                                </span>
                            )}
                        </div>

                        {/* Location & Status */}
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-6 sm:p-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-mono text-xs uppercase tracking-wider text-txt-primary font-semibold">
                                    Current Status: Available
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed font-body">
                                Taking on full-stack web architectures, mobile application contracts, and consulting projects for Q2 2026.
                            </p>
                            <div className="pt-2 font-mono text-xs text-txt-muted flex items-center gap-2">
                                <FiMapPin className="w-3.5 h-3.5 text-accent" />
                                <span>Based in New Delhi, India • Remote worldwide</span>
                            </div>
                        </div>

                        {/* Social Profiles */}
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-6 sm:p-8 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-wider text-txt-muted block">
                                Verified Profiles
                            </span>
                            <div className="flex flex-wrap gap-3">
                                <MagneticButton
                                    as="a"
                                    href="https://github.com/AmanKumar9958/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-tertiary px-5 py-2.5 font-mono text-xs text-txt-secondary hover:text-white hover:border-white/20 transition-all"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    GitHub
                                </MagneticButton>

                                <MagneticButton
                                    as="a"
                                    href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-tertiary px-5 py-2.5 font-mono text-xs text-txt-secondary hover:text-white hover:border-white/20 transition-all"
                                >
                                    <FaLinkedin className="w-4 h-4 text-sky-400" />
                                    LinkedIn
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={onSubmit}
                            className="rounded-3xl border border-white/[0.1] bg-surface-secondary p-8 sm:p-12 space-y-6 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Alex Mercer"
                                        className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="alex@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                    Project Scope / Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Next.js web app / React Native mobile project"
                                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                    Project Requirements &amp; Timeline *
                                </label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    required
                                    placeholder="Describe your technical requirements, goals, preferred timeline, or questions..."
                                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <MagneticButton
                                    as="button"
                                    type="submit"
                                    disabled={sending}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover disabled:opacity-50"
                                >
                                    <FiSend className="w-4 h-4" />
                                    {sending ? "Transmitting..." : "Send Message"}
                                </MagneticButton>

                                {result && (
                                    <span className="font-mono text-xs text-accent">
                                        {result}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
