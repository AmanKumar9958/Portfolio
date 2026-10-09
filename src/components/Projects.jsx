import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMonitor, FiSmartphone, FiLayers, FiZap } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = [
        {
            id: 'web',
            title: 'Web Systems & Platforms',
            subtitle: 'High-conversion, resilient digital architectures built with modern React, Next.js, and clean backend APIs.',
            route: '/projects-web-development',
            image: '/Bento_Grid_Web.png',
            stats: [
                { value: '25+', label: 'Releases' },
                { value: '99%', label: 'Lighthouse' },
            ],
            tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'REST APIs'],
        },
        {
            id: 'mobile',
            title: 'Mobile Applications',
            subtitle: 'Native-feel applications for iOS and Android engineered for retention, offline sync, and real-world utility.',
            route: '/projects-app-development',
            image: '/Bento_Grid_Mobile.png',
            stats: [
                { value: '05+', label: 'Shipped Apps' },
                { value: '4.8', label: 'Play Store' },
            ],
            tags: ['React Native', 'Expo', 'Supabase', 'Firebase', 'Stripe', 'Cashfree'],
        },
    ];

    const principles = [
        { icon: <FiLayers className="w-4 h-4" />, label: 'Architectural Rigor' },
        { icon: <FiZap className="w-4 h-4" />, label: 'Lighthouse 95+' },
        { icon: <FiMonitor className="w-4 h-4" />, label: 'Production Ready' },
        { icon: <FiSmartphone className="w-4 h-4" />, label: 'Mobile Optimized' },
    ];

    return (
        <div className="relative min-h-screen bg-surface overflow-hidden">
            {/* ====== HERO ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.08]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                        // Selected Works Archive
                    </span>

                    <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-txt-primary">
                        Selected Works &amp; Case Studies.
                    </h1>

                    <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-txt-secondary font-body">
                        Each release represents a careful collaboration between architectural engineering and visual clarity—engineered to scale and perform.
                    </p>
                </motion.div>

                {/* Principles row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-10 flex flex-wrap gap-3"
                >
                    {principles.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-surface-secondary px-4 py-2 text-txt-secondary"
                        >
                            <span className="text-accent">{p.icon}</span>
                            <span className="font-mono text-xs font-semibold">{p.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ====== CATEGORY CARDS ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16">
                <div className="space-y-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            data-cursor="view"
                            data-cursor-text="EXPLORE"
                        >
                            <Link to={cat.route} className="block group">
                                <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-surface-secondary hover:border-white/20 transition-all duration-300">
                                    {/* Background preview */}
                                    <div className="absolute inset-0">
                                        <motion.img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="h-full w-full object-cover object-top"
                                            initial={{ scale: 1, opacity: 0.1 }}
                                            animate={{
                                                scale: hoveredIndex === index ? 1.05 : 1,
                                                opacity: hoveredIndex === index ? 0.2 : 0.1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-surface-secondary via-surface-secondary/90 to-surface-secondary/60" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8 p-8 sm:p-12 md:p-14 min-h-[320px]">
                                        {/* Left: Info */}
                                        <div className="md:col-span-8 space-y-6">
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-4xl sm:text-5xl font-bold text-txt-dim leading-none select-none">
                                                    0{index + 1}
                                                </span>
                                                <span className="font-mono text-[11px] px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-accent uppercase tracking-wider">
                                                    {cat.id === 'web' ? 'Full Stack Web' : 'iOS & Android'}
                                                </span>
                                            </div>

                                            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-txt-primary group-hover:text-accent transition-colors">
                                                {cat.title}
                                            </h2>

                                            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-txt-secondary font-body">
                                                {cat.subtitle}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {cat.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="font-mono text-[11px] rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-txt-muted"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent pt-2">
                                                <span>View Deep Dive Case Studies</span>
                                                <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>

                                        {/* Right: Metrics */}
                                        <div className="md:col-span-4 flex md:flex-col gap-4">
                                            {cat.stats.map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-2xl border border-white/[0.06] bg-surface-tertiary p-6 text-center md:text-left"
                                                >
                                                    <p className="font-display text-3xl sm:text-4xl font-bold text-txt-primary">
                                                        {stat.value}
                                                    </p>
                                                    <p className="font-mono text-[11px] uppercase tracking-wider text-txt-muted mt-1">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ====== BOTTOM CTA ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-24">
                <div className="rounded-3xl border border-white/[0.1] bg-surface-secondary p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-2 block">
                            // Start A Project
                        </span>
                        <h3 className="font-display text-2xl sm:text-4xl font-bold text-txt-primary">
                            Have an upcoming product in mind?
                        </h3>
                        <p className="text-sm text-txt-secondary mt-2 max-w-md font-body">
                            Let&apos;s evaluate your technical scope and bring your vision to life.
                        </p>
                    </div>
                    <MagneticButton
                        as="a"
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors flex-shrink-0"
                    >
                        Schedule a Conversation
                        <FiArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                </div>
            </div>
        </div>
    );
};

export default Projects;
