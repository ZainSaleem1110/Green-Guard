import React,{useState} from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import Guard from '../../assets/images/guard.svg'
import Leaves from '../../assets/images/leaves.svg'
import TrendingSection from './Trend/Trend'
import Anxiety from './EndingAnxiety/Anxiety'
import Footer from './Footer/Footer'

function AboutUs() {
    const [nav,setNav]=useState(0)
    let mobileNav=()=>{
        setNav(1)
    }
    let mobileNavClose=()=>{
        setNav(0)
    }
    return (
        <div className="bg-[#049A5B]">
            <div className="w-[100%] overflow-hidden">
            {nav===0 && (
                <div className="flex justify-between items-center sm:px-20 py-7 bg-[#049A5B] relative">
                <img src={Logo} alt="" />
                <div className="lg:w-[37%] md:w-[55%] w-[10%]">
                    <ul className="md:flex hidden justify-between items-center text-white">
                        <li><Link to="/" className="text-white navLink">Home</Link><hr className="bg-white"/></li>
                        <li><Link to="/aboutUs" className="text-white navLink text-[#FFFFDD] font-bold">About Us</Link></li>
                        <li><Link to="/FAQ" className="text-white navLink">FAQ</Link><hr className="bg-white"/></li>
                        <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="" className="text-white" style={{textDecoration:"none"}}>Download</a></li>
                    </ul>
                    <div className='md:hidden flex'>
                        <FaBars className='text-white' onClick={mobileNav}/>
                    </div>
                </div>
            </div>
            )}
            {nav===1 && (
                <div className="flex flex-col fixed top-0 left-0 z-50 p-3 w-[100%] h-[100vh] bg-[#049A5B]" onClick={mobileNavClose}>
                <div className="w-[100%] flex justify-between items-center">
                <img src={Logo} alt="" />
                <AiOutlineClose className="text-[28px] text-white" onClick={mobileNavClose} />
                </div>
                    <ul className="text-white px-3 mt-10 h-[40vh] flex flex-col justify-between">
                        <li className="border-b pb-3"><Link to="/" className="text-white navLink font-bold">Home</Link></li>
                        <li className="border-b pb-3"><Link to="/aboutUs" className="text-white navLink font-bold">About Us</Link></li>
                        <li className="border-b pb-3"><Link to="/FAQ" className="text-white navLink font-bold">FAQ</Link></li>
                        <li className="bg-[#08D57F] px-5 py-3 rounded-md font-bold text-center"><a href="">Download</a></li>
                    </ul>
            </div>
            )}
        </div>
            <div className=" md:flex flex-none justify-between items-center sm:px-20 px-10 pt-10">
                <div className="lg:w-[50%] w-[100%]">
                    <h1 className="md:text-[64px] sm:text-[48px] text-[32px] text-[#FFFFDD] font-bold">Our Mission</h1>
                    <div className="mt-20">
                        <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#FFFFDD] pr-10">At GreenGuard We Take Our Name <span className="text-[#32FCA7]">Literally</span></h1>
                        <p className="sm:text-[20px] md:w-[568px] mt-10 text-white">We’re the only adblocker (that we know of) that blocks all ads, protects you from malware/tracking and guards the earth while you enjoy a better, faster browsing experience. </p>
                    </div>
                </div>
                <img src={Guard} className="w-[432px] h-[480px] md:flex hidden" alt="" />
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
