import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Hide on touch devices
        if ('ontouchstart' in window) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Watch for hoverable elements
        const hoverables = document.querySelectorAll('a, button, [role="button"], input[type="submit"], .hoverable');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Use MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newHoverables = document.querySelectorAll('a, button, [role="button"], input[type="submit"], .hoverable');
            newHoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="custom-cursor"
            style={{ x, y }}
        >
            <motion.div
                animate={{
                    width: isHovering ? 48 : 10,
                    height: isHovering ? 48 : 10,
                    x: isHovering ? -24 : -5,
                    y: isHovering ? -24 : -5,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="rounded-full bg-white"
                style={{ mixBlendMode: 'difference' }}
            />
        </motion.div>
    );
};

export default CustomCursor;
