import React,{useState} from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import TreesImg from '../../assets/images/trees.svg'
import Greenry from '../../assets/images/greenry.png'
import Video from '../Home/Video/Video'
import Footer from './Footer/Footer'
import FAQSection from './FAQSection/FAQSection'

function FAQ() {
    const [nav,setNav]=useState(0)
    let mobileNav=()=>{
        setNav(1)
    }
    let mobileNavClose=()=>{
        setNav(0)
    }
    return (
        <>
        <div className="w-[100%] overflow-hidden bg-[#049A5B]">
            {nav===0 && (
                <div className="flex justify-between items-center sm:px-20 px-7 py-7 bg-[#049A5B] relative">
                <img src={Logo} alt="" />
                <div className="lg:w-[37%] md:w-[55%] w-[10%]">
                    <ul className="md:flex hidden justify-between items-center text-white">
                        <li><Link to="/" className="text-white navLink font-bold">Home</Link><hr className="bg-white"/></li>
                        <li><Link to="/aboutUs" className="text-white navLink font-bold">About Us</Link><hr className="bg-white"/></li>
                        <li><Link to="/FAQ" className="text-white navLink text-[#FFFFDD] font-bold">FAQ</Link></li>
                        <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="" className="text-white font-bold" style={{textDecoration:"none"}}>Download</a></li>
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
                        <li className="border-b pb-3"><Link to="/aboutUs" className="text-white navLink font-bold ">About Us</Link></li>
                        <li className="border-b pb-3"><Link to="/FAQ" className="text-white navLink font-bold">FAQ</Link></li>
                        <li className="bg-[#08D57F] px-5 py-3 rounded-md font-bold text-center"><a href="">Download</a></li>
                    </ul>
            </div>
            )}
        </div>
        <div className="bg-[#049A5B] relative w-[100%] ">
            <div className="w-[100%] h-[520px] px-10 z-30 gras items-center lg:flex hidden justify-center">
                <img src={TreesImg} className="w-[100%] mt-5 " alt="" />
            </div>
            <div>
                <div>
                    <div className="lg:absolute lg:top-[3%] w-[100%]">
                    <FAQSection/>
                    </div>
                    <img src={Greenry} className="lg:mt-40 mt-0 w-[100%]" alt="" />
                    <div className="lg:pt-20 pt-0 bg-[#007645] flex flex-col items-center">
                        <Video />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FAQ
