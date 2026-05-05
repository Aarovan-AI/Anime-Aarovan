import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TypewriterText({
  text,
  speed = 100,
  deleteSpeed = 50,
  waitTime = 2000,
  cursor = true,
  cursorChar = "|",
  loop = true,
  className = "text-4xl md:text-5xl font-bold",
}) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && displayText === fullText) {
        if (!loop && loopNum === textArray.length - 1) return;
        setTimeout(() => setIsDeleting(true), waitTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, textArray, speed, deleteSpeed, waitTime, loop, typingSpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-1 inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
}
