import { motion } from "framer-motion";
import { forwardRef } from "react";

export const HoverButton = forwardRef(
  ({ text, hoverText, icon, className = "", ...props }, ref) => {
    const alternateText = hoverText || text;

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center h-11 sm:h-12 px-5 sm:px-6 rounded-full font-bold text-white transition-all duration-300 overflow-hidden group border border-[#509DD0]/60 bg-gradient-to-r from-[#509DD0] to-[#3A7DB0] hover:shadow-[0_0_20px_rgba(80,157,208,0.6)] cursor-pointer min-w-0 ${className}`}
        {...props}
      >
        <div className="relative h-[24px] overflow-hidden flex items-start justify-center">
          <div className="flex flex-col items-center gap-[16px] transform group-hover:-translate-y-[40px] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">
            {/* First state */}
            <div className="flex items-center gap-2 h-[24px]">
              <span className="text-[13px] sm:text-[14px] leading-tight whitespace-nowrap">
                {text}
              </span>
              {icon && (
                <span className="flex items-center justify-center shrink-0 w-4 h-4">
                  {icon}
                </span>
              )}
            </div>
            {/* Second state */}
            <div className="flex items-center gap-2 h-[24px]">
              <span className="text-[13px] sm:text-[14px] leading-tight whitespace-nowrap">
                {alternateText}
              </span>
              {icon && (
                <span className="flex items-center justify-center shrink-0 w-4 h-4 rotate-45">
                  {icon}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.button>
    );
  },
);

HoverButton.displayName = "HoverButton";
