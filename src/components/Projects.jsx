import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const lanes = [
        {
            title: 'Web Engineering',
            subtitle: 'Narrative-driven, conversion-first experiences',
            route: '/projects-web-development',
            buttonText: 'Explore Web Projects',
            accent: 'from-amber-300 via-orange-400 to-rose-500',
            image: '/Bento_Grid_Web.png',
            statA: '25+',
            statALabel: 'web launches',
            statB: '99%',
            statBLabel: 'performance focus'
        },
        {
            title: 'Mobile Products',
            subtitle: 'Fluid native-like apps built for daily use',
            route: '/projects-app-development',
            buttonText: 'Explore Mobile Projects',
            accent: 'from-cyan-300 via-sky-400 to-blue-600',
            image: '/Bento_Grid_Mobile.png',
            statA: '5+',
            statALabel: 'apps deployed',
            statB: '4.8',
            statBLabel: 'average user rating'
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0a0f1f] px-6 pb-20 pt-28 text-white sm:px-8">
            <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="mx-auto max-w-6xl" style={{ fontFamily: '"Space Grotesk", "Sora", sans-serif' }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                        Project Showcase
                    </span>

                    <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                        Crafted digital workspaces,
                        <span className="block bg-gradient-to-r from-cyan-300 via-white to-orange-300 bg-clip-text text-transparent">
                            engineered for impact.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        Select a lane to enter. Each collection highlights product thinking, visual execution, and performance-focused delivery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {lanes.map((lane, index) => (
                        <motion.article
                            key={lane.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl ${
                                index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                            }`}
                        >
                            <img
                                src={lane.image}
                                alt={lane.title}
                                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/85" />

                            <div className="relative z-10 flex min-h-[390px] flex-col justify-between p-7 sm:p-9">
                                <div>
                                    <span className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 ${lane.accent}`}>
                                        {index === 0 ? 'Desktop + Web' : 'iOS + Android'}
                                    </span>

                                    <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                                        {lane.title}
                                    </h2>

                                    <p className="mt-3 max-w-md text-sm text-slate-200 sm:text-base">
                                        {lane.subtitle}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-6">
                                    <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                                        <div>
                                            <p className="text-2xl font-black sm:text-3xl">{lane.statA}</p>
                                            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{lane.statALabel}</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black sm:text-3xl">{lane.statB}</p>
                                            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{lane.statBLabel}</p>
                                        </div>
                                    </div>

                                    <Link
                                        to={lane.route}
                                        className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/15 px-6 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-slate-900"
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
                    className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            Every project includes architecture planning, polished interaction design, and optimization for real-world performance.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-transform hover:scale-105"
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
