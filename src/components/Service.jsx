import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import GradientOrbs from './GradientOrbs';
import TextReveal from './TextReveal';

const Service = () => {
    const services = [
        {
            title: "Web Development",
            icon: <FaCode className="w-8 h-8" />,
            description: "Crafting modern, responsive websites using cutting-edge technologies like MERN, Next JS, Payment Integration, and more.",
            features: ["Custom Design", "SEO Optimized", "Payment Integration", "Admin Dashboards"],
            link: "/service-web-development",
            gradient: "from-accent-violet to-accent-cyan",
        },
        {
            title: "Mobile App Development",
            icon: <FaMobileAlt className="w-8 h-8" />,
            description: "Building cross-platform mobile applications with React Native and Flutter for iOS and Android.",
            features: ["Cross-Platform", "Native Feel", "Push Notifications", "App Store Ready"],
            link: "/service-app-development",
            gradient: "from-accent-cyan to-accent-violet",
        }
    ];

    return (
        <section className="w-full min-h-screen bg-surface px-6 py-28 relative overflow-hidden">
            <GradientOrbs variant="default" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-txt-muted mb-4">
                        What I Offer
                    </span>
                    <TextReveal className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        My Services
                    </TextReveal>
                    <p className="text-lg text-txt-secondary max-w-xl mx-auto">
                        Digital solutions crafted with precision and passion to drive your success
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                        >
                            <Link
                                to={service.link}
                                className="block glass-card p-8 group h-full"
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-white transition-transform duration-300 group-hover:scale-110`}>
                                    {service.icon}
                                </div>

                                <h3 className="font-display text-2xl font-bold text-txt-primary mb-3 group-hover:text-gradient transition-all duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-txt-secondary leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] font-semibold text-txt-secondary"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-accent-violet font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow duration-300 hover:scale-105 transition-transform"
                    >
                        Explore My Works
                        <FiArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Service;
