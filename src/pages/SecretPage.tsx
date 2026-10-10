import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface SecretPageProps {
  onNavigate: (page: string) => void;
}

export const SecretPage: React.FC<SecretPageProps> = ({ onNavigate }) => {
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

      {/* Floating Top Back Button */}
      <header className="fixed top-6 left-6 z-50">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 hover:border-white/35 text-white/80 hover:text-white text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 backdrop-blur-xl shadow-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali</span>
        </button>
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
            "Selamat lu udah menemukan secret page wkwkwk gw mau curhat aja sih, gw ga punya temen buat gw curhat jadi gw ngelampiasin di website ini sekalian nyoba Gemini Pro juga :) lu mau baca mau kagak terserah, tapi makasih kalau emang mau baca :)"
          </p>

          <p>
            Nama gw Aditya Anugrah gw lahir di 19 Juli 2009. gw punya 1 Adik Laki - Laki dan 1 adik perempuan, gw dapet keluarga yang lumayan Harmonis tapi kadang gak juga...
          </p>

          <p>
            Gw dulu masuk SD di kelas 1 sampai kelas 6 Selalu di Bully, mau non verbal maupun verbal. Selain di Sekolag gw juga mendapatkan perlakuan yang buruk bet di lingkungan gw rumah sendiri kala itu rumah gw masih di Losmen.
          </p>

          <p>
            gw selalu di ejek karena gw orangnya cengeng, selalu nangis. bahkan dulu gw pas belajar mengaji di salah satu tempat pengajian, gw di pukul dan di cekik tapi untung aja gw siku muka orangnya hahaha nangis sendiri dia aowkoawkoakokw.
          </p>

          <p>
            Semua hal tersebut yang membuat gw takut sama orang - orang, mau Cewe mau Cowo gw dulu takut bet kalau temenan bahkan sampai ga percaya lagi dan udah ngebayangin gw sampai gede bakal ga punya temen.
          </p>

          <p>
            Hal ini berlanjut sampai gw di SMP di kelas 1 gw masih pendiem bahkan gw jarang berbicara sama sekali dan paling parahnya dulu 2019 - 2020 kebetulan ada Virus Covid-19 yang membaut orang - orang harus pakai masker
          </p>

          <p>
            nah waktu itu Covid udah lumayan terarasi dan masker udah bukan lagi alat yang harus dipakai, tapi gw selama SMP selalu memakainya, mau itu pelajaran Olahraga kayak lari, badminton, main bola, bahkan saat berenang juga gw pake masker saking gw insecure dan malunya gw dulu
          </p>

          <p>
            tapi waktu itu gw punya 1 temen online virtual, gw kenal dia dari game Mobile Legend, dia baik banget tapi agak cuek sih sama gengsian juga. nama dia Namdral Wangmo dia cewe asal Bhutan, dia temen cewe pertama gw seumur hidup gw. Bahkan sampai sekarang gw masih inget nama ML dia wkwkwk 'Cancer302&lt;/3'. Waktu itu gw seneng banget bisa kenalan sama dia terlebih lagi dia orang luar negri, gw bisa mencari ilmu dari dia, belajar bahasa inggris, dan belajar budaya disana. Dulu dia nyatain perasaannya ke gw yaa mungkin emang masa masa remajanya lah, dia nembak gw ya gw terima karena yaa gw juga suka dia sih, dan gw waktu itu udah pacaran ma dia VIRTUAL WKWKWKKWKW sampe beberapa tahun ya, udah banyak masalah yang dihadapi wkwkwk, meski dia gengsian ego dia tinggi. Sifat dia jujur lucu banget, selalu bikin gw ketawa, dia juga baik, yaa kadang dia jahat juga sih ;-;. Tapi yaa semuanya harus berakhir di hari Valentine, orang orang di hari Valentine bahagia lah kita malah berpisah wkwkwk, gw berpisah karena sejujurnya gw mau fokus sama diri gw sendiri dulu, gw agak minder sama dia, dia pinter tapi gw bisa apa? bahasa inggris aja gw masih butuh translate google itu aja grammarnya gajelas
          </p>

          <p>
            pas akhir kelas 9 SMP gw udah berakhir ma dia, awalnya sih emang sakit banget, kampret nangis gw waktu itu wkwkwk, terus selesailah gw di SMP dan gw mau lanjutin ke SMK, kenapa? karena gw dulu di iming imingin kalau SMK bakal sukses taunya kagak bangke emang, waktu itu gw daftar di SMKN 1 Sumednag tapi hasilnya gagal karena nilai gw jelek banget pas SMP ( RANKING 32 JIRR) yaa disana gw putus asa bet gila, tapi untung waktu itu ibu gw nyemangatin gw dan daftar lah gw ke SMK Informatika Sumedang, awalnya gw ga yakin gw bakal betah disini karena lingkungannya yang berbeda banget dari biasanya, yaa jujur aja pas smp gw sempet punya temen beberapa ga sampe 5 lah, yang gw inget cuman si Zakwan, Ihsan, Ahmad, Syarif, dan Rival. Okehh lanjut... gw waktu itu lulus wawancara sekolah dan masuk ke kelas 10 RPL 8, disana gw ketemu ma Alumni SMP gw, Fahri awalnya gw ga ada niatan mau temenan ma dia tapi karena dia sefrekuensi ma gw lama lama akhirnya kita temenan ghahaha, waktu itu momen dimana gw bener bener berubah yang awalnya pendiam pemalu jadi banyak omong, kepedean, dan annoying banget wkwkkw. Gw nganggap dia bukan temen lagi tapi udah kek sahabat sih, cuman kayaknya dia ga nganggap gw Sahabat tapi yasudahlah.
          </p>

          <p>
            lalu setelah naik kelas, gw masuk ke 11 RPL 1 disana ada temen temen baru gw, tapi ya yang akrab ma gw cuman beberapa Fahri, Ridwan, Cahya, Febri. di kelas itu gw bener bener seneng bet karena gw banyak belajar hal mulai dari gimana cara berteman, gimana cara bergaul, dan syukurnya mereka semua mempunyai frekuensi yang sama.
          </p>

          <p>
            Gara gara mereka itu gw udah pede buat masuk sebuah Organisasi awalnya gw masuk Futsal tapi keknya gak cocok, terus gw masuk Organisasi ICSO disana temen temen gw masuk juga, dan sekian lama gw ternyata kepilih buat nerusin jabatan Ketua di ICSO sana gila stres banget kala itu, banyak yang harus gw pikirin.
          </p>

          <p>
            Setelah itu gw naik ke kelas 12 gw udah bukan ketua Organisasi lagi karena emang udah ada penerusnya. Mulai masuk kelas 12 hidup gw makin bersemangat sih, karena banyak yang menginspirasi gw, temen - temen gw pada ambis hal itu yang bikin gw makin semangat buat nyari ilmu dari mereka.
          </p>

          <p>
            Ya kadang ada beberapa temen yang benci gw juga karena kelakuan gw yang Annoying dan Freak :v tapi ya bodo amat sih. Jujur kalau dipikir pikir gw ga punya yang namanya 'temen' yang bener bener temen yang bisa hadir saat gw sedih lah, yang bisa ada gw kalau mau cerita lah agak lebay tapi bodo amat :v "To be cringe is to be Free" Hadeuhhh jujur gw kangen temen lama gw Namdral Wangmo udah berapa tahun gw ga berkomunikasi lagi sama dia ya? kwkwkw paling gw cuman ngode dia lewat website SendTheSong akwoawkwa kadang ada juga balasannya tapi gw ga tau itu dia apa orang lain. Andai kalau waktu bisa di ulang, gw bener bener kangen banget ajir sama lu woi NW bangke :( wkwk sudahlah
          </p>

          <p className="pt-4 text-white/90 italic">
            "Lu yang udah baca sampai sini makasih banyak, gila gw sebrnya banyak yang mau gw ketik tapi air mata gw jatuh mulu kampret jadi ga enak."
          </p>

        </div>

        {/* Back to Home CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-white/20"
          >
            Kembali ke Beranda
          </button>
        </div>

      </main>

    </div>
  );
};
