import './HeroFarel.css'
import FarelImg from './assets/cerpen1.png'

function HeroFarel() {

    return(
        <>
        <div className="hero-farel">
           <div className="hero-container">
              <div className="farel-card">
                <div className="farel-wrap">

                    <div className="farel-card-item">
                       <div className="farel-img-compt">
                          <img src={FarelImg} alt="" />
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
                          <p>Sekelompok remaja pergi ke gunung untuk mencari jangkrik pada malam yang sunyi. Mereka tanpa sengaja melewati makam dan bertemu seorang pria misterius yang memperingatkan mereka untuk tidak mencari jangkrik di dekat makam baru. Namun, mereka tetap melanjutkan pencarian hingga mengalami kejadian-kejadian aneh dan menyeramkan, termasuk mendengar suara-suara misterius dan melihat sosok yang tidak dikenali</p>

                       </div>
                    </div>
                          <div className="feedback">
                            <div className="feed-container">
                             <div className="pembaca">
                                <p className='angka'>20</p>
                                <p className='pembaca'>Pembaca</p>
                             </div>

                             <div className="ulasan">
                               <i className="ai-star"><p>4.5</p></i>
                               <p className='ulasan-text'>
                                Lihat Ulasan
                                <i className="next ai-chevron-right"></i>
                               </p>
                             </div>
                            </div>
                          </div>

                          <div className="kategori">
                            <div className="kategori-wrap">
                                <p>Horor</p>
                                <p>Mistery</p>
                                <p>Petualangan</p>
                                <p>Supranatural</p>
                            </div>
                          </div>
                </div>
              </div>
           </div>
        </div>
        </>
    )
}

export default HeroFarel