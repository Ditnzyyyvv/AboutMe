import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

interface BookLoaderProps {
  onComplete: () => void;
}

export const BookLoader: React.FC<BookLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const glowLightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 0.8s
    const skipTimer = setTimeout(() => setCanSkip(true), 800);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          }
        });
      }
    });


    // Initial setup
    gsap.set(bookRef.current, {
      scale: 0.85,
      rotationX: 18,
      rotationY: -12,
      rotationZ: -2,
      opacity: 0,
      y: 40
    });

    gsap.set(coverRef.current, { transformOrigin: 'left center', rotationY: 0 });
    gsap.set(page1Ref.current, { transformOrigin: 'left center', rotationY: 0 });
    gsap.set(page2Ref.current, { transformOrigin: 'left center', rotationY: 0 });
    gsap.set(glowLightRef.current, { opacity: 0, scale: 0.6 });
    gsap.set(contentRef.current, { opacity: 0 });

    // Step 1: Book emerges from darkness into center
    tl.to(bookRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: 'back.out(1.2)'
    })
    // Step 2: Cover starts swinging open smoothly
    .to(coverRef.current, {
      rotationY: -155,
      duration: 1.3,
      ease: 'power2.inOut'
    }, '-=0.2')
    // Step 3: First page flips
    .to(page1Ref.current, {
      rotationY: -135,
      duration: 1.1,
      ease: 'power2.inOut'
    }, '-=1.0')
    // Step 4: Second page flips
    .to(page2Ref.current, {
      rotationY: -65,
      duration: 0.9,
      ease: 'power1.out'
    }, '-=0.8')
    // Step 5: Mystical light rays shine out from the book spine
    .to(glowLightRef.current, {
      opacity: 1,
      scale: 1.8,
      duration: 1.0,
      ease: 'power2.out'
    }, '-=0.9')
    // Step 6: Reveal title & text inside
    .to(contentRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: 'power1.in'
    }, '-=0.6')
    // Hold momentarily for beauty
    .to({}, { duration: 0.4 });

    return () => {
      clearTimeout(skipTimer);
      tl.kill();
    };
  }, [onComplete]);

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete();
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#050507] text-white flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ perspective: '1600px' }}
    >
      {/* Background Ambient Particles & Radial Shadow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/60 to-black pointer-events-none" />
      </div>

      {/* 3D BOOK WRAPPER */}
      <div 
        ref={bookRef}
        className="relative w-[260px] h-[370px] sm:w-[320px] sm:h-[450px] transition-transform"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.9)'
        }}
      >
        
        {/* Glow bursting from the inside spine */}
        <div 
          ref={glowLightRef}
          className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-amber-400/25 via-yellow-200/20 to-transparent blur-3xl z-40"
        />

        {/* 1. BACK COVER & BASE (Buku Bagian Bawah) */}
        <div 
          className="absolute inset-0 rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#1b1920] via-[#111015] to-[#09080c] border border-amber-500/20 shadow-2xl"
          style={{ transform: 'translateZ(-16px)' }}
        />

        {/* Spine Side Thickness (Tebal Buku Bagian Kiri) */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-[18px] bg-gradient-to-r from-[#0d0c11] via-[#1a1722] to-[#0d0c11] border-l border-amber-400/30 rounded-l-md"
          style={{ 
            transformOrigin: 'left center',
            transform: 'rotateY(-90deg) translateX(-18px)'
          }}
        />

        {/* Paper Thickness Edge (Tumpukan Kertas di Sisi Kanan & Bawah) */}
        <div 
          className="absolute top-2 bottom-2 right-[-8px] w-[14px] bg-gradient-to-l from-[#d4c9b5] via-[#eee7da] to-[#c7bca5] rounded-r-sm opacity-90 shadow-inner"
          style={{ transform: 'translateZ(-8px)' }}
        />
        <div 
          className="absolute bottom-[-8px] left-4 right-2 h-[14px] bg-gradient-to-t from-[#c7bca5] via-[#eee7da] to-[#d4c9b5] rounded-b-sm opacity-85 shadow-inner"
          style={{ transform: 'translateZ(-8px)' }}
        />

        {/* 2. BASE RIGHT PAGE (Halaman Kanan Diam / Isi Buku) */}
        <div 
          className="absolute inset-0 rounded-r-xl rounded-l-xs bg-[#f4ece1] text-[#1c1815] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-inner border border-[#d6c7b0]"
          style={{ transform: 'translateZ(-1px)' }}
        >
          {/* Subtle Paper Texture & Watermark */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-[#2b2520]/15 pb-3 mb-6">
              <span className="font-['Cinzel'] tracking-[0.25em] text-[10px] text-[#2b2520]/60 uppercase">
                Bab Pembuka
              </span>
              <span className="font-serif italic text-xs text-[#2b2520]/50">
                Hal. 01
              </span>
            </div>

            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#1a1512] mb-3 tracking-wide">
              A Journey of Self
            </h3>

            <p className="font-['Playfair_Display'] italic text-xs sm:text-sm text-[#3d332a] leading-relaxed mb-4">
              "Setiap lembaran baru dimulai dari keberanian untuk membuka halamannya."
            </p>

            <div className="space-y-2 text-[11px] sm:text-xs text-[#52473b] font-light leading-relaxed">
              <p>
                Menjelajahi dunia kode, imajinasi karya, dan refleksi hidup seorang pembuat karya.
              </p>
              <div className="w-8 h-[1px] bg-[#2b2520]/20 my-3" />
              <p className="font-mono text-[10px] text-[#2b2520]/50">
                Ditnzy • Portfolio & Reflections
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-[#2b2520]/15 flex items-center justify-between text-[10px] font-mono text-[#2b2520]/45">
            <span>MEMASUKI DUNIA...</span>
            <span className="animate-pulse">● ● ●</span>
          </div>
        </div>

        {/* 3. FLIPPING PAGE 2 (Kertas Kedua yang Membalik) */}
        <div 
          ref={page2Ref}
          className="absolute inset-0 rounded-r-xl rounded-l-xs bg-[#efe6d8] border border-[#d2c3aa] p-6 shadow-xl"
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center opacity-60">
            <p className="font-['Playfair_Display'] italic text-xs text-[#2e261f]">
              "Bermimpi besar, mulai dari sekarang."
            </p>
          </div>
        </div>

        {/* 4. FLIPPING PAGE 1 (Kertas Pertama yang Membalik) */}
        <div 
          ref={page1Ref}
          className="absolute inset-0 rounded-r-xl rounded-l-xs bg-[#ebd9c0] border border-[#cebfa7] p-6 shadow-2xl"
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center opacity-40">
            <div className="w-12 h-[1px] bg-[#2e261f]" />
          </div>
        </div>

        {/* 5. FRONT COVER (Sampul Depan yang Terbuka ke Kiri) */}
        <div 
          ref={coverRef}
          className="absolute inset-0 rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#1c1822] via-[#100d14] to-[#070509] border-2 border-amber-400/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Ornate Gold Border Lining */}
          <div className="absolute inset-2 sm:inset-3 rounded-xl border border-amber-400/25 pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 rounded-lg border border-amber-400/15 pointer-events-none" />

          {/* Spine texture on left side of cover */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

          {/* Top Emblem */}
          <div className="relative z-10 text-center pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase">
              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              <span>CHRONICLES</span>
            </div>
          </div>

          {/* Center Title Embossing */}
          <div className="relative z-10 text-center my-auto space-y-3">
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold tracking-[0.2em] text-white drop-shadow-[0_4px_10px_rgba(251,191,36,0.3)]">
              DITNZY
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent mx-auto" />
            <p className="font-['Playfair_Display'] italic text-xs sm:text-sm text-amber-200/80 tracking-wide">
              Aditya Anugrah
            </p>
          </div>

          {/* Bottom Footer Info */}
          <div className="relative z-10 text-center pb-2">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-white/40 uppercase">
              PORTFOLIO • 2026
            </span>
          </div>

          {/* Inner Back of Cover (When Flipped) */}
          <div 
            className="absolute inset-0 bg-[#141219] border-r border-amber-500/20"
            style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>

      </div>

      {/* Subtitle Prompt & Loading State */}
      <div 
        ref={contentRef}
        className="relative z-10 mt-14 flex flex-col items-center text-center gap-2"
      >
        <span className="font-['Cinzel'] tracking-[0.3em] uppercase text-xs text-white/60">
          Membuka Halaman Portofolio
        </span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      </div>

      {/* Skip Button */}
      {canSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white/50 hover:text-white text-[11px] font-mono tracking-widest uppercase transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-105"
        >
          Lewati Intro →
        </button>
      )}

    </div>
  );
};
