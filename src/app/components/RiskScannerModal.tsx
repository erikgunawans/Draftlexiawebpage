import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, ArrowRight, ShieldAlert, Lock, Percent, Landmark } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import exampleImage from 'figma:asset/b844826792a73301f4ad42fb67aadfd691a41f62.png';

interface RiskScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProtocol: () => void;
}

export function RiskScannerModal({ isOpen, onClose, onRequestProtocol }: RiskScannerModalProps) {
  const { t } = useLanguage();
  const lenis = useScrollInstance();

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#050505] rounded-[2rem] border border-white/10 shadow-2xl overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain"
        data-lenis-prevent
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col min-h-full">
          
          {/* Hero Section */}
          <div className="relative p-12 md:p-16 border-b border-white/5 overflow-hidden flex flex-col lg:flex-row items-center gap-12">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono mb-8 uppercase tracking-widest">
                <ShieldAlert size={12} />
                {t.riskModal.badge}
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                {t.riskModal.headline}
              </h2>

              <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                {t.riskModal.subheadline}
              </p>

              <button 
                onClick={onRequestProtocol}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                {t.riskModal.cta} <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="relative flex-1 w-full max-w-lg">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-[#0A0A0A]">
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                      src={exampleImage} 
                      alt="Risk Scanner Interface" 
                      className="w-full h-auto object-cover opacity-90 saturate-[1.2] contrast-[1.1] relative z-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
                </div>
            </div>
          </div>

          {/* Problem Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-white/[0.02]">
            <div className="text-center mb-12">
               <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4 uppercase tracking-widest">
                  {t.riskModal.problem.badge}
               </div>
               <h3 className="text-3xl font-bold text-white mb-4">{t.riskModal.problem.title}</h3>
               <p className="text-gray-400 max-w-3xl mx-auto text-lg">{t.riskModal.problem.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
               <div className="bg-[#0f0f0f] p-6 rounded-xl border border-red-500/20 flex items-center gap-4 group hover:bg-red-500/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                      <X size={24} />
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white whitespace-pre-line leading-tight">{t.riskModal.problem.cards.authority}</h4>
                  </div>
               </div>
               
               <div className="bg-[#0f0f0f] p-6 rounded-xl border border-red-500/20 flex items-center gap-4 group hover:bg-red-500/5 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                      <X size={24} />
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white whitespace-pre-line leading-tight">{t.riskModal.problem.cards.tkdn}</h4>
                  </div>
               </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="p-12 md:p-16 bg-[#050505]">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-2">{t.riskModal.features.title}</h3>
                <p className="text-gray-500">{t.riskModal.features.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{t.riskModal.features.cards.authority.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{t.riskModal.features.cards.authority.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 border-t border-white/5 pt-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    {t.riskModal.features.cards.authority.check}
                </div>
              </div>

               {/* Card 2 */}
               <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-all flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  <Percent size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">{t.riskModal.features.cards.tkdn.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{t.riskModal.features.cards.tkdn.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 border-t border-white/5 pt-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {t.riskModal.features.cards.tkdn.check}
                </div>
              </div>

               {/* Card 3 */}
               <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-yellow-900/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                  <Landmark size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">{t.riskModal.features.cards.payment.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{t.riskModal.features.cards.payment.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 border-t border-white/5 pt-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    {t.riskModal.features.cards.payment.check}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-b from-[#050505] to-blue-900/20 text-center border-t border-white/5">
             <h3 className="text-3xl font-bold text-white mb-2">{t.riskModal.footer.title}</h3>
             <p className="text-gray-400 mb-8">{t.riskModal.footer.subtitle}</p>
             <button 
               onClick={onRequestProtocol}
               className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors flex items-center gap-2 mx-auto"
             >
                {t.riskModal.footer.cta} <ArrowRight size={18} />
             </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}