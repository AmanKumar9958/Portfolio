import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const tape = [
        'Tactile Maximalism',
        'Exaggerated Hierarchy',
        'Frosted Layers',
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
            accent: 'from-[#ffbf69] via-[#ff7f50] to-[#ff5d8f]',
            image: '/Bento_Grid_Web.png',
            statA: '25+',
            statALabel: 'launches',
            statB: '99',
            statBLabel: 'lighthouse target'
        },
        {
            title: 'Mobile Products',
            subtitle: 'Native-feel apps crafted for retention, delight, and real usage.',
            route: '/projects-app-development',
            buttonText: 'See Mobile Projects',
            accent: 'from-[#6ee7ff] via-[#3abff8] to-[#0f6fff]',
            image: '/Bento_Grid_Mobile.png',
            statA: '5+',
            statALabel: 'apps shipped',
            statB: '4.8',
            statBLabel: 'avg user rating'
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f6f7fb_0%,#f1fbff_38%,#fff7ef_100%)] px-5 pb-20 pt-28 text-slate-900 sm:px-8 lg:px-10">
            <div className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-orange-200/45 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-200/35 blur-3xl" />

            <div className="mx-auto max-w-6xl" style={{ fontFamily: '"Space Grotesk", "Manrope", sans-serif' }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="mb-10"
                >
                    <span className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur-md">
                        Selected Work 2026
                    </span>

                    <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-[7.2rem]">
                        Projects
                        <span className="block text-[0.38em] font-semibold uppercase tracking-[0.34em] text-slate-500 sm:text-[0.3em]">
                            strategy x engineering x craft
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                        Inspired by current web trends, this page blends tactile depth, oversized hierarchy, and clean interaction logic without sacrificing usability.
                    </p>
                </motion.div>

                <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/75 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-lg">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="flex min-w-max items-center gap-6 px-4"
                    >
                        {[...tape, ...tape].map((item, i) => (
                            <div key={`${item}-${i}`} className="flex items-center gap-6">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">{item}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    {lanes.map((lane, index) => (
                        <motion.article
                            key={lane.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            whileHover={{ y: -7, rotate: index === 0 ? -0.35 : 0.35 }}
                            className={`group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/55 shadow-[0_16px_45px_rgba(15,23,42,0.1)] backdrop-blur-xl ${
                                index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
                            }`}
                        >
                            <img
                                src={lane.image}
                                alt={lane.title}
                                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#0f172a]/50 to-[#020617]/88" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.32),transparent_42%)]" />

                            <div className="relative z-10 flex min-h-[410px] flex-col justify-between p-7 sm:p-9">
                                <div>
                                    <span className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 ${lane.accent}`}>
                                        {index === 0 ? 'Desktop + Web' : 'iOS + Android'}
                                    </span>

                                    <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl">
                                        {lane.title}
                                    </h2>

                                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
                                        {lane.subtitle}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-5">
                                    <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                                        <div>
                                            <p className="text-2xl font-black sm:text-3xl">{lane.statA}</p>
                                            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">{lane.statALabel}</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black sm:text-3xl">{lane.statB}{index === 0 ? '%' : ''}</p>
                                            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">{lane.statBLabel}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to={lane.route}
                                        className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:translate-x-1 hover:border-white hover:bg-white hover:text-slate-900"
                                    >
                                        {lane.buttonText}
                                        <span aria-hidden="true" className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-8 rounded-[26px] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                            Want your product to feel this intentional? Let us shape your next release with design precision and engineering rigor.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition-transform hover:scale-105"
                        >
                            Start a Project
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
