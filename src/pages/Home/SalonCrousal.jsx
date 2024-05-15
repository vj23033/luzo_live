import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const SalonCrousal = () => {
    return (
        <div className='sm:mx-[120px] px-[10px] my-[30px] sm:my-[60px]'>
            <h1 className='font-bold text-[30px] text-[#051036]'>200+ Salons and Spas</h1>
            {/* <div> */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={{nextEl : ".next", prevEl : ".prev"}}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        400: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                           <Link to='/salon/tip-and-toe' > <img  src="/img/salons/1.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/bblunt'><img  src="/img/salons/2.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                            <Link to='/salon/juice'><img  src="/img/salons/3.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/femina-flaunt'><img  src="/img/salons/4.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                            <Link to='/salon/toni-and-guy'> <img  src="/img/salons/5.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/tattva' ><img  src="/img/salons/6.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                            <Link to='/salon/jcb'><img  src="/img/salons/7.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/lookwell'> <img  src="/img/salons/8.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                           <Link to='/salon/lemon'> <img  src="/img/salons/9.webp" alt='salon' className='aspect-video' /></Link>
                           <Link to='/salon/bodycraft'> <img  src="/img/salons/10.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                            <Link to='/salon/apple'> <img  src="/img/salons/11.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/the-first'>  <img  src="/img/salons/12.webp" alt='salon' className='aspect-video' />
                     </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                            <Link to='/salon/harsha-rakesh'> <img  src="/img/salons/13.webp" alt='salon' className='aspect-video' /></Link>
                            <Link to='/salon/jco'><img  src="/img/salons/14.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px]'>
                           <Link to='/salon/fashiontv'> <img  src="/img/salons/15.webp" alt='salon' className='aspect-video' /></Link>
                           <Link to='/salon/kprive'>  <img  src="/img/salons/16.webp" alt='salon' className='aspect-video' /></Link>
                        </div>
                    </SwiperSlide>


                </Swiper>

            {/* </div> */}
            <div className='flex justify-between  items-center sm:px-[20%]'>
                <button className='prev'><ChevronLeft /></button>
                   <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>
                      
                        <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20'/>Banglore</p>
                        <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20'/>Mumbai</p>
                        <p className='flex gap-[5px]'><img src="/img/pin.svg" height='20' width='20'/>Pune</p>
                </div>
                <button className='next '><ChevronRight /></button>
            </div>

        </div>
    )
}

export default SalonCrousal