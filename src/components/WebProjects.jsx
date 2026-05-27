import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { FiArrowUpRight, FiExternalLink, FiClock, FiCode } from "react-icons/fi";
import GradientOrbs from "./GradientOrbs";
import TextReveal from "./TextReveal";

/* ────── Tilt Card with cursor-following glow ────── */
const ProjectCard = ({ project, index, featured = false }) => {
    const cardRef = useRef(null);
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-4, 4]), springConfig);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
        setGlowPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setGlowPos({ x: 50, y: 50 });
    };

    return (
        <motion.article
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: featured ? rotateX : 0,
                rotateY: featured ? rotateY : 0,
                transformPerspective: 800,
            }}
            className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-surface-secondary transition-colors duration-500 hover:border-accent-violet/20 ${
                featured ? 'md:col-span-2' : ''
            }`}
        >
            {/* Cursor-following glow */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(139,92,246,0.06), transparent 50%)`,
                }}
            />

            <div className={`relative z-10 ${featured ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col'}`}>
                {/* Header area */}
                <div className={`border-b md:border-b-0 ${featured ? 'md:border-r' : ''} border-white/[0.04] p-6 sm:p-8 flex flex-col justify-between`}>
                    {/* Top row */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-4xl font-bold text-white/[0.05] select-none leading-none">
                                0{index + 1}
                            </span>
                            {featured && (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-violet">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                                    Featured
                                </span>
                            )}
                        </div>

                        <h3 className={`font-display font-bold text-txt-primary mb-2 ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                            {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-txt-secondary mb-5">
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Meta */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-txt-muted">
                            <FiClock className="w-3.5 h-3.5" />
                            <span className="text-xs font-semibold">{project.timeline}</span>
                        </div>
                    </div>
                </div>

                {/* Details area */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                    {/* Tech stack */}
                    <div className="mb-6">
                        <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-txt-muted mb-3">
                            <FiCode className="w-3.5 h-3.5" />
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-txt-secondary transition-colors duration-300 hover:border-accent-violet/20 hover:text-txt-primary"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 self-start rounded-full bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-sm font-semibold text-txt-primary transition-all duration-300 hover:bg-accent-gradient hover:border-transparent hover:text-white hover:shadow-glow group/btn"
                    >
                        <span>Visit Project</span>
                        <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
            shortDescription: "AI-powered travel planning that generates personalized itineraries using OpenAI. Plan smarter, travel better.",
            tools: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
            timeline: "2 Weeks",
            link: "https://trip-genius.netlify.app/"
        },
        {
            title: "DH Clothing",
            shortDescription: "Full-stack e-commerce platform with payment integration, product catalog, and order management for trendy apparel.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Tailwind CSS"],
            timeline: "4 Weeks",
            link: "https://dhclothing.in/"
        },
        {
            title: "OmniTools",
            shortDescription: "All-in-one productivity suite with authentication, tool library, and a clean modular interface.",
            tools: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
            timeline: "3 Weeks",
            link: "https://omnitools-beta.vercel.app/"
        },
        {
            title: "ApplyPath",
            shortDescription: "Job application tracker that streamlines the hiring process with status boards, filters, and analytics.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            timeline: "5 Weeks",
            link: "https://applypath.netlify.app/"
        },
        {
            title: "KeyClash",
            shortDescription: "Real-time typing speed tester with live WPM tracking, accuracy metrics, and competitive challenges.",
            tools: ["React", "CSS3", "Random Words API"],
            timeline: "2 Weeks",
            link: "https://keyclash.netlify.app/"
        },
    ];

    const techStack = [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ];

    return (
        <div className="min-h-screen bg-surface overflow-hidden">
            <GradientOrbs variant="hero" />
            <div className="absolute inset-0 grid-pattern" />

            {/* ====== HERO ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-12 sm:pt-40 sm:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-10">
                    {/* Left: headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="md:col-span-7 space-y-5"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-txt-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                            Web Portfolio
                        </span>

                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight text-txt-primary">
                            Web
                            <br />
                            <span className="text-gradient">Projects</span>
                        </h1>

                        <p className="max-w-lg text-base leading-relaxed text-txt-secondary">
                            Responsive, conversion-minded interfaces with clean architecture and measurable performance.
                        </p>

                        {/* Tech stack pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {techStack.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.06 }}
                                    whileHover={{ y: -2, borderColor: 'rgba(139,92,246,0.25)' }}
                                    className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-txt-secondary transition-colors duration-300"
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: stats + link */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="md:col-span-5 flex flex-col gap-6"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-5 text-center">
                                <p className="text-3xl font-bold text-gradient font-display">25+</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-txt-muted mt-1">Web Launches</p>
                            </div>
                            <div className="glass-card p-5 text-center">
                                <p className="text-3xl font-bold text-gradient font-display">100%</p>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-txt-muted mt-1">Satisfaction</p>
                            </div>
                        </div>

                        <Link
                            to="/projects-app-development"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-txt-primary hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                        >
                            Switch to Mobile Projects
                            <FaArrowRight className="text-xs text-accent-cyan" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* ====== DIVIDER ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            {/* ====== PROJECTS ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-2xl font-bold text-txt-primary mb-10 flex items-center gap-3"
                >
                    <span className="w-8 h-[2px] bg-accent-gradient rounded-full" />
                    Featured Projects
                    <span className="font-mono text-sm font-normal text-txt-muted">({projects.length})</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            featured={index === 0}
                        />
                    ))}
                </div>
            </div>

            {/* ====== MORE SOON ====== */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/[0.04]" />
                    <span className="text-sm font-bold uppercase tracking-[0.18em] text-txt-muted font-display">
                        More Soon
                    </span>
                    <div className="flex-1 h-px bg-white/[0.04]" />
                </div>
            </div>
        </div>
    );
};

export default WebProjects;
