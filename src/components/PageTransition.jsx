import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {/* Exit Transition Overlay (Slides up to cover) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-slate-900 origin-bottom z-[999]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Enter Transition Overlay (Slides up to reveal) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-slate-900 origin-top z-[999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
