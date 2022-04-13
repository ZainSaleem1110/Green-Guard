import React from 'react'
import GoogleImg from '../../../assets/images/chrome.svg'
import FirefoxImg from '../../../assets/images/firefox.svg'
import OperaImg from '../../../assets/images/opera.svg'

function Footer() {
    return (
        <div className="pt-32 pb-52 flex flex-col items-center bg-[#007645]">
            <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[28px] text-[#FFFFDD] font-bold text-center leading-tight">Enjoy Ad Block <br /> In Two Clicks</h1>
            <div className="flex flex-wrap justify-center mt-14">
                <div className="w-[200px] h-[72px] bg-white rounded-md flex items-center pl-3 mx-3 mt-3">
                    <img src={GoogleImg} alt="" />
                    <div className="ml-4">
                        <h1 className="text-[20px] font-bold text-[#049A5B]">Chrome</h1>
                        <p>Version 1.2</p>
                    </div>
                </div>
                <div className="w-[200px] h-[72px] bg-white rounded-md flex items-center pl-3 mx-3 mt-3">
                    <img src={OperaImg} alt="" />
                    <div className="ml-4">
                        <h1 className="text-[20px] font-bold text-[#049A5B]">Opera</h1>
                        <p>Version 1.2</p>
                    </div>
                </div>
                <div className="w-[200px] h-[72px] border rounded-md flex items-center pl-3 mx-3 mt-3">
                    <img src={FirefoxImg} alt="" />
                    <div className="ml-4">
                        <h1 className="text-[20px] font-bold text-white opacity-[64%]">Firefox</h1>
                        <p className="text-white opacity-[64%]">Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
