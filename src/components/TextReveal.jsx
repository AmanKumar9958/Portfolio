import { motion } from 'framer-motion';

const TextReveal = ({ children, className = '', as = 'h2', delay = 0 }) => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const Tag = motion[as] || motion.h2;

    return (
        <Tag
            className={`overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </Tag>
    );
};

export default TextReveal;
