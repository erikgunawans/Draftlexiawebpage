import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { SovereigntySection } from "./components/SovereigntySection";
import { Footer } from "./components/Footer";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { CustomCursor } from "./components/ui/CustomCursor";
import { LanguageProvider } from "./context/LanguageContext";
import { ScrollProvider } from "./context/ScrollContext";
import { RegistrationPage } from "./components/RegistrationPage";

export default function App() {
  const [view, setView] = useState<'home' | 'registration'>('home');
  const [featuresTab, setFeaturesTab] = useState<'features' | 'security'>('features');

  const scrollToModules = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        setFeaturesTab('features');
        document.getElementById('system-modules')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setFeaturesTab('features');
      document.getElementById('system-modules')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSecurity = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        setFeaturesTab('security');
        document.getElementById('system-modules')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setFeaturesTab('security');
      document.getElementById('system-modules')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <ScrollProvider>
        <div className="bg-black min-h-screen text-white font-sans selection:bg-[#3779f1]/30 selection:text-white">
          <CustomCursor />
          <NoiseOverlay />
          <Navbar 
            onRequestProtocol={() => setView('registration')} 
            onGoHome={handleGoHome}
            onGoToModules={scrollToModules}
            onGoToSecurity={scrollToSecurity}
          />
          
          {view === 'home' ? (
            <>
              <Hero onRequestProtocol={() => setView('registration')} />
              <ProblemSection />
              <FeaturesSection 
                onRequestProtocol={() => setView('registration')} 
                activeTab={featuresTab}
                onTabChange={setFeaturesTab}
              />
              <SovereigntySection />
            </>
          ) : (
            <RegistrationPage />
          )}
          
          <Footer />
        </div>
      </ScrollProvider>
    </LanguageProvider>
  );
}
