import { useState } from "react";

const Chapter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `
  “Juna, apa ini?” Ayu melempar undangan berwarna putih dengan tulisan tinta emas di hadapan Arjuna yang baru saja berbaring di atas ranjang.

  “Apa sih, Mi, main lempar-lempar saja.” Arjuna memungut undangan yang jatuh di atas perutnya dengan kening mengerut. Dia membaca inisial A dan K yang ada di bagian depan undangan. Perlahan dia membuka undangan dan membaca nama yang akan menikah. Netra Arjuna membola melihat tulisan Alesha Candraningtyas, S.Ak. menikah dengan Iptu Kaisar Musafee, S.Tr.K., S. Psi.

  “I—ini undangan dari Alesha, Mi?” Dia menatap maminya yang berdiri sambil berkacak pinggang dengan raut wajah kesal.

  “Memangnya ada berapa Alesha yang kamu kenal, Juna?” Ayu tidak bisa menyembunyikan rasa kesal pada anak tunggalnya itu.

  “Ya, cuma satu, Mi,” ucap Arjuna lirih.

  “Kamu ini bagaimana sih bisa kalah sama polisi itu? Pasti kamu tidak berusaha mendekati Alesha? Mami ‘kan sudah bilang mau Alesha jadi mantu mami. Kalau sudah begini, hancur sudah harapan mami.” Ayu mengungkapkan kekesalannya pada Arjuna.

  “Bukan aku tidak berusaha mendekati Alesha, Mi. Hampir setiap hari aku berhubungan sama dia. Nanyain kabar nya, kegiatannya. Kalau Mami tidak percaya cek aja nih hp ku.” Arjuna menyodorkan ponsel pintarnya pada sang mami.

  Ayu menerima gawai tersebut dan melihat deretan pesan anaknya dengan Alesha, gadis yang sangat dia inginkan jadi menantu. Adik tingkat Arjuna yang membuatnya terkesan sejak pertemuan pertama mereka saat wisuda anak tunggalnya itu.

  “Kamu sudah mengungkapkan perasaan belum sama dia? Kalau cuma mengirim pesan seperti ini semua orang juga bisa, Juna.” Ayu merasa gemas dengan Arjuna.

  “Aku memang belum mengakui perasaanku, Mi. Karena Alesha pernah bilang akan mengejar karir dan ingin membahagiakan mamanya. Aku pikir dengan memberi perhatian seperti itu akan cukup, tapi ternyata Alesha juga mengingkari omongannya sendiri. Kalau tahu dia mau menikah secepat ini, sejak kontrak tidak boleh nikahnya berakhir, aku sudah lamar dia, Mi.” Arjuna membela dirinya.

  “Memang kamunya yang lelet, Jun. Buktinya polisi itu bisa mendekati Alesha dan sekarang malah akan menikahinya. Apa kamu kenal sama calon suaminya Alesha?” Ayu menatap putranya dengan intens.

  “Kenal, Mi. Dia teman SMA-nya Mas Adi, suaminya Adelia.”

  “Apa kamu tahu kalau dia mendekati Alesha?” Ayu kembali mencerca putra tunggalnya itu.

  “Aku cuma tahu kalau mereka akrab. Ya sama kaya aku dan Alesha. Tapi sebenarnya aku tahu sih kalau dia juga suka sama Alesha,” aku Arjuna.

  “Kamu tahu dia juga suka sama Alesha tapi hanya diam saja. Juna, Juna, kamu ini bagaimana sih? Nggak becus banget mendapatkan wanita. Harusnya kamu bilang sama mami biar mami bantu kamu dekati dia. Mami ‘kan pelanggan butik mamanya Alesha. Setidaknya mami bisa membujuk Jeng Dewi biar kamu bisa lebih dekat dengan Alesha, tidak hanya sekadar berteman.” Ayu menggelengkan kepalanya berulang kali, tak habis pikir dengan pemikiran anak tunggalnya itu. Dia yakin kalau Arjuna mau lebih berusaha mendekati Alesha dan mengungkapkan perasaannya, gadis itu kini sudah jadi menantu kesayangannya.

  "Ya, mau gimana lagi, Mi. Sudah terlanjur terjadi. Mungkin Alesha memang bukan jodohku." Arjuna mencoba pasrah.

  "Gara-gara kamu 'kan mami gagal punya mantu secantik dan sebaik Alesha. Terus kamu mau datang tidak ke pernikahannya?"

  "Ya, datang, Mi. Masa nggak. Memangnya kapan sih, Mi?" Arjuna menatap sang mami.

  "Undangannya 'kan ada di tanganmu. Mana mami tahu." Ayu melipat kedua tangannya di depan dada.

  Arjuna kembali melihat dan membaca undangan itu. Alesha akan menikah dua minggu lagi. Berarti dia harus kembali ke sini lagi saat wanita yang dicintainya itu menikah.

  "Sudah tahu kapan Alesha menikah?" tanya Ayu karena putranya hanya diam setelah membaca undangan.

  Arjuna menyengguk. "Dua minggu lagi, Mi," ucapnya.

  "Kamu yakin tidak apa-apa melihat Alesha menikah?" Meskipun merasa marah dan kesal, Ayu tetap merasa iba pada putranya yang baru patah hati itu.

  Arjuna tersenyum. "Memangnya kenapa, Mi? Hatiku jelas hancur melihat dia menikah dengan pria lain. Tapi, aku juga tidak bisa terus-terusan terpuruk. Aku harus bisa menerima kenyataan ini. Katanya tingkat tertinggi mencintai seseorang itu saat melepaskan orang yang kita cintai lebih bahagia dengan orang lain."

  "Ya, syukurlah kalau kamu berpikir seperti itu, jadi mami tidak perlu mengkhawatirkan kamu."

  "Mami pikir aku akan nangis seharian?" Arjuna menatap maminya dengan kesal.

  "Ya, siapa tahu." Ayu mengedikkan bahu. Dia kemudian keluar dari kamar putra tunggalnya itu.

  Arjuna menghela napas lega setelah sang mami keluar. Setidaknya beban yang dia rasakan jadi berkurang. Melepas dan mengikhlaskan Alesha memang tidak mudah.  Dia sudah memendam cinta sejak pertama kali melihat sosok Alesha saat orientasi mahasiswa baru.

  Waktu itu Alesha mengikuti acara perkenalan IMAGAMA (Ikatan Mahasiswa Akuntansi Gadjah Mada) di fakultas mereka. Arjuna yang menjabat sebagai ketua IMAGAMA kala itu, bertugas memperkenalkan UKM yang dia pimpin pada para mahasiswa baru. Sosok Alesha yang menarik dan ramah, menjadikannya incaran para mahasiswa, baik dari tingkat pertama sampai tingkat akhir.

  Namun, Alesha bukanlah sosok yang mudah didekati walaupun ramah pada siapa saja. Dia memang membatasi pergaulan karena harus bekerja paruh waktu. Gadis itu mengajar privat dari siswa SD sampai SMA. Waktu ditanya kenapa bekerja? Katanya untuk meringankan beban mamanya yang baru saja menjadi orang tua tunggal sejak sang papa meninggal dalam kecelakaan.

  Kepergian papanya sangat berdampak pada diri Alesha. Membuatnya hanya fokus kuliah dan bekerja. Para pria yang mendekati dan menyatakan cinta, semuanya langsung dia tolak mentah-mentah. Setiap ditanya alasannya, dia selalu menjawab tidak ingin pacaran dan ingin fokus membantu dan membahagiakan sang mama.

  Arjuna yang selalu bersikap seperti seorang teman, sahabat, dan kakak, berhasil membuat Alesha merasa nyaman. Dia tidak seperti pria lainnya yang dengan frontal menyatakan cinta. Hingga banyak mahasiswa yang iri padanya karena bisa dekat dengan gadis itu. Bahkan mereka sampai digosipkan pacaran meskipun kenyataannya tidak demikian.

  Arjuna mengambil gawai yang tadi dilempar sang mami ke atas ranjang. Membuka aplikasi pesan berlogo gagang telepon hijau, lalu mengetik pesan untuk Alesha.

  "Sha, aku sudah terima undangan pernikahanmu. Selamat ya, akhirnya kamu melepas masa lajangmu," tulisnya sambil mengirimkan foto undangan berwarna putih tersebut.

  Namun saat aku menoleh kebelakang tidak ada siapa siapa, aku pun bingung,panik,dan ketakutan semua nya bercampur aduk di dalam pikiran ku. Ari kembali bertanya kepadaku " dimana Adi ? " Aku yang saat itu membatu dengan tatapan yg kosong, seketika tersadar, dan menjawab ayo kita bergabung ke tim lainnya. "Kalau sudah bergabung kita langsung pergi mencarinya" jawab aku dengan panik.

Aku dan Ari mencari tim yang lain dengan tergesah gesah. Mencari dan mencari. Setelah cukup lama mencari, akhirnya kita menemukan tim C yang sedang mencari jangkrik di kebun sawit. Kami pun mendatangi tim C, dan ingin menceritakan apa yang terjadi saat itu. Namun saat aku ingin mengatakannya, ada anggota tim C yaitu Arya berteriak " wahh, cepat kesini semua, kayaknya ada buah sawit yang jatuh" keadaan kebun sawit itu sangat gelap tidak ada satupun lampu disana. semua tim C pun berlari ke arah Arya, kecuali 1 anggota, yaitu Akbar. Aku dan Ari saat itu sangat penasaran, tapi aku menahan diri untuk kesana, dan menceritakan semua yang terjadi sewaktu di makam kepada Akbar. 

Namun belum selesai aku bercerita semua anggota tim C yang mendatangi Arya, semuanya berlari terbirit-birit.
Aku dalam hati berkata " Wah, ada yang ga beres nih". Aku berkata kepada Akbar dan Ari, " ayo kita lari dari sini, ada yang tidak beres", kami pun berlari keluar dari kebun sawit.

Keluarnya dari kebun sawit itu, kami bertemu dengan Tim A, dan di saat itu aku dan Ari terkejut tidak percaya. " Loh, Adi kok ada di tim A?" Tanya Ari dengan muka yg bingung, aneh nya, Adi menjawab " loh, saat pembagian Tim aku sudah bilang ke Farel, kalau aku mau ikut Tim A, tapi Farel diem aja dan hanya mengangguk kepala kepada ku", loh kapan aku mengangguk kan kepalaku kepada mu?, aku aja tidak pernah sekalipun berbicara denganmu sewaktu pembagian Tim". Aku dan Adi yang tengah berdebat, Ari berkata "Rel siapa yang bersamamu saat kita ada di makam?", aku yang saat itu lupa akan hal itu, seketika berhenti berdebat dengan Adi, dan berkata " semuanya dengarkan aku" aku pun bercerita tentang apa yang terjadi di makam saat itu. 

Singkat cerita, sesudahnya aku selesai bercerita, orang-orang menghampiri Arya yg saat itu menggigil ketakutan seperti orang yg dimandikan air es. Karena aku penasaran, aku pun menghampiri Arya yg saat itu sedang bercerita akan hal yg terjadi  di kebun, saat itu Arya mendengar suara jangkrik di arah pohon mangga saat itu, karena penasaran, Arya langsung menghampiri suara itu, yang ternyata ada 1 jangkrik yg berada di atas pohon mangga tersebut, saat itu Arya udah menyadari bahwa ada yg tidak beres dari apa yang Arya lihat. Karena tidak seharusnya jangkrik ada di atas pohon dan jangkrik juga tidak akan berkeliaran jauh dari sarangnya. Arya yang sadar akan kejanggalan saat itu, Arya hendak pergi dari tempat itu, akan tetapi Arya mendengar suara perempuan yang sedang tertawa, seakan akan sedang menertawakan Arya yang sedang bingung saat itu. Karena Arya yang saat itu tidak menyangka akan terjadi hal yang sangat mengerikan saat itu Arya langsung berteriak dengan suara yg lantang.

Sesudahnya Arya menceritakan semua yang terjadi saat itu. Kami pun memutuskan pulang dari sana karena terlalu banyak kejanggalan yg terjadi. 
Saat perjalanan pulang aku kira semua gangguannya berhenti. Namun saat perjalanan pulang aku mendengar bisikan "kamu tidak sopan" dengan nada seperti orang yang sedang marah dan suara itu terdengar sangat berat di telingaku, anehnya, semua teman ku tidak ada yang mengalami gangguan. Saat itu Aku bersyukur karena gangguan yg aku alami hanya bisikan. Setelah itu perjalanan berjalan dengan lancar sampai teman temanku pulang ke rumahnya masing masing termasuk juga dengan ku.
Sesampainya aku di rumah, ibu ku saat itu menatap ku dengan tatapan marah, aku saat itu kebingungan, karena aku sudah pamit sebelum berangkat. 
Namun ibuku berkata "kamu cepat masuk, bersihkan badan mu, ambil wudhu lalu kamu ngaji" aku yang kebingungan bertanya" kenapa Bu?" Ibu pun menjawab " udah lakukan aja". Aku pun melakukan apa yang di suruh ibuku.
Setelah aku selesai melakukan apa yang di suruh ibuku, ibuku memanggilku, dan dia menyuruhku duduk di sebelah nya, dan berkata" tadi ibu melihat ada sesosok orang yang tinggi memakai kain kafan sedang berdiri di atas kepalamu. Akupun terkejut, dan akupun bertanya " sekarang apa sosok itu masih ada?" Ibuku berkata " iya, seperti nya kamu harus ke ustadz untuk di rukiyah".

Tak lama pesan centang duanya berubah jadi biru, tanda kalau pesan sudah terbaca. Dia menunggu balasan dari Alesha karena membaca keterangan di bawah nama Alesha kalau gadis itu sedang mengetik.

"Alhamdulillah, terima kasih, Mas Juna," balas gadis itu.

Arjuna tersenyum mendapat balasan dari Alesha, dia lalu mengetik pesan lagi. "Aku lagi pulang nih. Bisa tidak kita ketemuan sebelum kamu jadi istri orang?"

Alesha kembali mengetik. "Apa ada hal yang penting, Mas?"

"Iya, ada yang ingin aku bicarakan sama kamu, Sha," balas Arjuna lagi.

"Aku ...."
  `;

  // Fungsi untuk memotong kalimat jika panjang
  const truncatedText = text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <div className="chapter">
      <div className="chapter-container">
        <div className="chapter-card">
           <div className="card-1">
           <div className="title-chap">
            <h1>Chapter 001: Undangan</h1>
            <p>3 Januari 2024</p>
          </div>
          <div className="chapter-kalimat">
            <p>{isExpanded ? text : truncatedText}</p>
            <button className="btn" onClick={toggleExpand}>
              {isExpanded ? "Lebih sedikit" : "Lebih banyak..."}
            </button>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
