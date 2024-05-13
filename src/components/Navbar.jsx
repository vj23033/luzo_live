import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Navbar = () => {

     const [isScrolled, setIsScrolled] = useState(false)
     const { pathname } = useLocation()

     useEffect(() => {
          const handleScroll = () => {
               const scrolled = window.scrollY > 100
               setIsScrolled(scrolled)
          }

          document.addEventListener("scroll", handleScroll)

          if (pathname !== "/") {
               setIsScrolled(true)
          }

          return () => {
               document.removeEventListener("scroll", handleScroll)
          }

     }, [])

     
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


     return (
          <nav className={`sm:px-[120px] px-[10px] flex justify-between h-[80px] items-center fixed top-0 w-full z-20 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"} transition-all`}>
               <img src="/img/icon.webp" alt="logo icon" width="40" height="40" className="" />
               <div className="hidden sm:block">
                    <ul className="flex gap-[20px] cursor-pointer">
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/giftcard">Buy Gift card</Link></li>
                         <li><Link to="/about">About us</Link></li>
                         <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
               </div>
               <div className="lg:hidden md:flex flex-col ">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
            {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
               <ul className="flex gap-[20px] cursor-pointer">
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/giftcard">Buy Gift card</Link></li>
                         <li><Link to="/about">About us</Link></li>
                         <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
             
            
            </div>
          )}

          </nav>
     )
}

export default Navbar