import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}) {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
