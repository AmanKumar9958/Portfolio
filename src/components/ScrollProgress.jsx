import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const updateProgress = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                    setProgress(scrollPercent);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-[2px] bg-accent z-[9999] pointer-events-none transition-[width] duration-75 ease-out"
            style={{ width: `${progress}%` }}
        />
    );
};

export default ScrollProgress;
