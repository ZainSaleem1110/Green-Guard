import React from 'react'
import ProtectionImg from '../../../assets/images/Protection.png'

function Protection() {
    return (
        <>
        <div className="px-20 justify-between items-center py-10 md:flex hidden">
            <div className="sm:w-[575px] w-[80%]">
                <h1 className="text-[48px] text-[#005D2D] leading-tight">Protection for <span className="font-bold">You</span> and <span className="font-bold">Your Computer</span></h1>
                <p className="text-[20px] text-[#005D2D] mt-5 font-medium">Our adblocker stops more than pop-ups. It guards you from malware and data profiling, so you can browse threat-free 24/7. All while keeping your data 100% private, even from us!</p>
            </div>
            <img src={ProtectionImg} className="w-[40%] h-[40%]" alt="" />
        </div>

        <div className="sm:px-10 px-2 py-10 mt-10 md:hidden flex flex-col items-center">
            <img src={ProtectionImg} className="w-[60%] h-[60%]" alt="" />
            <div className='mt-10 md:flex-none flex flex-col items-center'>
                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] text-[#005D2D] leading-tight md:text-left text-center">Protection for <span className="font-bold">You</span> and <span className="font-bold">Your Computer</span></h1>
                <p className="sm:text-[20px] text-[16px] text-[#005D2D] mt-5 w-[95%] md:text-left sm:text-center text-left">Our adblocker stops more than pop-ups. It guards you from malware and data profiling, so you can browse threat-free 24/7. All while keeping your data 100% private, even from us!</p>
            </div>
        </div>
        </>
    )
}

export default Protection
