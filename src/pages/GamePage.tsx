import React, { useState, useEffect, useRef } from 'react';
import { PageNavbar } from '../components/PageNavbar';
import { gameList } from '../data/gameData';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GamePageProps {
  onNavigate: (page: string) => void;
}

export const GamePage: React.FC<GamePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  // Track overall scroll progress for top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect which section is currently active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (idx: number) => {
    const target = itemRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-['Plus_Jakarta_Sans'] selection:bg-cyan-500/30 selection:text-white">
      
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= FIXED CLEAR BACKGROUND CROSSFADE LAYER ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {gameList.map((game, idx) => (
          <img
            key={game.id}
            src={game.backdrop}
            alt={game.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              activeIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Subtle Gradient Overlay Identik dengan Main Page (Background Tetap Jelas & Terlihat HD) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/65" />
      </div>

      {/* Top Floating Navbar */}
      <PageNavbar currentPage="game" onNavigate={onNavigate} />

      {/* Quick Indicator Dots (Desktop) */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2 pointer-events-auto">
        <div className="p-2 rounded-full bg-black/40 border border-white/15 backdrop-blur-md flex flex-col items-center gap-2 shadow-xl">
          {gameList.map((game, idx) => (
            <button
              key={game.id}
              onClick={() => scrollToSlide(idx)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              title={`${game.id}. ${game.title}`}
            >
              <span className="absolute right-7 px-2.5 py-1 rounded bg-black/80 border border-white/20 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium backdrop-blur-md">
                {String(game.id).padStart(2, '0')}. {game.title}
              </span>
              <span 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'w-5 bg-white shadow-md shadow-white/50' 
                    : 'bg-white/35 group-hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
        <div className="mt-1 text-[10px] font-mono tracking-widest text-white/60 uppercase px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10">
          {String(activeIndex + 1).padStart(2, '0')} / {String(gameList.length).padStart(2, '0')}
        </div>
      </div>

      {/* ================= MAIN SCROLL CONTENT ================= */}
      <main className="relative z-10">

        {/* 4 GAME SECTIONS (LAYOUT IDENTIK DENGAN MAIN PAGE: TANPA CARD GEDE) */}
        {gameList.map((game, idx) => (
          <section
            key={game.id}
            id={`game-${idx}`}
            data-index={idx}
            ref={(el) => { itemRefs.current[idx] = el; }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-28 text-center"
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              
              {/* Kategori & Nomor Urut */}
              <h4 className="font-['Plus_Jakarta_Sans'] tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base text-white/75 mb-4 drop-shadow-md">
                {String(game.id).padStart(2, '0')} / {String(gameList.length).padStart(2, '0')} • {game.genres.join(' • ')} • {game.category}
              </h4>

              {/* Judul Game Besar */}
              <h1 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide drop-shadow-2xl text-white/95">
                {game.title}
              </h1>

              {/* Subtitle */}
              {game.subtitle && (
                <p className="font-['Playfair_Display'] italic text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-lg">
                  "{game.subtitle}"
                </p>
              )}

              {/* Rating / Apresiasi */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-amber-300 font-semibold text-sm md:text-base mb-8 backdrop-blur-md drop-shadow-lg">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{t('appreciationLabel')}: {game.rating}</span>
              </div>

              {/* Penjelasan Singkat */}
              <div className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/85 leading-relaxed space-y-6 drop-shadow-md">
                <p>{game.description}</p>
              </div>

              {/* Scroll Prompt Line */}
              {idx < gameList.length - 1 && (
                <div className="mt-16 flex flex-col items-center gap-4 opacity-70">
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/80">
                    {t('keepMoving')}
                  </span>
                  <div className="w-[2px] h-14 bg-gradient-to-b from-white to-transparent rounded-full" />
                </div>
              )}

            </div>
          </section>
        ))}

        {/* BOTTOM NAVIGATION CTA */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center border-t border-white/10">
          <h3 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold mb-4 text-white drop-shadow-md">
            {t('exploreOther')}
          </h3>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto drop-shadow-sm font-light">
            {t('chooseNext')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('anime')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              ← {t('navAnime')}
            </button>
            <button
              onClick={() => onNavigate('film')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              {t('btnFilm')}
            </button>
            <button
              onClick={() => onNavigate('pandangan')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              {t('btnPandangan')}
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('backToHome')}
            </button>
          </div>

          {/* Secret Page Clue */}
          <div className="mt-10">
            <span className="text-xs text-white/40">
              {t('secretClue')}{' '}
              <button 
                onClick={() => onNavigate('secret')} 
                className="text-cyan-300 hover:text-white underline underline-offset-4 cursor-pointer font-semibold transition-colors"
              >
                {t('clickHere')}
              </button>
            </span>
          </div>
        </section>

      </main>

    </div>
  );
};
