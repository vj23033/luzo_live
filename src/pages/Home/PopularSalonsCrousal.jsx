import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle"
import CustomPagination from './CustomPagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';


const PopularSalonsCrousal = () => {
    const count = 6;
    const renderPagination = () => {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(
                <div
                    key={i}
                    className={`pagination-item`}
                ></div>
            );
        }
        return items;
    };

    return (
        <>

            <div className='sm:mx-[120px] px-[10px] my-[60px] relative'>
                <div className='flex justify-between mb-[20px]'>
                <h1 className='font-bold text-[30px] '>Popular Salons</h1>
                <Link to='/all-salons'> <button className='border hidden sm:block hover:text-[white] text-blue-600 bg-blue-200 px-[10px] py-[10px] hover:bg-[#3554D1]'> View All Salons</button>
               </Link>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
                    loop={true}
                    pagination={{ clickable: true, el: '.custom-pagination', bulletClass: "pagination-item", bulletActiveClass: "pagination-active-item" }}

                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        400: {
                            slidesPerView: 4,
                        },
                    }}
                    
                >
                    <SwiperSlide>
                    <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden '>
                        <img src='/SalonPhotos/TattvaSpa.webp' alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                        <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tattva spa</h1>
                    </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/bblunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/FTV.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/Apple.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/BodyCraft.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/Cocomelon.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/feminaflaunt.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/HarshaRakesh.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                            <img src='/SalonPhotos/JCB.webp' alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <button className='border mt-[20px] text-[20px] sm:hidden hover:text-[white] text-blue-600 bg-blue-200 px-[10px] py-[10px] hover:bg-[#3554D1] p-2'>View All Salons</button>


                <button className='popular_prev p-2 hidden sm:block shadow rounded-full  absolute left-[-25px] top-[50%] z-10  text-blue-300 bg-white hover:text-[white] hover:bg-blue-500'><ChevronLeft/> </button>
                <button className='popular_next p-2 hidden sm:block shadow rounded-full absolute right-[-25px] top-[50%] z-10  text-blue-300 bg-white hover:text-[white] hover:bg-blue-500'><ChevronRight/> </button>
                
                <div className="custom-pagination">
                    {renderPagination()}
                </div>
            </div>

        </>
    )
}

export default PopularSalonsCrousal