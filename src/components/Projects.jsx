import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f6f7fb_0%,#f1fbff_38%,#fff7ef_100%)] px-5 pb-14 pt-24 text-slate-900 dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_40%,#111827_100%)] dark:text-slate-100 sm:px-7 lg:px-8">
            <div className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-orange-200/45 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-200/35 blur-3xl" />

            <div className="mx-auto max-w-5xl" style={{ fontFamily: '"Space Grotesk", "Manrope", sans-serif' }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                        Selected Work 2026
                    </span>

                    <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-[5.6rem]">
                        Projects
                        <span className="block text-[0.38em] font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400 sm:text-[0.3em]">
                            strategy x engineering x craft
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                        Inspired by current web trends, this page blends tactile depth, oversized hierarchy, and clean interaction logic without sacrificing usability.
                    </p>
                </motion.div>

                <div className="relative mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="flex min-w-max items-center gap-4 px-3"
                    >
                        {[...tape, ...tape].map((item, i) => (
                            <div key={`${item}-${i}`} className="flex items-center gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">{item}</span>
                                <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                    {lanes.map((lane, index) => (
                        <motion.article
                            key={lane.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            whileHover={{ y: -7, rotate: index === 0 ? -0.35 : 0.35 }}
                            className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.1)] dark:border-slate-800 dark:bg-slate-900 ${
                                index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
                            }`}
                        >
                            <img
                                src={lane.image}
                                alt={lane.title}
                                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/35 via-[#0f172a]/68 to-[#020617]/90" />

                            <div className="relative z-10 flex min-h-[340px] flex-col justify-between p-5 sm:p-6">
                                <div>
                                    <span className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 ${lane.accent}`}>
                                        {index === 0 ? 'Desktop + Web' : 'iOS + Android'}
                                    </span>

                                    <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl">
                                        {lane.title}
                                    </h2>

                                    <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-200 sm:text-sm">
                                        {lane.subtitle}
                                    </p>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-500/40 bg-slate-900/72 p-3">
                                        <div>
                                            <p className="text-xl font-black sm:text-2xl">{lane.statA}</p>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">{lane.statALabel}</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-black sm:text-2xl">{lane.statB}{index === 0 ? '%' : ''}</p>
                                            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">{lane.statBLabel}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to={lane.route}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:translate-x-1 hover:border-slate-900 hover:bg-white hover:text-slate-900"
                                    >
                                        {lane.buttonText}
                                        <span aria-hidden="true" className="text-base">→</span>
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
                    className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 sm:p-6"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                            Want your product to feel this intentional? Let us shape your next release with design precision and engineering rigor.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition-transform hover:scale-105 dark:bg-white dark:text-slate-900"
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
