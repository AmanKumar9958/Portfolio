import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HandAnimation = ({ delay = 500 }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fast architectural counter from 0 to 100 in ~450ms
        const start = performance.now();
        const duration = 420;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - start;
            const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
            setProgress(currentProgress);

            if (elapsed < duration) {
                requestAnimationFrame(updateCounter);
            } else {
                setTimeout(() => setLoading(false), 80);
            }
        };

        const frame = requestAnimationFrame(updateCounter);
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999999] flex flex-col justify-between p-8 sm:p-12 bg-surface text-txt-primary select-none overflow-hidden"
                >
                    {/* Top Status */}
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-txt-muted">
                        <span>Aman Kumar</span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Studio 2026
                        </span>
                    </div>

                    {/* Center Title */}
                    <div className="flex flex-col items-start max-w-xl">
                        <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                            / Full Stack Developer & Mobile Engineer
                        </span>
                        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-txt-primary">
                            Crafting High Performance Digital Experiences.
                        </h1>
                    </div>

                    {/* Bottom Progress Counter */}
                    <div className="flex items-end justify-between border-t border-white/10 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-24 sm:w-36 h-[2px] bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-xs font-mono text-txt-muted tracking-widest">LOADING</span>
                        </div>
                        <span className="font-mono text-3xl sm:text-5xl font-bold text-txt-primary tabular-nums">
                            {progress < 10 ? `0${progress}` : progress}%
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HandAnimation;
