import './App.css'
import Home from './pages/Home/index'
import GiftCard from './pages/GiftCard'
import About from './pages/About'
import Contact from './pages/Contact'
// import Salon from './pages/Salon'
import Salon from './pages/Salon/Salon'
import Bblunt from './pages/Salon/Bblunt'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllSalons from './pages/AllSalons'
import { Privacy } from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'
import Loading from './pages/Loading/Loading'

function App() {

  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/giftcard' element={<GiftCard />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/all-salons' element={<AllSalons />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/loading' element={<Loading />} />
          

         
          <Route path='/salon/:title' element={<Salon />} />
         
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
