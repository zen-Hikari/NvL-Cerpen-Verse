import { useState } from "react";
import './Chapter-1.css'

const Chapter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `Pada malam minggu yang sunyi, aku dan teman temanku pergi ke
                gunung untuk mencari jangkrik. Perjalanan untuk ke gunung harus
                melewati jalan yg rusak tetapi perjalanan pada malam itu sangat
                sunyi dan berjalan dengan lancar tanpa hambatan apapun.
                Sesampainya di tempat itu kami tidak sengaja melewati makam, dan
                di area makam itu sangat banyak suara serangga malam dan suara
                jangkrik yang membuai telinga ku. karena kami semua tergoda
                karena mendengar suara jangkrik yg sangat banyak, suara itu
                terdengar sangat berisik di telingaku dan membuat telingaku
                penuh olehnya. Aku dan teman temanku membagi kelompok menjadi 3,
                kelompok A,B,dan C. Karena kami ada 10 orang, jadi kami
                menjadikan kepompok A berisi 3 orang, kelompok B berisi 3 orang
                dan kelompok C berisi 4 orang. Seperti sekelompok pemburu, kami
                pun berpencar. dan timku yaitu kelompok B yang berisi 3 orang
                menelusuri makam itu sedangkan kelompok yang lain berpencar ke
                tempat yang lain. Tim kami pun mencari jangkrik di makam itu,
                awalnya berjalan dengan lancar tetapi tiba tiba ada seseorang
                menepuk pundak temanku dan kami semua kaget. Orang itu berkata '
                saya Dahlan orang yang menjaga dan membersihkan makam ini' lalu
                kami pun menjadi agak lega mendengarnya, setelah itu orang itu
                bertanya pada kami ' kalian sedang apa di sini?' Kami pun
                menjawab 'kami sedang mencari jangkrik di sini pak' setelah kami
                menjawab hal itu, pak Dahlan pun berkata ' disini sedang ada
                makam baru. jadi,cari jangkriknya jangan di area makam baru itu
                ya soalnya sekarang sudah larut malam, kan ' kami pun menjawab '
                baik pak' jawab kami sambil tersenyum. Setelah pak Dahlan pergi,
                kami pun lanjut mencari. Setelah lama mencari, aku dan satu
                temanku yaitu Adi mendengar suara jangkrik dan suara yg kami
                dengar seperti ada di sekitar kami, jadi kami meninggal kan satu
                teman kami dan menyuruhnya untuk tetap disana, kami pun
                mencarinya. Setelah mencarinya dan menyenter area sekitar cukup
                lama, akan tetapi aku dan Adi tidak bisa menemukan nya dan malah
                suara itu pindah tempat, apesnya suara itu terdengar ada
                disekitar makam baru itu, disaat itu bulu kuduk ku berdiri
                seketika. di tengah tengah makam yg sepi dan angin Sepoi sepoi
                yang meniup telinga ku. Adi menoleh ke arah ku dengan tatapan
                ragu. Kami memberanikan diri untuk mendekati makam itu dan kami
                pun mulai mencari. Aku melihat jangkrik yang besar, aku pun
                memanggil Adi dan kami berusaha menangkap jangkrik itu tetapi di
                dekat jangkrik itu aku melihat ada sesuatu yg bergerak dan
                ukurannya lebih besar dari jangkrik yg kami kejar, tanpa pikir
                panjang aku berusaha menangkapnya tapi sebelum aku menangkapnya
                aku merasa ragu dan melihatnya lebih dekat dan saat itu aku pun
                terdiam membatu. Adi yg berhasil menangkap jangkrik itu menepuk
                pundak ku dan berkata 'ada apa ? Kenapa kamu diam saja?' Aku yg
                saat itu tidak percaya dan secara terus menerus menatapi benda
                itu dengan tatapan yg tidak percaya dengan apa yang aku lihat.
                Aku melihat jari manis yg bergerak menggeliat seperti cacing,
                warna jari itu berwarna ungu dan pucat. Disaat itu sekujur tubuh
                ku tidak bisa bergerak seperti sedang tertindih ratusan kilo
                besi. Lalu terdengar bisikan seseorang di telingaku ' hayo lagi
                lihat apa ' ucap seseorang itu dengan suara yang sangat berat.
                Saat itu kelopak mataku sangat berat seperti ingin pingsan.
                Namun Adi menepuk pundak ku lagi dengan keras.Aku yang baru
                sadar dengan apa yang aku lihat dan secara perlahan tubuhku bisa
                digerakkan langsung menoleh ke arah Adi tapi muka Adi sudah
                sangat ketakutan dan tidak bisa bergerak, aku yang juga sangat
                ketakutan ditambah dengan Susana makam yg sunyi dan mencekam aku
                langsung lari secepat mungkin keluar dari area makam. Aku
                melihat kebelakang, aku melihat Adi yg sadar langsung berlari ke
                arah ku, dan aku terus berlari sampai keluar dari daerah makam
                itu. Setelah aku berhasil keluar, aku bertemu dengan temanku yg
                satunya yaitu ari. Lalu Ari berkata ' kenapa kamu lari
                terbirit-birit ? ' Aku pun menjawab ' ayo lari, jangan disini,
                nanti aku memberitahu mu kalau sudah bergabung dengan tim
                lainnya ' namun Ari bertanya kembali kepada ku ' loh, Adi mana?
                Tadi kan kamu bersama Adi dan aku yg jaga di sini kenapa kamu
                kesini sendirian? ' Aku yg bingung pun menjawab ' Adi? Tadi dia
                berlari bareng aku kok ' jawab aku sambil menoleh ke belakang.`;

  // Fungsi untuk memotong kalimat jika panjang
  const truncatedText = text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <div className="chapter">
      <div className="chapter-container">
        <div className="chapter-card">
           <div className="card-1">
           <div className="title-chap">
            <h1>Chapter 001: Suara Jangkrik di Makam Sunyi</h1>
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
