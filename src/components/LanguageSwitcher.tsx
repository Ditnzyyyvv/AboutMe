import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  compact = false,
  className = '' 
}) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; fullLabel: string; flag: string }[] = [
    { code: 'id', label: 'ID', fullLabel: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇬🇧' },
    { code: 'ja', label: 'JP', fullLabel: '日本語', flag: '🇯🇵' },
  ];

  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      {!compact && (
        <div className="pl-2.5 pr-1.5 flex items-center text-white/50 pointer-events-none">
          <Globe className="w-3.5 h-3.5" />
        </div>
      )}
      <div className="flex items-center gap-1">
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              title={lang.fullLabel}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-white text-black font-bold shadow-md shadow-white/20 scale-100'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              } ${compact ? 'px-2 py-0.5 text-[11px]' : ''}`}
            >
              <span className="text-[11px] leading-none">{lang.flag}</span>
              <span className="font-mono text-[11px] tracking-wide">{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
