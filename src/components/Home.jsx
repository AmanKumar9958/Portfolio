import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, useMotionValue, useTransform, useSpring } from "framer-motion";
import Typed from "typed.js";
import { FaReact, FaHtml5, FaGithub, FaPython, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiAppwrite, SiExpress, SiMongodb, SiPostgresql, SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FiArrowUpRight, FiDownload, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import GradientOrbs from "./GradientOrbs";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const Counter = ({ from, to }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: false });

    useEffect(() => {
        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: 1.5,
                onUpdate: (value) => {
                    node.textContent = Math.floor(value).toFixed(0);
                },
            });
            return () => controls.stop();
        }
    }, [from, to, isInView]);

    return <span ref={nodeRef} />;
};

const SkillCard = ({ icon, name, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.3)' }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card cursor-default"
    >
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium text-txt-primary">{name}</span>
    </motion.div>
);

const StatCard = ({ value, suffix = '+', label }) => (
    <motion.div
        whileHover={{ y: -4 }}
        className="glass-card px-6 py-5 text-center"
    >
        <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
            <Counter from={0} to={value} />{suffix}
        </h3>
        <p className="text-sm text-txt-secondary font-medium">{label}</p>
    </motion.div>
);

const Home = () => {
    const typedRef = useRef(null);
    const heroRef = useRef(null);

    // Parallax for 3D figure
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 50, damping: 30 };
    const figureX = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), springConfig);
    const figureY = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), springConfig);

    const handleMouseMove = (e) => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Mobile ", "Web ", "Full Stack "],
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 1500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
            return () => typed.destroy();
        }
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React / React Native", icon: <FaReact className="text-blue-400" /> },
                { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
                { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-400" /> },
                { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
                { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-cyan-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
            ]
        },
        {
            title: "Backend & DB",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
                { name: "Express.js", icon: <SiExpress className="text-white" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
                { name: "MySQL", icon: <DiMysql className="text-blue-400" /> },
            ]
        },
        {
            title: "Tools & Languages",
            skills: [
                { name: "Firebase", icon: <IoLogoFirebase className="text-yellow-400" /> },
                { name: "AppWrite", icon: <SiAppwrite className="text-pink-400" /> },
                { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
                { name: "Python", icon: <FaPython className="text-yellow-300" /> },
                { name: "C++", icon: <TbBrandCpp className="text-blue-400" /> },
            ]
        }
    ];

    return (
        <div className="w-full bg-surface">
            {/* ========== HERO SECTION — Editorial Overlap ========== */}
            <section
                ref={heroRef}
                onMouseMove={handleMouseMove}
                className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
            >
                <GradientOrbs variant="hero" />
                <div className="absolute inset-0 grid-pattern" />

                <div className="relative z-10 w-full flex flex-col items-center pt-28 md:pt-20">
                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium text-txt-secondary tracking-wide">Available for projects</span>
                    </motion.div>

                    {/* Intro text */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-center text-base sm:text-lg text-txt-secondary font-body mb-4"
                    >
                        👋 Hi, I&apos;m Aman Kumar
                        {/* <span className="text-accent-violet font-semibold"> Full Stack Developer</span> */}
                    </motion.p>

                    {/* ── Layered Typography + Figure ── */}
                    <div className="relative flex flex-col items-center w-full">
                        {/* Background text — "Aman" behind figure */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="font-display text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-bold leading-[0.82] tracking-[7px] text-center select-none relative z-[1] text-txt-primary"
                        >
                            Developer
                        </motion.h1>

                        {/* 3D Figure — overlaps text */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.35 }}
                            className="relative z-[2] -mt-20 sm:-mt-28 md:-mt-40 lg:-mt-52"
                        >
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-accent-violet/10 blur-[80px] rounded-full scale-75 -z-10" />
                            <motion.img
                                src="/3D_Figure.webp"
                                alt="Aman Kumar — Full Stack Developer"
                                className="w-52 sm:w-64 md:w-80 lg:w-96 object-contain mx-auto drop-shadow-2xl"
                                style={{ x: figureX, y: figureY }}
                            />
                        </motion.div>

                        {/* Foreground text — "Kumar" in front of figure */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="font-display text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold leading-[0.82] tracking-[7px] text-center select-none relative z-[3] -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 text-gradient"
                        >
                            Freelancer
                        </motion.h1>
                    </div>

                    {/* Typed role */}
                    <motion.div
                        className="font-display text-xl sm:text-2xl font-semibold text-txt-secondary mt-4 sm:mt-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <span ref={typedRef} className="text-accent-violet" />
                        <span className="text-gradient">Developer</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-base sm:text-lg text-txt-secondary max-w-lg font-body leading-relaxed text-center mt-4"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        Full Stack Developer &amp; Tech Enthusiast building beautiful,
                        performant web and mobile experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <MagneticButton
                            as="a"
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-accent-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
                        >
                            Explore Work
                            <FiArrowUpRight className="w-4 h-4" />
                        </MagneticButton>
                        <MagneticButton
                            as="a"
                            href="/Aman_Kumar_Resume.pdf"
                            download="Aman_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-txt-primary font-semibold hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                        >
                            <FiDownload className="w-4 h-4" />
                            Resume
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-xs font-medium text-txt-muted tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FiChevronDown className="w-5 h-5 text-txt-muted" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ========== ABOUT SECTION ========== */}
            <section id="about" className="relative py-24 px-6 sm:px-8 overflow-hidden">
                <GradientOrbs variant="subtle" />
                <div className="relative z-10 container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-accent-gradient opacity-10 blur-2xl scale-90" />
                                <div className="relative glass-card p-4 rounded-3xl">
                                    <img
                                        src="/3D_Figure.webp"
                                        alt="About Me"
                                        className="w-full max-w-sm object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                                About Me
                            </span>

                            <TextReveal
                                as="h2"
                                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                            >
                                Crafting digital experiences with passion
                            </TextReveal>

                            <div className="glass-card p-6 mb-8">
                                <p className="text-base leading-relaxed text-txt-secondary">
                                    Hey there! I&apos;m <strong className="text-accent-violet font-semibold">Aman Kumar</strong>, a
                                    passionate developer specializing in creating beautiful and functional
                                    <span className="text-accent-cyan"> Web</span> and
                                    <span className="text-accent-violet"> Mobile</span> experiences.
                                    With a focus on modern technologies, I build
                                    <span className="text-gradient font-semibold"> scalable solutions</span> that not only look great but also solve real-world problems.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <StatCard value={8} label="Projects" />
                                <StatCard value={5} label="Clients" />
                                <StatCard value={2} label="Years Exp" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========== SKILLS SECTION ========== */}
            <section id="skills" className="relative py-24 px-6 sm:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                            Tech Stack
                        </span>
                        <TextReveal className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                            Technical Arsenal
                        </TextReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card p-6"
                            >
                                <h3 className="font-display text-lg font-bold text-txt-primary mb-5 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-accent-gradient rounded-full" />
                                    {category.title}
                                </h3>
                                <div className="grid grid-cols-1 gap-2.5">
                                    {category.skills.map((skill, i) => (
                                        <SkillCard
                                            key={i}
                                            icon={skill.icon}
                                            name={skill.name}
                                            delay={i * 0.05}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== RESUME CTA SECTION ========== */}
            <section id="resume" className="relative py-24 px-6 sm:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-accent-gradient opacity-[0.03]" />
                <GradientOrbs variant="subtle" />

                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="glass-card p-10 md:p-16">
                        <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-6">
                            Open to Opportunities
                        </span>

                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Ready to <span className="text-gradient">work together?</span>
                        </h2>

                        <p className="text-lg text-txt-secondary mb-8 max-w-xl mx-auto">
                            Let&apos;s build something amazing! Check out my resume to see my full experience and skills.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <MagneticButton
                                as="a"
                                href="/Aman_Kumar_Resume.pdf"
                                download="Aman_Resume.pdf"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
                            >
                                <FiDownload className="w-5 h-5" />
                                Download Resume
                            </MagneticButton>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.1] bg-white/[0.03] text-txt-primary font-semibold hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                            >
                                Get in Touch
                                <FiArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;