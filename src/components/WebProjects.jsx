import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";

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
            <div className="flex h-36 items-end border-b border-slate-200 bg-[linear-gradient(135deg,#eef2ff_0%,#fff4ed_100%)] p-4 dark:border-slate-800 dark:bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]">
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
                        Visit
                        <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

const WebProjects = () => {
    const projects = [
        {
            title: "Trip Genius",
            shortDescription: "AI-powered travel planning made simple.",
            image: "/assets/Trip-Genius.png",
            tools: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
            timeline: "2 Weeks",
            link: "https://trip-genius.netlify.app/"
        },
        {
            title: "DH Clothing",
            shortDescription: "E-commerce platform for trendy apparel.",
            image: "/assets/DH_Clothing.png",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Tailwind CSS"],
            timeline: "4 Weeks",
            link: "https://dhclothing.in/"
        },
        {
            title: "OmniTools",
            shortDescription: "All-in-one productivity suite for all.",
            image: "/assets/OmniTools.png",
            tools: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
            timeline: "3 Weeks",
            link: "https://omnitools-beta.vercel.app/" 
        },
        {
            title: "ApplyPath",
            shortDescription: "Streamlining the hiring process.",
            image: "/assets/ApplyPath.png",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            timeline: "5 Weeks",
            link: "https://applypath.netlify.app/"
        },
        {
            title: "KeyClash",
            shortDescription: "Test your typing speed in real-time.",
            image: "/assets/keyClash.png",
            tools: ["React", "CSS3", "Random Words API"],
            timeline: "2 Weeks",
            link: "https://keyclash.netlify.app/" 
        },
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#f7f9ff_0%,#eef4ff_55%,#fff6f3_100%)] px-5 pb-14 pt-24 text-slate-900 dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)] dark:text-slate-100 sm:px-7">
            <div className="mx-auto max-w-5xl" style={{ fontFamily: '"Space Grotesk", "Manrope", sans-serif' }}>
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="space-y-5"
                    >
                        <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                            Web Portfolio
                        </p>

                        <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                            Web
                            <span className="block bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Responsive, conversion-minded interfaces with clean architecture and measurable performance.
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            {[
                                { name: "React", icon: <FaReact className="text-blue-500" />, color: "bg-blue-50 text-blue-700" },
                                { name: "Next.js", icon: <SiNextdotjs className="text-slate-900" />, color: "bg-slate-100 text-slate-700" },
                                { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, color: "bg-cyan-50 text-cyan-700" },
                                { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, color: "bg-green-50 text-green-700" },
                                { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, color: "bg-green-50 text-green-800" },
                                { name: "TypeScript", icon: <SiTypescript className="text-blue-700" />, color: "bg-blue-50 text-blue-700" },
                                { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, color: "bg-orange-50 text-orange-700" },
                                { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, color: "bg-blue-50 text-blue-700" }
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
                                <p className="text-2xl font-black text-slate-900 dark:text-slate-100">25+</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">web launches</p>
                            </div>
                            <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />
                            <div>
                                <p className="text-2xl font-black text-slate-900 dark:text-slate-100">100%</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">client satisfaction</p>
                            </div>
                        </div>

                        <Link
                            to="/projects-app-development"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            View Mobile Projects <FaArrowRight className="text-[10px]" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="flex justify-center items-center relative"
                    >
                        <div className="absolute h-52 w-52 rounded-full bg-indigo-100 dark:bg-indigo-900/40" />
                        <motion.img
                            src="/3D_Figure_Web.webp"
                            alt="Web Development 3D"
                            className="w-full max-w-[260px] object-contain z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                <div className="mt-10">
                    <h2 className="mb-7 text-2xl font-black uppercase tracking-wide text-slate-900 dark:text-slate-100 sm:text-3xl">
                        Featured Web Projects
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

export default WebProjects;
