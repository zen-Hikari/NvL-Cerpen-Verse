
import './Hero.css'
import Img from './assets/cerpen1.png'
// import Baby from './assets/baby.png'
// import Everything from './assets/Everything.jpg'
// import Jodoh from './assets/jodoh.jpg'
// import Mafia from './assets/mafia.jpg'




function HeroPage() {


    return(
        <>
        <div className='hero'>
           <div className="container-hero">
           <div className="card">
          <div className="hero-title">
            <h2>Baru Di Rilis</h2>
          </div>
          <div className="card-wrap">
            
          <div id='card-1' className="card-item">
                <div className="img-compt">
                <img src={Img} alt="cerpen" />
                </div>

                <div className="text-compt">
                  <h3>Sosok Mistererius Di Malam Minggu Yang Sunyi</h3>
                  <div className="dibaca">
                    <p> <span>Farel Julian Susanto</span> | 20x Di baca</p>
                  </div>
                <div className="text-desc">
                  <p>Sekelompok remaja pergi ke gunung untuk mencari jangkrik pada malam yang sunyi. Mereka tanpa sengaja melewati makam dan bertemu seorang pria misterius yang memperingatkan mereka untuk tidak mencari jangkrik di dekat makam baru. Namun, mereka tetap melanjutkan pencarian hingga mengalami kejadian-kejadian aneh dan menyeramkan, termasuk mendengar suara-suara misterius dan melihat sosok yang tidak dikenali...</p>
                </div>
                <div className="button">
                  <a href="/Horor/Sosok-Mistererius-Di-Malam-Minggu-Yang-Sunyi">Baca Sekarang</a>
                </div>
                </div>
             </div>
             
{/* 
             <div className="card-item">
              <a href="#">
                <div className="img-compt">
                <img src={Baby} alt="cerpen" />
                </div>
              </a>

                <a href="#">
                <div className="text-compt">
                  <h3>My Baby Bos</h3>
                  <div className="dibaca">
                    <p> <span>Elara Murako</span> | 600x Di baca</p>
                  </div>
                <div className="text-desc">
                  <p>Tiba-tiba, kakakku wafat dan ninggalin bayi. Terpaksa anak itu harus aku urus sendiri. Padahal, aku yatim piatu, gak ada kerabat dekat, batin Masyami Melaina alias Yami. Yami hanya gadis biasa, tapi semenjak kakaknya meninggal, ia harus menjadi ibu asuh ponakan yang tidak tahu siapa ayahnya. Di saa...</p>
                </div>
                <div className="button">
                  <a href="#">Baca Sekarang</a>
                </div>
                </div>
                </a>
             </div>
             

             <div className="card-item">
              <a href="">
                <div className="img-compt">
                <img src={Everything} alt="cerpen" />
                </div>
              </a>
 
              <a href="">
                <div className="text-compt">
                  <h3>Let’s Talk About Everything Again</h3>
                  <div className="dibaca">
                    <p> <span>cherisivana</span> | 150x Di baca</p>
                  </div>
                <div className="text-desc">
                  <p>Shanien Adyatma dan Reksa Soedjatkimo adalah pasangan suami istri yang bercerai tiga tahun lalu. Ketidaksiapan mereka dalam menghadapi kehidupan pernikahan dan hadirnya orang dari masa lalu Reksa membuat pernikahan itu mencapai batas usai. Namun, tidak dapat dipungkiri bahwa rindu dan cinta masih me...</p>
                </div>
                <div className="button">
                  <a href="#">Baca Sekarang</a>
                </div>
                </div>
              </a>
             </div>
             

             <div className="card-item">
              <a href="">
              <div className="img-compt">
                <img src={Jodoh} alt="cerpen" />
                </div>
              </a>
  
               <a href="">
               <div className="text-compt">
                  <h3>Jodoh untuk Arjuna</h3>
                  <div className="dibaca">
                    <p> <span>Kokoro No Tomo</span> | 200x Di baca</p>
                  </div>
                <div className="text-desc">
                  <p>Bagi Arjuna, Putri adalah segalanya. Gadis manis, salehah, sederhana dan mau menerima dirinya apa adanya meskipun ada perbedaan besar di antara mereka. Karena kedua orang tua mendesaknya untuk menikah, Arjuna pun melamar Putri. Sayangnya, Arjuna harus menerima kenyataan pahit. Putri menolak lamaran...</p>
                </div>
                <div className="button">
                  <a href="#">Baca Sekarang</a>
                </div>
                </div>
               </a>
             </div>
             

             <div className="card-item">
                <a href="">
                <div className="img-compt">
                <img src={Mafia} alt="cerpen" />
                </div>
                </a>

                <a href="">
                <div className="text-compt">
                  <h3>Mafia Undercover</h3>
                  <div className="dibaca">
                    <p> <span>Ramaghendis</span> | 500x Di baca</p>
                  </div>
                <div className="text-desc">
                  <p>David Bagaskara terpaksa menyusup menjadi gugus depan di unit satuan kriminal khusus. Saat menjalankan tugas, David harus berlabuh di pelukan Grace tangan kanan mafia narkoba. Mampukah David menyembunyikan identitas diri seutuhnya atau nasib David malah berakhir di tangan Grace?...</p>
                </div>
                <div className="button">
                  <a href="#">Baca Sekarang</a>
                </div>
                </div>
                </a>
             </div> */}

             
             
             
          </div>
           </div>
           </div>
        </div>
        </>
    );
}

export default HeroPage