import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Navbar = () => {

     const [isScrolled, setIsScrolled] = useState(false)
     const { pathname } = useLocation()

     const navItems = [
          {
               label : "Home",
               link : "/"
          },
          {
               label : "Buy Gift Card",
               link : "/giftcard"
          },
          {
               label : "About Us",
               link : "/about"
          },
          {
               label : "Contact Us",
               link : "/contact"
          },
     ]

     useEffect(() => {
          const handleScroll = () => {
               const scrolled = window.scrollY > 100
               if (pathname !== "/") {
                    return setIsScrolled(true)
               }
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
          <nav className={`sm:px-[80px] px-[10px] flex justify-between h-[80px] items-center fixed top-0 w-full z-20 ${isScrolled ? "bg-white text-black" : "bg-transparent sm:text-white"} transition-all duration-[350ms]`}>
               <Link to='/'>  <img src="/img/icon.webp" alt="logo icon" width="50" height="50" className="" /></Link>
               <div className="invisible sm:visible">
                    <ul className="flex gap-[20px] cursor-pointer">
                         {
                              navItems.map((item)=>{
                                   return <li className={`${pathname===item.link && isScrolled && pathname !== "/" ?"text-blue-500" : ""}`}><a href={item.link}>{item.label}</a></li>
                              })
                         }
                    </ul>
               </div>
               <div className="lg:hidden md:flex flex-col ">
                    <button onClick={toggleNavbar}>
                         {!mobileDrawerOpen && <Menu />}
                    </button>
               </div>
               {/* {mobileDrawerOpen && ( */}
               <div className={`absolute top-0 ${!mobileDrawerOpen ? "invisible left-[-100%]" : "left-0 visible"} transition-all duration-[350ms] z-20 bg-white w-[90%] py-12  flex flex-col  lg:hidden h-screen`}>
                    <div className="flex justify-between pb-4 border-b-2 px-12">
                         <img src="/img/icon.webp" alt="logo icon" width="40" height="40" className="" />
                         <X onClick={toggleNavbar} />

                    </div>
                    <ul className="flex text-black flex-col gap-[20px] cursor-pointer border-b-2 py-4 px-12">
                    {
                              navItems.map((item)=>{
                                   return <li className={`${pathname===item.link?"text-blue-500" : ""}`}><Link to={item.link}>{item.label}</Link></li>
                              })
                         }
                    </ul>


               </div>
               {/* )} */}

          </nav>
     )
}

export default Navbar