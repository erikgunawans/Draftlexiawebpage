import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, BookOpen, Share2, Globe, ArrowRight, Trash, AlertTriangle, Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import exampleImage from 'figma:asset/68e76e242d7d9772f4cd69d9f94aceebe5726338.png';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProtocol: () => void;
}

export function DiscoveryModal({ isOpen, onClose, onRequestProtocol }: DiscoveryModalProps) {
  const { t } = useLanguage();
  const lenis = useScrollInstance();

  // Lock body scroll when modal is open using Lenis
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#050505] rounded-[2rem] border border-white/10 shadow-2xl overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain"
        data-lenis-prevent
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col min-h-full">
          
          {/* Hero Section */}
          <div className="relative p-12 md:p-16 border-b border-white/5 overflow-hidden">
             {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3779f1]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3779f1]/20 border border-[#3779f1]/30 text-[#78bbfe] text-xs font-mono mb-8 uppercase tracking-widest">
                <Search size={12} />
                {t.discoveryModal.badge}
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                <span className="text-white">{t.discoveryModal.headlineStart}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78bbfe] to-[#a5d0ff]">
                  {t.discoveryModal.headlineHighlight}
                </span>
              </h2>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                {t.discoveryModal.subheadline}
              </p>

              <button 
                onClick={onRequestProtocol}
                className="bg-[#3779f1] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(120,187,254,0.3)]"
              >
                {t.discoveryModal.cta} <ArrowRight size={18} />
              </button>
            </div>
            
            {/* Abstract Visual - Right Side */}
            <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] mr-8 pointer-events-none">
               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3779f1]/20 group">
                  <div className="absolute inset-0 bg-[#3779f1]/10 mix-blend-overlay z-10" />
                  <img 
                    src={exampleImage} 
                    alt="Discovery Engine Visualization" 
                    className="w-full h-full object-cover opacity-90 hue-rotate-[20deg] saturate-[1.2]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-20" />
               </div>
            </div>
          </div>

          {/* Problem Section (Static Archive Trap) */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-white/[0.02]">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-bold text-white mb-2">{t.discoveryModal.staticArchive.title}</h3>
               <p className="text-gray-500">{t.discoveryModal.staticArchive.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
               <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 flex flex-col gap-4 group hover:border-red-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-red-400 transition-colors">
                      <Trash size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{t.discoveryModal.staticArchive.card1.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.discoveryModal.staticArchive.card1.desc}</p>
               </div>
               
               <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 flex flex-col gap-4 group hover:border-red-500/20 transition-colors">
                   <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-red-400 transition-colors">
                      <AlertTriangle size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{t.discoveryModal.staticArchive.card2.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.discoveryModal.staticArchive.card2.desc}</p>
               </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="p-12 md:p-16">
            <h3 className="text-3xl font-bold text-center mb-16">{t.discoveryModal.features.title}</h3>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex items-center gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl bg-blue-900/20 flex items-center justify-center text-blue-400 shrink-0">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{t.discoveryModal.features.library.title}</h4>
                  <p className="text-gray-400">{t.discoveryModal.features.library.desc}</p>
                </div>
                <div className="ml-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-blue-500/50 transition-all">
                    <ArrowRight size={16} />
                </div>
              </div>

               {/* Feature 2 */}
              <div className="group bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-[#3779f1]/30 transition-all flex items-center gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3779f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl bg-[#3779f1]/20 flex items-center justify-center text-[#78bbfe] shrink-0">
                  <Share2 size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#bfdbfe] transition-colors">{t.discoveryModal.features.vectorization.title}</h4>
                  <p className="text-gray-400">{t.discoveryModal.features.vectorization.desc}</p>
                </div>
                <div className="ml-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-[#3779f1]/50 transition-all">
                    <ArrowRight size={16} />
                </div>
              </div>

               {/* Feature 3 */}
              <div className="group bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all flex items-center gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl bg-green-900/20 flex items-center justify-center text-green-400 shrink-0">
                  <Globe size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors">{t.discoveryModal.features.bridge.title}</h4>
                  <p className="text-gray-400">{t.discoveryModal.features.bridge.desc}</p>
                </div>
                <div className="ml-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-green-500/50 transition-all">
                    <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-b from-[#0A0A0A] to-black text-center border-t border-white/5">
             <h3 className="text-3xl font-bold text-white mb-8">{t.discoveryModal.footer}</h3>
             <button 
               onClick={onRequestProtocol}
               className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors"
             >
                {t.discoveryModal.cta}
             </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
