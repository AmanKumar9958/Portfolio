import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FiArrowUpRight,
    FiDownload,
    FiExternalLink,
    FiCopy,
    FiCheck,
    FiClock,
    FiCode,
    FiSmartphone,
    FiMonitor,
    FiDatabase,
    FiGrid,
    FiList,
    FiMail,
    FiSend
} from "react-icons/fi";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaLinkedin,
    FaPython
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
    SiSupabase,
    SiExpo,
    SiExpress,
    SiPostman
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import MagneticButton from "./MagneticButton";

// Projects Data (Unified Web & Mobile)
const ALL_PROJECTS = [
    {
        id: "pashu-raksha",
        title: "Pashu Raksha",
        category: "Mobile App",
        badge: "Play Store",
        type: "mobile",
        description: "Community animal rescue and welfare application connecting volunteers, reporting distress cases, and tracking emergency rescues in real time.",
        tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
        timeline: "8 Weeks",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.pashuraksha",
        image: "/Bento_Grid_Mobile.png",
        stats: "4.8★ Rating"
    },
    {
        id: "omnitools",
        title: "OmniTools Suite",
        category: "Web System",
        badge: "Production",
        type: "web",
        description: "All-in-one developer and creator productivity suite with authentication, modular utility libraries, and responsive state management.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
        timeline: "3 Weeks",
        link: "https://omnitools-beta.vercel.app/",
        image: "/Bento_Grid_Web.png",
        stats: "100% Lighthouse"
    },
    {
        id: "gld-shikshalaya",
        title: "GLD Shikshalaya",
        category: "Mobile App",
        badge: "Play Store",
        type: "mobile",
        description: "Full-scale educational platform offering adaptive video streaming, digital assignments, and integrated Cashfree payment gateways.",
        tags: ["React Native", "Expo", "Supabase", "Cashfree", "Bunny.net"],
        timeline: "2 Months",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.gldshikshalaya",
        image: "/Bento_Grid_Mobile.png",
        stats: "Active Users"
    },
    {
        id: "applypath",
        title: "ApplyPath",
        category: "Web Platform",
        badge: "Live App",
        type: "web",
        description: "Streamlined job application tracker designed with status kanban boards, search filters, and actionable pipeline analytics.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
        timeline: "5 Weeks",
        link: "https://applypath.netlify.app/",
        image: "/Bento_Grid_Web.png",
        stats: "Full Stack"
    },
    {
        id: "chai-cafeteria",
        title: "Chai Cafeteria",
        category: "Mobile App",
        badge: "Play Store",
        type: "mobile",
        description: "Food and beverage ordering application featuring live order status notifications, real-time item catalog, and Stripe checkout.",
        tags: ["React Native", "Expo", "Node.js", "Stripe API"],
        timeline: "4 Weeks",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.chaicafeteria",
        image: "/Bento_Grid_Mobile.png",
        stats: "Stripe Powered"
    },
    {
        id: "keyclash",
        title: "KeyClash",
        category: "Web Application",
        badge: "Live App",
        type: "web",
        description: "Real-time competitive typing speed test engine measuring Words Per Minute (WPM), stroke accuracy, and error distribution.",
        tags: ["React", "JavaScript", "REST API", "Tailwind"],
        timeline: "2 Weeks",
        link: "https://keyclash.netlify.app/",
        image: "/Bento_Grid_Web.png",
        stats: "Real-time WPM"
    }
];

