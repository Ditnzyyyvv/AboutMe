export interface GameItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  rating: string;
  scoreNumber: number;
  genres: string[];
  backdrop: string;
  description: string;
  personalNote: string;
}

export const gameList: GameItem[] = [
  {
    id: 1,
    title: "Portal 2 & Aperture Science",
    subtitle: "Masterclass Puzzle Fisika Spasial",
    category: "Puzzle / Logic",
    rating: "9.8 / 10",
    scoreNumber: 9.8,
    genres: ["Puzzle", "Sci-Fi", "First-Person", "Physics", "Valve"],
    backdrop: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/page_bg_generated_v6b.jpg",
    description: "Portal 2 adalah puncak kejeniusan desain game teka-teki logika fisika. Menggunakan Portal Gun untuk menembus ruang, memanipulasi gravitasi, momentum lompatan, serta berinteraksi dengan AI sarkastis GLaDOS dan Wheatley di reruntuhan laboratorium bawah tanah Aperture Science.",
    personalNote: "Game yang membentuk cara saya memecahkan masalah: melihat batasan bukan sebagai jalan buntu, melainkan sebagai sudut pandang baru yang belum kita temukan solusinya."
  },
  {
    id: 2,
    title: "The Witness",
    subtitle: "Keheningan Pulau Berisi Ratusan Teka-Teki Garis",
    category: "Logic / Spatial",
    rating: "9.4 / 10",
    scoreNumber: 9.4,
    genres: ["Open World", "Logic", "Puzzle", "Philosophy", "Jonathan Blow"],
    backdrop: "https://cdn.cloudflare.steamstatic.com/steam/apps/210970/page_bg_generated_v6b.jpg",
    description: "Terbangun sendirian di sebuah pulau terpencil yang penuh warna namun sunyi tanpa satu pun manusia atau dialog kata-kata. Pemain dipandu hanya oleh ratusan panel teka-teki garis yang saling berkaitan dengan arsitektur alam sekitar, suara angin, dan bayangan pohon.",
    personalNote: "Sensasi 'eureka' saat berjalan di alam bebas dan tiba-tiba menyadari bahwa formasi bebatuan di pantai adalah bagian dari teka-teki rahasia. Mengajarkan seni observasi dan ketenangan pikiran."
  },
  {
    id: 3,
    title: "Nostalgia Estetika Retro 90-an & Lo-Fi",
    subtitle: "Eksperimen Glitch, VCR Tape, dan Warna Analog",
    category: "Retro & Creative",
    rating: "9.5 / 10",
    scoreNumber: 9.5,
    genres: ["Retro 90s", "VCR Glitch", "Lo-Fi", "Analog Video", "Creativity"],
    backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop",
    description: "Kecintaan pada artefak visual era 90-an: garis scanline monitor CRT yang melengkung, distorsi pita kaset VHS yang berderit, palet warna neon berpasir, dan audio chiptune 16-bit. Sensasi hangat yang membawa kembali kenangan masa lalu yang sederhana.",
    personalNote: "Di waktu luang, saya suka meracik video kenangan dengan grading retro 90-an. Ada estetika puitis dalam ketidaksempurnaan sinyal analog yang tidak bisa digantikan oleh kejernihan serba digital hari ini."
  },
  {
    id: 4,
    title: "Atmospheric & World-Building Immersion",
    subtitle: "Dunia Interaktif Tempat Jiwa Beristirahat",
    category: "Atmosphere / Art",
    rating: "9.3 / 10",
    scoreNumber: 9.3,
    genres: ["Atmosphere", "Audio Storytelling", "World Design", "Art Experience"],
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop",
    description: "Bagi saya, video game adalah medium seni paling komprehensif di abad 21. Game yang hebat bukan hanya yang menuntut kecepatan refleks jari, melainkan yang mampu memeluk pemainnya dengan atmosfer lingkungan, desau angin, dan komposisi musik latar yang menggetarkan.",
    personalNote: "Menjelajahi dunia game atmosferik terasa seperti membaca novel interaktif yang hidup. Ia memberikan ruang teduh untuk bernapas di tengah hiruk-pikuk rutinitas kode harian."
  }
];
