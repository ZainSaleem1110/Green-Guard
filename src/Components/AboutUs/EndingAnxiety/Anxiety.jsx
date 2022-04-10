import React from 'react'
import Greenry from '../../../assets/images/Vector.png'
import AnxietyImg from '../../../assets/images/Anxiety.svg'
import {Link} from 'react-router-dom'

function Anxiety() {
    return (
        <div>
            <img src={Greenry} alt="" />
            <div className="bg-[#007645]">
            <div className="flex justify-between px-20">
                <div className="w-[568px]">
                    <h1 className="text-[48px] text-[#FFFFDD] font-bold leading-tight">Ending Misclick Anxiety</h1>
                    <p className="text-[20px] text-white mt-5">We’ve all experienced that gut-flipping moment of clicking something on accident. It either ends in a mass flow of pop ups or never-ending anxiety that our computer has been compromised. We got tired of that feeling, which is why we made GreenGuard, so it doesn’t matter what you click, you’ll always be protected.</p>
                </div>
                <div className="w-[500px] flex flex-col mt-[-17%]">
                    <img src={AnxietyImg} alt="" />
                </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
            <h1 className="text-[48px] text-[#FFFFDD] font-bold leading-tight">Still have questions about <br />GreenGuard Adblocker?</h1>
            <Link to="/FAQ" className="flex justify-center items-center mt-5 bg-white px-10 py-4 rounded-md text-[#049A5B] mt-10">Visit our FAQ!</Link>
            </div>
            </div>
        </div>
    )
}

export default Anxiety
