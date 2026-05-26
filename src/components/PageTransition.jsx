import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {/* Exit overlay — slides up to cover */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full origin-bottom z-[999]"
        style={{ background: 'linear-gradient(135deg, #0a0a0f, #12121a)' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Enter overlay — slides up to reveal */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full origin-top z-[999]"
        style={{ background: 'linear-gradient(135deg, #12121a, #0a0a0f)' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Accent flash line */}
      <motion.div
        className="fixed top-1/2 left-0 w-full h-[2px] z-[1000]"
        style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
