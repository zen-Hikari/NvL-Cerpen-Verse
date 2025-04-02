import Asmara from './assets/asmara.jpg'
import Batak from './assets/batak.jpg'
import Bilionere from './assets/bilionere.jpg'
import Duri from './assets/duri.jpg'
import Prahara from './assets/prahara.jpg'
import Second from './assets/second.jpg'


function TamatPage() {

    return(
        <>
         <div className="cerpen">
          <div className="container">
            <div className="title">
            <h1>Novel & Cerpen Tamat</h1>
            </div>
          <div className="cerpen-wrap">
            
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Asmara} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Asmara Untuk Xavier</h3>

                    <div className="cerpen-desc">
                    <p>by <span>richSambi</span> • 119x Dibaca</p>
                    </div>
                </div>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Batak} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Dasar Orang Batak!</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Sri Wahyuni Nababan</span> • 140x Dibaca</p>
                    </div>
                </div>
              </div> 
                       

              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Bilionere} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Billionaire and the Secret Girl</h3>

                    <div className="cerpen-desc">
                    <p>by <span>shovahayaniindahz</span> • 2244x Dibaca</p>
                    </div>
                </div>
              </div> 
                       
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Duri} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Duri Masa Lalu</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Merri Heafy</span> • 296x Dibaca</p>
                    </div>
                </div>
              </div> 
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Prahara} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Prahara Hati</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Arleyta Kirani</span> • 100x Dibaca</p>
                    </div>
                </div>
              </div> 
              <div className="cerpen-card">
                <div className="cerpen-img">
                    <img src={Second} alt="" />
                </div>

                <div className="cerpen-text">
                    <h3>Second Love</h3>

                    <div className="cerpen-desc">
                    <p>by <span>Yulisa Ns</span> • 328x Dibaca</p>
                    </div>
                </div>
              </div> 

           </div>
          </div>
        </div>
        </>
    );
}

export default TamatPage