import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  className = "",
  animateOnLoad = true,
}) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);
  const hasAnimated = useRef(false);

  const triggerAnimation = () => {
    if (hasAnimated.current) return;
    iterations.current = 0;
    setTrigger(true);
    hasAnimated.current = true;
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!trigger) {
          clearInterval(interval);
          return;
        }
        if (iterations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= iterations.current
                  ? text[i]
                  : alphabets[getRandomInt(26)],
            ),
          );
          iterations.current = iterations.current + 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.length * 10),
    );
    return () => clearInterval(interval);
  }, [text, duration, trigger]);

  useEffect(() => {
    if (!animateOnLoad && isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    triggerAnimation();
  }, [text, animateOnLoad]);

  return (
    <span
      className="inline-flex overflow-hidden cursor-default"
      onMouseEnter={() => {
        if (!hasAnimated.current) triggerAnimation();
      }}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={`font-mono ${letter === " " ? "w-3" : ""} ${className}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
