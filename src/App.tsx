import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const MESSAGES = [
  "Ditnzy online.",
  "Bismillah ke Jepang",
  "Sawako.not.sadako1231",
  "Web / Game / AI",
  "Fake it til you make it."
];

function TypingMessages() {
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMsg = MESSAGES[msgIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentMsg) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
      }, 500);
    } else {
      const delay = isDeleting ? 45 : 90;
      timeout = setTimeout(() => {
        setText(currentMsg.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, msgIndex]);

  return (
    <div className="absolute left-[48.5%] md:left-[47.5%] lg:left-[48.5%] -translate-x-1/2 bottom-[32%] z-30 w-[115px] sm:w-[135px] flex justify-start text-left pointer-events-none">
      <div className="font-nokia text-[#2A3616] text-[10px] sm:text-[13px] leading-tight break-words min-h-[2em] tracking-tight select-none">
        {text}
        <motion.span
          className="inline-block w-1.5 h-3 bg-[#2A3616] ml-0.5 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav className="pointer-events-auto backdrop-blur-md bg-white/40 border border-black/10 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="font-instrument text-[28px] tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity cursor-pointer">
          ditnzy.
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#works" className="font-sans text-[13px] tracking-wide uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">Karya</a>
          <a href="#stack" className="font-sans text-[13px] tracking-wide uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">Peralatan</a>
          <a href="#about" className="font-sans text-[13px] tracking-wide uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">Mimpi Tokyo</a>
          <a href="https://github.com/Ditnzyyyvv" target="_blank" rel="noreferrer" className="font-sans text-[13px] tracking-wide uppercase text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">GitHub</a>
        </div>

        <a 
          href="mailto:adityaanugrah6767@gmail.com"
          className="group relative overflow-hidden bg-[#0871E7] text-white px-5 py-2 rounded-full font-sans text-[14px] font-medium shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline-1 outline-[#0871E7] -outline-offset-1 transition-transform active:scale-95"
        >
          <div className="absolute w-[80%] h-3 left-[10%] top-[1px] bg-gradient-to-b from-[#DEF0FC] to-transparent rounded-[12px] opacity-70 group-hover:scale-x-110 transition-transform duration-300 pointer-events-none" />
          <span className="relative z-10">Kirim Pesan</span>
        </a>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#F3F4ED] pt-32 md:pt-40 flex flex-col items-center justify-start overflow-hidden">
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_054418_a6d194f0-ac86-4df9-abe5-ded73e596d7c.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[#F3F4ED]/20 backdrop-contrast-[1.05] z-10 pointer-events-none" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-instrument text-[42px] sm:text-[62px] md:text-[80px] lg:text-[92px] leading-[0.9] tracking-tight text-[#1a1a1a] mb-5"
        >
          Dari Aku Untukmu — <br />
          <span className="italic font-normal">Kimi ni Todoke.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] md:text-[18px] text-[#1a1a1a]/80 leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Aditya Anugrah (Ditnzy). Pembuat kode 17 tahun dari Sumedang. Meracik web statis dan dinamis, mesin game interaktif, hingga sistem AI otonom. Berpegang teguh pada prinsip 'Bermimpi besar, mulai dari sekarang' — dalam perjalanan menuju Tokyo.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-4"
        >
          {["📍 Sumedang, ID", "🎒 12 RPL 1", "⚡ Siap Kerja Sore / Malam"].map((tag) => (
            <span key={tag} className="inline-flex text-[11px] tracking-wider font-mono uppercase bg-black/5 px-3 py-1 rounded-full text-black/60">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <TypingMessages />
    </div>
  );
}

function WorksSketchSection() {
  return (
    <section id="works" className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="font-[family-name:var(--font-kalam)] text-4xl md:text-5xl font-bold tracking-wide mb-4">Coretan Karya &amp; Prototipe ✏️</h2>
        <p className="max-w-xl mx-auto">Bukan template pabrikan. Dibangun pakai logika, keringat, dan bumbu AI.</p>
        <div className="w-48 h-[2px] border-b-2 border-dashed border-[#2d2d2d] mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-8">
        {/* Card 1 */}
        <div className="-rotate-1 hover:rotate-0 transition-transform relative bg-[#ffffff] border-[3px] border-[#2d2d2d] shadow-[5px_5px_0px_#2d2d2d] p-6 pt-10 flex flex-col h-full rounded-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e5e0d8]/80 backdrop-blur-sm -rotate-3 border border-black/10 shadow-sm" />
          <h3 className="font-bold text-xl mb-2 leading-tight">Portal Web Eksploratif</h3>
          <p className="text-[15px] leading-relaxed mb-4 flex-grow">Eksplorasi antarmuka dinamis dan animasi mikro yang responsif di semua layar.</p>
          <div className="flex flex-wrap gap-2 text-sm font-bold text-[#2d5da1]">
            <span>[React 19]</span> <span>[Tailwind v4]</span> <span>[Vite]</span>
          </div>
        </div>

        {/* Card 2 HIGHLIGHT */}
        <div className="rotate-2 hover:rotate-0 transition-transform relative bg-[#fff9c4] border-[3px] border-[#2d2d2d] shadow-[5px_5px_0px_#2d2d2d] p-6 pt-10 flex flex-col h-full rounded-sm md:-mt-6">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff4d4d] border-2 border-[#2d2d2d] rounded-full shadow-sm" />
          <h3 className="font-bold text-xl mb-2 leading-tight">Dunia Interaktif &amp; Mekanik Game</h3>
          <p className="text-[15px] leading-relaxed mb-4 flex-grow">Eksperimen fisika 2D/3D, puzzle logis, dan prototipe gameplay yang bisa dimainkan langsung.</p>
          <div className="flex flex-wrap gap-2 text-sm font-bold text-[#2d5da1]">
            <span>[Godot]</span> <span>[Unity]</span> <span>[GDevelop]</span> <span>[C# / GDScript]</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="-rotate-2 hover:rotate-0 transition-transform relative bg-[#ffffff] border-[3px] border-[#2d2d2d] shadow-[5px_5px_0px_#2d2d2d] p-6 pt-10 flex flex-col h-full rounded-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e5e0d8]/80 backdrop-blur-sm rotate-2 border border-black/10 shadow-sm" />
          <h3 className="font-bold text-xl mb-2 leading-tight">Aplikasi Mobile Lintas Platform</h3>
          <p className="text-[15px] leading-relaxed mb-4 flex-grow">Solusi utilitas mobile praktis dengan arsitektur bersih dan performa gesit.</p>
          <div className="flex flex-wrap gap-2 text-sm font-bold text-[#2d5da1]">
            <span>[Flutter / Dart]</span> <span>[Kodular UI]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackSketchSection() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-[#2d2d2d]/30">
      <h2 className="font-[family-name:var(--font-kalam)] text-4xl md:text-5xl font-bold mb-16 text-center">Peralatan Tempur (The Arsenal) 🛠️</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-6 bg-white shadow-[4px_4px_0px_#2d2d2d] border-[3px] border-[#2d2d2d]" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
          <h3 className="font-bold text-xl mb-4 text-center">Web Core &amp; Bahasa</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'TypeScript', 'React 19', 'Tailwind CSS', 'HTML/CSS'].map(i => (
              <span key={i} className="border-2 border-[#2d2d2d] rounded-full px-3 py-1 text-[15px] font-bold" style={{ borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px' }}>{i}</span>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white shadow-[4px_4px_0px_#2d2d2d] border-[3px] border-[#2d2d2d]" style={{ borderRadius: '20px 255px 20px 25px / 225px 15px 255px 15px' }}>
          <h3 className="font-bold text-xl mb-4 text-center">Mesin Game &amp; Mobile</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Godot Engine', 'Unity', 'GDevelop', 'Scratch', 'Flutter', 'Dart', 'Kodular'].map(i => (
              <span key={i} className="border-2 border-[#2d2d2d] rounded-full px-3 py-1 text-[15px] font-bold" style={{ borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px' }}>{i}</span>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white shadow-[4px_4px_0px_#2d2d2d] border-[3px] border-[#2d2d2d] relative" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
          <h3 className="font-bold text-xl mb-4 text-center">Partner Vibecoding (AI)</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {['Claude', 'Gemini', 'Antigravity IDE', 'Qwen', 'Astra', 'Blackbox'].map(i => (
              <span key={i} className="border-2 border-[#2d2d2d] rounded-full px-3 py-1 text-[15px] font-bold" style={{ borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px' }}>{i}</span>
            ))}
          </div>
          <div className="absolute -bottom-10 right-0 text-[#2d5da1] text-[16px] -rotate-3 text-right font-bold w-full">
            → AI sintesis kodenya, aku sutradaranya.
          </div>
        </div>
      </div>
    </section>
  );
}

function TokyoRouteSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-[#2d2d2d]/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
        {/* Divider for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#2d2d2d] -translate-x-1/2" />
        
        <div>
          <h2 className="font-[family-name:var(--font-kalam)] text-4xl font-bold mb-8">Rute: Sumedang ➔ Tokyo 🗼</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="font-[family-name:var(--font-kalam)] font-bold text-2xl mt-1">1.</div>
              <div>
                <h4 className="font-bold text-xl">SMK Informatika Sumedang (12 RPL 1)</h4>
                <p>Ngulik fundamental tiap sore sampai larut malam.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-[family-name:var(--font-kalam)] font-bold text-2xl mt-1">2.</div>
              <div>
                <h4 className="font-bold text-xl">Prinsip: Fake It 'Til You Make It</h4>
                <p>Ambil tantangan arsitektur baru dulu, bedah sampai paham tuntas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-[family-name:var(--font-kalam)] font-bold text-2xl mt-1">3.</div>
              <div>
                <h4 className="font-bold text-xl text-[#ff4d4d]">Target: Software Engineer di Tokyo</h4>
                <p>Menembus batas lokal menuju ekosistem teknologi Jepang.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:pl-12 pt-8 md:pt-0">
          <div className="bg-[#fff9c4] p-8 max-w-sm rotate-1 shadow-[5px_5px_0px_#2d2d2d] border-[3px] border-[#2d2d2d]">
            <h4 className="font-bold text-lg mb-2 underline decoration-2 underline-offset-4 decoration-[#ff4d4d]">Catatan Pribadi:</h4>
            <p className="leading-relaxed text-[17px]">
              Aku percaya ngoding itu bukan cuma ngetik syntax, tapi bikin sesuatu yang beneran nyampe ke hati orang lain (<span className="italic">Kimi ni Todoke</span>).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterHandDrawn() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-[#2d2d2d]/30 flex flex-col items-center">
      <div className="bg-white border-[3px] border-[#2d2d2d] p-8 md:p-12 w-full max-w-2xl shadow-[6px_6px_0px_#2d2d2d] text-center relative overflow-hidden" style={{ borderRadius: '20px 255px 20px 25px / 225px 15px 255px 15px' }}>
        <div className="font-bold tracking-widest text-[#2d2d2d]/60 mb-6 uppercase text-sm border-b-2 border-dashed border-[#2d2d2d]/30 pb-4">
          PASSENGER: ADITYA ANUGRAH // TIKET SMD-TOKYO
        </div>
        <h2 className="font-[family-name:var(--font-kalam)] text-3xl md:text-4xl font-bold mb-8">
          Ada ide gila yang mau diwujudkan bareng?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:adityaanugrah6767@gmail.com" 
            className="bg-[#ff4d4d] text-white border-[3px] border-[#2d2d2d] px-6 py-3 font-[family-name:var(--font-kalam)] text-xl font-bold shadow-[4px_4px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
          >
            Kirim Pesan Sekarang
          </a>
          <a 
            href="https://github.com/Ditnzyyyvv" 
            target="_blank" 
            rel="noreferrer" 
            className="text-xl font-bold relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#2d5da1] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </div>
      </div>
      <div className="text-[15px] font-bold text-[#2d2d2d]/60 mt-16 text-center">
        © 2026 Ditnzy. Dibuat manual dengan coretan kode &amp; secangkir kopi di Sumedang.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="relative bg-[#F3F4ED] min-h-screen">
      <Navbar />
      <Hero />
      <div 
        className="relative bg-[#fdfbf7] text-[#2d2d2d] font-[family-name:var(--font-hand)] text-lg selection:bg-[#fff9c4] selection:text-[#2d2d2d] border-t-[3px] border-[#2d2d2d]"
        style={{
          backgroundImage: 'radial-gradient(#e5e0d8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      >
        <WorksSketchSection />
        <StackSketchSection />
        <TokyoRouteSection />
        <FooterHandDrawn />
      </div>
    </main>
  );
}
