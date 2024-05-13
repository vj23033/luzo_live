import './App.css'
import Home from './pages/Home/index'
import GiftCard from './pages/GiftCard'
import About from './pages/About'
import Contact from './pages/Contact'
// import Salon from './pages/Salon'
import Juice from './pages/Salon/Juice'
import Bblunt from './pages/Salon/Bblunt'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apple from './pages/Salon/Apple'
import BodyCraft from './pages/Salon/BodyCraft'
import FaminaFlaunt from './pages/Salon/FaminaFlaunt'
import HarshaRakesh from './pages/Salon/HarshaRakesh'
import Jcb from './pages/Salon/Jcb'
import Jco from './pages/Salon/Jco'
// import Lemon from './pages/Salon/Lemon'
import Lookwell from './pages/Salon/Lookwell'
import Tatvva from './pages/Salon/Tatvva'
import TipAndToe from './pages/Salon/TipAndToe'
import ToniAndGuy from './pages/Salon/ToniAndGuy'
import TheFirst from './pages/Salon/TheFirst'
import FashionTv from './pages/Salon/FashionTv'
import Kprive from './pages/Salon/Kprive'
import AllSalons from './pages/AllSalons'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/giftcard' element={<GiftCard />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/all-salons' element={<AllSalons />} />
          
         
          <Route path='/salon/juice' element={<Juice />} />
          <Route path='/salon/bblunt' element={<Bblunt />} />
          <Route path='/salon/apple' element={<Apple />} />
          <Route path='/salon/bodycraft' element={<BodyCraft />} />
          <Route path='/salon/femina-flaunt' element={<FaminaFlaunt />} />
          <Route path='/salon/harsha-rakesh' element={<HarshaRakesh />} />
          <Route path='/salon/jcb' element={<Jcb />} />
          <Route path='/salon/jco' element={<Jco />} />
          {/* <Route path='/salon/lemon' element={<Lemon />} /> */}
          <Route path='/salon/lookwell' element={<Lookwell />} />
          <Route path='/salon/bblunt' element={<Bblunt />} />
          <Route path='/salon/tattva' element={<Tatvva/>} />
          <Route path='/salon/tip-and-toe' element={<TipAndToe />} />
          <Route path='/salon/toni-and-guy' element={<ToniAndGuy />} />
          <Route path='/salon/the-first' element={<TheFirst />} />
          <Route path='/salon/fashiontv' element={<FashionTv />} />
          <Route path='/salon/kprive' element={<Kprive />} />
          
             
          
          
          
          
          
          




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
