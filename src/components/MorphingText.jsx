import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MorphingText = ({
  words = ["CREATIVE", "DYNAMIC", "POWERFUL"],
  interval = 3000,
  morphDuration = 1.2,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef(null);

  const nextWord = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(nextWord, interval);
    return () => clearInterval(timer);
  }, [interval, nextWord]);

  useEffect(() => {
    setDisplayWord(words[currentIndex]);
  }, [currentIndex, words]);

  useEffect(() => {
    if (measureRef.current) {
      const measuredWidth = measureRef.current.offsetWidth;
      setWidth(measuredWidth);
    }
  }, [displayWord]);

  return (
    <motion.div
      className={`inline-block relative align-baseline ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={displayWord}
          className="flex flex-wrap justify-center"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {displayWord.split("").map((char, i) => (
            <motion.span
              key={`${displayWord}-${i}`}
              className="inline-block will-change-transform"
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                  rotateX: -45,
                  filter: "blur(8px)",
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: morphDuration,
                    delay: i * 0.04,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                },
                exit: {
                  opacity: 0,
                  y: -20,
                  rotateX: 45,
                  filter: "blur(8px)",
                  transition: {
                    duration: morphDuration * 0.4,
                    delay: i * 0.02,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
