import './Cerpen.css'
import Jodoh from './assets/jodoh.jpg'
import Buta from './assets/si-buta.jpg'
import Cinderella from './assets/cinderella.jpg'
import Soulmate from './assets/soulmate.jpeg'
import Mafia from './assets/mafia.jpg'
import Baby from './assets/baby.png'

function CerpenPage() {

    return(
        <>
        <div className="cerpen">
          <div className="container">
            <div className="title">
            <h1>Kumpulan Novel Digital Gratis Terbaik, Baca Sekarang</h1>
            </div>
          <div className="cerpen-wrap">
            
              <div className="cerpen-card">
                <a href="/Novel-Digital-Terbaik/Jodoh-Untuk-Arjuna">
                <div className="cerpen-img">
                    <img src={Jodoh} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Jodoh untuk Arjuna</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Kokoro No Tomo</span> • 200x Dibaca</p>
                    </div>
                </div>
                </a>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Buta} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Si Buta dari Laut Kidul</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Kadita</span> • 140x Dibaca</p>
                    </div>
                </div>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Mafia} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Mafia Undercover</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Ramagendhis</span> • 500x Dibaca</p>
                    </div>
                </div>
              </div> 
                       
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Soulmate} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Soulmate from the Sky</h3>

                    <div className="cerpen-desc">
                    <p>by <span>LuckeyOne</span> • 200x Dibaca</p>
                    </div>
                </div>
              </div> 
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Cinderella} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Cinderella Tanpa Nama</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Praticia.Alodie</span> • 100x Dibaca</p>
                    </div>
                </div>
              </div> 
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Baby} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>My Baby Bos</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Elara Murako</span> • 600x Dibaca</p>
                    </div>
                </div>
              </div> 

           </div>
          </div>
        </div>
        </>
    );
}

export default CerpenPage