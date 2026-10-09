import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { FiExternalLink, FiClock, FiCode, FiArrowUpRight, FiLayers } from "react-icons/fi";

const ProjectCard = ({ project, index, featured = false }) => {
    const cardRef = useRef(null);
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 200, damping: 25 };
    const rotateX = useSpring(useTransform(mouseY, [-150, 150], [3, -3]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-3, 3]), springConfig);

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-cursor="view"
            data-cursor-text="VISIT"
            style={{
                rotateX: featured ? rotateX : 0,
                rotateY: featured ? rotateY : 0,
                transformPerspective: 800,
            }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-secondary transition-colors duration-300 hover:border-white/20 ${
                featured ? "md:col-span-2" : ""
            }`}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,85,0,0.06), transparent 60%)`,
                }}
            />

            <div className={`relative z-10 ${featured ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"}`}>
                <div className={`border-b md:border-b-0 ${featured ? "md:border-r" : ""} border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between`}>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-3xl sm:text-4xl font-bold text-txt-dim select-none leading-none">
                                0{index + 1}
                            </span>
                            {featured && (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-accent">
                                    Featured
                                </span>
                            )}
                        </div>

                        <h3 className={`font-display font-bold text-txt-primary mb-2 group-hover:text-accent transition-colors ${
                            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                        }`}>
                            {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-txt-secondary font-body mb-5">
                            {project.shortDescription}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-txt-muted">
                        <FiClock className="w-3.5 h-3.5 text-accent" />
                        <span>Timeline: {project.timeline}</span>
                    </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div className="mb-6">
                        <h4 className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-txt-muted mb-3">
                            <FiCode className="w-3.5 h-3.5 text-accent" />
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="rounded-md bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-txt-secondary"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full bg-white/[0.04] border border-white/[0.1] px-5 py-2.5 font-mono text-xs text-txt-primary transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white group/btn"
                    >
                        <span>Visit Live Project</span>
                        <FiExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

const WebProjects = () => {
    const projects = [
        {
            title: "Trip Genius Platform",
            shortDescription: "AI-powered travel planning web platform that generates personalized itineraries using OpenAI and Firebase authentication.",
            tools: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
            timeline: "2 Weeks",
            link: "https://trip-genius.netlify.app/",
            featured: true,
        },
        {
            title: "DH Clothing E-Commerce",
            shortDescription: "Full-stack apparel commerce platform with payment gateway integration, live inventory management, and fast cart checkout.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API"],
            timeline: "4 Weeks",
            link: "https://dhclothing.in/",
            featured: true,
        },
        {
            title: "OmniTools Productivity Suite",
            shortDescription: "Modular all-in-one productivity suite with authentication, multi-tool libraries, and scalable responsive layout.",
            tools: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
            timeline: "3 Weeks",
            link: "https://omnitools-beta.vercel.app/",
        },
        {
            title: "ApplyPath Job Pipeline",
            shortDescription: "Job application workflow tracker that streamlines candidate pipelines with status boards, filters, and analytics.",
            tools: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            timeline: "5 Weeks",
            link: "https://applypath.netlify.app/",
        },
        {
            title: "KeyClash Typing Engine",
            shortDescription: "Real-time competitive typing speed test platform with live WPM calculation, accuracy tracking, and streak counters.",
            tools: ["React", "JavaScript", "Random Words API", "CSS3"],
            timeline: "2 Weeks",
            link: "https://keyclash.netlify.app/",
        },
    ];

    const techStack = [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* ====== HERO ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-white/[0.08]">
                <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-7 space-y-4"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-accent block">
                            // Web Systems Portfolio
                        </span>

                        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-txt-primary">
                            Full-Stack Web Architectures.
                        </h1>

                        <p className="max-w-lg text-base leading-relaxed text-txt-secondary font-body">
                            Responsive, high-conversion interfaces engineered with clean system design, fast load metrics, and robust API backends.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {techStack.map((skill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-secondary px-3 py-1.5 font-mono text-xs text-txt-secondary"
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-5 text-center">
                                <p className="text-3xl font-bold font-display text-txt-primary">25+</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-txt-muted mt-1">Web Deployments</p>
                            </div>
                            <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-5 text-center">
                                <p className="text-3xl font-bold font-display text-txt-primary">100%</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-txt-muted mt-1">Client Satisfaction</p>
                            </div>
                        </div>

                        <Link
                            to="/projects-app-development"
                            className="inline-flex items-center justify-between rounded-2xl border border-white/[0.08] bg-surface-secondary p-4 font-mono text-xs text-txt-secondary hover:text-white hover:border-white/20 transition-all"
                        >
                            <span>Looking for Mobile Applications?</span>
                            <span className="flex items-center gap-1 text-accent font-semibold">
                                View Mobile Apps
                                <FiArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ====== PROJECT GRID ====== */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            featured={project.featured}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebProjects;
