import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference">
      <motion.div
        className="absolute h-4 w-4 rounded-full bg-white"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -8, // Center offset
          top: -8,  // Center offset
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: 1,
        }}
      />
    </div>
  );
}
