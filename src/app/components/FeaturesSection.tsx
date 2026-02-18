import React, { useRef, useState } from "react";
import { Search, Scale, ShieldCheck, FileText, Database, Lock, Activity, Zap, FileJson } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { DiscoveryModal } from "./DiscoveryModal";
import { HarmonizationModal } from "./HarmonizationModal";
import { SmartDraftingModal } from "./SmartDraftingModal";
import { ComplianceModal } from "./ComplianceModal";
import { RiskScannerModal } from "./RiskScannerModal";
import { RepositoryModal } from "./RepositoryModal";
import { AnimatePresence } from "motion/react";
import { TiltCard } from "./ui/TiltCard";
import { SecurityPerimeterSection } from "./SecurityPerimeterSection";

interface FeaturesSectionProps {
  onRequestProtocol: () => void;
  activeTab: 'features' | 'security';
  onTabChange: (tab: 'features' | 'security') => void;
}

export function FeaturesSection({ onRequestProtocol, activeTab, onTabChange }: FeaturesSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeModal, setActiveModal] = useState<'discovery' | 'harmonization' | 'drafting' | 'compliance' | 'risk' | 'repository' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {activeModal === 'discovery' && (
          <DiscoveryModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
        {activeModal === 'harmonization' && (
          <HarmonizationModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
        {activeModal === 'drafting' && (
          <SmartDraftingModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
        {activeModal === 'compliance' && (
          <ComplianceModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
        {activeModal === 'risk' && (
          <RiskScannerModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
        {activeModal === 'repository' && (
          <RepositoryModal 
            isOpen={true} 
            onClose={() => setActiveModal(null)} 
            onRequestProtocol={onRequestProtocol}
          />
        )}
      </AnimatePresence>

      <section id="system-modules" className="bg-black text-white py-40 px-8 md:px-16 lg:px-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#3779f1]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[100rem] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              {t.features.title} <span className="text-gray-500">{t.features.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl leading-relaxed whitespace-pre-line">
              {t.features.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-end">
            <div className="flex items-center gap-4 text-base font-mono text-gray-500 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md bg-white/[0.03]">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              {t.features.status}
            </div>

            {/* Feature Tabs */}
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
              <button
                onClick={() => onTabChange('features')}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === 'features' 
                    ? 'bg-[#3779f1] text-white shadow-lg shadow-[#3779f1]/50' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                PLATFORM MODULES
              </button>
              <button
                onClick={() => onTabChange('security')}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === 'security' 
                    ? 'bg-[#3779f1] text-white shadow-lg shadow-[#3779f1]/50' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                SECURITY PERIMETER
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'features' ? (
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px] relative z-10 group/grid max-w-[100rem] mx-auto animate-in fade-in duration-500 slide-in-from-bottom-4"
        >
          
          {/* Card 1: Discovery Engine - Large 2x2 */}
          <TiltCard 
            onClick={() => setActiveModal('discovery')}
            className="md:col-span-2 md:row-span-2 group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
              {/* Spotlight Effect */}
              <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(55, 121, 241, 0.1), transparent 40%)`
                  }}
              />
              
              {/* Corner Tech Markers */}
              <div className="absolute top-6 right-6 w-20 h-20 border-t border-r border-white/10 rounded-tr-[1rem] opacity-50" />
              <div className="absolute bottom-6 left-6 w-20 h-20 border-b border-l border-white/10 rounded-bl-[1rem] opacity-50" />

              <div className="h-full flex flex-col p-12 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                      <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/10 backdrop-blur-md">
                          <Search className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-sm font-mono text-gray-500 uppercase tracking-widest border border-white/5 px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
                          {t.features.cards.discovery.module}
                      </span>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative my-8">
                      {/* Animated Abstract UI */}
                      <div className="relative w-full max-w-3xl aspect-[2/1] bg-[#050505] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner shadow-black/50 transition-transform duration-700 group-hover:scale-[1.02]">
                          {/* Grid Background */}
                          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-[1px] opacity-[0.03]">
                              {[...Array(200)].map((_, i) => (
                                  <div key={i} className="bg-white" />
                              ))}
                          </div>
                          
                          {/* Center Visual */}
                          <div className="relative z-10 flex flex-col items-center">
                              <div className="relative w-72 h-72">
                                  <div className="absolute inset-0 bg-[#3779f1]/10 blur-[80px] rounded-full animate-pulse" />
                                  <div className="absolute inset-0 border border-[#3779f1]/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                  <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#78bbfe] font-mono text-xs tracking-widest animate-pulse uppercase">
                                      SCANNING
                                  </div>
                              </div>
                              <div className="w-96 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
                                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#3779f1] to-transparent animate-[shimmer_2s_infinite]" />
                              </div>
                          </div>

                          {/* Floating Data Points */}
                          <div className="absolute top-8 left-8 text-[10px] font-mono text-gray-600 space-y-1">
                              <div>DAT_PKT_01: Verified</div>
                              <div>DAT_PKT_02: Verified</div>
                              <div>DAT_PKT_03: Parsing...</div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:text-[#bfdbfe] transition-colors">{t.features.cards.discovery.title}</h3>
                      <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
                          {t.features.cards.discovery.description}
                      </p>
                  </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Harmonization */}
          <TiltCard 
            onClick={() => setActiveModal('harmonization')}
            className="group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
               <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(800px circle at ${mousePosition.x - (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * 0.66 : 800)}px ${mousePosition.y}px, rgba(55, 121, 241, 0.1), transparent 40%)`
                  }}
              />
              <div className="p-10 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start">
                      <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-[#3779f1]/10 transition-colors">
                          <Scale size={32} />
                      </div>
                      <Activity size={24} className="text-gray-600 group-hover:text-green-500 transition-colors" />
                  </div>
                  
                  <div className="mt-8 space-y-6">
                      <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono text-gray-500 uppercase">
                              <span>{t.features.cards.harmonization.stats[0].label}</span>
                              <span className="text-[#78bbfe]">{t.features.cards.harmonization.stats[0].value}</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-gradient-to-r from-gray-600 to-[#3779f1] transition-all duration-500" />
                          </div>
                      </div>
                      <div className="space-y-2">
                           <div className="flex justify-between text-xs font-mono text-gray-500 uppercase">
                              <span>{t.features.cards.harmonization.stats[1].label}</span>
                              <span className="text-[#78bbfe]">{t.features.cards.harmonization.stats[1].value}</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[60%] bg-gradient-to-r from-gray-600 to-[#78bbfe] transition-all duration-500" />
                          </div>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#bfdbfe] transition-colors">{t.features.cards.harmonization.title}</h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {t.features.cards.harmonization.description}
                      </p>
                  </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Smart Drafting */}
          <TiltCard 
            onClick={() => setActiveModal('drafting')}
            className="group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
             <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(800px circle at ${mousePosition.x - (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * 0.66 : 800)}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
                  }}
              />
             <div className="absolute -right-12 -top-12 text-white/[0.02] rotate-12 transition-transform duration-700 group-hover:rotate-0">
                  <FileJson size={240} />
             </div>
             
             <div className="p-10 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start">
                      <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-blue-500/10 transition-colors">
                          <Zap size={32} />
                      </div>
                  </div>

                  <div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{t.features.cards.drafting.title}</h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {t.features.cards.drafting.description}
                      </p>
                  </div>
             </div>
            </div>
          </TiltCard>

          {/* Card 5: Compliance */}
          <TiltCard 
            onClick={() => setActiveModal('compliance')}
            className="group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
              <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(800px circle at ${mousePosition.x - (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * 0.33 : 400)}px ${mousePosition.y - 900}px, rgba(55, 121, 241, 0.1), transparent 40%)`
                  }}
              />
              <div className="p-10 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start">
                      <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/5 transition-colors">
                          <FileText size={32} />
                      </div>
                  </div>
                  
                  <div className="flex gap-2 my-6 items-end h-20">
                          {[1,2,3,4,5,6].map(i => (
                              <div key={i} 
                                  className={`flex-1 rounded bg-white/5 border border-white/5 transition-all duration-300 group-hover:bg-white/10 ${i === 3 ? '!bg-red-500/20 !border-red-500/50' : ''}`} 
                                  style={{ height: `${Math.random() * 60 + 20}%`}}
                              />
                          ))}
                  </div>

                  <div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#bfdbfe] transition-colors">{t.features.cards.compliance.title}</h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {t.features.cards.compliance.description}
                      </p>
                  </div>
              </div>
            </div>
          </TiltCard>

          {/* Card: Risk Scanner */}
          <TiltCard 
            onClick={() => setActiveModal('risk')}
            className="group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
               <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(800px circle at ${mousePosition.x - (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * 0.66 : 800)}px ${mousePosition.y - 450}px, rgba(239, 68, 68, 0.1), transparent 40%)`
                  }}
              />
              <div className="p-10 flex flex-col justify-between h-full relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex justify-between items-start">
                      <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-gray-300 group-hover:text-red-400 group-hover:bg-red-500/10 transition-colors">
                          <ShieldCheck size={32} />
                      </div>
                  </div>

                  <div className="text-center py-6">
                      <div className="text-7xl font-mono font-bold text-white tracking-tighter group-hover:scale-110 transition-transform duration-300 flex items-start justify-center">
                          99.9<span className="text-3xl text-gray-500 mt-2">%</span>
                      </div>
                      <div className="text-sm uppercase tracking-widest text-gray-500 mt-4 border-t border-white/5 pt-4 inline-block px-4">{t.features.cards.risk.metric}</div>
                  </div>

                  <div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">{t.features.cards.risk.title}</h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {t.features.cards.risk.description}
                      </p>
                  </div>
              </div>
            </div>
          </TiltCard>

           {/* Card 6: Repository */}
           <TiltCard 
            onClick={() => setActiveModal('repository')}
            className="group cursor-pointer"
           >
            <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
               <div 
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover/grid:opacity-100"
                  style={{
                      background: `radial-gradient(800px circle at ${mousePosition.x - (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth * 0.66 : 800)}px ${mousePosition.y - 900}px, rgba(55, 121, 241, 0.1), transparent 40%)`
                  }}
              />
              <div className="p-10 flex flex-col justify-between h-full relative z-10">
                  <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-[#3779f1]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex justify-between items-start">
                      <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/5 transition-colors">
                          <Database size={32} />
                      </div>
                      <Lock size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-4 my-6">
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                          <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                          <div className="ml-auto text-[10px] text-gray-600 font-mono">{t.features.cards.repository.encrypted}</div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                          <div className="h-1.5 w-32 bg-white/10 rounded-full" />
                           <div className="ml-auto text-[10px] text-gray-600 font-mono">{t.features.cards.repository.secure}</div>
                      </div>
                  </div>

                  <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#bfdbfe] transition-colors">{t.features.cards.repository.title}</h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {t.features.cards.repository.description}
                      </p>
                  </div>
              </div>
            </div>
          </TiltCard>

        </div>
        ) : (
          <SecurityPerimeterSection />
        )}
      </section>
    </>
  );
}
