import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GradientOrbs from './GradientOrbs';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

const Contact = () => {
    const [result, setResult] = useState('');
    const [sending, setSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "cc329a4e-142d-45e5-90c3-b964aa88f312");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully! ✨");
            setTimeout(() => setResult(""), 3000);
            event.target.reset();
        } else {
            console.error("Error:", data);
            setResult(data.message);
            setTimeout(() => setResult(""), 3000);
        }
        setSending(false);
    };

    return (
        <section className="w-full min-h-screen bg-surface px-6 py-28 relative overflow-hidden">
            <GradientOrbs variant="default" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                        Get In Touch
                    </span>
                    <TextReveal className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Let&apos;s Talk
                    </TextReveal>
                    <p className="text-lg text-txt-secondary max-w-xl mx-auto">
                        Have a project in mind? Let&apos;s build something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Info Cards */}
                        <div className="glass-card p-6 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-violet/10 text-accent-violet flex-shrink-0">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-display text-sm font-bold text-txt-primary mb-1">Email</h3>
                                    <p className="text-sm text-txt-secondary">amanchaurasia1652@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-display text-sm font-bold text-txt-primary mb-1">Location</h3>
                                    <p className="text-sm text-txt-secondary">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6">
                            <h3 className="font-display text-sm font-bold text-txt-primary mb-4">Connect With Me</h3>
                            <div className="flex gap-3">
                                <MagneticButton
                                    as="a"
                                    href="https://github.com/AmanKumar9958/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                                >
                                    <FaGithub className="w-5 h-5 text-txt-secondary" />
                                </MagneticButton>
                                <MagneticButton
                                    as="a"
                                    href="https://www.linkedin.com/in/aman-kumar-39a7b7292/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                                >
                                    <FaLinkedin className="w-5 h-5 text-txt-secondary" />
                                </MagneticButton>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <h3 className="font-display text-sm font-bold text-txt-primary">Currently Available</h3>
                            </div>
                            <p className="text-sm text-txt-secondary">
                                Open for freelance projects and full-time opportunities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-8">
                            <form onSubmit={onSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-txt-muted">
                                        Your Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary placeholder-txt-muted text-sm font-body focus:border-accent-violet/40 focus:outline-none focus:ring-1 focus:ring-accent-violet/20 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-txt-muted">
                                        Email Address
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary placeholder-txt-muted text-sm font-body focus:border-accent-violet/40 focus:outline-none focus:ring-1 focus:ring-accent-violet/20 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-txt-muted">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary placeholder-txt-muted text-sm font-body focus:border-accent-violet/40 focus:outline-none focus:ring-1 focus:ring-accent-violet/20 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <input type="hidden" name="access_key" value="cc329a4e-142d-45e5-90c3-b964aa88f312" />

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-accent-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <FiSend className="w-4 h-4" />
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>

                                {/* Result */}
                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 text-center rounded-xl bg-accent-violet/10 border border-accent-violet/20 text-accent-hover text-sm font-medium"
                                    >
                                        {result}
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
