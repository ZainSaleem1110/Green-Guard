import React, { useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import AddLocker from '../../assets/images/addLocker.svg'
import { BiDownload } from 'react-icons/bi'
import TreesImg from '../../assets/images/trees.svg'
import Tree from '../../assets/images/tree.svg'
import TreeRight from '../../assets/images/treeRight.svg'
import Gras from '../../assets/images/board.svg'
import Incon1 from '../../assets/images/icon-1.svg'
import Incon2 from '../../assets/images/icon-2.svg'
import Incon3 from '../../assets/images/icon-3.svg'
import Incon4 from '../../assets/images/icon-4.svg'
import Incon5 from '../../assets/images/icon-5.svg'
import Incon6 from '../../assets/images/icon-6.svg'
import Incon7 from '../../assets/images/icon-7.svg'
import Incon8 from '../../assets/images/icon-8.svg'
import Malvertising from './Malvertising/Malvertising'
import Protection from './Protection/Protection'
import Planting from './Planting/Planting'
import AddLockerSection from './AddLocker/AddLocker'
import VideoSection from './Video/Video'
import Footer from './Footer/footer'
import CurveImg from '../../assets/images/curve.svg'

let browsing = [
    { Img: Incon1, detail: "Eliminate distractions and get your tasks done quicker" },
    { Img: Incon2, detail: "Help your web pages load up to 90% faster" },
    { Img: Incon3, detail: "Keep businesses and data hackers from tracking you" },
    { Img: Incon4, detail: "Save money by reducing your bandwidth" },
    { Img: Incon5, detail: "Cleaner websites and reader-friendly pages" },
    { Img: Incon6, detail: "Guard your privacy — no tracking or unwanted ads" },
    { Img: Incon7, detail: "Avoid malicious downloads, ads and Malvertising" },
    { Img: Incon8, detail: "Time is meant to be spent living, not exiting ads" },
]

function Home() {
    const [nav, setNav] = useState(0)
    let mobileNav = () => {
        setNav(1)
    }
    let mobileNavClose = () => {
        setNav(0)
    }
    return (
        <div className="overflow-x-hidden">
            <div className="w-[100%] overflow-hidden">
                {nav === 0 && (
                    <div className="flex justify-between items-center sm:px-20 px-7 py-7 bg-[#049A5B] relative">
                        <img src={Logo} alt="" />
                        <div className="lg:w-[37%] md:w-[55%] w-[10%]">
                            <ul className="md:flex hidden justify-between items-center text-white">
                                <li><Link to="/" className="text-white navLink text-[#FFFFDD] font-bold">Home</Link></li>
                                <li><Link to="/aboutUs" className="text-white navLink font-bold">About Us</Link><hr className="bg-white" /></li>
                                <li><Link to="/FAQ" className="text-white navLink font-bold">FAQ</Link><hr className="bg-white" /></li>
                                <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="" className="text-white font-bold" style={{ textDecoration: "none" }}>Download</a></li>
                            </ul>
                            <div className='md:hidden flex'>
                                <FaBars className='text-white' onClick={mobileNav} />
                            </div>
                        </div>
                    </div>
                )}
                {nav === 1 && (
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
            <div className=" lg:flex flex-none justify-between sm:px-20 px-10 pt-14 gap-10 w-[100%] bg-[#049A5B]">
                <div className="lg:w-[50%] w-[100%] z-40">
                    <h1 className="md:w-[80%] lg:w-[100%] text-[#FFFFDD] md:text-[64px] sm:text-[48px] text-[24px] leading-tight font-bold">The Sustainable Adblocker</h1>
                    <p className="sm:text-[20px] text-white mt-8 sm:w-[70%] w-[95%] ">Get rid of intrusive ads, online tracking and malware while planting trees. Browse faster, safer, and sustainably with GreenGuard.</p>
                    <button className="flex text-[16px] font-bold justify-center items-center mt-5 bg-white px-2 py-4 rounded-md text-[#049A5B] h-[56px] sm:w-[250px] w-[230px]"><BiDownload className="mr-4 text-[20px] font-bolder" />Download Extension</button>
                    <div className="mt-5 flex items-center">
                        <div className="w-[12px] h-[12px] bg-white rounded-full mr-2" style={{ border: "2px solid #08D57F" }}></div>
                        <p className="text-white text-[16px]">It’s free to help the earth breathe</p>
                    </div>
                </div>
                <div className="z-40 lg:mt-0 mt-10">
                    <img src={AddLocker} alt="" />
                </div>
            </div>
            <div className="w-[100%]  lg:mt-[-8%] lg:h-[520px] pl-20 pr-10 z-30 gras items-center lg:flex hidden">
                <img src={TreesImg} className=" mt-3 w-[100%]" alt="" />
            </div>
            <div className="overflow-hidden relative">
                <div className="md:w-[120%] md:h-[120vh] w-[100%] bg-[#049A5B] md:rounded-b-full md:ml-[-5%] flex justify-center mt-[-15%] md:pb-0 pb-10">
                    <div className="md:w-[568px] w-[80%] md:mt-[17%] mt-[25%] lg:ml-[25%]">
                        <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold ">Less Ads, <span className="text-[#08D57F]">Safer</span> Browsing</h1>
                        <p className="text-[#FFFFDD] mt-5 pr-26 sm:text-[20px]">Ads are annoying, slow down our browsers and can hide spyware and malware inside of them. Our adblocker weeds them out, so your data stays safe and your browser keeps running fast.</p>
                    </div>
                </div>
                <img src={Tree} className="absolute lg:bottom-[-20%] left-0 w-[450px] h-[636px] lg:flex hidden" alt="" />
            </div>
            <div className="sm:pl-20 flex items-center ml-4 pt-20 pb-5">
                <div className="pl-2">
                    <h1 className="text-[#005D2D] lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold">Bring on the <span className="text-[#08D57F]">Trees</span></h1>
                    <p className="text-[#005D2D] sm:text-[20px] mt-5 sm:pr-10 font-medium sm:w-[100%] w-[90%]">Trees are the lungs of our planet and the heart of our business. That’s why we partner with the shops you love to plant trees at no extra cost to you. We’re the only adblocker with both a healthy browsing and living experience as our mission.</p>
                </div>
                <img src={TreeRight} className="lg:flex hidden" alt="" />
            </div>
            <div className="">
                <div className='relative w-[100%]'>
                    <img src={Gras} className="w-[100%]" alt="" />
                </div>
                <div className="bg-[#049A5B] flex flex-col items-center">
                    <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-center text-[#FFFFDD] py-10">Get a Better Browsing Experience</h1>
                    <div className="flex flex-wrap justify-center">
                        {browsing.map(listing => {
                            return <div className="w-[300px] sm:h-[236px] h-[200px] flex flex-col items-center justify-center px-6">
                                <img src={listing.Img} alt="" />
                                <p className="mt-5 text-white text-center sm:text-[20px]">{listing.detail}</p>
                            </div>
                        })}
                    </div>
                    <button className="flex justify-center items-center mt-5 bg-white px-2 py-4 rounded-md text-[#049A5B] mb-10 font-bold h-[56px] sm:w-[287px] w-[230px]"><BiDownload className="mr-4 text-[16px] font-bold" />Download Extension</button>
                    <img src={CurveImg} className="w-[100%]" alt="" />
                </div>
            </div>
            <Malvertising />
            <Protection />
            <Planting />
            <AddLockerSection />
            <VideoSection />
            <Footer />
        </div>
    )
}

export default Home
