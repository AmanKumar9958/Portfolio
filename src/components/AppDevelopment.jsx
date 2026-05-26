import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import GradientOrbs from './GradientOrbs';

const AppDevelopment = () => {
    const features = [
        {
            emoji: "📱",
            title: "Mobile Apps",
            description: "Native and cross-platform apps for iOS & Android."
        },
        {
            emoji: "🖥️",
            title: "Desktop Apps",
            description: "Robust desktop solutions for Windows, Mac, and Linux."
        },
        {
            emoji: "☁️",
            title: "Cloud Integration",
            description: "Seamless integration with cloud services and APIs."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface px-6 py-28 flex flex-col items-center justify-center relative overflow-hidden">
            <GradientOrbs variant="subtle" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-6">
                        Service Detail
                    </span>

                    <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-txt-primary">
                        App <span className="text-gradient">Development</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg mb-12 text-txt-secondary leading-relaxed">
                        We create powerful, intuitive mobile and desktop applications for iOS, Android, and cross-platform needs. Our apps are designed for performance, security, and a seamless user experience.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 text-center"
                        >
                            <span className="text-4xl mb-4 block">{feature.emoji}</span>
                            <h3 className="font-display text-lg font-bold text-txt-primary mb-2">{feature.title}</h3>
                            <p className="text-sm text-txt-secondary">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/app-development-info"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow hover:scale-105 transition-transform duration-300"
                    >
                        View Pricing
                        <FiArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="/service-web-development"
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-txt-primary hover:border-accent-violet/30 hover:bg-accent-violet/5 transition-all duration-300"
                    >
                        Next: Web Development
                        <FiArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AppDevelopment;
