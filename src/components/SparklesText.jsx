import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Sparkle = ({ size, color, style, onComplete }) => {
  return (
    <motion.span
      className="absolute pointer-events-none block z-20"
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180],
        opacity: [1, 1, 0],
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      style={{
        top: style.top,
        left: style.left,
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 160 160"
        style={{ width: "100%", height: "100%", fill: color }}
      >
        <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
      </svg>
    </motion.span>
  );
};

export const SparklesText = ({
  text = "Sparkles",
  colors = { first: "#509DD0", second: "#244357" },
  className,
  sparklesCount = 10,
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const size = Math.random() * 12 + 8;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      };

      setSparkles((prev) => {
        const next = [...prev, { id: now, size, color, style }];
        if (next.length > sparklesCount)
          return next.slice(next.length - sparklesCount);
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  const removeSparkle = (id) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <span className={`inline-block relative isolate ${className}`}>
      <span className="relative z-10 gradient-text">{text}</span>
      <span className="absolute inset-0 z-20 pointer-events-none">
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            {...sparkle}
            onComplete={() => removeSparkle(sparkle.id)}
          />
        ))}
      </span>
    </span>
  );
};
