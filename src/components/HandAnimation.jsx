import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HandAnimation = ({ delay = 2000 }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 flex flex-col items-center justify-center z-[999999] bg-surface"
                >
                    {/* Pulsing accent ring */}
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            className="absolute w-24 h-24 rounded-full border-2 border-accent-violet/30"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute w-16 h-16 rounded-full border border-accent-cyan/20"
                            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        />

                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10"
                        >
                            <span className="font-display text-3xl font-bold text-txt-primary">
                                A<span className="text-gradient">.</span>
                            </span>
                        </motion.div>
                    </div>

                    {/* Loading bar */}
                    <motion.div
                        className="mt-8 w-32 h-[2px] rounded-full overflow-hidden bg-white/5"
                    >
                        <motion.div
                            className="h-full bg-accent-gradient rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: delay / 1000 - 0.3, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HandAnimation;
