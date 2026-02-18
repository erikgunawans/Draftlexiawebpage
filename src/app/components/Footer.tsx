import React from "react";
import { useLanguage } from "../context/LanguageContext";
import logoImage from 'figma:asset/3a19b4fb9e366527c725b78ccd7a660a3b0d972f.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white pt-48 pb-20 px-8 md:px-16 overflow-hidden relative">
      {/* Background Gradient Spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-[#3779f1]/10 blur-[200px] rounded-full pointer-events-none" />

      {/* Big Typographic Statement */}
      <div className="flex flex-col items-center justify-center mb-60 select-none pointer-events-none relative z-10">
        
        {/* Fading Layers */}
        <div className="relative flex flex-col items-center">
            <h1 className="text-[14vw] md:text-[16vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800/80 to-transparent leading-[0.75] tracking-tighter blur-[2px] opacity-50 transform -translate-y-10">
            {t.footer.representation}
            </h1>
            
            <h1 className="text-[14vw] md:text-[16vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700/50 to-transparent leading-[0.75] tracking-tighter blur-[1px] opacity-75 absolute top-0 transform translate-y-5 scale-[0.98]">
            {t.footer.representation}
            </h1>
        </div>

        {/* Main Title */}
        <div className="relative mt-[-5vw]">
            <h1 className="text-[16vw] md:text-[18vw] font-serif italic font-light text-white leading-[0.75] tracking-tight z-10 mix-blend-overlay">
            {t.footer.redefined}
            </h1>
            <h1 className="absolute top-0 left-0 w-full text-center text-[16vw] md:text-[18vw] font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 leading-[0.75] tracking-tight z-10">
            {t.footer.redefined}
            </h1>
        </div>
        
        <div className="h-48 w-[1px] bg-gradient-to-b from-white/50 to-transparent mt-24" />
        
        <div className="flex items-center gap-8 mt-12">
            <div className="h-[1px] w-20 bg-white/20" />
            <div className="text-base md:text-lg tracking-[0.5em] text-gray-400 uppercase font-medium">
            {t.footer.legalIntelligence}
            </div>
            <div className="h-[1px] w-20 bg-white/20" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-16 text-base text-gray-500 uppercase tracking-widest relative z-10 max-w-[100rem] mx-auto">
        <div className="flex items-center gap-5 mb-10 md:mb-0 group cursor-pointer">
           <img src={logoImage} alt="Lexia Logo" className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-10 md:mb-0 text-center md:text-left">
            <span className="hover:text-white transition-colors cursor-pointer">{t.footer.privacy}</span>
            <span className="hover:text-white transition-colors cursor-pointer">{t.footer.terms}</span>
            <span className="hover:text-white transition-colors cursor-pointer">{t.footer.security}</span>
        </div>

        <div className="flex gap-5 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-3 h-3 rounded-full bg-white" />
            <div className="w-3 h-3 rounded-full bg-white/50" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
      </div>
    </footer>
  );
}