export interface AnimeItem {
  id: number;
  title: string;
  romajiTitle: string;
  year: string;
  rating: string;
  scoreNumber: number;
  genres: string[];
  backdrop: string;
  description: string;
  personalNote: string;
}

export const animeList: AnimeItem[] = [
  {
    id: 1,
    title: "Darling in the Franxx",
    romajiTitle: "Dārin In Za Furankusu",
    year: "2018",
    rating: "8.2 / 10",
    scoreNumber: 8.2,
    genres: ["Sci-Fi", "Mecha", "Romance", "Drama", "Psychological"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99423-OQfem628gdxD.jpg",
    description: "Di masa depan distopia pasca-apokaliptik, anak-anak dibesarkan tanpa nama di dalam Plantation, hanya dilatih untuk satu tujuan: mengemudikan robot mecha raksasa bernama Franxx untuk melawan monster Kyoryu. Pertemuan tak terduga antara Code:016 (Hiro) dan gadis bertanduk misterius Code:002 (Zero Two) memulai takdir yang menentang seluruh tatanan dunia.",
    personalNote: "Eksplorasi tentang apa artinya menjadi manusia, menemukan belahan jiwa di tengah keputusasaan dunia, dan keberanian untuk terbang bebas bersama meski sayap yang kita miliki hanya sebelah."
  },
  {
    id: 2,
    title: "Grave of the Fireflies",
    romajiTitle: "Hotaru no Haka (火垂るの墓)",
    year: "1988",
    rating: "9.3 / 10",
    scoreNumber: 9.3,
    genres: ["Drama", "Historical", "War", "Studio Ghibli"],
    backdrop: "https://image.tmdb.org/t/p/original/pgWLJI42GG98S1DqjTELLtB7VPB.jpg",
    description: "Mahakarya sinematik Isao Takahata dari Studio Ghibli. Mengisahkan perjuangan Seita dan adik perempuannya yang masih kecil, Setsuko, bertahan hidup di tengah reruntuhan Kobe pada bulan-bulan terakhir Perang Dunia II setelah ibu mereka gugur dalam serangan bom api.",
    personalNote: "Salah satu film paling mengiris hati yang pernah diciptakan. Menggambarkan betapa mahalnya harga sebuah kepolosan anak-anak ketika ego dan kegilaan perang melahap peradaban manusia."
  },
  {
    id: 3,
    title: "Kaze Tachinu - The Wind Rises",
    romajiTitle: "The Wind Rises (風立ちぬ)",
    year: "2013",
    rating: "8.9 / 10",
    scoreNumber: 8.9,
    genres: ["Biography", "Drama", "Romance", "Historical"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16662-XLmadbKVsRW2.jpg",
    description: "Karya personal dan puitis dari Hayao Miyazaki, terinspirasi dari kisah nyata Jiro Horikoshi, perancang pesawat tempur legendaris Jepang. Jiro bermimpi merancang sayap-sayap terindah yang membelah angkasa, sembari merawat cintanya kepada Naoko Satomi yang berjuang melawan penyakit tuberkulosis.",
    personalNote: "'Le vent se lève, il faut tenter de vivre' (Angin berhembus, kita harus tetap mencoba hidup). Mengajarkan bahwa mengejar mimpi yang murni seringkali menuntut ketabahan di tengah badai realitas zaman."
  },
  {
    id: 4,
    title: "Josee, the Tiger and the Fish",
    romajiTitle: "Josee to Tora to Sakana-tachi (ジョゼと虎と魚たち)",
    year: "2020",
    rating: "8.8 / 10",
    scoreNumber: 8.8,
    genres: ["Romance", "Drama", "Slice of Life"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113596-8r3fCSFgQHIY.jpg",
    description: "Tsuneo Suzukawa, mahasiswa biologi laut yang berdedikasi menggapai beasiswa luar negeri, secara kebetulan bertemu dengan Kumiko (yang menyebut dirinya Josee), seorang gadis berbakat melukis namun terikat pada kursi roda dan rasa takut akan dunia luar.",
    personalNote: "Kisah hangat tentang saling menguatkan saat mimpi masing-masing runtuh. Menunjukkan bahwa keterbatasan fisik tidak pernah mampu mengurung sayap imajinasi dan harapan sejati."
  },
  {
    id: 5,
    title: "Natsu Eno Tunnel Sayonara No Deguchi",
    romajiTitle: "The Tunnel to Summer, the Exit of Goodbyes",
    year: "2022",
    rating: "8.5 / 10",
    scoreNumber: 8.5,
    genres: ["Sci-Fi", "Mystery", "Romance", "Supernatural"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142769-WCECHopEFbE2.jpg",
    description: "Legenda perkotaan menyebutkan bahwa Terowongan Urashima dapat mengabulkan apa pun yang paling didambakan hati manusia, namun sebagai gantinya waktu hidup di luar akan melesat cepat. Kaoru Tono yang berduka atas kehilangan adiknya dan siswi pindahan Anzu Hanashiro memutuskan menelusuri lorong misterius tersebut.",
    personalNote: "Visualisasi menakjubkan tentang kerinduan, penyesalan masa lalu, dan keputusan berani untuk melepaskan duka demi menyambut masa depan yang menanti di ujung lorong."
  },
  {
    id: 6,
    title: "A Silent Voice",
    romajiTitle: "Koe no Katachi (聲の形)",
    year: "2016",
    rating: "9.2 / 10",
    scoreNumber: 9.2,
    genres: ["Drama", "Psychological", "School", "Romance"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg",
    description: "Shoya Ishida pernah merundung Shoko Nishimiya, siswi tunarungu di masa SD, hingga Shoko pindah sekolah dan Shoya berakhir menjadi pihak yang dikucilkan teman-temannya. Bertahun-tahun kemudian, dengan rasa penyesalan yang membakar jiwa, Shoya bertekad menemui Shoko kembali untuk menebus masa lalu.",
    personalNote: "Karya luar biasa tentang pengampunan terhadap diri sendiri, beban kesehatan mental, dan keindahan ketika kita mulai membuka telinga untuk benar-benar mendengarkan suara orang lain."
  },
  {
    id: 7,
    title: "Kimi ni Todoke",
    romajiTitle: "From Me to You (君に届け)",
    year: "2009",
    rating: "9.5 / 10",
    scoreNumber: 9.5,
    genres: ["Romance", "Slice of Life", "School", "Drama"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6045-PHiyDpX2gc5D.jpg",
    description: "Kuronuma Sawako dijuluki 'Sadako' oleh teman-teman sekelasnya karena tatapan pemalu dan rambut hitam panjangnya, padahal di dalam hatinya ia adalah sosok paling tulus dan berhati lembut. Ketika Shota Kazehaya, siswa paling populer yang selalu ceria, mendekatinya dengan wajar, dunia Sawako perlahan bermekaran.",
    personalNote: "Anime paling bermakna dan berkesan bagiku. Karakter Sawako adalah representasi kepolosan dan ketulusan murni yang menyembuhkan jiwa di tengah dinginnya dunia."
  },
  {
    id: 8,
    title: "Weathering with You",
    romajiTitle: "Tenki no Ko (天気の子)",
    year: "2019",
    rating: "8.7 / 10",
    scoreNumber: 8.7,
    genres: ["Fantasy", "Romance", "Drama", "Makoto Shinkai"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106286-3oKwiwjd7Wkm.jpg",
    description: "Di musim panas Tokyo yang diguyur hujan deras tak berkesudahan, seorang remaja kaburan bernama Hodaka Morishima bertemu Hina Amano—seorang gadis yatim piatu yang memiliki kemampuan misterius memanggil sinar matahari melalui doa di atas kuil langit.",
    personalNote: "Sinematografi langit Makoto Shinkai yang memukau dan lagu-lagu RADWIMPS yang menyentuh kalbu. Jawaban tegas tentang memilih kebahagiaan seseorang yang kita cintai di atas tuntutan konformitas dunia."
  },
  {
    id: 9,
    title: "Call Of The Night",
    romajiTitle: "Yofukashi no Uta (よふかしのうた)",
    year: "2022",
    rating: "8.8 / 10",
    scoreNumber: 8.8,
    genres: ["Supernatural", "Romance", "Psychological", "Comedy"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141391-JErChZ8G3b49.jpg",
    description: "Kou Yamori tidak bisa tidur di malam hari dan merasa jenuh dengan kehidupan sekolahnya yang monoton. Saat menyusuri jalanan malam yang sepi, ia bertemu Nazuna Nanakusa, seorang vampir eksentrik yang memperkenalkannya pada kebebasan dan pesona magis dunia malam.",
    personalNote: "Palet visual neon ungu dan atmosfer malam yang membius. Menangkap sensasi melankolis ketika semua orang tertidur lelap dan kita merasa paling hidup di bawah langit berbintang."
  },
  {
    id: 10,
    title: "Death Note",
    romajiTitle: "Desu Nōto (デスノート)",
    year: "2006",
    rating: "9.3 / 10",
    scoreNumber: 9.3,
    genres: ["Psychological", "Thriller", "Supernatural", "Mystery"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
    description: "Light Yagami, siswa genius yang muak dengan kebusukan moral masyarakat, menemukan buku catatan maut milik Shinigami Ryuk. Setiap nama manusia yang ditulis di dalamnya akan mati. Ketika Light bertekad menjadi dewa dunia baru ('Kira'), detektif legendaris bertopeng inisial 'L' turun tangan menghentikannya.",
    personalNote: "Pertarungan intelektual dan catur psikologis paling menegangkan sepanjang sejarah anime. Eksplorasi mendalam tentang garis tipis antara keadilan absolut dan arogansi kegelapan."
  },
  {
    id: 11,
    title: "20th Century Boys",
    romajiTitle: "Nijusseiki Shōnen (20世紀少年)",
    year: "2008",
    rating: "9.4 / 10",
    scoreNumber: 9.4,
    genres: ["Mystery", "Sci-Fi", "Psychological", "Naoki Urasawa"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30003-MBm3u1K1uHsi.jpg",
    description: "Karya agung Naoki Urasawa. Kenji Endo dan kawan-kawan masa kecilnya pada tahun 1969 pernah menulis 'Buku Ramalan' fiksi tentang bagaimana mereka akan menyelamatkan dunia dari senjata biologis raksasa. Tiga puluh tahun kemudian, sebuah sekte rahasia yang dipimpin sosok misterius 'Friend' mulai mewujudkan ramalan tersebut menjadi kiamat nyata.",
    personalNote: "Sebuah epik misteri lintas dekade yang luar biasa genius. Menghubungkan kenangan nostalgia masa kecil, musik rock n' roll era 60-70an, dan konspirasi global yang membuat merinding."
  },
  {
    id: 12,
    title: "Naruto Shippuden",
    romajiTitle: "Naruto: Shippūden (NARUTO -ナルト- 疾風伝)",
    year: "2007",
    rating: "9.0 / 10",
    scoreNumber: 9.0,
    genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1735.jpg",
    description: "Setelah dua setengah tahun berlatih bersama Jiraiya, Naruto Uzumaki kembali ke Konoha dengan tekad yang semakin matang. Menghadapi ancaman organisasi teroris Akatsuki dan misi menyelamatkan sahabatnya Sasuke Uchiha dari jurang kegelapan balas dendam.",
    personalNote: "Pilar tumbuh kembang masa remaja. Filosofi tentang rantai kebencian, arti ikatan persahabatan, dan tekad pantang menyerah yang membentuk cara pandang hidup banyak generasi."
  },
  {
    id: 13,
    title: "Watamote",
    romajiTitle: "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
    year: "2013",
    rating: "8.2 / 10",
    scoreNumber: 8.2,
    genres: ["Comedy", "Slice of Life", "Psychological", "School"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16742-E9MjNzAvKksd.jpg",
    description: "Tomoko Kuroki adalah master game otome yang yakin dirinya akan langsung populer begitu masuk SMA. Namun realitas menghantam keras: ia menderita kecemasan sosial ekstrem dan kesulitan berbicara bahkan sekadar menyapa teman sekelasnya.",
    personalNote: "Komedinya mungkin terasa 'cringe' dan menusuk, tapi potret kecemasan sosial dan rasa kesepian Tomoko sangat jujur, manusiawi, dan menghibur bagi siapa pun yang pernah merasa canggung di keramaian."
  },
  {
    id: 14,
    title: "Uzumaki - Junji Ito",
    romajiTitle: "Uzumaki: Spiral into Horror (うずまき)",
    year: "2024",
    rating: "8.9 / 10",
    scoreNumber: 8.9,
    genres: ["Horror", "Psychological", "Supernatural", "Mystery"],
    backdrop: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111314-OWfOEbP2ZsSJ.jpg",
    description: "Kota tepi pantai Kurouzu-cho tidak dihantui oleh monster atau hantu biasa, melainkan oleh sebuah bentuk geometris kutukan: Spiral (Uzumaki). Siswi SMA Kirie Goshima dan kekasihnya Shuichi Saito menyaksikan bagaimana kutukan ini perlahan merasuki pikiran dan memelintir tubuh warga kota menjadi kegilaan.",
    personalNote: "Puncak horor psikologis dan kosmik dari maestro Junji Ito. Visual monokrom dan animasi atmosferiknya menyuguhkan kengerian surealis yang menghantui dan tak tertandingi."
  }
];
