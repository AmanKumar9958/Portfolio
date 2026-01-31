import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    // Animation for the first section (Mobile)
    // As we scroll down, it scales down and blurs to create "falling backward" effect
    // We only want this to happen during the first half of the scroll interaction where it's being overlapped
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    
    return (
        <div ref={container} className="relative w-full">
            {/* Section 1: Mobile Development (Sticky) */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div 
                    style={{ scale, opacity }} 
                    className="w-full h-full relative flex items-center justify-center bg-[#1a1a1a]"
                >
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <img 
                        src="/Bento_Grid_Mobile.png" 
                        alt="Mobile App Development" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-20 text-center px-4"
                    >
                        <h2 className="text-3xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-2xl">
                            Mobile App
                            <span className="block text-2xl md:text-5xl mt-2 text-blue-400">Development</span>
                        </h2>
                        <Link to="/projects-app-development">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white text-lg font-bold rounded-full shadow-2xl hover:bg-white hover:text-gray-900 transition-all"
                            >
                                View Mobile Projects
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Section 2: Web Development (Scrolls over) */}
            <div className="relative h-screen z-20 flex items-center justify-center bg-white overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                     <div className="absolute inset-0 bg-black/70 z-10" />
                     <img 
                        src="/Bento_Grid_Web.png" 
                        alt="Web Development" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-30 text-center px-4"
                >
                     <h2 className="text-3xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-2xl">
                        Web
                        <span className="block text-2xl md:text-5xl mt-2 text-orange-400">Development</span>
                    </h2>
                    <Link to="/projects-web-development">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white text-lg font-bold rounded-full shadow-2xl hover:bg-white hover:text-gray-900 transition-all"
                        >
                            View Web Projects
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
