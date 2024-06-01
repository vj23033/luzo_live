import React from 'react'
import { Link } from 'react-router-dom'

const DownloadLinks = ({ className }) => {
    return (
        <>
            <div className={className + " flex gap-[10px] sm:hidden"}>
            <Link to='/loading'><img src="/img/appstore.webp" alt="img" width='150' /></Link>
            <Link to='/loading'><img src="/img/playstore.webp" alt="img" width='150' /></Link>
        </div>
            <div className={className + " sm:flex gap-[10px] hidden"}>
                <Link target="_blank" to='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><img src="/img/appstore.webp" alt="img" width='150' /></Link>
                <Link target="_blank" to='https://play.google.com/store/apps/details?id=com.salon_surf&pli=1'><img src="/img/playstore.webp" alt="img" width='150' /></Link>
            </div>
            </>
    )
}

export default DownloadLinks