import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

const IndonesiaFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    viewBox="0 0 600 400" 
    className={`w-3.5 h-[10px] rounded-[2px] overflow-hidden shrink-0 border border-black/15 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${className}`}
    aria-hidden="true"
  >
    <rect width="600" height="200" fill="#e70011" />
    <rect y="200" width="600" height="200" fill="#ffffff" />
  </svg>
);

const UKFlag: React.FC<{ className?: string }> = ({ className = '' }) => {
  const rawId = React.useId();
  const id = rawId.replace(/:/g, '');
  const clipId = `uk-clip-${id}`;
  const diagClipId = `uk-diag-${id}`;

  return (
    <svg 
      viewBox="0 0 60 30" 
      className={`w-3.5 h-[10px] rounded-[2px] overflow-hidden shrink-0 border border-black/15 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M0 0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id={diagClipId}>
          <path d="M30 15 h30 v15 z M30 15 v15 h-30 z M30 15 h-30 v-15 z M30 15 v-15 h30 z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path d="M0 0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#ffffff" strokeWidth="6" />
        <path d="M0 0 L60 30 M60 0 L0 30" clipPath={`url(#${diagClipId})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0 v30 M0 15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
};

const JapanFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    viewBox="0 0 600 400" 
    className={`w-3.5 h-[10px] rounded-[2px] overflow-hidden shrink-0 border border-black/15 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${className}`}
    aria-hidden="true"
  >
    <rect width="600" height="400" fill="#ffffff" />
    <circle cx="300" cy="200" r="120" fill="#bc002d" />
  </svg>
);

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  compact = false,
  className = '' 
}) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; fullLabel: string; flag: React.ReactNode }[] = [
    { code: 'id', label: 'ID', fullLabel: 'Indonesia', flag: <IndonesiaFlag /> },
    { code: 'en', label: 'EN', fullLabel: 'English', flag: <UKFlag /> },
    { code: 'ja', label: 'JP', fullLabel: '日本語', flag: <JapanFlag /> },
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
              <span className="flex items-center leading-none">{lang.flag}</span>
              <span className="font-mono text-[11px] tracking-wide">{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
