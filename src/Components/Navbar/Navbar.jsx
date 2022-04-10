import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex justify-between items-center px-20 py-7 bg-[#049A5B]">
            <img src={Logo} alt=""  />
            <div className="w-[30%]">
                <ul className="flex justify-between items-center text-white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                    <li className="bg-[#08D57F] px-5 py-3 rounded-md"><a href="">Download</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
