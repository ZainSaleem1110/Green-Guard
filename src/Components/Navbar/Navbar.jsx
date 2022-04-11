import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    let mobileNav=()=>{
        let mobileView=document.querySelector(".mobileView").style
        mobileView.right="0px"
        mobileView.transition="2s"
    }
    let mobileNavClose=()=>{
        let mobileView=document.querySelector(".mobileView").style
        mobileView.right="-350px"
        mobileView.transition="2s"
    }
    return (
        <div>
            <div className="flex justify-between items-center sm:px-20 px-6 py-7 bg-[#049A5B] relative">
                <img src={Logo} alt="" />
                <div className="lg:w-[40%] md:w-[55%]">
                    <ul className="md:flex hidden justify-between items-center text-white">
                        <li><Link to="/" className="text-white navLink">Home</Link></li>
                        <li><Link to="/aboutUs" className="text-white navLink">About Us</Link></li>
                        <li><Link to="/FAQ" className="text-white navLink">FAQ</Link></li>
                        <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="">Download</a></li>
                    </ul>
                    <div className='md:hidden flex'>
                        <FaBars className='text-white' onClick={mobileNav}/>
                    </div>
                </div>
            </div>
            <div className="mobileView flex flex-col items-end justify-center absolute top-90 z-50 bg-white p-3">
                <AiOutlineClose className="mr-4" onClick={mobileNavClose} />
                <ul className="list-none flex flex-col items-center">
                    <li className="text-[16px] font-medium"><a href="#home">Home</a></li>
                    <li className="mt-3 text-[16px] font-medium"><a href="#vision">Vision</a></li>
                    <li className="mt-3 text-[16px] font-medium"><a href="#NFT">NFT Drop</a></li>
                    <li className="mt-3 text-[16px] font-medium w-[232px] h-[47px] bg-[#08D57F] text-white rounded-lg flex items-center justify-center"><a href="#connect">Connect Wallet</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
