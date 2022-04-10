import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex justify-between items-center px-20 py-7 bg-[#049A5B]">
            <img src={Logo} alt=""  />
            <div className="w-[35%]">
                <ul className="flex justify-between items-center text-white">
                    <li><Link to="/" className="text-white navLink">Home</Link></li>
                    <li><Link to="/aboutUs" className="text-white navLink">About Us</Link></li>
                    <li><Link to="/FAQ" className="text-white navLink">FAQ</Link></li>
                    <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="">Download</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
