import { useState } from "react";

const Chapter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `Namun saat aku menoleh kebelakang tidak ada siapa siapa, aku pun bingung,panik,dan ketakutan semua nya bercampur aduk di dalam pikiran ku. Ari kembali bertanya kepadaku " dimana Adi ? " Aku yang saat itu membatu dengan tatapan yg kosong, seketika tersadar, dan menjawab ayo kita bergabung ke tim lainnya. "Kalau sudah bergabung kita langsung pergi mencarinya" jawab aku dengan panik.

Aku dan Ari mencari tim yang lain dengan tergesah gesah. Mencari dan mencari. Setelah cukup lama mencari, akhirnya kita menemukan tim C yang sedang mencari jangkrik di kebun sawit. Kami pun mendatangi tim C, dan ingin menceritakan apa yang terjadi saat itu. Namun saat aku ingin mengatakannya, ada anggota tim C yaitu Arya berteriak " wahh, cepat kesini semua, kayaknya ada buah sawit yang jatuh" keadaan kebun sawit itu sangat gelap tidak ada satupun lampu disana. semua tim C pun berlari ke arah Arya, kecuali 1 anggota, yaitu Akbar. Aku dan Ari saat itu sangat penasaran, tapi aku menahan diri untuk kesana, dan menceritakan semua yang terjadi sewaktu di makam kepada Akbar. 

Namun belum selesai aku bercerita semua anggota tim C yang mendatangi Arya, semuanya berlari terbirit-birit.
Aku dalam hati berkata " Wah, ada yang ga beres nih". Aku berkata kepada Akbar dan Ari, " ayo kita lari dari sini, ada yang tidak beres", kami pun berlari keluar dari kebun sawit.

Keluarnya dari kebun sawit itu, kami bertemu dengan Tim A, dan di saat itu aku dan Ari terkejut tidak percaya. " Loh, Adi kok ada di tim A?" Tanya Ari dengan muka yg bingung, aneh nya, Adi menjawab " loh, saat pembagian Tim aku sudah bilang ke Farel, kalau aku mau ikut Tim A, tapi Farel diem aja dan hanya mengangguk kepala kepada ku", loh kapan aku mengangguk kan kepalaku kepada mu?, aku aja tidak pernah sekalipun berbicara denganmu sewaktu pembagian Tim". Aku dan Adi yang tengah berdebat, Ari berkata "Rel siapa yang bersamamu saat kita ada di makam?", aku yang saat itu lupa akan hal itu, seketika berhenti berdebat dengan Adi, dan berkata " semuanya dengarkan aku" aku pun bercerita tentang apa yang terjadi di makam saat itu. 

Singkat cerita, sesudahnya aku selesai bercerita, orang-orang menghampiri Arya yg saat itu menggigil ketakutan seperti orang yg dimandikan air es. Karena aku penasaran, aku pun menghampiri Arya yg saat itu sedang bercerita akan hal yg terjadi  di kebun, saat itu Arya mendengar suara jangkrik di arah pohon mangga saat itu, karena penasaran, Arya langsung menghampiri suara itu, yang ternyata ada 1 jangkrik yg berada di atas pohon mangga tersebut, saat itu Arya udah menyadari bahwa ada yg tidak beres dari apa yang Arya lihat. Karena tidak seharusnya jangkrik ada di atas pohon dan jangkrik juga tidak akan berkeliaran jauh dari sarangnya. Arya yang sadar akan kejanggalan saat itu, Arya hendak pergi dari tempat itu, akan tetapi Arya mendengar suara perempuan yang sedang tertawa, seakan akan sedang menertawakan Arya yang sedang bingung saat itu. Karena Arya yang saat itu tidak menyangka akan terjadi hal yang sangat mengerikan saat itu Arya langsung berteriak dengan suara yg lantang.

Sesudahnya Arya menceritakan semua yang terjadi saat itu. Kami pun memutuskan pulang dari sana karena terlalu banyak kejanggalan yg terjadi. 
Saat perjalanan pulang aku kira semua gangguannya berhenti. Namun saat perjalanan pulang aku mendengar bisikan "kamu tidak sopan" dengan nada seperti orang yang sedang marah dan suara itu terdengar sangat berat di telingaku, anehnya, semua teman ku tidak ada yang mengalami gangguan. Saat itu Aku bersyukur karena gangguan yg aku alami hanya bisikan. Setelah itu perjalanan berjalan dengan lancar sampai teman temanku pulang ke rumahnya masing masing termasuk juga dengan ku.
Sesampainya aku di rumah, ibu ku saat itu menatap ku dengan tatapan marah, aku saat itu kebingungan, karena aku sudah pamit sebelum berangkat. 
Namun ibuku berkata "kamu cepat masuk, bersihkan badan mu, ambil wudhu lalu kamu ngaji" aku yang kebingungan bertanya" kenapa Bu?" Ibu pun menjawab " udah lakukan aja". Aku pun melakukan apa yang di suruh ibuku.
Setelah aku selesai melakukan apa yang di suruh ibuku, ibuku memanggilku, dan dia menyuruhku duduk di sebelah nya, dan berkata" tadi ibu melihat ada sesosok orang yang tinggi memakai kain kafan sedang berdiri di atas kepalamu. Akupun terkejut, dan akupun bertanya " sekarang apa sosok itu masih ada?" Ibuku berkata " iya, seperti nya kamu harus ke ustadz untuk di rukiyah".`;

  // Fungsi untuk memotong kalimat jika panjang
  const truncatedText =
    text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <div className="chapter">
      <div className="chapter-container">
        <div className="chapter-card">
          <div className="card-1">
            <div className="title-chap">
              <h1>Chapter 002: Mistery Di Kebun Sawit</h1>
              <p>15 September 2024</p>
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
