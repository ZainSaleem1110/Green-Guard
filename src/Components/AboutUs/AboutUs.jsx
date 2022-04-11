import React from 'react'
import Guard from '../../assets/images/guard.svg'
import Leaves from '../../assets/images/leaves.svg'
import TrendingSection from './Trend/Trend'
import Anxiety from './EndingAnxiety/Anxiety'
import Footer from './Footer/Footer'
import LeaveIcon1 from '../../assets/images/leave-icon-1.svg'

function AboutUs() {
    return (
        <div className="bg-[#049A5B]">
            <div className=" md:flex flex-none justify-between items-center sm:px-20 px-10 pt-10">
                <div className="lg:w-[50%] w-[100%]">
                    <h1 className="md:text-[64px] sm:text-[48px] text-[32px] text-[#FFFFDD] font-bold">Our Mission</h1>
                    <div className="mt-14">
                        <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#FFFFDD]">At GreenGuard We Take Our Name <span className="text-[#32FCA7]">Literally</span></h1>
                        <p className="text-[20px] mt-10 text-white">We’re the only adblocker (that we know of) that blocks all ads, protects you from malware/tracking and guards the earth while you enjoy a better, faster browsing experience. </p>
                    </div>
                </div>
                <img src={Guard} className="w-[30%] md:flex hidden" alt="" />
            </div>
            <div className="w-[100%] pt-20 flex justify-center relative">
                {/* <div className='absolute top-[20%] left-[18%]'>
                    <div className='flex flex-col items-center w-[400px]'>
                        <img src={LeaveIcon1} alt="" />
                        <h1 className='sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold'>Our DNA</h1>
                        <p className='text-[20px] text-white mt-2 text-center'>We are Rik and Bartel Blom, two brothers who share the same respect our grandfather had for the environment. Our passion for building a better online experience just happened to turn into a way for us to fulfill our purpose of helping the earth.</p>
                    </div>
                </div>
                <div className='absolute top-[16%] right-[18%]'>
                    <div className='flex flex-col items-center w-[400px]'>
                        <img src={LeaveIcon1} alt="" />
                        <h1 className='sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold'>Our DNA</h1>
                        <p className='text-[20px] text-white mt-2 text-center'>We are Rik and Bartel Blom, two brothers who share the same respect our grandfather had for the environment. Our passion for building a better online experience just happened to turn into a way for us to fulfill our purpose of helping the earth.</p>
                    </div>
                </div>
                <div className='absolute bottom-[15%] left-38%]'>
                    <div className='flex flex-col items-center w-[400px]'>
                        <img src={LeaveIcon1} alt="" />
                        <h1 className='sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold'>Our DNA</h1>
                        <p className='text-[20px] text-white mt-2 text-center'>We are Rik and Bartel Blom, two brothers who share the same respect our grandfather had for the environment. Our passion for building a better online experience just happened to turn into a way for us to fulfill our purpose of helping the earth.</p>
                    </div>
                </div> */}
                <img src={Leaves} className="w-[78%]" alt="" />
            </div>
            <TrendingSection />
            <Anxiety />
            <Footer />
        </div>
    )
}

export default AboutUs
