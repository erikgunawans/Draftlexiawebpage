import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function ProblemSection() {
  const [activehover, setActiveHover] = useState<number | null>(null);
  const { t } = useLanguage();

  const problems = t.problem.items.map((item, index) => ({
    ...item,
    id: `0${index + 1}`
  }));

  return (
    <section className="bg-black text-white py-40 px-8 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-[100rem] mx-auto">
        <div className="mb-32 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 uppercase tracking-widest mb-12">
            {t.problem.sectionTitle} <span className="text-red-600">{t.problem.sectionTitleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
            {t.problem.description}
          </p>
        </div>

        <div className="border-t border-white/10">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="group border-b border-white/10 py-16 relative cursor-default"
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div className="flex items-center gap-10">
                  <span className="text-base text-red-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    FATAL ERROR {item.id}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold group-hover:text-red-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <div className="md:max-w-2xl text-lg md:text-xl text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </div>

                <div className="hidden md:block w-4 h-4 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
