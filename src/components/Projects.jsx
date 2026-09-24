import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiArrowUpRight,
    FiExternalLink,
    FiSearch,
    FiGrid,
    FiList,
    FiLayers,
    FiZap,
    FiMonitor,
    FiSmartphone,
    FiClock,
    FiCheck,
    FiX
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiSupabase, SiExpo, SiFirebase } from 'react-icons/si';
import MagneticButton from './MagneticButton';

// Comprehensive Master Works Archive Data
const ALL_PROJECTS = [
    {
        id: "pashu-raksha",
        title: "Pashu Raksha Mobile App",
        shortTitle: "Pashu Raksha",
        domain: "mobile",
        domainLabel: "Mobile / Welfare",
        featured: true,
        tagline: "Community Animal Rescue & Emergency Welfare Platform",
        description: "Full-scale mobile application engineered to connect animal lovers, report distress cases with geotagging, and dispatch verified rescue squads across cities in real time.",
        tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
        timeline: "8 Weeks",
        metrics: "4.8★ Play Store • 500+ Downloads",
        badge: "Play Store Flagship",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.pashuraksha",
        image: "/Bento_Grid_Mobile.png",
        actionText: "View on Play Store",
        actionType: "playstore"
    },
    {
        id: "omnitools",
        title: "OmniTools Productivity Suite",
        shortTitle: "OmniTools",
        domain: "web",
        domainLabel: "Web / SaaS",
        featured: true,
        tagline: "All-in-One Modular Utility & Developer Toolkit",
        description: "Modern productivity ecosystem featuring biometric/OAuth authentication, text manipulation suites, conversion tools, and responsive modular state management.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth"],
        timeline: "3 Weeks",
        metrics: "100% Lighthouse • 0ms Latency",
        badge: "Production SaaS",
        link: "https://omnitools-beta.vercel.app/",
        image: "/Bento_Grid_Web.png",
        actionText: "Open Live Web App",
        actionType: "web"
    },
    {
        id: "gld-shikshalaya",
        title: "GLD Shikshalaya EdTech",
        shortTitle: "GLD Shikshalaya",
        domain: "mobile",
        domainLabel: "Mobile / EdTech",
        featured: true,
        tagline: "Adaptive Video Streaming & Learning Platform",
        description: "Comprehensive education application with HLS video streaming, automated course progress tracking, assignment uploads, and secure Cashfree payment integration.",
        tags: ["React Native", "Expo", "Supabase", "Cashfree", "Bunny.net"],
        timeline: "2 Months",
        metrics: "Active Students • Video CDN",
        badge: "Play Store EdTech",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.gldshikshalaya",
        image: "/Bento_Grid_Mobile.png",
        actionText: "View on Play Store",
        actionType: "playstore"
    },
    {
        id: "dh-clothing",
        title: "DH Clothing E-Commerce",
        shortTitle: "DH Clothing",
        domain: "web",
        domainLabel: "Web / E-Commerce",
        featured: false,
        tagline: "Full-Stack Apparel Store with Razorpay Payments",
        description: "High-conversion fashion storefront engineered with real-time inventory synchronization, dynamic filters, persistent bag state, and Razorpay checkout.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API"],
        timeline: "4 Weeks",
        metrics: "Sub-Second Checkout • MERN Stack",
        badge: "Live E-Commerce",
        link: "https://dhclothing.in/",
        image: "/Bento_Grid_Web.png",
        actionText: "Visit Storefront",
        actionType: "web"
    },
    {
        id: "applypath",
        title: "ApplyPath Job Pipeline",
        shortTitle: "ApplyPath",
        domain: "web",
        domainLabel: "Web / Tool",
        featured: false,
        tagline: "Interactive Candidate Application Tracking System",
        description: "Streamlined job application tracker built with draggable status kanban columns, interview scheduling reminders, and actionable conversion analytics.",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        timeline: "5 Weeks",
        metrics: "Kanban Pipeline • Full Stack",
        badge: "Live Web App",
        link: "https://applypath.netlify.app/",
        image: "/Bento_Grid_Web.png",
        actionText: "Launch Application",
        actionType: "web"
    },
    {
        id: "chai-cafeteria",
        title: "Chai Cafeteria Ordering",
        shortTitle: "Chai Cafeteria",
        domain: "mobile",
        domainLabel: "Mobile / FoodTech",
        featured: false,
        tagline: "Real-Time Food Ordering & Stripe Payment System",
        description: "Full-featured food and beverage ordering mobile app featuring live kitchen order tracking, item customization, and seamless Stripe checkout integration.",
        tags: ["React Native", "Expo", "Node.js", "Express", "Stripe API"],
        timeline: "4 Weeks",
        metrics: "Stripe Powered • Real-time Tracking",
        badge: "Play Store",
        link: "https://play.google.com/store/apps/details?id=com.solostackdev.chaicafeteria",
        image: "/Bento_Grid_Mobile.png",
        actionText: "View on Play Store",
        actionType: "playstore"
    },
    {
        id: "trip-genius",
        title: "Trip Genius AI Travel Planner",
        shortTitle: "Trip Genius",
        domain: "web",
        domainLabel: "Web & Mobile / AI",
        featured: false,
        tagline: "AI-Powered Personalized Itinerary Generator",
        description: "Generative AI travel platform utilizing OpenAI APIs to formulate custom multi-day vacation itineraries, route maps, and budget estimates based on traveler preferences.",
        tags: ["React", "React Native", "OpenAI API", "Firebase", "Tailwind"],
        timeline: "4 Weeks",
        metrics: "OpenAI GPT-4 • Instant Generator",
        badge: "AI Platform",
        link: "https://trip-genius.netlify.app/",
        image: "/Bento_Grid_Web.png",
        actionText: "Generate Itinerary",
        actionType: "web"
    },
    {
        id: "keyclash",
        title: "KeyClash Typing Speed Engine",
        shortTitle: "KeyClash",
        domain: "web",
        domainLabel: "Web / Utility",
        featured: false,
        tagline: "Real-Time Competitive Typing Speed Platform",
        description: "Precision typing tester measuring Words Per Minute (WPM), keystroke accuracy, error clusters, and raw CPM with competitive timed challenges.",
        tags: ["React", "JavaScript", "Random Words API", "CSS3"],
        timeline: "2 Weeks",
        metrics: "Live WPM • High Precision",
        badge: "Live Tool",
        link: "https://keyclash.netlify.app/",
        image: "/Bento_Grid_Web.png",
        actionText: "Test Your WPM",
        actionType: "web"
    },
    {
        id: "yoga-bar",
        title: "Yoga Bar Healthy Snacks App",
        shortTitle: "Yoga Bar",
        domain: "mobile",
        domainLabel: "Mobile / Nutrition",
        featured: false,
        tagline: "Direct-to-Consumer Mobile Commerce Application",
        description: "Nutrition mobile commerce application integrated with Shopify APIs for streamlined product browsing, ingredient transparency, and mobile cart management.",
        tags: ["React Native", "Expo", "Shopify API", "Redux"],
        timeline: "1 Week",
        metrics: "Shopify Storefront • Mobile First",
        badge: "Mobile Commerce",
        link: "https://drive.google.com/file/d/1A8b6Q1OuDjC4I6q6-w9KjXhDOT8pENgi/view",
        actionText: "View APK Build",
        actionType: "playstore"
    }
];

