import { Play, X } from 'lucide-react'
import React, { useRef } from 'react'

const HowToUse = () => {
    const modalRef = useRef(null)
    const videoRef = useRef(null)

    const handleOpenModal = () => {
        modalRef.current.showModal()
        // videoRef.current.requestFullscreen()
        videoRef.current.play()

    }
    const handlCloseModal = () => {
        modalRef.current.close()
    }

    return (
        <>

            <div className='sm:mx-[120px] px-[10px] flex justify-center items-center gap-[32px] p-[40px] z-30'>
                <div className='flex flex-col text-center  p-[8px] shadow-md rounded-xl text-[32px] font-bold relative'>
                    <span className='p-4 bg-white rounded-full shadow absolute top-[40%] left-[40%] cursor-pointer' onClick={handleOpenModal}>
                        <Play />
                    </span>
                    <img src='/img/how-to-use.webp' alt='img'  className='sm:w-[600px] w-[300px] h-[191px] sm:h-[300px]'/>
                    
                </div>
                <div className='hidden sm:block'>
                    <p className='text-[32px] font-medium text-[#051036] text-[40px]'>How to use LUZO?</p>
                    <p>Watch to video to know more</p>
                </div>
            </div>
            <dialog ref={modalRef} className='backdrop:bg-black w-full z-30 overflow-hidden relative'>
                <span className='bg-white p-4 rounded-full absolute top-[50px] left-[50%] cursor-pointer hover:bg-blue-400 z-40' onClick={handlCloseModal}>
                    <X />
                </span>
                {/* <video width="100%" height="65%" controls controlsList='nodownload' autoPlay ref={videoRef} >
                    <source src='/img/luzo_pay.mp4' type='video/mp4' className=''   />
                </video> */}

            </dialog>
        </>
    )
}

export default HowToUse