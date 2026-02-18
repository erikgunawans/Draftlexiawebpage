import React, { useState } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import logoImage from 'figma:asset/3a19b4fb9e366527c725b78ccd7a660a3b0d972f.png';

export function Navbar({ onRequestProtocol, onGoHome, onGoToModules, onGoToSecurity }: { onRequestProtocol?: () => void; onGoHome?: () => void; onGoToModules?: () => void; onGoToSecurity?: () => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 md:py-8 backdrop-blur-md bg-black/50 border-b border-white/5 transition-all">
      <div className="flex items-center gap-4 z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onGoHome && onGoHome(); closeMenu(); }} className="cursor-pointer">
           <img src={logoImage} alt="Lexia Logo" className="h-12 md:h-20 w-auto object-contain transition-all" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-12 text-base font-medium text-gray-400 uppercase tracking-wider">
        <a href="#" onClick={(e) => { e.preventDefault(); onGoHome && onGoHome(); }} className="hover:text-white transition-colors">{t.navbar.home}</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onGoToModules && onGoToModules(); }} className="hover:text-white transition-colors">{t.navbar.manifesto}</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onGoToSecurity && onGoToSecurity(); }} className="hover:text-white transition-colors flex items-center gap-1">
          {t.navbar.security} <Search className="w-5 h-5" />
        </a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>{language === 'en' ? 'ID' : 'EN'}</span>
        </button>

        <button 
          onClick={onRequestProtocol}
          className="bg-white text-black px-8 py-4 text-base font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
        >
          {t.navbar.requestProtocol}
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={toggleMenu} 
        className="lg:hidden z-50 text-white p-2 focus:outline-none"
      >
        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 p-8"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-bold text-gray-300 uppercase tracking-widest">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onGoHome && onGoHome(); closeMenu(); }} 
                className="hover:text-white transition-colors"
              >
                {t.navbar.home}
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onGoToModules && onGoToModules(); closeMenu(); }} 
                className="hover:text-white transition-colors"
              >
                {t.navbar.manifesto}
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors flex items-center gap-2"
                onClick={(e) => { e.preventDefault(); onGoToSecurity && onGoToSecurity(); closeMenu(); }}
              >
                {t.navbar.security} <Search className="w-6 h-6" />
              </a>
            </div>

            <div className="w-20 h-[1px] bg-white/10" />

            <div className="flex flex-col items-center gap-8">
              <button 
                onClick={() => { toggleLanguage(); }}
                className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'en' ? 'Switch to ID' : 'Switch to EN'}</span>
              </button>

              <button 
                onClick={() => { onRequestProtocol && onRequestProtocol(); closeMenu(); }}
                className="bg-white text-black px-10 py-5 text-lg font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {t.navbar.requestProtocol}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}