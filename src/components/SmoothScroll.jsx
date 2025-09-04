import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const SmoothScroll = () => {
    const lenisRef = useRef(null);
    const rafRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        // Lenis controls scroll state, so force both native and Lenis position to top on route change.
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true, force: true });
        }
    }, [pathname]);

    return null;
};

export default SmoothScroll;
