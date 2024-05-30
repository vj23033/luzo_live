import { Link } from "react-router-dom"
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:pt-[30vh]'>
        <img src='/img/icon.webp' alt='logo' height={50} width={50}/>
        <h1 className='text-[30px]'>LUZO</h1>
        <p className='text-[16px]'>Book your appointment at 200+ salons and spas with exclusive offers via LUZO</p>
        <div className='flex flex-row gap-[10px] pt-[10px] cursor-pointer'>
            <Link to='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src='/img/appstore.webp' alt='app store' width={150}/></Link>
            <Link to='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><img src='/img/playstore.webp' alt='playstore' width={150}/></Link>
        </div>
    </div>
  )
}

export default Loading