import Juna from './assets/jodoh.jpg'
function HeroJuna() {

    return(
        <>
        <div className="hero-farel">
           <div className="hero-container">
              <div className="farel-card">
                <div className="farel-wrap">

                    <div className="farel-card-item">
                       <div className="farel-img-compt">
                          <img src={Juna} alt="" />
                       </div>

                       <div className="farel-card-text">
                          <h3>Sosok Mistererius Di Malam Minggu Yang Sunyi</h3>
                          <div className="bahasa">
                            <a href="">
                             <i className="ai-globe"></i>
                             Bahasa Indonesia
                            </a>
                          </div>
                          <p className='sinopsis'>Sinopsis</p>
                          <p>Bagi Arjuna, Putri adalah segalanya. Gadis manis, salehah, sederhana dan mau menerima dirinya apa adanya meskipun ada perbedaan besar di antara mereka. Karena kedua orang tua mendesaknya untuk menikah, Arjuna pun melamar Putri. Sayangnya, Arjuna harus menerima kenyataan pahit. Putri menolak lamarannya bahkan memutuskan hubungan mereka secara sepihak. Orang tua Arjuna sudah tak mau menunggu lagi. Mereka pun memutuskan menjodohkan Arjuna dengan gadis pilihan mereka atau Arjuna tidak akan diakui sebagai anak dan dicoret dari daftar ahli waris keluarga. Kini, Arjuna dihadapkan pada dua pilihan. Menerima perjodohan orang tuanya atau memperjuangkan cinta sejatinya.</p>

                       </div>
                    </div>
                          <div className="feedback">
                            <div className="feed-container">
                             <div className="pembaca">
                                <p className='angka'>200</p>
                                <p className='pembaca'>Pembaca</p>
                             </div>

                             <div className="ulasan">
                               <i className="ai-star"><p>6.5</p></i>
                               <p className='ulasan-text'>
                                Lihat Ulasan
                                <i className="next ai-chevron-right"></i>
                               </p>
                             </div>
                            </div>
                          </div>

                          <div className="kategori">
                            <div className="kategori-wrap">
                                <p>Romansa</p>
                                <p>Percintaan</p>
                                <p>Cinta Segitiga</p>
                                <p>Ahli Waris</p>
                                <p>Perjodohan</p>
                            </div>
                          </div>
                </div>
              </div>
           </div>
        </div>
        </>
    )
}

export default HeroJuna