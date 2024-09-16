import './Kategori.css'

function KategoriPage() {

    return(
        <>
        <div className="kategori">
           <div className="container">
            <div className="icon-title">
                <h1>Kategori</h1>
            </div>
             <div className="kategori-wrap">
                <div className="icon">
                  <i className="icons ai-heart"></i>
                  <div className="desc">
                  <p>Romantic</p>
                  </div>
                </div>

                <div className="icon">
                  <i className="icons ai-chess"></i>
                  <div className="desc">
                    <p>Kingdom</p>
                  </div>
                </div>

                <div className="icon">
                  <i className="triller icons ai-slice"></i>
                  <div className="desc">
                    <p>Thriller</p>
                  </div>
                </div>

                <div className="icon">
                  <i className="icons ai-face-very-happy"></i>
                  <div className="desc">
                    <p>Comedy</p>
                  </div>
                </div>

             </div>
           </div>
        </div>
        </>
    );
}

export default KategoriPage