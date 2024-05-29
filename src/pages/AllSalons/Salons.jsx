import { Link } from "react-router-dom"


const Salons = () => {
  return (
    <div className="px-[10px] sm:px-[120px] mt-[100px]">
        <h1 className="font-medium text-[30px]">All Salons</h1>
        <div className="flex flex-wrap gap-[30px] cursor-pointer py-[20px]">
            <Link to='/salon/jcb'>
                  <div className='flex flex-col gap-[20px] w-[400px] rounded-xl relative overflow-hidden '>
                                  <img src='/SalonPhotos/JCB.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                  <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine )</h1>
                  </div>    
            </Link>

            <Link to='/salon/tattva'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/TattvaSpa.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tattva Spa</h1>
                </div>
            </Link>

             <Link to='/salon/juice'>
                   
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/juice,ghatkopar.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Juice</h1>
                </div>
                
             </Link>

            <Link to='/salon/harsha-rakesh'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/HarshaRakesh.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Harsha & Rakesh</h1>
                  </div>
                
                
            </Link> 

            <Link to='/salon/the-first' >
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/TheFirst.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>The First</h1>
                </div>

            </Link>

            <Link to='/salon/harsha-rakesh'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/HouseOfBumble.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>House of Bumble</h1>
                </div>
                
            </Link>
            
            <Link to='/salon/bodycraft'>
                  <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                  <img src='/SalonPhotos/BodyCraft.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                  <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>BodyCraft</h1>
                </div>
            </Link>

            <Link to='/salon/----'>
                  <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                  <img src='/SalonPhotos/Cocomelon.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                  <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Cocomelon</h1>
                  </div>               
            </Link>  

          <Link to='/salon/lookwell'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/LookWell.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>LookWell</h1>
              </div>
              
          </Link>

          <Link to='/salon/apple'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/Apple(The Original).webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Apple</h1>
                </div>
                
          </Link>  

           <Link to='/salon/tip-and-toe'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/timntoe.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tim & Toe</h1>
                </div>
              
           </Link>

            <Link to='/salon/tattva'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                              <img src='/SalonPhotos/TattvaSpa.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                              <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine )</h1>
              </div>
            
            </Link>

             <Link to='/salon/toni-and-guy'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/toninguy.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Toni & Guy</h1>
                </div>
              
             </Link>
            <Link to='/salon/---'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/lemon.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Lemon</h1>
                </div>
            
            </Link>

           <Link to='/salon/femina-flaunt'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                  <img src='/SalonPhotos/feminaflaunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                  <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Femina Flaunt</h1>
                  </div>
                
           </Link>

           <Link to='/salon/bblunt'>
                <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                  <img src='/SalonPhotos/bblunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                  <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Bblunt</h1>
                </div>
              
           </Link>

           <Link to='/salon/kprive'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                                <img src='/SalonPhotos/Kprive.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>Kprive</h1>
              </div>
           </Link> 
            <Link to='/salon/fashiontv'>
              <div className='flex flex-col gap-[20px] w-[400px] relative rounded-xl overflow-hidden '>
                              <img src='/SalonPhotos/FTV.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                              <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>FTV</h1>
            </div>
          </Link>

        </div>
        <h1 className="font-medium text-[28px] text-center">To view more salons download the app now!</h1>
        <div className="flex items-center  justify-center gap-[20px] py-[20px]">
            <img src="/img/appstore.webp" alt="img" width='150' />
            <img src="/img/playstore.webp" alt="img" width='150' />
        </div>
    </div>
  )
}

export default Salons