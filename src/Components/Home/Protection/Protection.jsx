import React from 'react'
import ProtectionImg from '../../../assets/images/Protection.png'

function Protection() {
    return (
        <div className="px-20 flex justify-between items-center py-10">
            <div>
                <h1 className="text-[48px] text-[#005D2D] leading-tight w-[65%]">Protection for <span className="font-bold">You</span> and <span className="font-bold">Your Computer</span></h1>
                <p className="text-[20px] text-[#005D2D] mt-5 w-[80%]">Our adblocker stops more than pop-ups. It guards you from malware and data profiling, so you can browse threat-free 24/7. All while keeping your data 100% private, even from us!</p>
            </div>
            <img src={ProtectionImg} className="w-[40%] h-[40%]" alt="" />
        </div>
    )
}

export default Protection
