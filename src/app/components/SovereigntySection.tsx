import React, { useRef } from "react";
import { Server, Globe, Lock } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function SovereigntySection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="bg-black text-white py-40 px-8 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-32">
        
        {/* Left Content */}
        <div className="flex-1 z-10">
          <h2 className="text-7xl md:text-9xl font-bold mb-20 tracking-tight leading-tight">
            {t.sovereignty.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78bbfe] to-[#3779f1]">
              {t.sovereignty.titleHighlight}
            </span>
          </h2>

          <div className="space-y-16">
            <div className="flex gap-8 group">
              <div className="w-2 h-20 bg-gradient-to-b from-[#3779f1] to-transparent transition-all duration-300 group-hover:h-32 group-hover:from-[#78bbfe]" />
              <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:text-[#bfdbfe] transition-colors">
                    <Server size={32} className="text-[#3779f1]" /> {t.sovereignty.saas.title}
                </h3>
                <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
                  {t.sovereignty.saas.description}
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
               <div className="w-2 h-20 bg-gradient-to-b from-blue-600 to-transparent transition-all duration-300 group-hover:h-32 group-hover:from-blue-400" />
               <div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-4 group-hover:text-blue-300 transition-colors">
                    <Lock size={32} className="text-blue-500" /> {t.sovereignty.vpc.title}
                </h3>
                <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
                  {t.sovereignty.vpc.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual - 3D Globe Representation */}
        <div className="flex-1 flex items-center justify-center perspective-[2000px]">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-96 h-96 md:w-[40rem] md:h-[40rem] cursor-pointer"
          >
            {/* Background Image Card with Depth */}
            <div 
              style={{ transform: "translateZ(0px)" }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl shadow-[#3779f1]/20 bg-[#161616]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3779f1]/20 to-blue-900/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1684610527413-66eec7828690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBnbG9iZSUyMG5ldHdvcmslMjBkYXJrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA4NTE0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Sovereignty Network"
                className="w-full h-full object-cover opacity-60 scale-110"
              />
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20" />
            </div>

            {/* Floating Elements with Parallax */}
            <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 pointer-events-none">
                {/* Wireframe Sphere Animation */}
                <div className="absolute inset-10 rounded-full border border-[#3779f1]/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-20 rounded-full border border-blue-500/30 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 rounded-full border-x border-white/5 animate-[spin_30s_linear_infinite]" />
            </div>

            {/* Jakarta Point - High Depth */}
            <div 
              style={{ transform: "translateZ(100px)" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
            >
                <div className="w-64 h-64 rounded-full bg-[#3779f1]/20 blur-3xl absolute -z-10 animate-pulse" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-black/80 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl text-lg tracking-widest uppercase font-bold text-white shadow-xl shadow-[#3779f1]/50 flex items-center gap-3"
                >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Jakarta
                </motion.div>
                
                <div className="w-0.5 h-40 bg-gradient-to-b from-[#3779f1] to-transparent mt-4" />
                
                {/* Pin Point */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#3779f1] rounded-full animate-ping opacity-50" />
                </div>
            </div>

            {/* Floating Data Decorators */}
            <div 
              style={{ transform: "translateZ(70px)" }}
              className="absolute top-10 right-10 bg-black/60 backdrop-blur border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 pointer-events-none"
            >
              <div>STATUS: SECURE</div>
              <div className="text-green-400">ENCRYPTION: AES-256</div>
            </div>

            <div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute bottom-10 left-10 bg-black/60 backdrop-blur border border-white/10 p-4 rounded-lg text-xs font-mono text-gray-400 pointer-events-none"
            >
              <div>LATENCY: 2ms</div>
              <div className="text-blue-400">NODE: JKT-01</div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
