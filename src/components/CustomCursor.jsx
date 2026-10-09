import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default');
    const [cursorText, setCursorText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring configurations: snappy dot, slightly delayed trailing ring for organic physical feel
    const springConfigDot = { damping: 30, stiffness: 450, mass: 0.2 };
    const springConfigRing = { damping: 25, stiffness: 220, mass: 0.6 };

    const dotX = useSpring(mouseX, springConfigDot);
    const dotY = useSpring(mouseY, springConfigDot);

    const ringX = useSpring(mouseX, springConfigRing);
    const ringY = useSpring(mouseY, springConfigRing);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target) return;

            // Check for explicit custom cursor attributes
            const cursorEl = target.closest('[data-cursor]');
            if (cursorEl) {
                const type = cursorEl.getAttribute('data-cursor');
                const text = cursorEl.getAttribute('data-cursor-text') || '';
                setCursorType(type || 'pointer');
                setCursorText(text);
                return;
            }

            // Check for links and buttons
            const interactiveEl = target.closest('a, button, [role="button"], input[type="submit"], input[type="button"]');
            if (interactiveEl) {
                setCursorType('pointer');
                setCursorText('');
                return;
            }

            // Check for text inputs
            const textInput = target.closest('input[type="text"], input[type="email"], textarea');
            if (textInput) {
                setCursorType('text');
                setCursorText('');
                return;
            }

            // Default
            setCursorType('default');
            setCursorText('');
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    const isViewMode = cursorType === 'view';
    const isPointer = cursorType === 'pointer';
    const isText = cursorType === 'text';

    return (
        <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
            {/* Main Interactive Ring / Badge */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                }}
                animate={{
                    width: isViewMode ? 84 : isPointer ? 44 : isText ? 4 : 28,
                    height: isViewMode ? 84 : isPointer ? 44 : isText ? 24 : 28,
                    translateX: isViewMode ? -42 : isPointer ? -22 : isText ? -2 : -14,
                    translateY: isViewMode ? -42 : isPointer ? -22 : isText ? -12 : -14,
                    backgroundColor: isViewMode
                        ? '#ff5500'
                        : isPointer
                        ? 'rgba(255, 255, 255, 0.08)'
                        : isText
                        ? '#ff5500'
                        : 'transparent',
                    borderColor: isViewMode
                        ? '#ff5500'
                        : isPointer
                        ? 'rgba(255, 85, 0, 0.4)'
                        : isText
                        ? 'transparent'
                        : 'rgba(255, 255, 255, 0.25)',
                    borderWidth: isViewMode || isText ? 0 : 1,
                    scale: 1,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="fixed top-0 left-0 rounded-full flex items-center justify-center backdrop-blur-[2px] transition-colors duration-200"
            >
                {isViewMode && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="font-mono text-[11px] font-bold text-white tracking-widest uppercase pointer-events-none"
                    >
                        {cursorText || 'VIEW'}
                    </motion.span>
                )}
            </motion.div>

            {/* Inner Precision Point Dot */}
            {!isViewMode && !isText && (
                <motion.div
                    style={{
                        x: dotX,
                        y: dotY,
                        translateX: -3,
                        translateY: -3,
                    }}
                    animate={{
                        scale: isPointer ? 0 : 1,
                        opacity: isPointer ? 0 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none"
                />
            )}
        </div>
    );
};

export default CustomCursor;
