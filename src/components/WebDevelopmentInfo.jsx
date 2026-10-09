import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const plans = [
    {
        title: "Landing & Portfolio",
        price: "₹3,000",
        features: [
            "Up to 5 pages / sections",
            "High-contrast responsive design",
            "Direct contact form integration",
            "SEO baseline & Google indexing",
            "7-day delivery"
        ],
        popular: false,
    },
    {
        title: "Full Product / Web App",
        price: "₹5,000",
        features: [
            "Next.js / React full-stack platform",
            "Custom component architecture",
            "Supabase / MongoDB backend",
            "Payment gateway integration",
            "Advanced SEO & 95+ Lighthouse",
            "14-day delivery"
        ],
        popular: true,
    },
    {
        title: "Enterprise Architecture",
        price: "₹8,000+",
        features: [
            "Scalable microservices / API backend",
            "Role-based authentication & admin panel",
            "Third-party API & webhook integrations",
            "Comprehensive QA & test coverage",
            "Priority engineering support"
        ],
        popular: false,
    }
];

const WebDevelopmentInfo = () => (
    <section className="min-h-screen bg-surface flex flex-col items-center px-6 sm:px-10 py-32 sm:py-40 relative">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">
                    // Tiered Specifications
                </span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-txt-primary mb-4">
                    Web Development Scopes
                </h1>
                <p className="text-base sm:text-lg text-txt-secondary max-w-xl mx-auto font-body">
                    Clear, transparent engineering scopes tailored to your product stage.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={plan.title}
                        className={`relative rounded-3xl border bg-surface-secondary p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                            plan.popular
                                ? 'border-accent shadow-accent-soft'
                                : 'border-white/[0.08] hover:border-white/20'
                        }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-accent px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                                Recommended
                            </span>
                        )}

                        <div>
                            <h3 className="font-display text-xl font-bold text-txt-primary mb-3">
                                {plan.title}
                            </h3>

                            <div className="text-4xl sm:text-5xl font-bold font-display text-txt-primary mb-8 tabular-nums">
                                {plan.price}
                            </div>

                            <ul className="w-full space-y-3.5 mb-10 text-left font-body">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-xs sm:text-sm text-txt-secondary">
                                        <FiCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            to="/contact"
                            className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-accent text-white hover:bg-accent-hover'
                                    : 'border border-white/[0.1] bg-surface-tertiary text-txt-primary hover:border-white/30'
                            }`}
                        >
                            Select Plan &amp; Inquire
                            <FiArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WebDevelopmentInfo;