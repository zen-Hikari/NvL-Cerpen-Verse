import './Best.css'
import Atasan from './assets/atasan.jpg'
import Gadis from './assets/gadis.png'
import Istri from './assets/istri.jpg'
import Jodohku from './assets/jodohku.jpg'
import Cinderella from './assets/cinderella.jpg'
import Baby from './assets/baby.png'

function BestPage() {

    return(
        <>
        <div className="cerpen">
          <div className="container">
            <div className="title">
            <h1>Cerpen & Novel Terbaik</h1>
            </div>
          <div className="cerpen-wrap">
            
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Atasan} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Atasan dan Bawahan</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Dreamon31</span> • 200x Dibaca</p>
                    </div>
                </div>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Gadis} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Gadis Satu Juta Dollar</h3>

                    <div className="cerpen-desc">
                    <p>by <span>IKYURA</span> • 140x Dibaca</p>
                    </div>
                </div>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Istri} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Istri yang Tak Tersentuh</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Ucu Nurhami Putri</span> • 455x Dibaca</p>
                    </div>
                </div>
              </div> 
                       
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Jodohku} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Jodohku Lelaki Lumpuh</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Aisakurachan</span> • 125x Dibaca</p>
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
                    <h3>My Baby Boss</h3>

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

export default BestPage