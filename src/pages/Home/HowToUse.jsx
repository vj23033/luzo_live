import { Play, X } from 'lucide-react'
import React, { useRef } from 'react'
import { DefaultPlayer as Video } from 'react-html5video';

import 'react-html5video/dist/styles.css'

const HowToUse = () => {
    const modalRef = useRef(null)
    const videoRef = useRef(null)

    const handleOpenModal = () => {
        modalRef.current.showModal()
        // videoRef.current.requestFullscreen()
        videoRef.current.play()
        document.body.style.overflow = "hidden";

    }
    const handlCloseModal = () => {
        modalRef.current.close()
        videoRef.current.pause()
        document.body.style.overflow = "scroll"
    }

    return (
        <>

            <div className='sm:mx-[100px] px-[10px] flex justify-center items-center gap-[32px] p-[40px] z-30 '>
                <div className='flex flex-col text-center  p-[8px] shadow-md rounded-xl text-[32px] font-bold relative max-w-[500px]'>
                    <span className='p-4 bg-white rounded-full shadow absolute top-[40%] left-[40%] cursor-pointer ' onClick={handleOpenModal}>
                        <Play />
                    </span>
                    <img src='/img/how-to-use.webp' alt='img' className='sm:w-[600px] w-[300px] h-[191px] sm:h-[300px]' />

                </div>

                <div className='hidden sm:block'>
                    <p className='text-[32px] font-medium text-[#051036] sm:text-[40px]'>How to use LUZO?</p>
                    <p>Watch to video to know more</p>
                </div>

            </div>
            <dialog ref={modalRef} className='backdrop:backdrop-blur-sm half-transparent-backdrop z-30 overflow-hidden bg-transparent '>
                <div className='flex flex-col items-center relative'>
                <span className='bg-black text-white p-4 rounded-full absolute top-0 right-0 cursor-pointer hover:bg-blue-400 z-40' onClick={handlCloseModal}>
                    <X />
                </span>
                {/* <Video width="100%" height="65%" controls controlsList='nodownload' autoPlay loop ref={videoRef} >
                    <source src='/img/luzo_pay.mp4' type='video/mp4' className=''   />
                </Video> */}

                <video controls loop playsInline className={"sm:w-[35%] rounded-md h-full mx-auto"} ref={videoRef} >
                    <source src='/img/luzo_pay.mp4' type='video/mp4'  />
                </video>
                </div>
            </dialog>


        </>
    )
}

export default HowToUse