// Tech Stack by Domain
const TECH_GROUPS = [
    {
        domain: "Frontend Architecture",
        skills: [
            { name: "React / React Native", icon: <FaReact className="text-sky-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
            { name: "JavaScript (ES6+)", icon: <IoLogoJavascript className="text-yellow-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        ]
    },
    {
        domain: "Backend & Systems",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" /> },
            { name: "Express.js", icon: <SiExpress className="text-neutral-200" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-300" /> },
            { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
        ]
    },
    {
        domain: "Mobile & Engineering",
        skills: [
            { name: "Expo CLI", icon: <SiExpo className="text-white" /> },
            { name: "Mobile UI / UX", icon: <FiSmartphone className="text-accent" /> },
            { name: "Python", icon: <FaPython className="text-yellow-300" /> },
            { name: "C++", icon: <TbBrandCpp className="text-blue-400" /> },
            { name: "Postman / API Design", icon: <SiPostman className="text-orange-400" /> },
            { name: "Git & CI/CD", icon: <FaGithub className="text-white" /> },
        ]
    }
];

const Home = () => {
    // Current IST Time Clock
    const [currentTime, setCurrentTime] = useState("");
    const [projectFilter, setProjectFilter] = useState("all");
    const [viewMode, setViewMode] = useState("list"); // 'list' | 'bento'

    // Dennis Snellenberg Floating Preview State
    const [activeProject, setActiveProject] = useState(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 200, mass: 0.15 };
    const previewX = useSpring(mouseX, springConfig);
    const previewY = useSpring(mouseY, springConfig);

    // Contact form states
    const [formStatus, setFormStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    // Update real-time clock
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            });
            setCurrentTime(timeStr);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // Handle project hover tracking for Dennis Snellenberg floating preview
    const handleProjectMouseMove = (e) => {
        mouseX.set(e.clientX + 24);
        mouseY.set(e.clientY + 24);
    };

    // Card spotlight mouse movement tracker
    const handleSpotlightMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    // Filtered projects
    const filteredProjects = ALL_PROJECTS.filter((p) => {
        if (projectFilter === "all") return true;
        return p.type === projectFilter;
    });

    // Copy email helper
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("tech.aman2799@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2400);
    };

    // Contact Form Submission (Web3Forms)
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("Sending message...");

        try {
            const formData = new FormData(e.target);
            formData.append("access_key", "cc329a4e-142d-45e5-90c3-b964aa88f312");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setFormStatus("Message received! I will reply shortly.");
                e.target.reset();
            } else {
                setFormStatus(data.message || "Failed to submit. Please email directly.");
            }
        } catch (err) {
            setFormStatus("Something went wrong. Please email directly.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setFormStatus(""), 4500);
        }
    };

    return (
        <div className="w-full bg-surface text-txt-primary selection:bg-accent selection:text-white">

            {/* ========== 1. HERO SECTION ========== */}
            <section
                id="hero"
                className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-10 max-w-7xl mx-auto border-b border-white/[0.08]"
            >
                {/* Subtle Architectural Crosshairs */}
                <div className="absolute top-8 left-6 font-mono text-xs text-txt-dim select-none hidden md:block">+ 28°36&apos;N / 77°12&apos;E</div>
                <div className="absolute top-8 right-6 font-mono text-xs text-txt-dim select-none hidden md:block">+ PORTFOLIO / 2026</div>

                {/* Top Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-txt-muted">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-surface-secondary/60">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-txt-primary font-medium">Available for select projects</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>New Delhi, IN</span>
                        <span className="text-txt-dim">•</span>
                        <span className="text-txt-primary tabular-nums flex items-center gap-1.5">
                            <FiClock className="w-3.5 h-3.5 text-accent" />
                            {currentTime || "04:30 PM IST"}
                        </span>
                    </div>
                </div>

                {/* Central Editorial Statement */}
                <div className="my-auto py-12 sm:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-accent mb-4 block">
                            // Aman Kumar — Software Engineer &amp; Designer
                        </span>

                        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold tracking-tight leading-[0.98] text-txt-primary">
                            Full-Stack Engineer &amp; Mobile Architect.
                        </h1>

                        <p className="mt-8 max-w-2xl text-base sm:text-lg text-txt-secondary leading-relaxed font-body">
                            Engineering robust web architectures and high-retention mobile products.
                            Focused on performance, clean maintainable code, and high-impact digital experiences.
                        </p>

                        {/* Quick Action Buttons */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <MagneticButton
                                as="a"
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover shadow-accent-soft"
                            >
                                Explore Selected Work
                                <FiArrowUpRight className="w-4 h-4" />
                            </MagneticButton>

                            <MagneticButton
                                as="a"
                                href="/Aman_Kumar_Resume.pdf"
                                download="Aman_Kumar_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-surface-secondary/70 px-6 py-3 text-sm font-semibold text-txt-primary transition-all duration-300 hover:border-white/30 hover:bg-surface-elevated"
                            >
                                <FiDownload className="w-4 h-4 text-accent" />
                                Resume
                            </MagneticButton>

                            <MagneticButton
                                as="a"
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-sm font-semibold text-txt-secondary hover:text-txt-primary hover:border-white/20 transition-all duration-300"
                            >
                                Get In Touch
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Architectural Info Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] font-mono text-xs text-txt-muted">
                    <div>
                        <span className="text-txt-dim block mb-1">01 / STACK</span>
                        <span className="text-txt-primary font-medium">React • Next.js • React Native</span>
                    </div>
                    <div>
                        <span className="text-txt-dim block mb-1">02 / BACKEND</span>
                        <span className="text-txt-primary font-medium">Node.js • Express • Supabase</span>
                    </div>
                    <div>
                        <span className="text-txt-dim block mb-1">03 / SPECIALTY</span>
                        <span className="text-txt-primary font-medium">Full-Stack &amp; Mobile Apps</span>
                    </div>
                    <div>
                        <span className="text-txt-dim block mb-1">04 / EXPERIENCE</span>
                        <span className="text-txt-primary font-medium">3+ Years Building Products</span>
                    </div>
                </div>
            </section>


            {/* ========== 2. METRICS & IMPACT TICKER ========== */}
            <section className="border-b border-white/[0.08] bg-surface-secondary/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-txt-primary tabular-nums">
                            25<span className="text-accent">+</span>
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-txt-muted mt-2">
                            Web Releases
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-txt-primary tabular-nums">
                            05<span className="text-accent">+</span>
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-txt-muted mt-2">
                            Mobile Apps Shipped
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-txt-primary tabular-nums">
                            100<span className="text-accent">%</span>
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-txt-muted mt-2">
                            Client Satisfaction
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-txt-primary tabular-nums">
                            03<span className="text-accent">+</span>
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-txt-muted mt-2">
                            Years In Tech
                        </span>
                    </div>
                </div>
            </section>


            {/* ========== 3. SELECTED WORK (DENNIS SNELLENBERG HOVER INTERACTION) ========== */}
            <section
                id="projects"
                onMouseMove={handleProjectMouseMove}
                className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-white/[0.08]"
            >
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                            / Selected Works 2024 — 2026
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-txt-primary">
                            Crafted Projects
                        </h2>
                    </div>

                    {/* Filter & View Controls */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Filter Tabs */}
                        <div className="inline-flex rounded-full border border-white/[0.08] p-1 bg-surface-secondary">
                            {[
                                { id: "all", label: "All Works" },
                                { id: "web", label: "Web Systems" },
                                { id: "mobile", label: "Mobile Apps" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setProjectFilter(tab.id)}
                                    data-cursor="pointer"
                                    className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors duration-200 ${
                                        projectFilter === tab.id
                                            ? "bg-accent text-white font-semibold"
                                            : "text-txt-secondary hover:text-txt-primary"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* View Switcher: List vs Bento */}
                        <div className="hidden sm:inline-flex rounded-full border border-white/[0.08] p-1 bg-surface-secondary">
                            <button
                                onClick={() => setViewMode("list")}
                                data-cursor="pointer"
                                title="List View"
                                className={`p-2 rounded-full transition-colors ${
                                    viewMode === "list" ? "bg-white/10 text-white" : "text-txt-muted hover:text-white"
                                }`}
                            >
                                <FiList className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("bento")}
                                data-cursor="pointer"
                                title="Bento Grid View"
                                className={`p-2 rounded-full transition-colors ${
                                    viewMode === "bento" ? "bg-white/10 text-white" : "text-txt-muted hover:text-white"
                                }`}
                            >
                                <FiGrid className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- A. LIST VIEW (DENNIS SNELLENBERG STYLE) --- */}
                {viewMode === "list" && (
                    <div className="divide-y divide-white/[0.08]">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => setActiveProject(project)}
                                onMouseLeave={() => setActiveProject(null)}
                                data-cursor="view"
                                data-cursor-text="VISIT"
                                className="group relative py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:pl-3"
                            >
                                <div className="flex items-baseline gap-4 sm:gap-6">
                                    <span className="font-mono text-xs sm:text-sm text-txt-dim tabular-nums">
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-2xl sm:text-4xl font-bold text-txt-primary group-hover:text-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-txt-muted max-w-xl mt-1.5 line-clamp-1">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-8 self-end md:self-auto font-mono text-xs">
                                    <div className="flex flex-wrap gap-1.5 hidden lg:flex">
                                        {project.tags.slice(0, 3).map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-txt-secondary text-[11px]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="px-3 py-1 rounded-full border border-white/[0.08] text-txt-secondary uppercase tracking-wider text-[11px]">
                                        {project.category}
                                    </span>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="pointer"
                                        aria-label={`Open ${project.title}`}
                                        className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-txt-secondary group-hover:text-white group-hover:border-accent group-hover:bg-accent transition-all duration-300"
                                    >
                                        <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- B. BENTO CARD VIEW --- */}
                {viewMode === "bento" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                        {filteredProjects.map((project, idx) => (
                            <motion.article
                                key={project.id}
                                onMouseMove={handleSpotlightMove}
                                data-cursor="view"
                                data-cursor-text="OPEN"
                                className="spotlight-card p-6 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-mono text-xs text-txt-dim">0{idx + 1}</span>
                                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-accent uppercase">
                                            {project.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-txt-primary mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/[0.06] bg-white/[0.02] text-txt-muted"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                                        <span className="font-mono text-xs text-txt-muted">
                                            {project.stats}
                                        </span>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-xs text-txt-primary hover:text-accent transition-colors font-medium"
                                        >
                                            View Project
                                            <FiArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* Dennis Snellenberg Floating Preview Element (Follows cursor smoothly) */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            style={{
                                x: previewX,
                                y: previewY,
                            }}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-none fixed top-0 left-0 z-40 hidden lg:block w-72 rounded-xl overflow-hidden border border-white/20 bg-surface-tertiary shadow-2xl"
                        >
                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="w-full h-44 object-cover object-top"
                            />
                            <div className="p-3 bg-surface-secondary/95 border-t border-white/10 flex items-center justify-between">
                                <span className="font-display text-xs font-bold text-white">
                                    {activeProject.title}
                                </span>
                                <span className="font-mono text-[10px] text-accent uppercase">
                                    {activeProject.stats}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Deep Dive Subpage Links */}
                <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-txt-muted font-mono">
                        Looking for granular case studies or specific technologies?
                    </p>
                    <div className="flex items-center gap-3">
                        <Link
                            to="/projects-web-development"
                            data-cursor="pointer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-txt-secondary hover:text-white px-4 py-2 rounded-full border border-white/[0.08] bg-surface-secondary hover:border-white/20 transition-all"
                        >
                            Web Case Studies
                            <FiArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                            to="/projects-app-development"
                            data-cursor="pointer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-txt-secondary hover:text-white px-4 py-2 rounded-full border border-white/[0.08] bg-surface-secondary hover:border-white/20 transition-all"
                        >
                            Mobile Case Studies
                            <FiArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ========== 4. SERVICES & CAPABILITIES ========== */}
            <section
                id="services"
                className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-white/[0.08]"
            >
                <div className="mb-14">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                        / Engineering Capabilities
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl font-bold text-txt-primary max-w-2xl">
                        Comprehensive solutions from concept to deployment.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service 01: Web Engineering */}
                    <div
                        onMouseMove={handleSpotlightMove}
                        className="spotlight-card p-8 sm:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                                <span className="font-mono text-xs text-txt-dim">01 / ARCHITECTURE</span>
                                <FiMonitor className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary mb-4">
                                Full-Stack Web Development
                            </h3>

                            <p className="text-sm text-txt-secondary leading-relaxed mb-8">
                                Building performant, responsive web applications engineered for speed, clean UX, and search engine optimization. Specializing in modern React, Next.js, scalable Node.js services, and REST/GraphQL APIs.
                            </p>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Enterprise Full-Stack Web Apps (Next.js & MERN)",
                                    "Custom API Design, Authentication & Security",
                                    "Payment Gateway Integrations (Stripe, Cashfree)",
                                    "95+ Google Lighthouse Performance & SEO Optimization"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-txt-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                            <span className="font-mono text-xs text-txt-muted">Next.js • Node.js • Supabase</span>
                            <Link
                                to="/service-web-development"
                                data-cursor="pointer"
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent font-semibold hover:underline"
                            >
                                Details &amp; Scope
                                <FiArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Service 02: Mobile Engineering */}
                    <div
                        onMouseMove={handleSpotlightMove}
                        className="spotlight-card p-8 sm:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                                <span className="font-mono text-xs text-txt-dim">02 / CROSS-PLATFORM</span>
                                <FiSmartphone className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary mb-4">
                                Mobile App Engineering
                            </h3>

                            <p className="text-sm text-txt-secondary leading-relaxed mb-8">
                                Developing production-ready mobile applications for iOS and Android using React Native and Expo. Crafted for native-feel gesture fidelity, instant response times, and store readiness.
                            </p>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Cross-Platform Apps for Google Play & Apple App Store",
                                    "Real-time Data Sync, Firebase & Supabase Cloud",
                                    "In-App Purchases, Payment Systems & Monetization",
                                    "Background Tasks, Offline Caching & Push Notifications"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-txt-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                            <span className="font-mono text-xs text-txt-muted">React Native • Expo • Cloud</span>
                            <Link
                                to="/service-app-development"
                                data-cursor="pointer"
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent font-semibold hover:underline"
                            >
                                Details &amp; Scope
                                <FiArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== 5. TECHNICAL ARSENAL (CLEAN ARCHITECTURAL MATRIX) ========== */}
            <section
                id="arsenal"
                className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-white/[0.08]"
            >
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                            / Technical Stack
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-txt-primary">
                            Tools &amp; Technologies
                        </h2>
                    </div>
                    <span className="font-mono text-xs text-txt-muted">
                        Production-Tested Tooling
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TECH_GROUPS.map((group, idx) => (
                        <div
                            key={idx}
                            onMouseMove={handleSpotlightMove}
                            className="spotlight-card p-6 sm:p-8"
                        >
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                                <h3 className="font-mono text-xs uppercase tracking-wider text-txt-primary font-semibold">
                                    {group.domain}
                                </h3>
                                <span className="font-mono text-xs text-txt-dim">0{idx + 1}</span>
                            </div>

                            <div className="grid grid-cols-1 gap-2.5">
                                {group.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center justify-between p-3 rounded-lg border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="text-xs sm:text-sm font-medium text-txt-primary">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="font-mono text-[10px] text-txt-dim">ACTIVE</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* ========== 6. ABOUT / PHILOSOPHY ========== */}
            <section
                id="about"
                className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-white/[0.08]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Framed Portrait */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm rounded-2xl border border-white/[0.1] bg-surface-secondary p-4 overflow-hidden shadow-2xl">
                            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-tertiary">
                                <img
                                    src="/Aman_DP_2.png"
                                    alt="Aman Kumar"
                                    className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-4 flex items-center justify-between font-mono text-xs text-txt-muted px-2">
                                <span>Aman Kumar</span>
                                <span className="text-accent">Engineer / Lead</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Editorial Bio */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent block">
                            / Background &amp; Approach
                        </span>

                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-txt-primary leading-tight">
                            Driven by clarity, performance, and craftsmanship.
                        </h2>

                        <p className="text-base sm:text-lg text-txt-secondary leading-relaxed font-body">
                            I am a software engineer focused on building clean, high-performance digital products. My work balances visual precision with resilient engineering—bridging the gap between creative design and robust system logic.
                        </p>

                        <p className="text-sm sm:text-base text-txt-secondary leading-relaxed font-body">
                            Whether architecting full-stack web platforms using Next.js and Supabase, or engineering native-feel mobile applications on the Google Play Store and App Store, I focus on tangible outcomes: rapid load times, intuitive navigation, and clean, scalable code.
                        </p>

                        <div className="pt-6 flex flex-wrap items-center gap-4">
                            <MagneticButton
                                as="a"
                                href="/Aman_Kumar_Resume.pdf"
                                download="Aman_Kumar_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full bg-txt-primary px-6 py-3 text-sm font-semibold text-surface transition-all duration-300 hover:bg-accent hover:text-white"
                            >
                                <FiDownload className="w-4 h-4" />
                                Download Full Resume (PDF)
                            </MagneticButton>

                            <MagneticButton
                                as="a"
                                href="https://github.com/AmanKumar9958"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-surface-secondary px-6 py-3 text-sm font-semibold text-txt-primary hover:border-white/30 transition-all"
                            >
                                <FaGithub className="w-4 h-4" />
                                GitHub Profile
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== 7. DIRECT INTERACTIVE CONTACT SECTION ========== */}
            <section
                id="contact"
                className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left: Contact Info & Quick Copy */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                                // Available for Collaboration
                            </span>
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-txt-primary">
                                Let&apos;s build something exceptional.
                            </h2>
                            <p className="text-sm sm:text-base text-txt-secondary mt-4 leading-relaxed font-body">
                                Have an upcoming product launch, mobile app idea, or engineering challenge? Send a direct message or reach out via email.
                            </p>
                        </div>

                        {/* Interactive Email Copy Module */}
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-wider text-txt-muted block">
                                Direct Contact Email
                            </span>
                            <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/[0.06] bg-surface-tertiary">
                                <span className="font-mono text-xs sm:text-sm text-txt-primary select-all truncate">
                                    tech.aman2799@gmail.com
                                </span>
                                <button
                                    onClick={handleCopyEmail}
                                    data-cursor="pointer"
                                    title="Copy Email"
                                    className="p-2 rounded-lg bg-white/5 hover:bg-accent text-txt-primary hover:text-white transition-colors duration-200 flex-shrink-0"
                                >
                                    {emailCopied ? (
                                        <FiCheck className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <FiCopy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            {emailCopied && (
                                <span className="font-mono text-xs text-emerald-400 block">
                                    ✓ Email address copied to clipboard!
                                </span>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-txt-muted block">
                                Profiles
                            </span>
                            <div className="flex flex-wrap gap-3">
                                <MagneticButton
                                    as="a"
                                    href="https://github.com/AmanKumar9958"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-secondary px-5 py-2.5 text-xs font-mono text-txt-secondary hover:text-white hover:border-white/20 transition-all"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    GitHub
                                </MagneticButton>

                                <MagneticButton
                                    as="a"
                                    href="https://linkedin.com/in/aman-kumar-47407823b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-secondary px-5 py-2.5 text-xs font-mono text-txt-secondary hover:text-white hover:border-white/20 transition-all"
                                >
                                    <FaLinkedin className="w-4 h-4 text-sky-400" />
                                    LinkedIn
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    {/* Right: Working Web3Forms Contact Form */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={handleContactSubmit}
                            className="rounded-3xl border border-white/[0.1] bg-surface-secondary p-8 sm:p-10 space-y-6 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Alex Mercer"
                                        className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="alex@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                    Project / Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="New web platform / mobile app project"
                                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="font-mono text-xs uppercase tracking-wider text-txt-muted block mb-2">
                                    Project Brief &amp; Goals *
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Describe your vision, requirements, timeline, or questions..."
                                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-surface-tertiary text-txt-primary text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <MagneticButton
                                    as="button"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover disabled:opacity-50"
                                >
                                    <FiSend className="w-4 h-4" />
                                    {isSubmitting ? "Transmitting..." : "Send Message"}
                                </MagneticButton>

                                {formStatus && (
                                    <span className="font-mono text-xs text-accent">
                                        {formStatus}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;