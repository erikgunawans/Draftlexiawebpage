import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, ArrowRight, FileText, Type, Ghost, LayoutTemplate, Languages, UploadCloud, Sparkles, Flame, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import heroImage from "figma:asset/e751e01e076a9c41eedac7108a13eb9039520dd2.png";

interface SmartDraftingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProtocol: () => void;
}

export function SmartDraftingModal({ isOpen, onClose, onRequestProtocol }: SmartDraftingModalProps) {
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
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 text-xs font-mono mb-8 uppercase tracking-widest">
                  <FileText size={12} />
                  {t.smartDraftingModal.badge}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                  {t.smartDraftingModal.headlineStart}
                  <span className="text-purple-500">
                    {t.smartDraftingModal.headlineHighlight}
                  </span>
                  {t.smartDraftingModal.headlineEnd}
                </h2>

                <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                  {t.smartDraftingModal.subheadline}
                </p>

                <button 
                  onClick={onRequestProtocol}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  {t.smartDraftingModal.cta} <ArrowRight size={18} />
                </button>
              </div>
              
              {/* Hero Image */}
              <div className="relative flex justify-center lg:justify-end">
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-violet-500/10 rounded-2xl blur-3xl opacity-40 pointer-events-none" />
                 <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0A] w-full max-w-lg">
                    <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                        src={heroImage} 
                        alt="Smart Drafting" 
                        className="relative z-0 w-full h-auto object-cover opacity-90 saturate-[1.2] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
                 </div>
              </div>
            </div>
          </div>

          {/* Risk Section ("The 'Franken-Draft' Risk") */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-[#080808]">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono mb-6 uppercase tracking-widest">
                  <Flame size={12} />
                  {t.smartDraftingModal.risk.badge}
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.smartDraftingModal.risk.title}</h3>
               <p className="text-gray-400 text-lg leading-relaxed">
                 {t.smartDraftingModal.risk.description}
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
               {/* Risk Card 1 */}
               <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-red-900/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500/20 transition-colors">
                     <Type size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <X size={16} className="text-red-500" />
                     {t.smartDraftingModal.risk.cards.format.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                     {t.smartDraftingModal.risk.cards.format.description}
                  </p>
               </div>

               {/* Risk Card 2 */}
               <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-red-900/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500/20 transition-colors">
                     <Ghost size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <X size={16} className="text-red-500" />
                     {t.smartDraftingModal.risk.cards.zombie.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                     {t.smartDraftingModal.risk.cards.zombie.description}
                  </p>
               </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-black">
             <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.smartDraftingModal.features.title}</h3>
                <p className="text-gray-400">{t.smartDraftingModal.features.subtitle}</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl hover:bg-[#0F0F0F] transition-colors group">
                   <div className="w-full aspect-[16/9] bg-[#151515] rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors overflow-hidden relative">
                      <LayoutTemplate className="text-blue-500 opacity-50 absolute" size={48} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/10 rounded-full">
                         <div className="w-2/3 h-full bg-blue-500 rounded-full" />
                      </div>
                   </div>
                   <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <LayoutTemplate size={16} className="text-blue-500" />
                      {t.smartDraftingModal.features.cards.inputs.title}
                   </h4>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {t.smartDraftingModal.features.cards.inputs.desc}
                   </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl hover:bg-[#0F0F0F] transition-colors group">
                   <div className="w-full aspect-[16/9] bg-[#151515] rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:border-purple-500/30 transition-colors overflow-hidden relative">
                      <Languages className="text-purple-500 opacity-50 absolute" size={48} />
                      <div className="absolute inset-0 flex items-center justify-center gap-4">
                         <div className="w-8 h-5 bg-white/10 rounded animate-pulse" />
                         <ArrowRight size={12} className="text-gray-600" />
                         <div className="w-8 h-5 bg-purple-500/50 rounded animate-pulse delay-100" />
                      </div>
                   </div>
                   <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Languages size={16} className="text-purple-500" />
                      {t.smartDraftingModal.features.cards.bilingual.title}
                   </h4>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {t.smartDraftingModal.features.cards.bilingual.desc}
                   </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl hover:bg-[#0F0F0F] transition-colors group">
                   <div className="w-full aspect-[16/9] bg-[#151515] rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:border-green-500/30 transition-colors overflow-hidden relative">
                      <UploadCloud className="text-green-500 opacity-50 absolute" size={48} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
                   </div>
                   <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <UploadCloud size={16} className="text-green-500" />
                      {t.smartDraftingModal.features.cards.template.title}
                   </h4>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {t.smartDraftingModal.features.cards.template.desc}
                   </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl hover:bg-[#0F0F0F] transition-colors group">
                   <div className="w-full aspect-[16/9] bg-[#151515] rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:border-yellow-500/30 transition-colors overflow-hidden relative">
                      <Sparkles className="text-yellow-500 opacity-50 absolute" size={48} />
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 font-mono border border-white/5 w-3/4">
                         {t.smartDraftingModal.features.cards.refinement.visual}
                      </div>
                   </div>
                   <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-yellow-500" />
                      {t.smartDraftingModal.features.cards.refinement.title}
                   </h4>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {t.smartDraftingModal.features.cards.refinement.desc}
                   </p>
                </div>
             </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-b from-blue-950/20 to-black text-center border-t border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">{t.smartDraftingModal.footer.title}</h3>
                <p className="text-gray-400 mb-8">{t.smartDraftingModal.footer.subtitle}</p>
                <button 
                  onClick={onRequestProtocol}
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                   {t.smartDraftingModal.footer.cta} <ArrowRight size={16} />
                </button>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
