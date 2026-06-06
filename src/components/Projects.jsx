import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMonitor, FiSmartphone, FiLayers, FiZap } from 'react-icons/fi';
import GradientOrbs from './GradientOrbs';
import MagneticButton from './MagneticButton';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = [
        {
            id: 'web',
            title: 'Web',
            titleAccent: 'Systems',
            icon: <FiMonitor className="w-6 h-6" />,
            subtitle: 'High-conversion interfaces with speed, clarity, and visual identity.',
            route: '/projects-web-development',
            image: '/Bento_Grid_Web.png',
            stats: [
                { value: '25+', label: 'Launches' },
                { value: '99%', label: 'Lighthouse' },
            ],
            tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
            color: 'violet',
        },
        {
            id: 'mobile',
            title: 'Mobile',
            titleAccent: 'Products',
            icon: <FiSmartphone className="w-6 h-6" />,
            subtitle: 'Native-feel apps crafted for retention, delight, and real usage.',
            route: '/projects-app-development',
            image: '/Bento_Grid_Mobile.png',
            stats: [
                { value: '5+', label: 'Apps Shipped' },
                { value: '4.8', label: 'Avg Rating' },
            ],
            tags: ['React Native', 'Expo', 'Firebase', 'Stripe'],
            color: 'cyan',
        },
    ];

    const principles = [
        { icon: <FiLayers className="w-5 h-5" />, label: 'Clean Architecture' },
        { icon: <FiZap className="w-5 h-5" />, label: 'Performance First' },
        { icon: <FiMonitor className="w-5 h-5" />, label: 'Pixel Perfect' },
        { icon: <FiSmartphone className="w-5 h-5" />, label: 'Mobile Ready' },
    ];

    return (
        <div className="relative min-h-screen bg-surface overflow-hidden">
            <GradientOrbs variant="hero" />
            <div className="absolute inset-0 grid-pattern" />

            {/* ====== HERO ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-txt-secondary mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                        Selected Work — 2026
                    </motion.span>

                    <h1 className="font-display text-6xl sm:text-7xl lg:text-[6.5rem] font-bold leading-[0.92] tracking-tight text-txt-primary">
                        Crafted
                        <br />
                        <span className="text-gradient">Projects</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-relaxed text-txt-secondary">
                        Each project is a collaboration between strategy, engineering, and visual craft — designed to perform and built to last.
                    </p>
                </motion.div>

                {/* Principles row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-10 flex flex-wrap gap-3"
                >
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -2, borderColor: 'rgba(139,92,246,0.25)' }}
                            className="flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-txt-secondary transition-colors duration-300"
                        >
                            <span className="text-accent-violet">{p.icon}</span>
                            <span className="text-xs font-semibold">{p.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ====== CATEGORY CARDS ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10">
                <div className="space-y-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.65, delay: index * 0.12 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Link to={cat.route} className="block group">
                                <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-secondary">
                                    {/* Background image */}
                                    <div className="absolute inset-0">
                                        <motion.img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="h-full w-full object-cover"
                                            initial={{ scale: 1, opacity: 0.12 }}
                                            animate={{
                                                scale: hoveredIndex === index ? 1.08 : 1,
                                                opacity: hoveredIndex === index ? 0.22 : 0.12,
                                            }}
                                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-surface-secondary via-surface-secondary/85 to-surface-secondary/40" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-8 sm:p-10 md:p-12 min-h-[300px] sm:min-h-[340px]">
                                        {/* Left: Info (8 cols) */}
                                        <div className="md:col-span-8 space-y-5">
                                            {/* Index number + badge */}
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-5xl sm:text-6xl font-bold text-white/[0.06] leading-none select-none">
                                                    0{index + 1}
                                                </span>
                                                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${
                                                    cat.color === 'violet'
                                                        ? 'bg-accent-violet/15 text-accent-violet border border-accent-violet/20'
                                                        : 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20'
                                                }`}>
                                                    {cat.icon}
                                                    {cat.id === 'web' ? 'Desktop + Web' : 'iOS + Android'}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight">
                                                <span className="text-txt-primary">{cat.title}</span>{' '}
                                                <span className="text-gradient">{cat.titleAccent}</span>
                                            </h2>

                                            <p className="max-w-md text-sm leading-relaxed text-txt-secondary">
                                                {cat.subtitle}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {cat.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] font-semibold text-txt-muted"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <motion.div
                                                className="inline-flex items-center gap-2 text-sm font-semibold"
                                                animate={{ x: hoveredIndex === index ? 8 : 0 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                            >
                                                <span className={cat.color === 'violet' ? 'text-accent-violet' : 'text-accent-cyan'}>
                                                    View Projects
                                                </span>
                                                <FiArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                                                    hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''
                                                } ${cat.color === 'violet' ? 'text-accent-violet' : 'text-accent-cyan'}`} />
                                            </motion.div>
                                        </div>

                                        {/* Right: Stats (4 cols) */}
                                        <div className="md:col-span-4 flex md:flex-col gap-4">
                                            {cat.stats.map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ borderColor: cat.color === 'violet' ? 'rgba(139,92,246,0.2)' : 'rgba(6,182,212,0.2)' }}
                                                    className="flex-1 rounded-2xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm p-5 text-center md:text-left"
                                                >
                                                    <p className={`text-3xl sm:text-4xl font-bold font-display ${
                                                        cat.color === 'violet' ? 'text-accent-violet' : 'text-accent-cyan'
                                                    }`}>
                                                        {stat.value}
                                                    </p>
                                                    <p className="text-[11px] uppercase tracking-[0.16em] text-txt-muted mt-1">
                                                        {stat.label}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom border glow on hover */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                                            cat.color === 'violet'
                                                ? 'bg-gradient-to-r from-transparent via-accent-violet to-transparent'
                                                : 'bg-gradient-to-r from-transparent via-accent-cyan to-transparent'
                                        }`}
                                        initial={{ opacity: 0, scaleX: 0.3 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            scaleX: hoveredIndex === index ? 1 : 0.3,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ====== BOTTOM CTA ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 sm:p-10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary mb-2">
                                Have a vision? <span className="text-gradient">Let&apos;s build it.</span>
                            </h3>
                            <p className="text-sm text-txt-secondary max-w-lg">
                                From concept to launch — I bring design precision and engineering rigor to every project.
                            </p>
                        </div>
                        <MagneticButton
                            as="a"
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow duration-300 flex-shrink-0"
                        >
                            Start a Project
                            <FiArrowUpRight className="w-4 h-4" />
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
