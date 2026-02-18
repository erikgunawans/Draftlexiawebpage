import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { StarField } from "./ui/StarField";
import { useLanguage } from "../context/LanguageContext";
import { Activity, Shield, Code, Terminal } from "lucide-react";

export function Hero({ onRequestProtocol }: { onRequestProtocol?: () => void }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const scrollYTransform = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const { t } = useLanguage();

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-48 pb-20 px-4 md:px-8 overflow-hidden bg-black perspective-[2000px]"
    >
      {/* Background Star Field */}
      <StarField />
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#3779f1]/10 blur-[180px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <motion.div
          style={{ y: scrollYTransform, opacity }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#3779f1]/20 border border-[#3779f1]/50 text-white text-sm font-bold tracking-[0.15em] mb-10 uppercase backdrop-blur-xl shadow-[0_0_30px_rgba(55,121,241,0.3)]"
          >
            {t.hero.badge}
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 md:mb-10 leading-[1.1] md:leading-[1.0]">
            <motion.div 
              className="overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
              }}
            >
              {t.hero.titlePart1}
            </motion.div>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% auto" }}
            >
               <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
                }}
               >
                 {t.hero.titlePart2}
               </motion.div>
            </motion.span>
            <br />
            <motion.div 
              className="overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
              }}
            >
              {t.hero.titlePart3}
            </motion.div>
          </h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 leading-relaxed px-4"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.button 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRequestProtocol}
            className="bg-white text-black px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mb-24 md:mb-32 cursor-pointer"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, rotateX: 20, y: 100 }}
           animate={{ opacity: 1, rotateX: 0, y: 0 }}
           transition={{ 
             delay: 0.6, 
             duration: 1.5, 
             type: "spring", 
             stiffness: 40,
             damping: 25 
           }}
           style={{ 
             transformStyle: "preserve-3d" 
           }}
           className="relative mx-auto max-w-7xl will-change-transform w-full"
        >
           {/* Main Dashboard Interface Container */}
          <div className="relative bg-[#09090b] border border-white/10 rounded-xl shadow-2xl shadow-[#3779f1]/20 overflow-hidden backdrop-blur-sm aspect-video flex flex-col items-center justify-center">
              
              {/* 3D Depth Layers - Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none z-50 mix-blend-overlay" />
              
              {/* Video Player */}
              <div className="w-full h-full relative group">
                  <div className="absolute inset-0 w-full h-full bg-black">
                    <iframe 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        src="https://www.youtube.com/embed/TA9TVxuRV2g?autoplay=1&mute=1&controls=0&loop=1&playlist=TA9TVxuRV2g&showinfo=0&modestbranding=1&rel=0" 
                        title="Hero Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ pointerEvents: "none" }}
                    />
                  </div>
                  
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3779f1]/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#3779f1]/50" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#3779f1]/50" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#3779f1]/50" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#3779f1]/50" />
                  
                  {/* Video Title / Status */}
                  <div className="absolute top-4 left-8 right-8 flex justify-between items-center pointer-events-none">
                      <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[10px] font-mono text-white/70 tracking-widest">LIVE_FEED // ENCRYPTED</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#78bbfe]">
                          REC • 00:04:22
                      </div>
                  </div>
              </div>
          </div>

          {/* Floating Holographic Elements (Parallax) - Hidden on Mobile */}
           <div 
              style={{ transform: "translateZ(40px)" }}
              className="hidden md:block absolute top-[20%] left-[20%] pointer-events-none"
           >
              <div className="bg-black/90 backdrop-blur-xl border border-[#3779f1]/30 p-4 rounded-lg shadow-[0_0_30px_rgba(120,187,254,0.15)] flex items-start gap-3 w-64">
                  <div className="mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#3779f1] animate-ping" />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-white mb-1">AUTOMATED DEFENSE</div>
                      <div className="text-[10px] text-gray-400 leading-relaxed font-mono">
                          Intercepted SQL injection attempt from IP 192.168.x.x <span className="text-green-400">BLOCKED</span>
                      </div>
                  </div>
              </div>
           </div>

           <div 
              style={{ transform: "translateZ(70px)" }}
              className="hidden md:block absolute bottom-[20%] right-[10%] pointer-events-none"
           >
               <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-3 rounded-lg shadow-2xl flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-md text-green-400">
                      <Code size={16} />
                  </div>
                  <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">Smart Contract</div>
                      <div className="text-xs font-bold text-white">Verified Secure</div>
                  </div>
               </div>
           </div>
        </motion.div>
      </div>
      
      {/* Add keyframe animation for scanline */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); } /* Adjust based on container height roughly */
        }
      `}</style>
    </section>
  );
}