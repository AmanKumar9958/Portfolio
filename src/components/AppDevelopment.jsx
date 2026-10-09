import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiSmartphone, FiCloud, FiCpu } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const AppDevelopment = () => {
    const features = [
        {
            icon: <FiSmartphone className="w-6 h-6 text-accent" />,
            title: "Cross-Platform Mobile",
            description: "Production iOS & Android apps built using React Native and Expo with native gesture physics."
        },
        {
            icon: <FiCpu className="w-6 h-6 text-accent" />,
            title: "Performance & Offline",
            description: "Instant response times, local caching, SQLite / WatermelonDB, and smooth 60fps interaction."
        },
        {
            icon: <FiCloud className="w-6 h-6 text-accent" />,
            title: "Cloud & Store Ready",
            description: "Seamless Supabase, Firebase, Stripe integrations, push notifications, and store publication."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface px-6 sm:px-10 py-32 sm:py-40 flex flex-col items-center justify-center relative">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 inline-block">
                        // Service Specification
                    </span>

                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-4 text-txt-primary">
                        Mobile App Development
                    </h1>

                    <p className="max-w-xl mx-auto text-base sm:text-lg mb-14 text-txt-secondary leading-relaxed font-body">
                        We create powerful, intuitive mobile applications for iOS and Android. Engineered for high user retention, fluid navigation, and complete app store readiness.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/[0.08] bg-surface-secondary p-8 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="font-display text-lg font-bold text-txt-primary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed font-body">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton
                        as="a"
                        href="/app-development-info"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
                    >
                        View Scopes &amp; Pricing
                        <FiArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                    <MagneticButton
                        as="a"
                        href="/service-web-development"
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-surface-secondary px-8 py-3.5 text-sm font-semibold text-txt-primary hover:border-white/20 transition-all"
                    >
                        Explore Web Services
                        <FiArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

export default AppDevelopment;
