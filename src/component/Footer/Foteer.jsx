import './Foteer.css'

function Footer() {

    return(
        <>
        <div className="footer">
           <div className="footer-container">
              <div className="footer-wrap">
                 <div className="footer-item">
                    <div className="logo">
                        <h1>NvL CerpenVerse</h1>
                    </div>

                    <div className="item-icons">
                        <h5>Kunjungi Kami Juga Di</h5>
                       <i className="ai-facebook-fill"></i>
                       <i className="ai-instagram-fill"></i>
                       <i className="ai-youtube-fill"></i>
                       <i className="ai-linkedin-box-fill"></i>
                    </div>

                 </div>
                    <div className="links">
                        <div className="layanan">
                          <div className="live-chat">
                           <i className="ai-chat-question">
                            <span>
                              Live Chat
                            </span>
                           </i>
                          </div>

                          <div className="hari">
                            <p>Senin - Jum’at : 08.00 - 17.00</p>
                            <p>Hari libur tutup</p>
                          </div>

                          <div className="email">
                          <i className="ai-envelope">
                            <span>
                              example@gmail.com
                            </span>
                          </i>
                          </div>
                        </div>
                        <div className="links-compt">
                          <h5>Menu Pilihan</h5>
                          <a href="">Blog</a>
                          <a href="">About Me</a>
                          <a href="">Contact Us</a>
                        </div>
                    </div>
              </div>
           </div>
        </div>
        </>
    )
}

export default Footer