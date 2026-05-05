"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const SplitTextReveal = ({ 
    text = "ELEGANT", 
    className, 
    delay = 0, 
    duration = 1, 
    stagger = 0.03, 
    animation = "up"
}) => {
    const ref = useRef(null);
    const characters = text.split("");
    const centerIndex = characters.length / 2;

    const getInitialState = () => {
        switch (animation) {
            case "up":
                return { y: "100%", opacity: 0 };
            case "down":
                return { y: "-100%", opacity: 0 };
            case "left":
                return { x: "-100%", opacity: 0 };
            case "right":
                return { x: "100%", opacity: 0 };
            case "fade":
                return { opacity: 0 };
            case "scale":
                return { scale: 0, opacity: 0 };
            default:
                return { y: "100%", opacity: 0 };
        }
    };

    return (
        <div ref={ref} className={cn("flex relative", className)}>
            <div className="flex items-end flex-wrap justify-center overflow-visible gap-[0.1em]">
                {characters.map((char, i) => {
                    const dist = Math.abs(i - centerIndex);
                    const staggerDelay = delay + dist * stagger;

                    return (
                        <div 
                            key={i} 
                            className="overflow-hidden relative flex flex-col justify-end"
                            style={{
                                paddingTop: '0.2em',
                                paddingBottom: '0.2em',
                                paddingLeft: '0.2em',
                                paddingRight: '0.2em',
                                marginTop: '-0.1em',
                                marginBottom: '-0.1em',
                                marginLeft: '-0.2em',
                                marginRight: '-0.2em',
                            }}
                        >
                            <motion.span
                                initial={getInitialState()}
                                whileInView={{ y: "0%", opacity: 1, x: "0%", scale: 1 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{
                                    delay: staggerDelay,
                                    duration: duration,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={cn("inline-block will-change-transform leading-none text-center text-inherit", char === " " ? "min-w-[0.2em]" : "")}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};