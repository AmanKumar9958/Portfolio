import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {/* Exit overlay — smooth architectural wipe */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full origin-bottom z-[999] bg-surface-secondary pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Enter overlay — reveals the page */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full origin-top z-[999] bg-surface-secondary pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Subtle accent hairline marker */}
      <motion.div
        className="fixed top-0 left-0 w-full h-[2px] z-[1000] bg-accent pointer-events-none"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
