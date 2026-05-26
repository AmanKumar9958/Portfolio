import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import GradientOrbs from './GradientOrbs';
import TextReveal from './TextReveal';

const Projects = () => {
    const tape = [
        'Tactile Maximalism',
        'Exaggerated Hierarchy',
        'Layered Contrast',
        'Human-Crafted Motion',
        'Performance-First Build',
        'Editorial Grid System'
    ];

    const lanes = [
        {
            title: 'Web Systems',
            subtitle: 'High-conversion interfaces with speed, clarity, and visual identity.',
            route: '/projects-web-development',
            buttonText: 'See Web Projects',
            badge: 'Desktop + Web',
            image: '/Bento_Grid_Web.png',
            statA: '25+',
            statALabel: 'launches',
            statB: '99%',
            statBLabel: 'lighthouse target'
        },
        {
            title: 'Mobile Products',
            subtitle: 'Native-feel apps crafted for retention, delight, and real usage.',
            route: '/projects-app-development',
            buttonText: 'See Mobile Projects',
            badge: 'iOS + Android',
            image: '/Bento_Grid_Mobile.png',
            statA: '5+',
            statALabel: 'apps shipped',
            statB: '4.8',
            statBLabel: 'avg user rating'
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-surface px-5 pb-14 pt-28 sm:px-7 lg:px-8">
            <GradientOrbs variant="default" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 mx-auto max-w-5xl font-display">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="mb-10"
                >
                    <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-txt-secondary">
                        Selected Work 2026
                    </span>

                    <h1 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.96] tracking-tight sm:text-6xl lg:text-8xl text-txt-primary">
                        Projects
                        <span className="block text-base font-semibold uppercase tracking-[0.3em] text-txt-muted mt-3">
                            strategy × engineering × craft
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-txt-secondary">
                        Each project blends tactile depth, oversized hierarchy, and clean interaction logic — without sacrificing usability.
                    </p>
                </motion.div>

                {/* Marquee Tape */}
                <div className="relative mb-8 overflow-hidden rounded-xl glass-card py-3">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="flex min-w-max items-center gap-5 px-4"
                    >
                        {[...tape, ...tape].map((item, i) => (
                            <div key={`${item}-${i}`} className="flex items-center gap-5">
                                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-txt-secondary">{item}</span>
                                <span className="h-1 w-1 rounded-full bg-accent-violet/50" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Project Lanes */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    {lanes.map((lane, index) => (
                        <motion.article
                            key={lane.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-secondary shadow-glass ${
                                index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
                            }`}
                        >
                            <img
                                src={lane.image}
                                alt={lane.title}
                                className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/70 to-surface/95" />

                            <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-6 sm:p-8">
                                <div>
                                    <span className="inline-flex rounded-full bg-accent-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                                        {lane.badge}
                                    </span>

                                    <h2 className="mt-5 text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl text-txt-primary">
                                        {lane.title}
                                    </h2>

                                    <p className="mt-3 max-w-md text-sm leading-relaxed text-txt-secondary">
                                        {lane.subtitle}
                                    </p>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-3 glass-card p-4">
                                        <div>
                                            <p className="text-xl font-bold text-txt-primary">{lane.statA}</p>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-txt-muted">{lane.statALabel}</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-txt-primary">{lane.statB}</p>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-txt-muted">{lane.statBLabel}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to={lane.route}
                                        className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:shadow-glow hover:scale-105"
                                    >
                                        {lane.buttonText}
                                        <FiArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-8 glass-card p-6"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-relaxed text-txt-secondary">
                            Want your product to feel this intentional? Let&apos;s shape your next release with design precision and engineering rigor.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white hover:shadow-glow transition-shadow"
                        >
                            Start a Project
                            <FiArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
