import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import GradientOrbs from "./GradientOrbs";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group glass-card overflow-hidden"
        >
            <div className="flex h-36 items-end border-b border-white/[0.04] bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-5">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-txt-muted">Project</p>
                    <h3 className="mt-1 text-xl font-bold tracking-wide text-txt-primary font-display">
                        {project.title}
                    </h3>
                </div>
            </div>

            <div className="space-y-4 p-5">
                <p className="text-sm leading-relaxed text-txt-secondary">{project.shortDescription}</p>

                <div>
                    <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-txt-muted">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                            <span key={i} className="rounded-full bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-txt-secondary">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-txt-muted">Build to launch</p>
                        <p className="text-base font-bold text-txt-primary font-mono">{project.timeline}</p>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white hover:shadow-glow transition-shadow"
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
            tools: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
            timeline: "2 Weeks",
            link: "https://trip-genius.netlify.app/"
        },
        {
            title: "DH Clothing",
            shortDescription: "E-commerce platform for trendy apparel.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Tailwind CSS"],
            timeline: "4 Weeks",
            link: "https://dhclothing.in/"
        },
        {
            title: "OmniTools",
            shortDescription: "All-in-one productivity suite for all.",
            tools: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
            timeline: "3 Weeks",
            link: "https://omnitools-beta.vercel.app/"
        },
        {
            title: "ApplyPath",
            shortDescription: "Streamlining the hiring process.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            timeline: "5 Weeks",
            link: "https://applypath.netlify.app/"
        },
        {
            title: "KeyClash",
            shortDescription: "Test your typing speed in real-time.",
            tools: ["React", "CSS3", "Random Words API"],
            timeline: "2 Weeks",
            link: "https://keyclash.netlify.app/"
        },
    ];

    const techPills = [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> }
    ];

    return (
        <div className="min-h-screen bg-surface px-5 pb-14 pt-28 sm:px-7">
            <GradientOrbs variant="default" />
            <div className="relative z-10 mx-auto max-w-5xl font-display">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    {/* Left: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="space-y-5"
                    >
                        <p className="inline-flex rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-txt-secondary">
                            Web Portfolio
                        </p>

                        <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl text-txt-primary">
                            Web
                            <span className="block text-gradient">Projects</span>
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-txt-secondary">
                            Responsive, conversion-minded interfaces with clean architecture and measurable performance.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {techPills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-txt-secondary"
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 pt-2">
                            <div>
                                <p className="text-2xl font-bold text-gradient font-display">25+</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-txt-muted">web launches</p>
                            </div>
                            <div className="h-10 w-px bg-white/[0.06]" />
                            <div>
                                <p className="text-2xl font-bold text-gradient font-display">100%</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-txt-muted">client satisfaction</p>
                            </div>
                        </div>

                        <Link
                            to="/projects-app-development"
                            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white hover:shadow-glow transition-shadow"
                        >
                            View Mobile Projects <FaArrowRight className="text-[10px]" />
                        </Link>
                    </motion.div>

                    {/* Right: 3D Figure */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        className="flex justify-center items-center relative"
                    >
                        <div className="absolute h-52 w-52 rounded-full bg-accent-violet/10 blur-2xl" />
                        <motion.img
                            src="/3D_Figure_Web.webp"
                            alt="Web Development 3D"
                            className="w-full max-w-[260px] object-contain z-10"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="mt-12">
                    <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-txt-primary sm:text-3xl flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-accent-gradient rounded-full" />
                        Featured Web Projects
                    </h2>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-10 border-t border-white/[0.04] pt-6 text-center text-sm font-bold uppercase tracking-[0.18em] text-txt-muted">
                    More Soon
                </div>
            </div>
        </div>
    );
};

export default WebProjects;
