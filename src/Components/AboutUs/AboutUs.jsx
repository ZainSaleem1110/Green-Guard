import React from 'react'
import Guard from '../../assets/images/guard.svg'
import Leaves from '../../assets/images/leaves.svg'
import TrendingSection from './Trend/Trend'
import Anxiety from './EndingAnxiety/Anxiety'
import Footer from './Footer/Footer'

function AboutUs() {
    return (
        <div className="bg-[#049A5B]">
            <div className=" md:flex flex-none justify-between items-center sm:px-20 px-10 pt-10">
                <div className="lg:w-[50%] w-[100%]">
                    <h1 className="md:text-[64px] sm:text-[48px] text-[32px] text-[#FFFFDD] font-bold">Our Mission</h1>
                    <div className="mt-14">
                        <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#FFFFDD]">At GreenGuard We Take Our Name <span className="text-[#32FCA7]">Literally</span></h1>
                        <p className="sm:text-[20px] mt-10 text-white">We’re the only adblocker (that we know of) that blocks all ads, protects you from malware/tracking and guards the earth while you enjoy a better, faster browsing experience. </p>
                    </div>
                </div>
                <img src={Guard} className="w-[30%] md:flex hidden" alt="" />
            </div>
            <div className="w-[100%] pt-20 flex justify-center relative">
                <img src={Leaves} className="md:w-[78%] w-[100%]" alt="" />
            </div>
            <TrendingSection />
            <Anxiety />
            <Footer />
        </div>
    )
}

export default AboutUs
