import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaAndroid, FaApple, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { SiExpo, SiFirebase } from "react-icons/si";

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="flex h-36 items-end border-b border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#eff6ff_100%)] p-4 dark:border-slate-800 dark:bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Project</p>
                    <h3 className="mt-1 text-xl font-black uppercase tracking-wide text-slate-900 dark:text-white">
                        {project.title}
                    </h3>
                </div>
            </div>

            <div className="space-y-4 p-4">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.shortDescription}</p>

                <div>
                    <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Used tools</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                                    <span key={i} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                        {tool}
                                    </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Build to launch</p>
                        <p className="text-base font-black text-slate-900 dark:text-slate-100">{project.timeline}</p>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                        View
                        <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

const MobileProjects = () => {
    const projects = [
        {
            title: "Chai Cafeteria",
            shortDescription: "Order your favorite food from the Chai Cafeteria",
            image: "/assets/Chai_Cafeteria.png",
            tools: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Stripe API"],
            timeline: "4 Weeks",
            link: "https://play.google.com/store/apps/details?id=com.chaicafeteriaranchi.frontend&pcampaignid=web_share"
        },
        {
            title: "Trip Genius App",
            shortDescription: "AI-powered travel planning made simple.",
            image: "/assets/Trip-Genius.png",
            tools: ["React Native", "Expo", "OpenAI API", "Firebase"],
            timeline: "4 Weeks",
            link: "https://github.com/AmanKumar9958/AI-Trip-Planner-App/releases/tag/v1"
        },
        {
            title: "Yoga Bar App",
            shortDescription: "Healthy snacks at your fingertips.",
            image: "/assets/Yoga_Bar_App.png",
            tools: ["React Native", "Expo", "Shopify API"],
            timeline: "1 Weeks",
            link: "https://github.com/AmanKumar9958/Yogabar-app"
        }
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#f7f9ff_0%,#eefcfa_52%,#f2f9ff_100%)] px-5 pb-14 pt-24 text-slate-900 dark:bg-[linear-gradient(135deg,#020617_0%,#0b1320_45%,#111827_100%)] dark:text-slate-100 sm:px-7">
            <div className="mx-auto max-w-5xl" style={{ fontFamily: '"Space Grotesk", "Manrope", sans-serif' }}>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="space-y-5"
                    >
                        <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Mobile Portfolio
                        </p>

                        <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                            Mobile
                            <span className="block bg-gradient-to-r from-emerald-500 to-sky-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Production-ready mobile apps with stable architecture, smooth UX, and strong retention-focused features.
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            {[
                                { name: "React Native", icon: <FaReact className="text-blue-500" />, color: "bg-blue-50 text-blue-700" },
                                { name: "Expo", icon: <SiExpo className="text-slate-700" />, color: "bg-slate-100 text-slate-700" },
                                { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, color: "bg-yellow-50 text-yellow-700" },
                                { name: "Android", icon: <FaAndroid className="text-green-600" />, color: "bg-green-50 text-green-700" },
                                { name: "iOS", icon: <FaApple className="text-slate-700" />, color: "bg-slate-100 text-slate-700" }
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${skill.color}`}
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-5 pt-1">
                            <div>
                                <p className="text-2xl font-black text-slate-900 dark:text-slate-100">5+</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">apps deployed</p>
                            </div>
                            <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />
                            <div>
                                <p className="text-2xl font-black text-slate-900 dark:text-slate-100">4.8/5</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">avg rating</p>
                            </div>
                        </div>

                        <Link
                            to="/projects-web-development"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            View Web Projects <FaArrowRight className="text-[10px]" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="flex justify-center items-center relative"
                    >
                        <div className="absolute h-52 w-52 rounded-full bg-cyan-100 dark:bg-cyan-900/40" />
                        <motion.img
                            src="/3D_Figure_Mobile.webp"
                            alt="Mobile Development 3D"
                            className="w-full max-w-[260px] object-contain z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                <div className="mt-10">
                    <h2 className="mb-7 text-2xl font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 sm:text-3xl">
                        Featured Mobile Projects
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-300 pt-6 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    More Soon
                </div>
            </div>
        </div>
    );
};

export default MobileProjects;
