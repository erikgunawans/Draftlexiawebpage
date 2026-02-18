import React, { useEffect } from 'react';
import { motion } from "motion/react";
import { X, ArrowRight, Database, Skull, Tag, Clock, ClipboardList } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrollInstance } from "../context/ScrollContext";
import exampleImage from 'figma:asset/1cb1a894079c38b9f223f878ee73566f1620e8e9.png';

interface RepositoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RepositoryModal({ isOpen, onClose }: RepositoryModalProps) {
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
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 text-xs font-mono mb-8 uppercase tracking-widest">
                <Database size={12} />
                {t.repositoryModal.badge}
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                {t.repositoryModal.headline.split('\n').map((line, i) => (
                    <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400" : ""}>
                        {line}{i === 0 && <br />}
                    </span>
                ))}
              </h2>

              <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                {t.repositoryModal.subheadline}
              </p>

              <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:gap-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                {t.repositoryModal.cta} <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="relative flex-1 w-full max-w-lg">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 bg-[#0A0A0A] aspect-square">
                    <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                      src={exampleImage} 
                      alt="Active Intelligence Archive" 
                      className="w-full h-full object-cover opacity-90 saturate-[1.2] contrast-[1.1] relative z-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
                </div>
            </div>
          </div>

          {/* Problem Section */}
          <div className="p-12 md:p-16 border-b border-white/5 bg-white/[0.02]">
            <div className="text-center max-w-4xl mx-auto">
               <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                     <Skull size={12} />
                     {t.repositoryModal.problem.badge}
                  </span>
               </div>
               <h3 className="text-4xl font-bold text-white mb-6">{t.repositoryModal.problem.title}</h3>
               <p className="text-gray-400 text-lg leading-relaxed">{t.repositoryModal.problem.description}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="p-12 md:p-16 bg-[#050505]">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-2">{t.repositoryModal.features.title}</h3>
                <p className="text-gray-500">{t.repositoryModal.features.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Auto-Tagging */}
              <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Tag size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Tag size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors relative z-10">{t.repositoryModal.features.cards.tagging.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">{t.repositoryModal.features.cards.tagging.desc}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                    {t.repositoryModal.features.cards.tagging.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

               {/* Card 2: Expiry Watch */}
               <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Clock size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Clock size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors relative z-10">{t.repositoryModal.features.cards.expiry.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">{t.repositoryModal.features.cards.expiry.desc}</p>
                <div className="mt-auto relative z-10">
                    <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-xs font-mono text-cyan-400">{t.repositoryModal.features.cards.expiry.alert}</span>
                    </div>
                </div>
              </div>

               {/* Card 3: Obligation Tracking */}
               <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ClipboardList size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-purple-900/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <ClipboardList size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors relative z-10">{t.repositoryModal.features.cards.obligation.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">{t.repositoryModal.features.cards.obligation.desc}</p>
                <div className="mt-auto relative z-10">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-gray-500">
                            <span>{t.repositoryModal.features.cards.obligation.task}</span>
                            <span className="text-red-400">{t.repositoryModal.features.cards.obligation.status}</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[90%] bg-red-500" />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="p-12 md:p-16 bg-gradient-to-b from-[#050505] to-blue-900/20 text-center border-t border-white/5">
             <h3 className="text-3xl font-bold text-white mb-2">{t.repositoryModal.footer.title}</h3>
             <p className="text-gray-400 mb-8">{t.repositoryModal.footer.subtitle}</p>
             <button 
               onClick={onRequestProtocol}
               className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors flex items-center gap-2 mx-auto"
             >
                {t.repositoryModal.footer.cta} <ArrowRight size={18} />
             </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}