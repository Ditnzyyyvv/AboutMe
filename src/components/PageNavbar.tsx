import React from 'react';
import { ArrowLeft, Sparkles, Film, Gamepad2, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface PageNavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const PageNavbar: React.FC<PageNavbarProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'anime', label: t('navAnime'), icon: Sparkles },
    { id: 'film', label: t('navFilm'), icon: Film },
    { id: 'game', label: t('navGame'), icon: Gamepad2 },
    { id: 'pandangan', label: t('navPandangan'), icon: Compass },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 md:px-8 py-3 md:py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 md:px-6 py-2.5 md:py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-2xl">
        
        {/* Back to Home Button */}
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1" />
          <span>{t('navHome')}</span>
        </button>

        {/* Center / Brand */}
        <button 
          onClick={() => onNavigate('home')}
          className="font-['Cinzel'] font-bold text-base md:text-lg tracking-widest text-white/90 hover:text-white transition-colors hidden md:block"
        >
          DITNZY
        </button>

        {/* Category Switcher Tabs + Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="flex items-center gap-1 md:gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 md:px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black shadow-lg shadow-white/20 font-semibold scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-white/60'}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Switcher pill in navbar */}
          <div className="border-l border-white/15 pl-2 sm:pl-3">
            <LanguageSwitcher compact />
          </div>
        </div>

      </div>
    </header>
  );
};
