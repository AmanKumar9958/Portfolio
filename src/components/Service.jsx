import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiArrowUpRight, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Service = () => {
    const services = [
        {
            number: "01",
            title: "Full-Stack Web Development",
            icon: <FiMonitor className="w-6 h-6 text-accent" />,
            tagline: "High-Performance Modern Web Platforms",
            description: "End-to-end web engineering leveraging modern React, Next.js, Node.js, and cloud databases. Focused on measurable performance, intuitive UX, clean API architecture, and seamless conversion flows.",
            deliverables: [
                "Custom Next.js & React Web Applications",
                "Full-Stack Architecture & REST / GraphQL APIs",
                "Payment Integrations (Stripe, Razorpay, Cashfree)",
                "SEO Optimization & 95+ Lighthouse Scores",
                "Admin Dashboards, Analytics & Role Auth",
                "Continuous Deployment & Cloud Setup"
            ],
            tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Supabase", "MongoDB", "Tailwind CSS"],
            link: "/service-web-development",
        },
        {
            number: "02",
            title: "Mobile App Development",
            icon: <FiSmartphone className="w-6 h-6 text-accent" />,
            tagline: "Cross-Platform iOS & Android Systems",
            description: "Cross-platform mobile applications engineered with React Native and Expo. Delivered with native micro-interactions, reliable offline caching, secure authentication, and app store deployment readiness.",
            deliverables: [
                "Cross-Platform Apps (iOS & Android)",
                "App Store & Google Play Store Publishing",
                "Real-time Cloud Sync & Firebase / Supabase Integration",
                "Push Notifications & Background Services",
                "Payment Gateways & In-App Purchases",
                "Native Hardware Integration (Camera, GPS, Sensors)"
            ],
            tech: ["React Native", "Expo", "Supabase", "Firebase", "Stripe API", "Redux Toolkit", "Cashfree"],
            link: "/service-app-development",
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface px-6 sm:px-10 py-32 sm:py-40 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 sm:mb-20"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                        // Capabilities &amp; Services
                    </span>
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-txt-primary">
                        Engineering Services.
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-txt-secondary leading-relaxed font-body">
                        From system architecture and frontend design to native mobile development and production deployment. Every project is executed with precision, reliability, and speed.
                    </p>
                </motion.div>

                {/* Service Detailed Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-white/[0.08] bg-surface-secondary p-8 sm:p-12 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                        >
                            <div>
                                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
                                    <span className="font-mono text-3xl font-bold text-txt-dim">
                                        {service.number}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl border border-white/[0.08] bg-surface-tertiary flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                </div>

                                <span className="font-mono text-xs uppercase tracking-wider text-accent block mb-2">
                                    {service.tagline}
                                </span>

                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-txt-primary mb-4">
                                    {service.title}
                                </h2>

                                <p className="text-sm sm:text-base text-txt-secondary leading-relaxed font-body mb-8">
                                    {service.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="font-mono text-xs uppercase tracking-wider text-txt-muted mb-4">
                                        Core Deliverables
                                    </h4>
                                    <div className="space-y-2.5">
                                        {service.deliverables.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-txt-primary">
                                                <FiCheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline"
                                >
                                    <span>Detailed Specifications</span>
                                    <FiArrowUpRight className="w-4 h-4" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-1.5 font-mono text-xs rounded-full border border-white/[0.1] px-4 py-2 text-txt-primary hover:bg-white/5 transition-colors"
                                >
                                    Inquire Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="rounded-3xl border border-white/[0.08] bg-surface-secondary p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary">
                            Ready to build your next product?
                        </h3>
                        <p className="text-sm text-txt-secondary mt-1 font-body">
                            Discuss timeline, architecture, and deliverables directly.
                        </p>
                    </div>

                    <MagneticButton
                        as="a"
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors flex-shrink-0"
                    >
                        Initiate Project Inquiry
                        <FiArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

export default Service;
