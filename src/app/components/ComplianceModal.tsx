import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, ArrowRight, ShieldCheck, EyeOff, Sparkles, Search, Wand2, CheckCircle, Upload } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import heroImage from "figma:asset/9bdc67b5cd401a6375030535b2107e10c95b25e8.png";

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProtocol: () => void;
}

export function ComplianceModal({ isOpen, onClose, onRequestProtocol }: ComplianceModalProps) {
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
          <div className="relative p-12 md:p-16 border-b border-white/5 overflow-hidden bg-gradient-to-b from-[#050a14] to-[#050505]">
             {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3779f1]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3779f1]/20 border border-[#3779f1]/30 text-[#78bbfe] text-xs font-mono mb-8 uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  {t.complianceModal.badge}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                  {t.complianceModal.headlineStart}
                  <span className="text-[#78bbfe] block mt-2">{t.complianceModal.headlineHighlight}</span>
                </h2>

                <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                  {t.complianceModal.subheadline}
                </p>

                <button 
                  onClick={onRequestProtocol}
                  className="bg-[#3779f1] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(120,187,254,0.3)]"
                >
                  {t.complianceModal.cta} <ArrowRight size={18} />
                </button>
              </div>
              
              {/* Hero Image */}
              <div className="relative flex justify-center lg:justify-end">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#3779f1]/10 to-transparent rounded-2xl blur-3xl opacity-40 pointer-events-none" />
                 <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0A] w-full max-w-lg">
                    <div className="absolute inset-0 bg-[#3779f1]/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                        src={heroImage} 
                        alt="Compliance Engine" 
                        className="relative z-0 w-full h-auto object-cover opacity-90 saturate-[1.2] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
                 </div>
              </div>
            </div>
          </div>

          {/* Blind Spot Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-[#080808] text-center">
            <div className="max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono mb-6 uppercase tracking-widest">
                  <EyeOff size={12} />
                  {t.complianceModal.blindSpot.badge}
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.complianceModal.blindSpot.title}</h3>
               <p className="text-gray-400 text-lg leading-relaxed">
                 {t.complianceModal.blindSpot.description}
               </p>
            </div>
          </div>

          {/* Two Tiers Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-[#050505]">
             <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.complianceModal.tiers.title}</h3>
                <p className="text-gray-400">{t.complianceModal.tiers.subtitle}</p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Tier 1 Card */}
                <div className="bg-[#0c1218] border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
                   <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <Sparkles size={24} />
                   </div>
                   <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{t.complianceModal.tiers.tier1.title}</h4>
                      <p className="text-blue-400 font-medium">{t.complianceModal.tiers.tier1.subtitle}</p>
                   </div>
                   <ul className="space-y-4">
                      {t.complianceModal.tiers.tier1.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                           <CheckCircle size={16} className="text-blue-500 shrink-0 mt-1" />
                           <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Tier 2 Card */}
                <div className="bg-[#0c1218] border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
                   <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <Search size={24} />
                   </div>
                   <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{t.complianceModal.tiers.tier2.title}</h4>
                      <p className="text-blue-400 font-medium">{t.complianceModal.tiers.tier2.subtitle}</p>
                   </div>
                   <ul className="space-y-4">
                      {t.complianceModal.tiers.tier2.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                           <CheckCircle size={16} className="text-blue-500 shrink-0 mt-1" />
                           <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          {/* Fixer Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-[#050505]">
             <div className="bg-[#0f1623] border border-white/10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3779f1]/20 border border-[#3779f1]/30 text-[#78bbfe] text-xs font-mono mb-6 uppercase tracking-widest">
                      <Wand2 size={12} />
                      {t.complianceModal.fixer.badge}
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-6">{t.complianceModal.fixer.title}</h3>
                   <p className="text-gray-400 leading-relaxed">
                      {t.complianceModal.fixer.description}
                   </p>
                </div>
                
                <div className="flex-1 w-full bg-[#050a14] rounded-xl border border-white/10 p-6 shadow-inner">
                   <div className="flex items-center justify-between mb-4">
                      <div className="h-2 w-24 bg-white/10 rounded-full" />
                      <div className="text-green-500 font-mono text-sm">{t.complianceModal.fixer.match}</div>
                   </div>
                   <div className="space-y-3">
                      <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse delay-75" />
                      <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse delay-150" />
                   </div>
                   <div className="mt-6 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-green-500 shadow-[0_0_10px_#22c55e]" />
                   </div>
                </div>
             </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-r from-blue-900/40 to-blue-950/40 text-center border-t border-white/5">
             <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">{t.complianceModal.footer.title}</h3>
                <p className="text-gray-300 mb-8 text-lg">{t.complianceModal.footer.subtitle}</p>
                <button 
                  onClick={onRequestProtocol}
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                   {t.complianceModal.footer.cta} <Upload size={16} />
                </button>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
