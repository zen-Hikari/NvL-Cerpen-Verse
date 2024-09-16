import './App.css'
import BestPage from './component/BestPage/Best'
import CerpenPage from './component/CerpenPage/Cerpen'
import Navbar from './component/Navbar/Navbar'
import HeroPage from './component/HeroPage/Hero'
import KategoriPage from './component/KategoriPage/Kategori'
import TamatPage from './component/TamatPage/Tamat'
import Footer from './component/Footer/Foteer'


function App() {

  return (
    <>
      <Navbar />
      <HeroPage />
      <CerpenPage />
      <KategoriPage />
      <BestPage />
      <TamatPage />
      <Footer />
    </>
  )
}

export default App
