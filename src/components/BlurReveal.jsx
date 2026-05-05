import { motion } from "framer-motion";

export const BlurReveal = ({
  text,
  duration = 0.8,
  delay = 0,
  blur = "10px",
  yOffset = 20,
  className = "text-2xl md:text-5xl font-bold text-white",
  childClassName = "",
}) => {
  const words = text.split(/\s+/);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      y: yOffset,
      x: -30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  return (
    <motion.div
      key={text}
      className={`flex flex-wrap gap-x-[0.2em] gap-y-[0.1em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5%" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={`inline-block whitespace-nowrap ${childClassName}`}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
