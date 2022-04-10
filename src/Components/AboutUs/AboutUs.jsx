import React from 'react'
import Guard from '../../assets/images/guard.svg'
import Leaves from '../../assets/images/leaves.svg'
import TrendingSection from './Trend/Trend'
import Anxiety from './EndingAnxiety/Anxiety'
import Footer from './Footer/Footer'

function AboutUs() {
    return (
        <div className="bg-[#049A5B]">
            <div className="flex justify-between items-center px-20 pt-10">
                <div className="w-[50%]">
                    <h1 className="text-[64px] text-[#FFFFDD] font-bold">Our Mission</h1>
                    <div className="mt-14">
                        <h1 className="text-[48px] font-bold text-[#FFFFDD]">At GreenGuard We Take Our Name <span className="text-[#32FCA7]">Literally</span></h1>
                        <p className="text-[20px] mt-10 text-white">We’re the only adblocker (that we know of) that blocks all ads, protects you from malware/tracking and guards the earth while you enjoy a better, faster browsing experience. </p>
                    </div>
                </div>
                <img src={Guard} alt="" />
            </div>
            <div className="w-[100%] pt-20 flex justify-center">
                <img src={Leaves} className="w-[95%]" alt="" />
            </div>
            <TrendingSection />
            <Anxiety />
            <Footer />
        </div>
    )
}

export default AboutUs
