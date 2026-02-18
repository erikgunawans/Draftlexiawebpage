import React from "react";
import { motion } from "motion/react";

export const Globe = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-96 md:h-96 opacity-60">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full text-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M100,2 C120,20 150,60 150,100 C150,140 120,180 100,198" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M100,2 C80,20 50,60 50,100 C50,140 80,180 100,198" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M2,100 L198,100" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="98" ry="40" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 100 100)" />
        <ellipse cx="100" cy="100" rx="98" ry="40" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-45 100 100)" />
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[10px] font-mono tracking-widest text-white bg-black px-2 py-1 border border-white/20">
          JAKARTA
        </div>
      </div>
    </div>
  );
};
