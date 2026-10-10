import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

interface SecretPageProps {
  onNavigate: (page: string) => void;
}

export const SecretPage: React.FC<SecretPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-['Plus_Jakarta_Sans'] selection:bg-white/30 selection:text-white overflow-x-hidden">
      
      {/* Ambient Subtle Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/90 to-black" />
      </div>

      {/* Floating Top Bar (Back Button + LanguageSwitcher) */}
      <header className="fixed top-6 inset-x-6 z-50 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 hover:border-white/35 text-white/80 hover:text-white text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 backdrop-blur-xl shadow-xl pointer-events-auto"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('secretBackBtn')}</span>
        </button>
        <div className="pointer-events-auto">
          <LanguageSwitcher compact />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-28 px-6 max-w-2xl mx-auto">
        
        {/* Cukup 1 Judul Saja, Tanpa Sub Judul / Kategori Eksplisit */}
        <h1 className="font-['Cinzel'] text-4xl sm:text-6xl font-bold mb-12 tracking-wide text-white drop-shadow-2xl text-center">
          Secret Page
        </h1>

        {/* Teks Cerita Mengalir Alami */}
        <div className="space-y-6 text-white/80 text-base sm:text-lg leading-relaxed font-light">
          
          <p className="italic text-white/90">
            {t('secretP1')}
          </p>

          <p>
            {t('secretP2')}
          </p>

          <p>
            {t('secretP3')}
          </p>

          <p>
            {t('secretP4')}
          </p>

          <p>
            {t('secretP5')}
          </p>

          <p>
            {t('secretP6')}
          </p>

          <p>
            {t('secretP7')}
          </p>

          <p>
            {t('secretP8')}
          </p>

          <p>
            {t('secretP9')}
          </p>

          <p>
            {t('secretP10')}
          </p>

          <p>
            {t('secretP11')}
          </p>

          <p>
            {t('secretP12')}
          </p>

          <p>
            {t('secretP13')}
          </p>

          <p className="pt-4 text-white/90 italic">
            {t('secretP14')}
          </p>

        </div>

        {/* Back to Home CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-white/20"
          >
            {t('backToHome')}
          </button>
        </div>

      </main>

    </div>
  );
};
