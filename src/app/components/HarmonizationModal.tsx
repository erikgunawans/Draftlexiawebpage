import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, ArrowRight, Scale, Gavel, Building2, Lock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import heroImage from "figma:asset/c834655200e2cc229ad5bbbfaf6b9838a702fff9.png";

interface HarmonizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProtocol: () => void;
}

export function HarmonizationModal({ isOpen, onClose, onRequestProtocol }: HarmonizationModalProps) {
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
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3779f1]/20 border border-[#3779f1]/30 text-[#78bbfe] text-xs font-mono mb-8 uppercase tracking-widest">
                  <Scale size={12} />
                  {t.harmonizationModal.badge}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                  {t.harmonizationModal.headlineStart}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78bbfe] to-[#a5d0ff] block mt-2">
                    {t.harmonizationModal.headlineHighlight}
                  </span>
                </h2>

                <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                  {t.harmonizationModal.subheadline}
                </p>

                <button 
                  onClick={onRequestProtocol}
                  className="bg-[#3779f1] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(120,187,254,0.3)]"
                >
                  {t.harmonizationModal.cta} <ArrowRight size={18} />
                </button>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#3779f1]/10 to-[#2563eb]/10 rounded-2xl blur-3xl opacity-40 pointer-events-none" />
                 <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0A]">
                    <div className="absolute inset-0 bg-[#3779f1]/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                        src={heroImage} 
                        alt="Regulatory Harmonization" 
                        className="relative z-0 w-full h-auto object-cover opacity-90 saturate-[1.1] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
                 </div>
              </div>
            </div>
          </div>

          {/* Logic Stack Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-[#080808]">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-bold text-white mb-4">{t.harmonizationModal.logicStack.title}</h3>
               <p className="text-gray-500">{t.harmonizationModal.logicStack.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Public Shield */}
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Gavel className="text-gray-400" size={20} />
                    <h4 className="text-lg font-bold text-white">{t.harmonizationModal.logicStack.publicShield.title}</h4>
                    <span className="text-[10px] font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded border border-white/10 uppercase">
                      {t.harmonizationModal.logicStack.publicShield.tag}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {t.harmonizationModal.logicStack.publicShield.items.map((item, i) => (
                      <div key={i} className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-500 font-mono">{i + 1}</span>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               {/* Corporate Shield */}
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="text-blue-400" size={20} />
                    <h4 className="text-lg font-bold text-white">{t.harmonizationModal.logicStack.corporateShield.title}</h4>
                    <span className="text-[10px] font-mono bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30 uppercase">
                      {t.harmonizationModal.logicStack.corporateShield.tag}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {t.harmonizationModal.logicStack.corporateShield.items.map((item, i) => (
                      <div key={i} className="bg-[#0c1220] border border-blue-500/20 p-4 rounded-xl flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-xs text-blue-400 font-mono">{i + 4}</span>
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Protocol Box */}
                  <div className="mt-2 bg-blue-950/20 border border-blue-500/20 p-4 rounded-xl flex gap-4 items-start">
                    <div className="mt-1 text-blue-400 shrink-0">
                      <Lock size={16} />
                    </div>
                    <p className="text-sm text-blue-200 leading-relaxed">
                      {t.harmonizationModal.logicStack.protocol.prefix}
                      <span className="font-bold text-white">{t.harmonizationModal.logicStack.protocol.highlight}</span>
                      {t.harmonizationModal.logicStack.protocol.suffix}
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-black">
             <div className="flex flex-col items-center mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono mb-6 uppercase tracking-widest">
                  <AlertTriangle size={12} />
                  {t.harmonizationModal.comparison.badge}
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">{t.harmonizationModal.comparison.title}</h3>
                
                <div className="bg-[#111] border border-white/10 px-8 py-4 rounded-xl text-center max-w-2xl w-full">
                   <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">{t.harmonizationModal.comparison.scenario}</div>
                   <div className="text-xl text-white font-medium">{t.harmonizationModal.comparison.scenarioTitle}</div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Generic AI Card */}
                <div className="bg-[#0A0A0A] border border-red-900/20 rounded-2xl overflow-hidden relative group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50" />
                   <div className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <XCircle className="text-red-500" size={24} />
                        <h4 className="text-xl font-bold text-white">{t.harmonizationModal.comparison.generic.title}</h4>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-green-500 text-2xl font-bold mb-2">{t.harmonizationModal.comparison.generic.status}</div>
                        <p className="text-gray-400 italic text-sm leading-relaxed">
                          "{t.harmonizationModal.comparison.generic.description.replace(/\*/g, '')}"
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-red-500 text-sm font-mono mt-8">
                         <AlertTriangle size={14} />
                         {t.harmonizationModal.comparison.generic.result}
                      </div>
                   </div>
                </div>

                {/* Lexa Card */}
                <div className="bg-[#0c1220] border border-blue-500/30 rounded-2xl overflow-hidden relative shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                   <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
                   <div className="bg-blue-600 px-8 py-3 flex items-center gap-3">
                      <CheckCircle className="text-white" size={20} />
                      <h4 className="text-lg font-bold text-white">{t.harmonizationModal.comparison.lexa.title}</h4>
                   </div>
                   
                   <div className="p-8">
                      <div className="mb-6">
                        <div className="text-red-500 text-2xl font-bold mb-2">{t.harmonizationModal.comparison.lexa.status}</div>
                        <p className="text-gray-400 italic text-sm leading-relaxed">
                          "{t.harmonizationModal.comparison.lexa.description.replace(/\*/g, '')}"
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-green-500 text-sm font-mono mt-8">
                         <CheckCircle size={14} />
                         {t.harmonizationModal.comparison.lexa.result}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-b from-[#0A0A0A] to-black text-center border-t border-white/5">
             <h3 className="text-3xl font-bold text-white mb-8">{t.harmonizationModal.footer}</h3>
             <button 
               onClick={onRequestProtocol}
               className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
             >
                {t.harmonizationModal.cta}
             </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
