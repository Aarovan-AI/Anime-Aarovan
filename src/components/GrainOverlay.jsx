import React from 'react';

export default function GrainOverlay() {
  return (
    <div 
      className="grain-overlay fixed inset-0 pointer-events-none z-50 opacity-[0.02]"
      aria-hidden="true"
    />
  );
}
