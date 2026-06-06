import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, animate, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
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
import { FiArrowUpRight, FiDownload, FiChevronDown, FiSmartphone, FiMonitor } from "react-icons/fi";
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
    const heroImageRef = useRef(null);
    const developerTextRef = useRef(null);
    const freelancerTextRef = useRef(null);
    const maskRafRef = useRef(0);

    // Parallax for 3D figure
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 50, damping: 30 };
    const figureX = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), springConfig);
    const figureY = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), springConfig);

    // Sticky scroll for skills section
    const skillsSectionRef = useRef(null);
    const { scrollYProgress: skillsProgress } = useScroll({
        target: skillsSectionRef,
        offset: ['start start', 'end end'],
    });
    const [activeSkillIndex, setActiveSkillIndex] = useState(0);
    const headerOpacity = useTransform(skillsProgress, [0, 0.08], [0, 1]);
    const [activeHeroText, setActiveHeroText] = useState('developer');

    useEffect(() => {
        const unsubscribe = skillsProgress.on('change', (v) => {
            // Divide progress into equal segments for each category
            // First 10% is header fade-in, remaining 90% split among categories
            const adjusted = Math.max(0, (v - 0.1) / 0.9);
            const totalCategories = 3;
            const idx = Math.min(
                Math.floor(adjusted * totalCategories),
                totalCategories - 1
            );
            setActiveSkillIndex(idx);
        });
        return unsubscribe;
    }, [skillsProgress]);

    const updateHeroTextMask = useCallback(() => {
        const imageEl = heroImageRef.current;
        const targets = [developerTextRef.current, freelancerTextRef.current].filter(Boolean);
        if (!imageEl || targets.length === 0) return;
        const imageRect = imageEl.getBoundingClientRect();

        targets.forEach((el) => {
            const textRect = el.getBoundingClientRect();
            const x = imageRect.left - textRect.left;
            const y = imageRect.top - textRect.top;
            el.style.setProperty('--hero-mask-x', `${x}px`);
            el.style.setProperty('--hero-mask-y', `${y}px`);
            el.style.setProperty('--hero-mask-w', `${imageRect.width}px`);
            el.style.setProperty('--hero-mask-h', `${imageRect.height}px`);
        });
    }, []);

    const scheduleMaskUpdate = useCallback(() => {
        if (maskRafRef.current) return;
        maskRafRef.current = requestAnimationFrame(() => {
            maskRafRef.current = 0;
            updateHeroTextMask();
        });
    }, [updateHeroTextMask]);

    const handleMouseMove = (e) => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
        scheduleMaskUpdate();
    };

    useEffect(() => {
        const handleResize = () => scheduleMaskUpdate();
        window.addEventListener('resize', handleResize);
        scheduleMaskUpdate();
        return () => {
            window.removeEventListener('resize', handleResize);
            if (maskRafRef.current) {
                cancelAnimationFrame(maskRafRef.current);
                maskRafRef.current = 0;
            }
        };
    }, [scheduleMaskUpdate]);

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
                { name: "React", icon: <FaReact className="text-blue-400" />, badge: <FiMonitor className="text-blue-300/60 w-3.5 h-3.5" /> },
                { name: "React Native", icon: <FaReact className="text-blue-400" />, badge: <FiSmartphone className="text-blue-300/60 w-3.5 h-3.5" /> },
                { name: "Next.js", icon: <RiNextjsFill className="text-white" />, badge: <FiMonitor className="text-blue-300/60 w-3.5 h-3.5" /> },
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

                <div className="relative z-10 w-full flex flex-col items-center pt-24 px-6 text-center md:hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm text-txt-secondary font-body"
                    >
                        👋 Hi, I&apos;m Aman Kumar
                    </motion.p>

                    <div className="mt-3">
                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-display text-[3.1rem] leading-[0.9] font-bold text-gradient"
                        >
                            Developer
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-display text-[2.6rem] leading-[0.95] font-bold text-outline-hoverable"
                        >
                            Freelancer
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-sm text-txt-secondary mt-3"
                    >
                        Full Stack Developer &amp; Tech Enthusiast building modern web and mobile experiences.
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center gap-3 mt-6 w-full"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <MagneticButton
                            as="a"
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-accent-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow duration-300 w-full max-w-[220px]"
                        >
                            Explore Work
                            <FiArrowUpRight className="w-4 h-4" />
                        </MagneticButton>
                        <MagneticButton
                            as="a"
                            href="/Aman_Kumar_Resume.pdf"
                            download="Aman_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-txt-primary font-semibold hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300 w-full max-w-[220px]"
                        >
                            <FiDownload className="w-4 h-4" />
                            Resume
                        </MagneticButton>
                    </motion.div>

                    <motion.img
                        src="/Aman_DP_2.png"
                        alt="Aman Kumar — Full Stack Developer"
                        className="mt-8 w-44 sm:w-52 object-contain mx-auto image-fade-bottom"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    />
                </div>

                <div className="relative z-10 w-full flex-col items-center pt-28 md:pt-20 hidden md:flex">
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
                    <div
                        className="relative flex flex-col items-center w-full"
                        onMouseLeave={() => setActiveHeroText('developer')}
                    >
                        {/* Background text — "Aman" behind figure */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            onMouseEnter={() => setActiveHeroText('developer')}
                            ref={developerTextRef}
                            className={`font-display text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-bold leading-[0.82] tracking-[7px] text-center select-none relative ${activeHeroText === 'developer'
                                    ? 'text-gradient-cutout'
                                    : 'text-outline-hoverable'
                                }`}
                            style={{ zIndex: activeHeroText === 'developer' ? 3 : 1 }}
                        >
                            Developer
                        </motion.h1>

                        {/* 3D Figure — overlaps text */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.35 }}
                            className="relative z-[2] -mt-20 sm:-mt-28 md:-mt-40 lg:-mt-52 pointer-events-none"
                        >
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-accent-violet/10 blur-[80px] rounded-full scale-75 -z-10" />
                            <motion.img
                                src="/Aman_DP_2.png"
                                alt="Aman Kumar — Full Stack Developer"
                                ref={heroImageRef}
                                className="w-52 sm:w-64 md:w-80 lg:w-96 object-contain mx-auto drop-shadow-2xl image-fade-bottom"
                                style={{ x: figureX, y: figureY }}
                                onLoad={scheduleMaskUpdate}
                            />
                        </motion.div>

                        {/* Foreground text — "Kumar" in front of figure */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            onMouseEnter={() => setActiveHeroText('freelancer')}
                            ref={freelancerTextRef}
                            className={`font-display text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold leading-[0.82] tracking-[7px] text-center select-none relative -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 ${activeHeroText === 'freelancer'
                                    ? 'text-gradient-cutout'
                                    : 'text-outline-hoverable'
                                }`}
                            style={{ zIndex: activeHeroText === 'freelancer' ? 3 : 1 }}
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
                            className="hidden md:flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-3xl bg-accent-gradient opacity-10 blur-2xl scale-90" />
                                <div className="relative glass-card p-4 rounded-3xl">
                                    <img
                                        src="/Aman_DP_2.png"
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

            {/* ========== SKILLS SECTION — Sticky Scroll ========== */}
            <section id="skills" className="relative">
                <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

                {/* Shorter scroll runway — 220vh for snappier transitions */}
                <div ref={skillsSectionRef} className="relative" style={{ height: '220vh' }}>
                    {/* Sticky container */}
                    <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8">

                        {/* Animated background accent blob — changes color per category */}
                        <div
                            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07] transition-all duration-1000 ease-out pointer-events-none"
                            style={{
                                background: activeSkillIndex === 0
                                    ? 'radial-gradient(circle, #8b5cf6, transparent 70%)'
                                    : activeSkillIndex === 1
                                        ? 'radial-gradient(circle, #06b6d4, transparent 70%)'
                                        : 'radial-gradient(circle, #f59e0b, transparent 70%)',
                                transform: `translate(${activeSkillIndex === 0 ? '-20%' : activeSkillIndex === 1 ? '20%' : '0'}, ${activeSkillIndex === 2 ? '-15%' : '10%'})`,
                            }}
                        />

                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-accent-violet/30"
                                animate={{
                                    y: [0, -30, 0],
                                    x: [0, i % 2 === 0 ? 15 : -15, 0],
                                    opacity: [0.2, 0.6, 0.2],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    left: `${15 + i * 14}%`,
                                    top: `${30 + (i % 3) * 20}%`,
                                }}
                            />
                        ))}

                        <div className="relative z-10 max-w-6xl mx-auto w-full">
                            {/* Header */}
                            <motion.div
                                className="text-center mb-8"
                                style={{ opacity: headerOpacity }}
                            >
                                <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                                    Tech Stack
                                </span>
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-txt-primary">
                                    Technical Arsenal
                                </h2>
                            </motion.div>

                            {/* Progress bar + step indicators */}
                            <div className="flex flex-col items-center gap-3 mb-8">
                                {/* Progress bar */}
                                <div className="w-48 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent-gradient rounded-full"
                                        animate={{ width: `${((activeSkillIndex + 1) / skillCategories.length) * 100}%` }}
                                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                    />
                                </div>

                                {/* Step dots */}
                                <div className="flex justify-center gap-2">
                                    {skillCategories.map((cat, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <motion.div
                                                className="rounded-full"
                                                animate={{
                                                    width: activeSkillIndex === idx ? 32 : 8,
                                                    height: 8,
                                                    backgroundColor: activeSkillIndex === idx
                                                        ? idx === 0 ? '#8b5cf6' : idx === 1 ? '#06b6d4' : '#f59e0b'
                                                        : activeSkillIndex > idx
                                                            ? idx === 0 ? '#8b5cf680' : idx === 1 ? '#06b6d480' : '#f59e0b80'
                                                            : 'rgba(255,255,255,0.08)',
                                                }}
                                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cards — stacked, only active one visible */}
                            <div className="relative h-[420px] sm:h-[380px]">
                                {skillCategories.map((category, idx) => {
                                    const isActive = activeSkillIndex === idx;
                                    const isPast = activeSkillIndex > idx;
                                    const accentColor = idx === 0 ? '#8b5cf6' : idx === 1 ? '#06b6d4' : '#f59e0b';

                                    return (
                                        <motion.div
                                            key={idx}
                                            className="absolute inset-0 flex items-start justify-center"
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                y: isActive ? 0 : isPast ? -80 : 80,
                                                scale: isActive ? 1 : 0.88,
                                                rotateX: isActive ? 0 : isPast ? -5 : 5,
                                                filter: isActive ? 'blur(0px)' : 'blur(8px)',
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            style={{
                                                pointerEvents: isActive ? 'auto' : 'none',
                                                perspective: 1000,
                                            }}
                                        >
                                            {/* Animated gradient border wrapper */}
                                            <div
                                                className="relative w-full max-w-2xl rounded-3xl p-px overflow-hidden"
                                                style={{
                                                    background: isActive
                                                        ? `conic-gradient(from var(--skill-border-angle, 0deg), transparent 40%, ${accentColor}40, transparent 60%)`
                                                        : 'transparent',
                                                }}
                                            >
                                                {/* Spinning border animation via inline style */}
                                                {isActive && (
                                                    <style>{`
                                                        @property --skill-border-angle {
                                                            syntax: '<angle>';
                                                            initial-value: 0deg;
                                                            inherits: false;
                                                        }
                                                        @keyframes skillBorderSpin {
                                                            to { --skill-border-angle: 360deg; }
                                                        }
                                                    `}</style>
                                                )}
                                                <div
                                                    className="rounded-3xl bg-surface-secondary/95 backdrop-blur-xl p-8 sm:p-10"
                                                    style={isActive ? {
                                                        animation: 'skillBorderSpin 4s linear infinite',
                                                    } : {}}
                                                >
                                                    {/* Category header */}
                                                    <div className="flex items-center justify-between mb-8">
                                                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary flex items-center gap-3">
                                                            <motion.span
                                                                className="w-10 h-[2px] rounded-full"
                                                                animate={{ backgroundColor: accentColor, scaleX: isActive ? 1 : 0 }}
                                                                transition={{ duration: 0.4 }}
                                                                style={{ originX: 0 }}
                                                            />
                                                            {category.title}
                                                        </h3>
                                                        <motion.span
                                                            className="font-mono text-sm px-3 py-1 rounded-full border"
                                                            animate={{
                                                                borderColor: isActive ? `${accentColor}30` : 'rgba(255,255,255,0.04)',
                                                                color: isActive ? accentColor : 'rgba(255,255,255,0.3)',
                                                            }}
                                                        >
                                                            {String(idx + 1).padStart(2, '0')}/{String(skillCategories.length).padStart(2, '0')}
                                                        </motion.span>
                                                    </div>

                                                    {/* Skills grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {category.skills.map((skill, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={false}
                                                                animate={{
                                                                    opacity: isActive ? 1 : 0,
                                                                    x: isActive ? 0 : 30,
                                                                    rotate: isActive ? 0 : 2,
                                                                }}
                                                                transition={{
                                                                    duration: 0.35,
                                                                    delay: isActive ? i * 0.04 : 0,
                                                                    ease: [0.22, 1, 0.36, 1],
                                                                }}
                                                                whileHover={{ scale: 1.03, x: 4 }}
                                                                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.04] transition-colors duration-300 cursor-default group"
                                                            >
                                                                {/* Icon container with glow */}
                                                                <span
                                                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-lg transition-shadow duration-300"
                                                                    style={{
                                                                        backgroundColor: `${accentColor}10`,
                                                                        boxShadow: `0 0 0px ${accentColor}00`,
                                                                    }}
                                                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 12px ${accentColor}30`}
                                                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${accentColor}00`}
                                                                >
                                                                    {skill.icon}
                                                                </span>
                                                                <span className="text-sm font-medium text-txt-primary group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                                                                    {skill.name}
                                                                    {skill.badge && skill.badge}
                                                                </span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Scroll hint */}
                            <motion.div
                                className="flex flex-col items-center mt-6 gap-1"
                                animate={{ opacity: activeSkillIndex < skillCategories.length - 1 ? 0.5 : 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-txt-muted">Scroll to explore</span>
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FiChevronDown className="w-4 h-4 text-txt-muted" />
                                </motion.div>
                            </motion.div>
                        </div>
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