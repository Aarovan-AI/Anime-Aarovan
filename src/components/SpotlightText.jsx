import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SpotlightText = ({
  text = "Hover Me",
  className = "",
  spotlightSize = 100,
  litColor = "#ffffff",
  dimColor = "rgba(255, 255, 255, 0.2)"
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block overflow-visible cursor-default select-none pb-1 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Text (Dimmed) */}
      <span className="block" style={{ color: dimColor }}>
        {text}
      </span>

      {/* Spotlight Text (Lit) */}
      <motion.span
        className="absolute inset-0 z-10 pointer-events-none block whitespace-nowrap"
        style={{
          maskImage: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, black, transparent)`,
          color: litColor
        }}
        animate={{ opacity: opacity }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
    </span>
  );
};
