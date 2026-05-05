import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, hover = true, ...props }) {
  const Component = hover ? motion.div : "div";

  return (
    <Component
      {...(hover && {
        whileHover: { y: -8, scale: 1.02 },
        transition: { duration: 0.3 },
      })}
      className={cn(
        "backdrop-blur-xl bg-card-white/80 border border-border/50 rounded-2xl shadow-xl shadow-brand/10",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
