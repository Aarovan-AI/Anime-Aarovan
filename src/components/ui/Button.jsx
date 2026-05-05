import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-[#509DD0] to-[#3A7DB0] text-white hover:shadow-[0_0_20px_rgba(80,157,208,0.6)] border border-[#509DD0]/60 font-bold",
  secondary:
    "border-2 border-[#509DD0]/50 bg-transparent text-white hover:bg-[#509DD0]/10 hover:border-[#509DD0]/70 font-semibold",
  ghost:
    "bg-[#509DD0]/40 text-white hover:bg-[#509DD0]/60 shadow-md shadow-[#509DD0]/30 font-semibold",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full font-medium transition-all duration-300",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
