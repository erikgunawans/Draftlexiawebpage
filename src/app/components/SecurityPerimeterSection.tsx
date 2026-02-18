import React, { useRef, useState } from "react";
import { Key, MapPin, Landmark, Network, User, ShieldAlert, Fingerprint, Eye, Sparkles } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

export function SecurityPerimeterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="w-full max-w-[100rem] mx-auto animate-in fade-in duration-700 relative group/grid"
    >
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Google Cloud Security Perimeter</h3>
        <p className="text-gray-400">Built on the 4 Pillars of Government-Grade Cloud Security</p>
      </div>

      {/* Top 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 auto-rows-[350px]">
        <SecurityCard 
          icon={<Key className="text-white" size={24} />}
          title="CMEK"
          description="Encryption keys are managed by Company, not by Google. Full control over cryptographic shredding."
          mousePosition={mousePosition}
          index={0}
        />
        <SecurityCard 
          icon={<MapPin className="text-white" size={24} />}
          title="DRZ"
          description="Data Residency Zones. Storage and processing pinned strictly to Jakarta. No data distribution."
          mousePosition={mousePosition}
          index={1}
        />
        <SecurityCard 
          icon={<Landmark className="text-white" size={24} />}
          title="AxT"
          description="Assured Workloads. Compliance with Indonesian financial and government regulations."
          mousePosition={mousePosition}
          index={2}
        />
        <SecurityCard 
          icon={<Network className="text-white" size={24} />}
          title="VPC-SC"
          description="VPC Service Controls. Define a security perimeter around Google Cloud resources to mitigate data exfiltration."
          mousePosition={mousePosition}
          index={3}
        />
      </div>

      {/* Secure Information Flow Section */}
      <TiltCard className="w-full">
        <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
            {/* Spotlight Effect for the Flow Section */}
            <div 
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y - 400}px, rgba(55, 121, 241, 0.05), transparent 40%)`
                }}
            />
            
            <div className="text-center mb-12">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 relative z-10 bg-[#0A0A0A] px-4">Secure Information Flow</span>
                <div className="absolute top-[3.5rem] left-0 w-full h-px bg-white/5 -z-0" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10">
                {/* Steps */}
                <FlowStep icon={<User size={20} />} label="User" />
                
                <Connector />
                
                <FlowStep 
                    icon={<ShieldAlert size={20} className="text-blue-400" />} 
                    label="WAF & Auth" 
                    sublabel="IAP + DDoS Protection"
                    isBoxed
                />
                
                <Connector />
                
                <FlowStep 
                    icon={<Fingerprint size={20} className="text-[#78bbfe]" />} 
                    label="SDP Scanner" 
                    sublabel="PII & Sensitive Data"
                    isBoxed
                />
                
                <Connector />
                
                <FlowStep 
                    icon={<Eye size={20} className="text-teal-400" />} 
                    label="Safety Filter" 
                    sublabel="Context Validation"
                    isBoxed
                />
                
                <Connector />
                
                <div className="flex items-center gap-3 bg-black/40 border border-blue-500/30 rounded-full pl-6 pr-2 py-2">
                    <span className="text-sm font-bold text-gray-200">Gemini LLM</span>
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <Sparkles className="text-white" size={20} />
                    </div>
                </div>
            </div>
        </div>
      </TiltCard>
    </div>
  );
}

interface SecurityCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    mousePosition: { x: number, y: number };
    index: number;
}

function SecurityCard({ icon, title, description, mousePosition, index }: SecurityCardProps) {
  // Approximate the offset for the spotlight based on column index
  // This is a simplification; a more robust solution would pass the card's ref or offset
  // But for the requested visual effect, we can just pass the mouse position directly 
  // and offset it relative to the container if needed, or just let it be relative to the mouse.
  // Since all cards share the same containerRef for mouse tracking, we need to adjust the spotlight center.
  // However, simpler is often better: let's assume the gradient is large enough or try to calculate localized position if we had individual refs.
  // For now, let's use the container-relative position but rely on the fact that the gradient is drawn on the card.
  // Wait, if I use the container's mouse position, I need to know where this card is relative to the container.
  // Without individual refs, the spotlight might look off if I don't adjust.
  // Let's try to just use the container position and hope the gradient is large enough, OR make the spotlight 'fixed' to the mouse on the screen? No.
  // 
  // Actually, the FeaturesSection implementation does:
  // `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px ...)`
  // This applies to the card's background. Since the card is inside the container, and mousePosition is relative to the container,
  // we need to subtract the card's offset to get the position relative to the card?
  // No, the `bg` is on the card div. If I use `background` on the card div, the coordinate system for the gradient depends on the element unless fixed.
  // If I use a separate div `absolute inset-0`, its coordinate system is the card.
  // So yes, `mousePosition.x` (container-relative) needs to be adjusted by the card's position.
  // Since we don't have that easily without refs, let's just make the gradient very large so it covers loosely, 
  // OR just skip the precise spotlight tracking per card and use a simpler hover effect for now, 
  // or use a different approach: `group-hover:bg-white/[0.02]` is already quite nice.
  //
  // BUT, the prompt asked to "refer to the cards in the system module".
  // The system module uses `radial-gradient` calculated with `mousePosition`. 
  // Let's try to implement a simple version where we pass the column index to approximate the X offset to subtract.
  // Assuming 4 columns equal width.
  // card width approx 25% of container.
  // offset X ~= index * (containerWidth / 4).
  // We don't know containerWidth easily.
  //
  // Alternate solution: Each card tracks its own mouse move?
  // Yes, that's easier.

  const cardRef = useRef<HTMLDivElement>(null);
  const [localMouse, setLocalMouse] = useState({ x: 0, y: 0 });

  const handleLocalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          setLocalMouse({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
          });
      }
  };

  return (
    <TiltCard className="group h-full">
        <div 
            ref={cardRef}
            onMouseMove={handleLocalMouseMove}
            className="w-full h-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10 flex flex-col p-8 md:p-10"
        >
            {/* Spotlight Effect */}
            <div 
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${localMouse.x}px ${localMouse.y}px, rgba(55, 121, 241, 0.1), transparent 40%)`
                }}
            />
            
            {/* Corner Tech Markers - Minimal version */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/10 rounded-tr-lg opacity-30" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/10 rounded-bl-lg opacity-30" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md relative z-10 group-hover:bg-[#3779f1]/10 group-hover:border-[#3779f1]/20 transition-all duration-300">
                {icon}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#bfdbfe] transition-colors">{title}</h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-400 transition-colors">
                    {description}
                </p>
            </div>
        </div>
    </TiltCard>
  );
}

function FlowStep({ icon, label, sublabel, isBoxed }: { icon: React.ReactNode, label: string, sublabel?: string, isBoxed?: boolean }) {
    if (isBoxed) {
        return (
            <div className="bg-[#0f141f] border border-white/10 rounded-2xl p-6 min-w-[160px] flex flex-col items-center text-center hover:border-white/20 hover:bg-white/5 transition-all duration-300 group/step">
                <div className="mb-3 text-gray-400 group-hover/step:text-white transition-colors">{icon}</div>
                <div className="text-sm font-bold text-white mb-1">{label}</div>
                {sublabel && <div className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded full group-hover/step:bg-white/10 transition-colors">{sublabel}</div>}
            </div>
        )
    }
    return (
        <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="text-gray-400">{icon}</div>
            <span className="text-sm font-bold text-white">{label}</span>
        </div>
    )
}

function Connector() {
    return (
        <div className="hidden md:block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-white/40 rounded-full" />
        </div>
    )
}