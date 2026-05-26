import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';
import GradientOrbs from './GradientOrbs';
import TextReveal from './TextReveal';

const plans = [
    {
        title: "Basic Website",
        price: "₹3000",
        features: [
            "Up to 5 pages",
            "Responsive design",
            "Contact form",
            "Basic SEO setup"
        ],
        popular: false,
    },
    {
        title: "Intermediate Website",
        price: "₹5000",
        features: [
            "Up to 8 pages",
            "Custom UI/UX",
            "Blog/News section",
            "Payment integration",
            "Advanced SEO"
        ],
        popular: true,
    },
    {
        title: "Complete Website",
        price: "₹8000+",
        features: [
            "Unlimited pages",
            "E-commerce functionality",
            "Admin dashboard",
            "API integrations",
            "Premium support"
        ],
        popular: false,
    }
];

const WebDevelopmentInfo = () => (
    <section className="min-h-screen bg-surface flex flex-col items-center px-6 py-28 relative overflow-hidden">
        <GradientOrbs variant="default" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                    Pricing Plans
                </span>
                <TextReveal className="font-display text-4xl sm:text-5xl font-bold mb-4">
                    Web Development Pricing
                </TextReveal>
                <p className="text-lg text-txt-secondary max-w-xl mx-auto">
                    Transparent pricing for every scale of project
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -6 }}
                        className={`relative glass-card p-8 flex flex-col items-center text-center ${
                            plan.popular ? 'border-accent-violet/30 shadow-glow scale-[1.02]' : ''
                        }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-accent-gradient px-4 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                                Most Popular
                            </span>
                        )}

                        <h3 className="font-display text-xl font-bold text-txt-primary mb-2">
                            {plan.title}
                        </h3>

                        <div className="text-4xl font-bold text-gradient font-display mb-6">
                            {plan.price}
                        </div>

                        <ul className="w-full space-y-3 mb-8 text-left">
                            {plan.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-sm text-txt-secondary">
                                    <FiCheck className="w-4 h-4 text-accent-violet flex-shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-accent-gradient text-white shadow-glow hover:shadow-glow-lg'
                                    : 'border border-white/[0.1] bg-white/[0.03] text-txt-primary hover:border-accent-violet/30 hover:bg-accent-violet/5'
                            }`}
                        >
                            Get Started
                            <FiArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WebDevelopmentInfo;