// Architectural Card with 3D Mouse Spotlight
const BentoProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.article
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            data-cursor="view"
            data-cursor-text="OPEN"
            className="spotlight-card p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20"
        >
            <div>
                {/* Top Badge & Index */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <span className="font-mono text-xs text-txt-dim tabular-nums">
                        {String(index + 1).padStart(2, '0')} / {project.domainLabel}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-accent uppercase tracking-wider font-semibold">
                        {project.badge}
                    </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="font-mono text-xs text-accent mb-3 block">
                    {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed font-body mb-6">
                    {project.description}
                </p>
            </div>

            <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-txt-secondary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Footer Strip */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-xs text-txt-muted flex items-center gap-1.5">
                        <FiClock className="w-3.5 h-3.5 text-accent" />
                        {project.timeline}
                    </span>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-txt-primary group-hover:text-accent transition-colors font-semibold py-1 px-3 rounded-full border border-white/[0.08] hover:border-accent hover:bg-accent/5"
                    >
                        <span>{project.actionText}</span>
                        <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [domainFilter, setDomainFilter] = useState("all"); // 'all' | 'web' | 'mobile'
    const [selectedTag, setSelectedTag] = useState(null);
    const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

    // Dennis Snellenberg Floating Preview Tracking
    const [activeProject, setActiveProject] = useState(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 220, mass: 0.15 };
    const previewX = useSpring(mouseX, springConfig);
    const previewY = useSpring(mouseY, springConfig);

    const handleProjectMouseMove = (e) => {
        mouseX.set(e.clientX + 24);
        mouseY.set(e.clientY + 24);
    };

    // Filter Logic
    const filteredProjects = useMemo(() => {
        return ALL_PROJECTS.filter((project) => {
            // Domain filter
            if (domainFilter !== "all" && project.domain !== domainFilter) {
                return false;
            }

            // Tag filter
            if (selectedTag && !project.tags.includes(selectedTag)) {
                return false;
            }

            // Search query
            if (searchQuery.trim() !== "") {
                const query = searchQuery.toLowerCase();
                const matchTitle = project.title.toLowerCase().includes(query);
                const matchDesc = project.description.toLowerCase().includes(query);
                const matchTag = project.tags.some((t) => t.toLowerCase().includes(query));
                if (!matchTitle && !matchDesc && !matchTag) return false;
            }

            return true;
        });
    }, [domainFilter, selectedTag, searchQuery]);

    // Popular tags for quick filter chips
    const popularTags = ["React Native", "Next.js", "TypeScript", "Node.js", "Supabase", "MongoDB", "Expo", "OpenAI API"];

    return (
        <div
            onMouseMove={handleProjectMouseMove}
            className="relative min-h-screen bg-surface text-txt-primary selection:bg-accent selection:text-white"
        >
            {/* ====== 1. HERO & ARCHITECTURAL HEADER ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-white/[0.08]">
                {/* Architectural Crosshair Markers */}
                <div className="absolute top-8 left-6 font-mono text-xs text-txt-dim select-none hidden md:block">+ WORKS_ARCHIVE / 2026</div>
                <div className="absolute top-8 right-6 font-mono text-xs text-txt-dim select-none hidden md:block">+ TOTAL_RELEASES: 09</div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                            // Complete Project Directory
                        </span>

                        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-txt-primary leading-[0.98]">
                            Selected Works &amp; Systems.
                        </h1>

                        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-txt-secondary font-body">
                            A curated directory of production-tested mobile applications, full-stack web platforms, and open-source developer utilities.
                        </p>
                    </motion.div>

                    {/* Quick Stats Ticker */}
                    <div className="flex items-center gap-6 font-mono text-xs">
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-4 text-center min-w-[120px]">
                            <span className="font-display text-3xl font-bold text-txt-primary block">
                                {ALL_PROJECTS.length < 10 ? `0${ALL_PROJECTS.length}` : ALL_PROJECTS.length}
                            </span>
                            <span className="text-[10px] text-txt-muted uppercase tracking-wider">Shipped Projects</span>
                        </div>
                        <div className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-4 text-center min-w-[120px]">
                            <span className="font-display text-3xl font-bold text-accent block">100%</span>
                            <span className="text-[10px] text-txt-muted uppercase tracking-wider">Verified Live</span>
                        </div>
                    </div>
                </div>

                {/* ====== 2. INTERACTIVE CONTROLS BAR ====== */}
                <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Domain Filter Tabs */}
                    <div className="inline-flex rounded-full border border-white/[0.08] p-1 bg-surface-secondary self-start">
                        {[
                            { id: "all", label: `All Works (${ALL_PROJECTS.length})` },
                            { id: "web", label: `Web Platforms (${ALL_PROJECTS.filter(p => p.domain === 'web').length})` },
                            { id: "mobile", label: `Mobile Apps (${ALL_PROJECTS.filter(p => p.domain === 'mobile').length})` }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setDomainFilter(tab.id)}
                                data-cursor="pointer"
                                className={`px-4 py-2 rounded-full font-mono text-xs transition-colors duration-200 ${
                                    domainFilter === tab.id
                                        ? "bg-accent text-white font-semibold"
                                        : "text-txt-secondary hover:text-txt-primary"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Right: Search Box & View Mode Toggle */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        {/* Search Input */}
                        <div className="relative flex-1 md:w-64">
                            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-txt-muted" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by name or tech..."
                                className="w-full pl-10 pr-8 py-2 rounded-full border border-white/[0.08] bg-surface-secondary text-txt-primary font-mono text-xs placeholder:text-txt-muted focus:border-accent focus:outline-none transition-colors"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-muted hover:text-white"
                                >
                                    <FiX className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>

                        {/* View Switcher: Grid vs Compact List */}
                        <div className="inline-flex rounded-full border border-white/[0.08] p-1 bg-surface-secondary">
                            <button
                                onClick={() => setViewMode("grid")}
                                data-cursor="pointer"
                                title="Grid View"
                                className={`p-2 rounded-full transition-colors ${
                                    viewMode === "grid" ? "bg-white/10 text-white" : "text-txt-muted hover:text-white"
                                }`}
                            >
                                <FiGrid className="w-4 h-4" />
                            </button>
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
                        </div>
                    </div>
                </div>

                {/* Quick Tech Tag Filters */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-txt-dim mr-2">Filter by Tech:</span>
                    {popularTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            data-cursor="pointer"
                            className={`px-3 py-1 rounded-full font-mono text-[11px] border transition-colors ${
                                selectedTag === tag
                                    ? "border-accent bg-accent/15 text-accent font-semibold"
                                    : "border-white/[0.06] bg-white/[0.02] text-txt-muted hover:text-txt-primary hover:border-white/20"
                            }`}
                        >
                            {tag} {selectedTag === tag && "×"}
                        </button>
                    ))}
                    {selectedTag && (
                        <button
                            onClick={() => setSelectedTag(null)}
                            className="font-mono text-[11px] text-accent underline ml-2 hover:text-white"
                        >
                            Clear tag filter
                        </button>
                    )}
                </div>
            </div>

            {/* ====== 3. MAIN PROJECTS SHOWCASE ====== */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
                {filteredProjects.length === 0 ? (
                    <div className="rounded-3xl border border-white/[0.08] bg-surface-secondary p-16 text-center">
                        <p className="font-mono text-sm text-txt-muted mb-4">
                            No projects found matching &quot;{searchQuery || selectedTag}&quot;
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedTag(null);
                                setDomainFilter("all");
                            }}
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-mono text-xs font-semibold text-white hover:bg-accent-hover transition-colors"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : viewMode === "grid" ? (
                    /* --- BENTO GRID VIEW --- */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <BentoProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    /* --- DENNIS SNELLENBERG LIST VIEW --- */
                    <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => setActiveProject(project)}
                                onMouseLeave={() => setActiveProject(null)}
                                data-cursor="view"
                                data-cursor-text="VISIT"
                                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:pl-3"
                            >
                                <div className="flex items-baseline gap-4 sm:gap-6">
                                    <span className="font-mono text-xs sm:text-sm text-txt-dim tabular-nums">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary group-hover:text-accent transition-colors">
                                                {project.shortTitle}
                                            </h3>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-txt-muted uppercase">
                                                {project.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-txt-secondary max-w-xl mt-1 line-clamp-1 font-body">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-6 self-end md:self-auto font-mono text-xs">
                                    <div className="flex flex-wrap gap-1.5 hidden lg:flex">
                                        {project.tags.slice(0, 3).map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded border border-white/[0.06] bg-white/[0.02] text-txt-secondary text-[11px]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="px-3 py-1 rounded-full border border-white/[0.08] text-txt-muted text-[11px] uppercase tracking-wider">
                                        {project.domainLabel}
                                    </span>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="pointer"
                                        className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-txt-secondary group-hover:text-white group-hover:border-accent group-hover:bg-accent transition-all duration-300"
                                        title={project.actionText}
                                    >
                                        <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Dennis Snellenberg Floating Preview Card */}
            <AnimatePresence>
                {viewMode === "list" && activeProject && (
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
                                {activeProject.shortTitle}
                            </span>
                            <span className="font-mono text-[10px] text-accent uppercase">
                                {activeProject.metrics}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ====== 4. BOTTOM ARCHITECTURAL CTA ====== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-28 pt-8">
                <div className="rounded-3xl border border-white/[0.1] bg-surface-secondary p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-card">
                    <div className="max-w-xl">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                            // Direct Inquiry
                        </span>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-txt-primary">
                            Need a custom architecture or mobile application?
                        </h3>
                        <p className="text-sm sm:text-base text-txt-secondary mt-3 leading-relaxed font-body">
                            From fast MVP iterations to scalable full-stack web and cross-platform mobile apps. Let&apos;s build your next release.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                        <MagneticButton
                            as="a"
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
                        >
                            Start A Project
                            <FiArrowUpRight className="w-4 h-4" />
                        </MagneticButton>

                        <MagneticButton
                            as="a"
                            href="/Aman_Kumar_Resume.pdf"
                            download="Aman_Kumar_Resume.pdf"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-surface-tertiary px-6 py-3.5 text-sm font-semibold text-txt-primary hover:border-white/30 transition-all"
                        >
                            Download Resume
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
