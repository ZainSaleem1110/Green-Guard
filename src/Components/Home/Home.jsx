import React from 'react'
import AddLocker from '../../assets/images/addLocker.svg'
import { AiOutlineDownload } from 'react-icons/ai'
import TreesImg from '../../assets/images/trees.svg'
import Tree from '../../assets/images/tree.svg'
import TreeRight from '../../assets/images/treeRight.svg'
import Gras from '../../assets/images/gras.png'
import ThreeTrees from '../../assets/images/three-trees.svg'
import Board from '../../assets/images/board.svg'
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
    return (
        <div className="overflow-x-hidden">
            <div className="flex justify-between px-20 pt-14 gap-10 w-[100%] bg-[#049A5B]">
                <div className="w-[50%] z-40">
                    <h1 className="text-white text-[64px] leading-tight font-bold">The Sustainable <br /> Adblocker</h1>
                    <p className="text-[24px] text-white mt-8">Get rid of intrusive ads, online tracking and malware while planting trees. Browse faster, safer, and sustainably with GreenGuard.</p>
                    <button className="flex justify-center items-center mt-5 bg-white px-10 py-4 rounded-md text-[#049A5B]"><AiOutlineDownload className="mr-4" />Download Extension</button>
                    <div className="mt-5 flex items-center">
                        <div className="w-[15px] h-[15px] bg-white rounded-full mr-3" style={{ border: "3px solid #08D57F" }}></div>
                        <p className="text-white">It’s free to help the earth breathe</p>
                    </div>
                </div>
                <div className="z-40">
                    <img src={AddLocker} alt="" />
                </div>
            </div>
            <div className="w-[100%] mt-[-8%] h-[520px] px-20 z-30 gras flex items-center">
                <img src={TreesImg} alt="" />
            </div>
            <div className="overflow-hidden relative">
                <div className="w-[120%] h-[120vh] bg-[#049A5B] rounded-b-full ml-[-5%] flex justify-center mt-[-15%]">
                    <div className="w-[568px] mt-[17%] ml-[25%]">
                        <h1 className="text-[48px] text-white">Less Ads, <span className="text-[#08D57F]">Safer</span> Browsing</h1>
                        <p className="text-white mt-5 pr-26 text-[20px]">Ads are annoying, slow down our browsers and can hide spyware and malware inside of them. Our adblocker weeds them out, so your data stays safe and your browser keeps running fast.</p>
                    </div>
                </div>
                <img src={Tree} className="absolute bottom-[-10%] left-0 w-[450px] h-[636px]" alt="" />
            </div>
            <div className="pl-20 flex items-center pt-20 pb-5">
                <div>
                    <h1 className="text-[#005D2D] text-[48px]">Bring on the <span className="text-[#08D57F]">Trees</span></h1>
                    <p className="text-[#005D2D] text-[20px] mt-5 pr-10">Trees are the lungs of our planet and the heart of our business. That’s why we partner with the shops you love to plant trees at no extra cost to you. We’re the only adblocker with both a healthy browsing and living experience as our mission.</p>
                </div>
                <img src={TreeRight} alt="" />
            </div>
            <div className="mt-56">
                <div className='relative w-[100%]'>
                    <img src={Gras} alt="" />
                    <div className="flex justify-between absolute bottom-[45px] items-end w-[100%] px-24">
                        <div className="mb-20">
                            <img src={ThreeTrees} alt="" />
                        </div>
                        <img src={Board} className="mr-20" alt="" />
                    </div>
                </div>
                <div className="bg-[#049A5B] flex flex-col items-center">
                    <h1 className="text-[48px] font-bold text-center text-[#FFFFDD] py-10">Get a Better Browsing Experience</h1>
                    <div className="flex flex-wrap justify-center">
                        {browsing.map(listing => {
                            return <div className="w-[300px] h-[236px] flex flex-col items-center justify-center px-6">
                                <img src={listing.Img} alt="" />
                                <p className="mt-5 text-white text-center text-[20px]">{listing.detail}</p>
                            </div>
                        })}
                    </div>
                    <button className="flex justify-center items-center mt-5 bg-white px-10 py-4 rounded-md text-[#049A5B] mb-10"><AiOutlineDownload className="mr-4" />Download Extension</button>
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
