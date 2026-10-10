import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import natureImg from './assets/images/Nature.png';
import tentangImg from './assets/images/Tentangdetail.jpeg';
import sawakoImg from './assets/images/sawako.jpg';
import { AnimePage } from './pages/AnimePage';
import { FilmPage } from './pages/FilmPage';
import { GamePage } from './pages/GamePage';
import { PandanganPage } from './pages/PandanganPage';
import { Sparkles, Film, Gamepad2, Compass, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Page Routing State with Hash Support
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#/', '');
    return ['anime', 'film', 'game', 'pandangan'].includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (['anime', 'film', 'game', 'pandangan'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    if (page === 'home') {
      window.location.hash = '';
      setCurrentPage('home');
      window.scrollTo(0, 0);
    } else {
      window.location.hash = `#/${page}`;
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  // Refs for the fixed background images
  const bgWindRef = useRef<HTMLImageElement>(null);
  const bgAboutRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // ==========================================
    // SECTION 1: NATURE -> TENTANGDETAIL BACKGROUND
    // ==========================================
    gsap.to(bgWindRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#section-about",
        start: "top 80%",
        end: "top top",
        scrub: true,
      }
    });

    gsap.fromTo(bgAboutRef.current, 
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#section-about",
          start: "top 80%",
          end: "top top",
          scrub: true,
        }
      }
    );

    // ==========================================
    // PINNED SECTION: Filosofi -> Waifu -> Sawako -> Hobi
    // ==========================================
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-about",
        start: "top top",
        end: "+=4200", // Panjang untuk 4 fase scrollytelling yang nyaman
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    // --- PHASE 1: HOLD FILOSOFI PERJALANAN (User membaca, konten diam) ---
    aboutTl.to(".about-progress-fill", {
      scaleX: 0.25,
      ease: "none",
      duration: 1.5,
    }, 0);

    // --- PHASE 2: TRANSISI FILOSOFI -> WAIFU (SAWAKO INTRO) ---
    aboutTl.to(".filosofi-content", {
      opacity: 0,
      y: -40,
      pointerEvents: "none",
      ease: "power2.inOut",
      duration: 1.0,
    }, 1.5);

    // Update highlight indikator step: 1 -> 2
    aboutTl.to(".step-label-1", {
      opacity: 0.4,
      duration: 0.5,
    }, 1.8);
    aboutTl.to(".step-label-2", {
      opacity: 1,
      duration: 0.5,
    }, 1.8);
    aboutTl.to(".step-dot-2", {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 8px #ffffff",
      duration: 0.5,
    }, 1.8);

    // Waifu (Sawako) fade in dari bawah ke tengah
    aboutTl.fromTo(".funfact-content",
      { opacity: 0, y: 40, pointerEvents: "none" },
      { opacity: 1, y: 0, pointerEvents: "auto", ease: "power2.inOut", duration: 1.0 },
      1.5
    );

    // --- PHASE 3: HOLD WAIFU ---
    aboutTl.to(".about-progress-fill", {
      scaleX: 0.50,
      ease: "none",
      duration: 1.8,
    }, 2.5);

    // --- PHASE 4: TRANSISI WAIFU -> SAWAKO DETAIL ---
    aboutTl.to(".funfact-content", {
      opacity: 0,
      y: -40,
      pointerEvents: "none",
      ease: "power2.inOut",
      duration: 1.0,
    }, 4.3);

    // Update highlight indikator step: 2 -> 3
    aboutTl.to(".step-label-2", {
      opacity: 0.4,
      duration: 0.5,
    }, 4.5);
    aboutTl.to(".step-dot-2", {
      boxShadow: "none",
      duration: 0.5,
    }, 4.5);
    aboutTl.to(".step-label-3", {
      opacity: 1,
      duration: 0.5,
    }, 4.5);
    aboutTl.to(".step-dot-3", {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 8px #ffffff",
      duration: 0.5,
    }, 4.5);

    // Sawako Detail Reflection fade in dari bawah ke tengah
    aboutTl.fromTo(".sawako-detail-content",
      { opacity: 0, y: 40, pointerEvents: "none" },
      { opacity: 1, y: 0, pointerEvents: "auto", ease: "power2.inOut", duration: 1.0 },
      4.3
    );

    // --- PHASE 5: HOLD SAWAKO DETAIL ---
    aboutTl.to(".about-progress-fill", {
      scaleX: 0.75,
      ease: "none",
      duration: 2.0,
    }, 5.3);

    // --- PHASE 6: TRANSISI SAWAKO DETAIL -> HOBI ---
    aboutTl.to(".sawako-detail-content", {
      opacity: 0,
      y: -40,
      pointerEvents: "none",
      ease: "power2.inOut",
      duration: 1.0,
    }, 7.3);

    // Update highlight indikator step: 3 -> 4
    aboutTl.to(".step-label-3", {
      opacity: 0.4,
      duration: 0.5,
    }, 7.5);
    aboutTl.to(".step-dot-3", {
      boxShadow: "none",
      duration: 0.5,
    }, 7.5);
    aboutTl.to(".step-label-4", {
      opacity: 1,
      duration: 0.5,
    }, 7.5);
    aboutTl.to(".step-dot-4", {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 8px #ffffff",
      duration: 0.5,
    }, 7.5);

    // Hobi Content fade in dari bawah ke tengah
    aboutTl.fromTo(".hobi-content",
      { opacity: 0, y: 40, pointerEvents: "none" },
      { opacity: 1, y: 0, pointerEvents: "auto", ease: "power2.inOut", duration: 1.0 },
      7.3
    );

    // --- PHASE 7: HOLD HOBI ---
    aboutTl.to(".about-progress-fill", {
      scaleX: 1.0,
      ease: "none",
      duration: 2.2,
    }, 8.3);

    // Section Content Animations (Staggered Fade Up for normal sections)
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach((section: any) => {
      const elements = section.querySelectorAll('.animate-up');
      gsap.from(elements, {
        y: 60,
        opacity: 0,
        scale: 0.98,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Floating Scroll Prompt Animation
    gsap.to(".scroll-prompt-line", {
      y: 15,
      opacity: 0.3,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut"
    });

  }, { scope: containerRef });

  if (currentPage === 'anime') {
    return <AnimePage onNavigate={navigateTo} />;
  }
  if (currentPage === 'film') {
    return <FilmPage onNavigate={navigateTo} />;
  }
  if (currentPage === 'game') {
    return <GamePage onNavigate={navigateTo} />;
  }
  if (currentPage === 'pandangan') {
    return <PandanganPage onNavigate={navigateTo} />;
  }

  return (
    <div ref={containerRef} className="relative bg-black text-white font-['Plus_Jakarta_Sans'] overflow-x-hidden selection:bg-white/30 selection:text-black min-h-screen">
      
      {/* ================= FIXED BACKGROUND WRAPPER ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* Nature Background */}
        <img 
          ref={bgWindRef} 
          src={natureImg} 
          alt="Aditya Anugrah Nature" 
          className="absolute inset-0 w-full h-full object-cover opacity-100" 
        />

        {/* Tentangdetail Background */}
        <img 
          ref={bgAboutRef} 
          src={tentangImg} 
          alt="Tentang Detail Aditya" 
          className="absolute inset-0 w-full h-full object-cover opacity-0" 
        />
        {/* Gradient Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/70"></div>
      </div>
      {/* ============================================================ */}

      {/* ================= SCROLLABLE CONTENT ================= */}
      <main className="relative z-10">
        
        {/* Section 1: Aditya Anugrah (Hero & Intro) */}
        <section id="section-wind" className="content-section min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <h4 className="animate-up font-['Plus_Jakarta_Sans'] tracking-[0.3em] uppercase text-sm md:text-base text-white/60 mb-6">
              Tentang Diriku / A Journey of Self
            </h4>
            
            <h1 className="animate-up font-['Cinzel'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-2xl text-white/95">
              Aditya Anugrah
            </h1>
            
            <p className="animate-up font-['Playfair_Display'] italic text-2xl md:text-3xl lg:text-4xl text-white/90 mb-12 drop-shadow-lg">
              "Bermimpi besar, mulai dari sekarang."
            </p>
            
            <div className="animate-up max-w-2xl text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed space-y-8 drop-shadow-md">
              <p>
                Nama saya Aditya Anugrah (Ditnzy), seorang pembuat kode 17 tahun dari Sumedang. Saya memiliki ketertarikan yang dalam pada Teknologi dan Bisnis. 
              </p>
              <p>
                Melalui baris-baris kode, saya menerjemahkan imajinasi menjadi realitas—berfokus sebagai Front End Developer, namun selalu siap menjelajahi dunia Fullstack.
              </p>
            </div>
            
            <div className="animate-up mt-24 flex flex-col items-center gap-6 opacity-70">
              <span className="text-xs tracking-[0.4em] uppercase font-bold">Teruslah Melangkah</span>
              <div className="scroll-prompt-line w-[2px] h-20 bg-gradient-to-b from-white to-transparent rounded-full" />
            </div>

          </div>
        </section>

        {/* Section 1.5: Pinned Container (Filosofi & Fun Fact & Sawako) */}
        <section id="section-about" className="relative h-screen w-full overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center px-6">
            
            {/* 1. Filosofi Content */}
            <div className="filosofi-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pointer-events-auto">
              <h2 className="font-['Cinzel'] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide drop-shadow-2xl text-white/95">
                Fake It Until You Make It
              </h2>
              
              <p className="font-['Playfair_Display'] italic text-2xl md:text-3xl lg:text-4xl text-white/80 mb-12 drop-shadow-lg">
                "Meniru langkah yang belum sepenuhnya kita kuasai, sampai ia menjelma menjadi diri."
              </p>
              
              <div className="max-w-2xl text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed space-y-8 drop-shadow-md">
                <p>
                 Berani berjalan dengan keyakinan yang kita pinjam dari masa depan.
                </p>
                <p>
                 Bukan untuk menipu dunia, melainkan melatih mental agar tidak menyerah sebelum beneran bisa. Teruslah berlagak mampu, sampai yang semula hanya berupa peran, perlahan tumbuh alami dan mendarah daging di dalam jiwa.
                </p>
              </div>
            </div>

            {/* 2. Waifu Content (Sawako di kanan, teks di kiri) */}
            <div className="funfact-content absolute inset-0 flex items-center justify-center px-6 max-w-5xl mx-auto opacity-0 pointer-events-none translate-y-10">
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                
                {/* Teks di Kiri */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-['Cinzel'] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide drop-shadow-2xl text-white/95">
                    Waifu
                  </h2>
                  <div className="text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed space-y-6 drop-shadow-md">
                    <p>
                      Saya juga mempunyai Waifu, saya gak gila hanya yaaa... gataulah :-
                    </p>
                    <p className="font-['Playfair_Display'] italic text-2xl md:text-3xl text-white/90">
                      "Saya suka Karakter Kuronuma Sawako di anime Kimi ni Todoke"
                    </p>
                  </div>
                </div>

                {/* Gambar di Kanan */}
                <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/25 shadow-2xl shadow-black/60 rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                    <img 
                      src={sawakoImg} 
                      alt="Kuronuma Sawako" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Sawako Reflection Content (Background Tentangdetail) */}
            <div className="sawako-detail-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto opacity-0 pointer-events-none translate-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-xs tracking-[0.25em] uppercase font-medium mb-6 backdrop-blur-md">
                <span>🌸</span>
                <span>Kimi ni Todoke • Kuronuma Sawako</span>
              </div>

              <h2 className="font-['Cinzel'] text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wide drop-shadow-2xl text-white/95">
                Kenapa?
              </h2>

              <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-2xl">
                <span className="absolute -top-4 -left-2 md:-left-4 text-5xl md:text-7xl text-pink-300/30 font-['Playfair_Display'] select-none">“</span>
                <p className="font-['Playfair_Display'] italic text-lg md:text-2xl lg:text-[25px] text-white/95 leading-relaxed drop-shadow-xl relative z-10">
                  Di mataku, Sawako adalah embun fajar yang paling bening rapuh dalam rasa malu dan kepolosan, namun menyimpan hangat yang sanggup meluruhkan dingin dunia. Barangkali benaknya kerap riuh oleh keraguan yang tak bertepi, tetapi jiwanya tak pernah lelah memercayai kebaikan. Ia merawat persahabatan seperti merawat sekuntum bunga langka: setia, tanpa pamrih, dan teramat tulus. Kesempurnaannya justru lahir dari kerapuhan yang paling murni itu.
                </p>
                <span className="absolute -bottom-6 -right-2 md:-right-4 text-5xl md:text-7xl text-pink-300/30 font-['Playfair_Display'] select-none">”</span>
              </div>
            </div>

            {/* 4. Hobi Content (Background Tentangdetail) */}
            <div className="hobi-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto opacity-0 pointer-events-none translate-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs tracking-[0.25em] uppercase font-medium mb-6 backdrop-blur-md">
                <span>🎮</span>
                <span>Waktu Luang & Eksplorasi</span>
              </div>

              <h2 className="font-['Cinzel'] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide drop-shadow-2xl text-white/95">
                Hobi
              </h2>

              <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-2xl mb-8">
                <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-md">
                  Kalo lagi senggang, biasanya saya ngabisin waktu nonton anime, film, atau baca novel dan buku self-improvement. Selain itu, saya juga suka ngasah otak lewat game puzzle sama iseng bikin video kenangan ala retro 90-an.
                </p>
              </div>

              {/* Visual badges for hobbies */}
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs md:text-sm text-white/80 font-medium">
                  🎬 Nonton Anime & Film
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs md:text-sm text-white/80 font-medium">
                  📚 Buku Self-Improvement
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs md:text-sm text-white/80 font-medium">
                  🧩 Game Puzzle
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs md:text-sm text-white/80 font-medium">
                  📼 Video Kenangan Retro 90-an
                </span>
              </div>
            </div>

            {/* 5. Interactive Scroll Progress Indicator (4 Steps) */}
            <div className="about-progress-indicator absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none">
              {/* Step Badges */}
              <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest shadow-2xl">
                <div className="step-label-1 flex items-center gap-1.5 md:gap-2 text-white font-medium transition-all duration-300">
                  <span className="step-dot-1 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  <span className="text-[10px] md:text-xs">01. Filosofi</span>
                </div>
                <span className="text-white/25">•</span>
                <div className="step-label-2 flex items-center gap-1.5 md:gap-2 text-white/40 font-medium transition-all duration-300">
                  <span className="step-dot-2 w-2 h-2 rounded-full bg-white/30 transition-all duration-300" />
                  <span className="text-[10px] md:text-xs">02. Waifu</span>
                </div>
                <span className="text-white/25">•</span>
                <div className="step-label-3 flex items-center gap-1.5 md:gap-2 text-white/40 font-medium transition-all duration-300">
                  <span className="step-dot-3 w-2 h-2 rounded-full bg-white/30 transition-all duration-300" />
                  <span className="text-[10px] md:text-xs">03. Sawako</span>
                </div>
                <span className="text-white/25">•</span>
                <div className="step-label-4 flex items-center gap-1.5 md:gap-2 text-white/40 font-medium transition-all duration-300">
                  <span className="step-dot-4 w-2 h-2 rounded-full bg-white/30 transition-all duration-300" />
                  <span className="text-[10px] md:text-xs">04. Hobi</span>
                </div>
              </div>

              {/* Progress Bar Line */}
              <div className="w-60 md:w-80 h-[4px] bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div className="about-progress-fill h-full w-full bg-gradient-to-r from-white/70 via-white to-white rounded-full origin-left scale-x-0" />
              </div>

              <div className="text-[11px] tracking-[0.25em] text-white/50 uppercase flex items-center gap-1.5 font-light">
                <span>Scroll ke bawah</span>
                <span className="animate-bounce">↓</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Selengkapnya Tentangku (Interactive Category Navigation) */}
        <section id="section-more" className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs tracking-[0.25em] uppercase font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span>Jelajahi Lebih Jauh</span>
            </div>

            <h2 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide drop-shadow-2xl text-white">
              Selengkapnya Tentangku
            </h2>

            <p className="font-['Playfair_Display'] italic text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-6 drop-shadow-md">
              "Pintu masuk menuju dunia, cerita, dan sudut pandang yang membentuk siapa diriku hari ini."
            </p>

            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto font-light">
              Pilih salah satu kategori di bawah untuk membaca catatan lengkap, ulasan favorit, dan refleksi mendalam saya.
            </p>
          </div>

          {/* 4 Interactive Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            
            {/* Card 1: Anime */}
            <div 
              onClick={() => navigateTo('anime')}
              className="group cursor-pointer p-8 md:p-10 rounded-3xl bg-gradient-to-br from-pink-950/25 via-black/60 to-purple-950/20 border border-pink-500/20 backdrop-blur-xl transition-all duration-500 hover:border-pink-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-pink-300/80 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                  01 • Cerita
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-3xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                Anime
              </h3>

              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                Eksplorasi dunia animasi penuh makna, dari kehangatan Kimi ni Todoke, ketenangan Call of the Night, hingga filosofi waktu di Sousou no Frieren.
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-pink-300 group-hover:text-white transition-colors">
                <span>Buka Halaman Anime</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>

            {/* Card 2: Film */}
            <div 
              onClick={() => navigateTo('film')}
              className="group cursor-pointer p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-950/25 via-black/60 to-orange-950/20 border border-amber-500/20 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform duration-500">
                  <Film className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-300/80 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  02 • Sinema
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-3xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                Film
              </h3>

              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                Menyelami mahakarya layar lebar, sinematografi memukau, keajaiban scoring musik, dan emosi mendalam dalam karya Nolan, Chazelle, dan lainnya.
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-amber-300 group-hover:text-white transition-colors">
                <span>Buka Halaman Film</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>

            {/* Card 3: Game */}
            <div 
              onClick={() => navigateTo('game')}
              className="group cursor-pointer p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-950/25 via-black/60 to-blue-950/20 border border-cyan-500/20 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-500">
                  <Gamepad2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300/80 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  03 • Logika
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-3xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                Game
              </h3>

              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                Asah logika lewat game puzzle pemecah masalah, sensasi nostalgia video retro 90-an, serta apresiasi seni world-building atmosferik.
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-cyan-300 group-hover:text-white transition-colors">
                <span>Buka Halaman Game</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>

            {/* Card 4: Pandangan */}
            <div 
              onClick={() => navigateTo('pandangan')}
              className="group cursor-pointer p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/25 via-black/60 to-teal-950/20 border border-emerald-500/20 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform duration-500">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-300/80 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  04 • Prinsip
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-3xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                Pandangan
              </h3>

              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                Catatan kompas hidup: Wilson’s Law, ketulusan kemanusiaan, craftsmanship dalam kode, dan tekad untuk bermimpi besar dari sekarang.
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-emerald-300 group-hover:text-white transition-colors">
                <span>Buka Halaman Pandangan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>

          </div>

          {/* Elegant Footer */}
          <footer className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left text-white/50 text-xs">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="font-['Cinzel'] font-bold text-white text-sm tracking-widest">ADITYA ANUGRAH</span>
              <span className="hidden sm:inline">•</span>
              <span>Front End Developer & Digital Creator</span>
            </div>
            <p className="font-mono">
              © {new Date().getFullYear()} Ditnzy. All rights reserved.
            </p>
          </footer>

        </section>

      </main>
      {/* ====================================================== */}
      
    </div>
  );
}
