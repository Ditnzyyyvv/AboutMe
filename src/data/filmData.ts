export interface FilmItem {
  id: number;
  title: string;
  originalTitle: string;
  year: string;
  type: "Film" | "Series";
  rating: string;
  scoreNumber: number;
  genres: string[];
  backdrop: string;
  description: string;
  personalNote: string;
}

export const filmList: FilmItem[] = [
  {
    "id": 1,
    "title": "Willy Wonka / Charlie and the Chocolate Factory",
    "originalTitle": "Charlie and the Chocolate Factory (2005)",
    "year": "2005",
    "type": "Film",
    "rating": "8.2 / 10",
    "scoreNumber": 8.2,
    "genres": [
      "Fantasy",
      "Adventure",
      "Comedy",
      "Tim Burton"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@.jpg",
    "description": "Kisah klasik karya Roald Dahl yang dihidupkan dengan estetika visual gothic nan eksentrik oleh Tim Burton. Johnny Depp memerankan pembuat cokelat eksentrik Willy Wonka yang mengundang lima anak beruntung pemenang Golden Ticket untuk menjelajahi pabrik cokelat magisnya yang penuh rahasia.",
    "personalNote": "Visual pabrik cokelat yang penuh imajinasi liar dan sungai cokelat legendaris. Kontras antara ketamakan anak-anak manja dan kepolosan tulus Charlie Bucket selalu menjadi pengingat tentang arti integritas keluarga."
  },
  {
    "id": 2,
    "title": "Interstellar",
    "originalTitle": "Interstellar",
    "year": "2014",
    "type": "Film",
    "rating": "9.6 / 10",
    "scoreNumber": 9.6,
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Drama",
      "Christopher Nolan"
    ],
    "backdrop": "https://image.tmdb.org/t/p/original/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
    "description": "Di masa depan ketika bumi sekarat akibat badai debu dan kelaparan, mantan pilot NASA Cooper memimpin ekspedisi melintasi lubang cacing (wormhole) di dekat Saturnus demi mencari planet baru yang dapat dihuni manusia, meninggalkan kedua anaknya di bumi yang menua jauh lebih cepat.",
    "personalNote": "Mahakarya terbesar Christopher Nolan dengan aransemen organ gereja Hans Zimmer yang merindingkan sukma. Gagasan bahwa 'cinta adalah satu-satunya hal yang mampu melintasi batas dimensi ruang dan waktu' selalu membuat air mata menetes."
  },
  {
    "id": 3,
    "title": "Breaking Bad",
    "originalTitle": "Breaking Bad (TV Series)",
    "year": "2008–2013",
    "type": "Series",
    "rating": "9.8 / 10",
    "scoreNumber": 9.8,
    "genres": [
      "Crime",
      "Drama",
      "Thriller",
      "Vince Gilligan"
    ],
    "backdrop": "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg",
    "description": "Walter White, seorang guru kimia SMA yang santun dan berpenghasilan pas-pasan, didiagnosis menderita kanker paru-paru stadium akhir. Demi mengamankan masa depan finansial keluarganya, ia bermitra dengan mantan muridnya yang berandalan, Jesse Pinkman, untuk memproduksi metamfetamin biru murni berkelas dunia.",
    "personalNote": "Serial televisi terhebat yang pernah ditulis. Transformasi bertahap dari 'Mr. Chips menjadi Scarface'—memperlihatkan bagaimana kesombongan dan ego manusia bisa menghancurkan segala hal yang semula ia klaim ingin lindungi."
  },
  {
    "id": 4,
    "title": "Better Call Saul",
    "originalTitle": "Better Call Saul (TV Series)",
    "year": "2015–2022",
    "type": "Series",
    "rating": "9.7 / 10",
    "scoreNumber": 9.7,
    "genres": [
      "Crime",
      "Drama",
      "Legal Thriller",
      "Character Study"
    ],
    "backdrop": "https://static.tvmaze.com/uploads/images/original_untouched/501/1253515.jpg",
    "description": "Prekuel sekaligus sekuel dari semesta Breaking Bad, berfokus pada perjalanan tragis Jimmy McGill—seorang pengacara gigih yang selalu dipandang sebelah mata oleh kakaknya yang perfeksionis—sebelum ia menanggalkan hati nuraninya dan bermetamorfosis menjadi pengacara kriminal flamboyan Saul Goodman.",
    "personalNote": "Masterclass dalam sinematografi, 'show don't tell', dan pembangunan dinamika karakter. Hubungan rumit antara Jimmy dan Kim Wexler adalah salah satu kisah cinta paling bernuansa dan menusuk kalbu dalam sejarah televisi."
  },
  {
    "id": 5,
    "title": "Prison Break",
    "originalTitle": "Prison Break (TV Series)",
    "year": "2005–2017",
    "type": "Series",
    "rating": "9.0 / 10",
    "scoreNumber": 9,
    "genres": [
      "Action",
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "backdrop": "https://static.tvmaze.com/uploads/images/original_untouched/104/261034.jpg",
    "description": "Lincoln Burrows dijatuhi hukuman mati atas konspirasi pembunuhan yang tidak ia lakukan. Adik laki-lakinya yang berotak jenius, insinyur struktural Michael Scofield, sengaja merampok bank agar dipenjara di Fox River yang sama, membawa cetak biru penjara yang telah disamarkan sebagai tato di sekujur tubuhnya.",
    "personalNote": "Ketegangan Season 1 adalah tolok ukur tertinggi genre suspense pelarian. Bukti nyata pengorbanan tanpa batas seorang adik demi menyelamatkan darah dagingnya sendiri dengan kecerdasan kalkulatif."
  },
  {
    "id": 6,
    "title": "Dexter",
    "originalTitle": "Dexter (TV Series)",
    "year": "2006–2013",
    "type": "Series",
    "rating": "8.9 / 10",
    "scoreNumber": 8.9,
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Psychological"
    ],
    "backdrop": "https://static.tvmaze.com/uploads/images/original_untouched/498/1246067.jpg",
    "description": "Dexter Morgan bekerja sebagai analis cipratan darah yang dihormati di kepolisian Miami Metro. Namun di balik senyum ramahnya, Dexter menyimpan 'Dark Passenger'—hasrat membunuh yang ia salurkan secara sistematis melalui kode etik ketat mendiang ayah angkatnya Harry: hanya membunuh penjahat keji yang lolos dari jerat hukum.",
    "personalNote": "Monolog batin Dexter dan eksplorasi psikologis seorang sosiopat yang perlahan mulai mendambakan kehangatan hubungan manusiawi sejati. Konsep vigilante paling unik dan memikat."
  },
  {
    "id": 7,
    "title": "The Truman Show",
    "originalTitle": "The Truman Show",
    "year": "1998",
    "type": "Film",
    "rating": "9.1 / 10",
    "scoreNumber": 9.1,
    "genres": [
      "Comedy",
      "Drama",
      "Sci-Fi",
      "Peter Weir"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BNzg4OTdmODMtZGEzMi00MDVjLWEwYWYtYTRlMzk1OGExN2I3XkEyXkFqcGc@.jpg",
    "description": "Truman Burbank menjalani kehidupan yang tampak sangat sempurna di pulau Seahaven yang indah. Tanpa ia sadari, sejak detik pertama ia lahir, seluruh dunianya adalah studio televisi raksasa dan setiap orang di sekitarnya—termasuk istri dan ibunya—hanyalah aktor bayaran dalam reality show siaran langsung global 24 jam non-stop.",
    "personalNote": "Akting terbaik Jim Carrey dalam film yang meramalkan era kecanduan voyeurisme dan media sosial modern. 'Good morning, and in case I don't see ya: good afternoon, good evening, and good night!'—keberanian mendobrak dinding ilusi."
  },
  {
    "id": 8,
    "title": "Fight Club",
    "originalTitle": "Fight Club",
    "year": "1999",
    "type": "Film",
    "rating": "9.3 / 10",
    "scoreNumber": 9.3,
    "genres": [
      "Drama",
      "Psychological",
      "David Fincher"
    ],
    "backdrop": "https://image.tmdb.org/t/p/original/c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
    "description": "Narator anonim yang menderita insomnia kronis merasa terasing dan kosong oleh gaya hidup konsumerisme modern. Hidupnya berputar 180 derajat saat ia bertemu Tyler Durden, seorang penjual sabun karismatik dan anarkis, yang mengajaknya mendirikan klub pertarungan bawah tanah rahasia sebagai terapi melepaskan rasa sakit.",
    "personalNote": "Kritik tajam David Fincher terhadap jebakan materialisme masyarakat modern. 'Barang-barang yang kau miliki pada akhirnya akan berbalik memilikimu.' Twist ending legendaris yang mendefinisikan sinema era 90-an."
  },
  {
    "id": 9,
    "title": "Vivarium",
    "originalTitle": "Vivarium",
    "year": "2019",
    "type": "Film",
    "rating": "7.8 / 10",
    "scoreNumber": 7.8,
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Horror",
      "Psychological"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BZjdlZmRmOTUtN2IxZi00ZmY2LWE5MWMtOTYxNTkyNzA3ZGFjXkEyXkFqcGc@.jpg",
    "description": "Gemma dan Tom, pasangan muda yang sedang mencari rumah impian, diajak oleh agen properti aneh ke perumahan suburban 'Yonder' yang seluruh rumahnya bercat hijau identik. Ketika mencoba pulang, mereka mendapati jalanan berputar tanpa akhir dan sebuah kotak berisi bayi humanoid dikirimkan dengan pesan: 'Besarkan anak ini dan kalian akan dibebaskan.'",
    "personalNote": "Metafora mengerikan dan surealis tentang siklus monoton kehidupan kelas pekerja: membeli rumah, membesarkan anak dalam rutinitas tanpa jiwa, hingga kehabisan energi di liang kubur yang digali sendiri."
  },
  {
    "id": 10,
    "title": "From",
    "originalTitle": "From (TV Series)",
    "year": "2022–",
    "type": "Series",
    "rating": "8.7 / 10",
    "scoreNumber": 8.7,
    "genres": [
      "Horror",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "backdrop": "https://static.tvmaze.com/uploads/images/original_untouched/621/1554646.jpg",
    "description": "Sebuah kota mimpi buruk di pedalaman Amerika yang menjebak siapa saja yang tanpa sengaja melintasinya. Warga yang terperangkap berjuang mempertahankan kewarasan dan mencari jalan keluar, sembari bertahan dari teror makhluk mengerikan menyerupai manusia tersenyum yang keluar dari hutan setiap malam.",
    "personalNote": "Penerus spiritual serial Lost dengan atmosfer horor yang jauh lebih mencekam dan penuh teka-teki. Setiap episode menghadirkan misteri baru yang memaksa penonton berteori tanpa henti."
  },
  {
    "id": 11,
    "title": "War of the Worlds",
    "originalTitle": "War of the Worlds (2005)",
    "year": "2005",
    "type": "Film",
    "rating": "8.1 / 10",
    "scoreNumber": 8.1,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Steven Spielberg"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@.jpg",
    "description": "Ray Ferrier, seorang operator derek di New Jersey yang memiliki hubungan renggang dengan kedua anaknya, mendadak berada di garis depan invasi makhluk luar angkasa saat mesin Tripod raksasa bangkit dari perut bumi dan membakar manusia menjadi abu. Ray berjuang mati-matian melintasi zona bencana demi keselamatan anak-anaknya.",
    "personalNote": "Sentuhan horor invasi alien dari Spielberg yang sangat intens. Suara terompet Tripod yang memekakkan telinga dan kepanikan massa yang realistis menjadikan film bencana ini sangat menegangkan."
  },
  {
    "id": 12,
    "title": "2012 - Kiamat",
    "originalTitle": "2012",
    "year": "2009",
    "type": "Film",
    "rating": "7.9 / 10",
    "scoreNumber": 7.9,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Disaster",
      "Roland Emmerich"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTY0NjY3NzYxMl5BMl5BanBnXkFtZTcwNjM4NzQ2MQ@@.jpg",
    "description": "Radiasi badai matahari yang memanaskan inti bumi memicu pergeseran lempeng tektonik global, menghancurkan kota-kota besar di seluruh dunia oleh gempa dahsyat dan tsunami setinggi gunung. Jackson Curtis, seorang penulis fiksi, berpacu dengan waktu menyelamatkan keluarganya menuju bahtera penyelamat rahasia di Pegunungan Himalaya.",
    "personalNote": "Puncak spektakel film bencana apokaliptik era 2000-an. Efek visual kota Los Angeles yang runtuh ke dalam samudra adalah salah satu adegan kehancuran paling sinematik dan berkesan di bioskop."
  },
  {
    "id": 13,
    "title": "Resident Evil: The Final Chapter",
    "originalTitle": "Resident Evil: The Final Chapter",
    "year": "2016",
    "type": "Film",
    "rating": "7.5 / 10",
    "scoreNumber": 7.5,
    "genres": [
      "Action",
      "Horror",
      "Sci-Fi",
      "Paul W. S. Anderson"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@.jpg",
    "description": "Sebagai satu-satunya harapan terakhir umat manusia melawan kepunahan total, Alice harus kembali ke tempat di mana mimpi buruk bermula—The Hive di Raccoon City, di mana Umbrella Corporation sedang mempersiapkan serangan terakhir untuk memusnahkan sisa manusia yang masih hidup.",
    "personalNote": "Penutup saga aksi zombie Milla Jovovich yang penuh adrenalin dan koreografi laga cepat. Mengungkap asal-usul sejati Alice dan misteri T-Virus yang telah berjalan selama lebih dari satu dekade."
  },
  {
    "id": 14,
    "title": "Kung Fu Panda",
    "originalTitle": "Kung Fu Panda (2008)",
    "year": "2008",
    "type": "Film",
    "rating": "8.9 / 10",
    "scoreNumber": 8.9,
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "DreamWorks"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BNTE3ODg2MzEtODJmOC00NzYzLWJiMTItM2FjMzA1MGQ2ZmU4XkEyXkFqcGc@.jpg",
    "description": "Po, seekor panda pembuat mie yang gemuk dan ceroboh namun sangat menggemari kung fu, secara ajaib terpilih oleh Master Oogway sebagai Dragon Warrior legendaris untuk menghadapi macan tutul salju Tai Lung yang kabur dari penjara.",
    "personalNote": "Bukan sekadar film komedi animasi hewan, melainkan karya filosofis agung tentang Taoisme dan penerimaan diri. 'There is no secret ingredient—to make something special, you just have to believe it's special.'"
  },
  {
    "id": 15,
    "title": "WALL-E",
    "originalTitle": "WALL·E (2008)",
    "year": "2008",
    "type": "Film",
    "rating": "9.4 / 10",
    "scoreNumber": 9.4,
    "genres": [
      "Animation",
      "Adventure",
      "Family",
      "Sci-Fi",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@.jpg",
    "description": "Setelah bumi ditinggalkan manusia karena tertimbun gunungan sampah beracun selama ratusan tahun, robot pemadat sampah kecil bernama WALL-E terus menjalankan tugasnya seorang diri diiringi kaset rekaman musik tua. Segalanya berubah ketika probe robot futuristik EVE tiba untuk mencari tanda-tanda kehidupan tanaman.",
    "personalNote": "Salah satu karya teragung Pixar sepanjang masa. Tiga puluh menit pertama tanpa sepatah dialog pun menyuguhkan puisi visual tentang kesepian, cinta murni antar mesin, dan kritik pedas terhadap konsumerisme manusia."
  },
  {
    "id": 16,
    "title": "The Boss Baby (1)",
    "originalTitle": "The Boss Baby (2017)",
    "year": "2017",
    "type": "Film",
    "rating": "7.6 / 10",
    "scoreNumber": 7.6,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "DreamWorks"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzg4NV5BMl5BanBnXkFtZTgwMTM2NzQ3MTI@.jpg",
    "description": "Tim Templeton yang berusia tujuh tahun merasa seluruh perhatian orang tuanya terampas saat kedatangan adik bayi baru yang aneh: mengenakan setelan jas bisnis, membawa koper kulit, dan bersuara seperti eksekutif korporat senior (Alec Baldwin) dari Baby Corp.",
    "personalNote": "Visualisasi jenius tentang kecemburuan anak sulung terhadap adik bayi yang baru lahir, dibungkus dalam satire korporat dunia kerja yang segar dan menghangatkan hati."
  },
  {
    "id": 17,
    "title": "The Boss Baby: Family Business (2)",
    "originalTitle": "The Boss Baby: Family Business (2021)",
    "year": "2021",
    "type": "Film",
    "rating": "7.5 / 10",
    "scoreNumber": 7.5,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BN2IwMWI0ZjAtYjg1NS00ZWVmLTk2OTMtNGI5ODMwNjY5YTVlXkEyXkFqcGc@.jpg",
    "description": "Templeton bersaudara kini telah dewasa dan terasing oleh kesibukan masing-masing. Namun formula penawar usia baru dari Baby Corp memaksa mereka berubah kembali menjadi balita selama 48 jam untuk menyusup ke sekolah jenius yang dipimpin oleh penjahat Dr. Armstrong.",
    "personalNote": "Sekuel yang mengingatkan kita bahwa sesibuk apa pun kita mengejar karier dan materi di dunia dewasa, ikatan persaudaraan masa kecil adalah harta yang tak ternilai."
  },
  {
    "id": 18,
    "title": "Moana",
    "originalTitle": "Moana (2016)",
    "year": "2016",
    "type": "Film",
    "rating": "8.7 / 10",
    "scoreNumber": 8.7,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Disney"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@.jpg",
    "description": "Di pulau Polinesia kuno Motunui, putri kepala suku bernama Moana dipilih oleh samudra untuk mengarungi lautan lepas di luar terumbu karang, demi menemukan demigod Maui yang arogan dan mengembalikan jantung dewi Te Fiti untuk menyelamatkan rakyatnya dari kutukan kekeringan.",
    "personalNote": "Lagu 'How Far I'll Go' karya Lin-Manuel Miranda dan animasi air laut yang memanjakan mata. Simbol keberanian untuk menatap cakrawala impian dan menolak terkungkung di zona nyaman tradisi."
  },
  {
    "id": 19,
    "title": "Toy Story (1, 2, 3, 4)",
    "originalTitle": "Toy Story Saga",
    "year": "1995–2019",
    "type": "Film",
    "rating": "9.6 / 10",
    "scoreNumber": 9.6,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Pixar Legend"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGc@.jpg",
    "description": "Kisah persahabatan mainan Woody sang koboi dan Buzz Lightyear si penjelajah angkasa milik bocah bernama Andy. Sepanjang empat film, mereka menghadapi kecemburuan, petualangan di dunia luar, hingga proses mendewasakan diri saat Andy tumbuh besar dan harus meninggalkan mainan masa kecilnya ke perguruan tinggi.",
    "personalNote": "Tetralogi animasi terindah dalam sejarah perfilman. Adegan akhir Toy Story 3 ketika Andy menyerahkan Woody kepada Bonnie adalah momen pamungkas melepaskan masa kecil yang membuat semua penonton dewasa menangis haru."
  },
  {
    "id": 20,
    "title": "Hoppers",
    "originalTitle": "Hoppers (Pixar Upcoming)",
    "year": "2026",
    "type": "Film",
    "rating": "8.3 / 10",
    "scoreNumber": 8.3,
    "genres": [
      "Animation",
      "Adventure",
      "Sci-Fi",
      "Comedy",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BZmUyMmEwMmQtMzAxNi00MzIxLWFkOTAtYmI5MWU4N2FlMGFlXkEyXkFqcGc@.jpg",
    "description": "Inovasi konsep orisinal terbaru Pixar menceritakan seorang gadis penyayang binatang bernama Mabel yang memindahkan kesadaran pikirannya ke dalam robot berang-berang yang tampak hidup, menyusup ke kerajaan hewan liar dan menemukan intrik kehidupan alam bebas yang belum pernah disaksikan manusia.",
    "personalNote": "Konsep segar yang memadukan pertukaran tubuh fiksi ilmiah dan eksplorasi dunia satwa dengan kehangatan humor khas Pixar yang dinantikan di layar lebar."
  },
  {
    "id": 21,
    "title": "Zootopia (1 & 2)",
    "originalTitle": "Zootopia",
    "year": "2016–2025",
    "type": "Film",
    "rating": "9.0 / 10",
    "scoreNumber": 9,
    "genres": [
      "Animation",
      "Action",
      "Comedy",
      "Crime",
      "Mystery"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@.jpg",
    "description": "Judy Hopps, kelinci pertama yang berhasil menjadi perwira polisi di kota metropolitan mamalia Zootopia, bertekad membuktikan kemampuannya dengan memecahkan kasus hilangnya hewan predator. Untuk mengungkap konspirasi tersebut, ia terpaksa bekerja sama dengan Nick Wilde, seekor rubah penipu yang lihai.",
    "personalNote": "World-building kota mamalia yang luar biasa detail dan kaya imajinasi. Lebih dari sekadar film hewan, ini adalah metafora sosial yang cerdas tentang stereotip, prasangka rasial, dan perjuangan meraih mimpi."
  },
  {
    "id": 22,
    "title": "Inside Out (1 & 2)",
    "originalTitle": "Inside Out",
    "year": "2015–2024",
    "type": "Film",
    "rating": "9.4 / 10",
    "scoreNumber": 9.4,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNzMzNzQxNTE@.jpg",
    "description": "Menengok ke dalam pusat kendali pikiran gadis 11 tahun bernama Riley, tempat lima personifikasi emosi—Joy (Kebahagiaan), Sadness (Kesedihan), Anger (Kemarahan), Fear (Ketakutan), dan Disgust (Kejijikan)—bekerja sama memandu hidupnya, hingga Riley beranjak remaja dan hadir emosi baru seperti Anxiety (Kecemasan).",
    "personalNote": "Salah satu konsep paling brilian dalam sejarah psikologi pop. Mengajarkan anak-anak dan orang dewasa bahwa kesedihan dan kecemasan bukanlah musuh yang harus disingkirkan, melainkan bagian utuh dari kemanusiaan yang mendewasakan jiwa."
  },
  {
    "id": 23,
    "title": "Elemental: Forces of Nature",
    "originalTitle": "Elemental (2023)",
    "year": "2023",
    "type": "Film",
    "rating": "8.5 / 10",
    "scoreNumber": 8.5,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Romance"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTY3Y2FhYjAtZDE1Ny00MmVkLWE5NTItY2Y3OTZkYzg5OWExXkEyXkFqcGc@.jpg",
    "description": "Di Element City tempat warga elemen Api, Air, Tanah, dan Udara hidup berdampingan, seorang gadis elemen api yang tangguh dan berapi-api bernama Ember Lumen bertemu dengan Wade Ripple, pemuda elemen air yang santai dan penuh empati, menantang keyakinan mendasar bahwa elemen yang berbeda tidak akan pernah bisa bersatu.",
    "personalNote": "Visualisasi efek partikel api dan fluiditas air yang spektakuler. Kisah cinta analogis yang manis tentang menjembatani perbedaan budaya, ekspektasi orang tua imigran, dan keberanian untuk membuka hati."
  },
  {
    "id": 24,
    "title": "Monsters, Inc.",
    "originalTitle": "Monsters, Inc. (2001)",
    "year": "2001",
    "type": "Film",
    "rating": "9.1 / 10",
    "scoreNumber": 9.1,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwMTE5OTg0MzE@.jpg",
    "description": "Di kota monster Monstropolis, sumber energi listrik utama dihasilkan dari jeritan anak-anak manusia yang ditakuti melalui pintu lemari ajaib. James P. Sullivan (Sulley) dan Mike Wazowski mendadak panik saat seorang balita manusia mungil bernama Boo menyelinap masuk ke dunia monster, membongkar mitos bahwa anak manusia itu beracun.",
    "personalNote": "Kombinasi humor slapstick Mike Wazowski yang tak lekang oleh waktu dan ikatan manis Sulley dengan Boo. Pesan moral indah bahwa tawa menghasilkan energi yang jauh lebih dahsyat daripada ketakutan."
  },
  {
    "id": 25,
    "title": "Finding Nemo",
    "originalTitle": "Finding Nemo (2003)",
    "year": "2003",
    "type": "Film",
    "rating": "9.2 / 10",
    "scoreNumber": 9.2,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWI4YjUtYmI2ZTU5MmRhNDlmXkEyXkFqcGc@.jpg",
    "description": "Marlin, seekor ikan badut yang sangat protektif setelah kehilangan pasangannya, nekat mengarungi samudra terbuka yang berbahaya melintasi Great Barrier Reef hingga Sydney Harbor bersama Dory, ikan blue tang yang pelupa, demi mencari putranya Nemo yang ditangkap oleh penyelam manusia.",
    "personalNote": "Potret kasih sayang orang tua yang luar biasa menyentuh. Pelajaran berharga bagi orang tua bahwa kita tidak bisa melindungi anak dari segala hal buruk di dunia selamanya; terkadang cinta sejati adalah membiarkan mereka berenang sendiri."
  },
  {
    "id": 26,
    "title": "Cars",
    "originalTitle": "Cars (2006)",
    "year": "2006",
    "type": "Film",
    "rating": "8.6 / 10",
    "scoreNumber": 8.6,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Sport",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2.jpg",
    "description": "Lightning McQueen, mobil balap rookie yang sombong dan terobsesi menjadi juara Piston Cup, tanpa sengaja tersesat dan merusak jalan aspal di kota kecil Route 66 Radiator Springs yang terlupakan. Menjalani hukuman kerja sosial, McQueen perlahan belajar arti persahabatan sejati dari mobil derek Mater dan kebijaksanaan mendiang legenda balap Doc Hudson.",
    "personalNote": "Nostalgia rute legendaris Route 66 Amerika dan soundtrack 'Life is a Highway' yang ikonik. Mengingatkan kita bahwa hidup bukanlah sekadar balapan menuju garis finish, melainkan bagaimana kita menikmati pemandangan di sepanjang perjalanan."
  },
  {
    "id": 27,
    "title": "Ratatouille",
    "originalTitle": "Ratatouille (2007)",
    "year": "2007",
    "type": "Film",
    "rating": "9.3 / 10",
    "scoreNumber": 9.3,
    "genres": [
      "Animation",
      "Comedy",
      "Drama",
      "Brad Bird",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMDQ4ODEzMw@@.jpg",
    "description": "Remy, seekor tikus got dengan indra penciuman dan pengecap luar biasa, bermimpi menjadi koki terhebat di Paris. Ia membentuk aliansi rahasia dengan Linguini, seorang pemuda pembersih dapur yang canggung, memasak hidangan lezat di restoran legendaris Gusteau dengan mengendalikan gerakan tangan Linguini dari balik topi kokinya.",
    "personalNote": "Karya seni kuliner dan sinematografi animasi yang anggun. Ulasan kritikus makanan Anton Ego di akhir film adalah salah satu monolog terbaik Pixar: 'Tidak semua orang bisa menjadi seniman hebat, tapi seniman hebat bisa datang dari mana saja.'"
  },
  {
    "id": 28,
    "title": "Up",
    "originalTitle": "Up (2009)",
    "year": "2009",
    "type": "Film",
    "rating": "9.4 / 10",
    "scoreNumber": 9.4,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BYjBkMzY5NjgtY2VkMC00ZmM5LThlYjYtMGMwZTU2NjI1M2E4XkEyXkFqcGc@.jpg",
    "description": "Kakek penjual balon berusia 78 tahun, Carl Fredricksen, menolak menjual rumah kenangannya kepada pengembang dan memilih menerbangkan seluruh rumahnya menggunakan ribuan balon gas menuju air terjun Paradise Falls di Amerika Selatan demi menepati janji pada mendiang istrinya Ellie, tanpa menyadari bocah pramuka Russell ikut terbawa di beranda rumah.",
    "personalNote": "Sepuluh menit pembuka ('Married Life') menceritakan seluruh siklus cinta Carl dan Ellie tanpa satu kata pun—momen paling mengharukan dalam animasi. Menyadarkan kita bahwa petualangan terbesar dalam hidup adalah kebersamaan bersama orang yang kita sayangi."
  },
  {
    "id": 29,
    "title": "The Good Dinosaur",
    "originalTitle": "The Good Dinosaur (2015)",
    "year": "2015",
    "type": "Film",
    "rating": "7.9 / 10",
    "scoreNumber": 7.9,
    "genres": [
      "Animation",
      "Adventure",
      "Family",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTc5MTg2ODgwMV5BMl5BanBnXkFtZTgwNzExODg3NjE@.jpg",
    "description": "Di garis waktu alternatif di mana asteroid tidak pernah menabrak bumi dan dinosaurus tidak pernah punah, Arlo—seekor Apatosaurus penakut yang kehilangan ayahnya—terseret arus sungai jauh dari rumahnya. Dalam perjalanan pulang yang berat, ia berteman dengan Spot, seorang anak manusia gua liar yang setia.",
    "personalNote": "Visual latar alam fotorealistik terindah yang pernah dirender Pixar. Kisah tentang menaklukkan rasa takut di dalam dada bukan dengan melarikan diri, melainkan dengan merangkulnya demi melindungi orang lain."
  },
  {
    "id": 30,
    "title": "Big Hero 6",
    "originalTitle": "Big Hero 6 (2014)",
    "year": "2014",
    "type": "Film",
    "rating": "8.9 / 10",
    "scoreNumber": 8.9,
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Disney"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmQtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGc@.jpg",
    "description": "Di kota perpaduan futuristik San Fransokyo, Hiro Hamada si remaja jenius robotika tenggelam dalam duka mendalam setelah kakaknya Tadashi tewas dalam kebakaran mencurigakan. Hiro menemukan kembali semangat hidupnya bersama Baymax, robot perawat kesehatan tiup ciptaan sang kakak, mengubah teman-teman kampusnya menjadi tim pahlawan berkekuatan teknologi tinggi.",
    "personalNote": "Kombinasi kepahlawanan ala superhero dan penanganan duka emosional yang sangat matang. 'Tadashi is here'—Baymax adalah pelukan hangat bagi siapa pun yang pernah kehilangan orang tercinta."
  },
  {
    "id": 31,
    "title": "Soul",
    "originalTitle": "Soul (2020)",
    "year": "2020",
    "type": "Film",
    "rating": "9.3 / 10",
    "scoreNumber": 9.3,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Pixar"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMjA5OTg2MzI4OV5BMl5BanBnXkFtZTgwNTU5MTQ0NTM@.jpg",
    "description": "Joe Gardner, seorang guru musik sekolah menengah yang bermimpi bermain piano jazz di klub bergengsi, mengalami kecelakaan tepat di hari impiannya tercapai. Jiwanya terlempar ke alam 'The Great Before'—tempat jiwa-jiwa baru mengembangkan kepribadian sebelum turun ke bumi—di mana ia dipasangkan dengan jiwa nomor 22 yang sinis dan menolak untuk hidup.",
    "personalNote": "Karya paling filosofis Pete Docter. Mengingatkan kita bahwa 'spark' (percikan hidup) bukanlah tentang obsesi pada satu tujuan besar karier atau ambisi, melainkan kemampuan untuk mensyukuri dan menikmati setiap detik aroma dedaunan, sepotong pizza, dan langit biru saat kita masih bernapas."
  },
  {
    "id": 32,
    "title": "Hotel Transylvania",
    "originalTitle": "Hotel Transylvania (2012)",
    "year": "2012",
    "type": "Film",
    "rating": "8.4 / 10",
    "scoreNumber": 8.4,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy",
      "Genndy Tartakovsky"
    ],
    "backdrop": "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDMwODU3OA@@.jpg",
    "description": "Count Dracula mendirikan hotel bintang lima tersembunyi khusus monster agar putrinya Mavis dan teman-teman monsternya (Frankenstein, Mummy, Werewolf, Invisible Man) aman dari kejaran manusia. Kepanikan pecah saat Jonathan, seorang pemuda backpacker manusia biasa yang santai, tanpa sengaja tersesat ke hotel dan saling jatuh cinta ('Zing!') pada pandangan pertama dengan Mavis.",
    "personalNote": "Animasi ekspresif nan lincah arahan maestro Genndy Tartakovsky. Komedi keluarga yang hangat tentang orang tua yang belajar melepaskan anak gadisnya untuk mengepakkan sayap menjelajahi dunia luas."
  }
];
