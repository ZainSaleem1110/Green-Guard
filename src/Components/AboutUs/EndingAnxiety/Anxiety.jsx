import React from 'react'
import Greenry from '../../../assets/images/Vector.png'
import AnxietyImg from '../../../assets/images/Anxiety.svg'
import {Link} from 'react-router-dom'

function Anxiety() {
    return (
        <div>
            <img src={Greenry} className="w-[100%]" alt="" />
            <div className="bg-[#007645]">
            <div className="flex justify-between md:px-20 px-10">
                <div className="md:w-[568px] w-[100%]">
                    <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold leading-tight">Ending Misclick Anxiety</h1>
                    <p className="sm:text-[20px] text-white mt-5 text-justify">We’ve all experienced that gut-flipping moment of clicking something on accident. It either ends in a mass flow of pop ups or never-ending anxiety that our computer has been compromised. We got tired of that feeling, which is why we made GreenGuard, so it doesn’t matter what you click, you’ll always be protected.</p>
                </div>
                <div className="w-[500px] mt-[-17%] md:flex hidden">
                    <img src={AnxietyImg} alt="" />
                </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
            <h1 className="md:text-[48px] sm:text-[40px] text-[24px]  text-[#FFFFDD] font-bold leading-tight">Still have questions about <br />GreenGuard Adblocker?</h1>
            <Link to="/FAQ" className="flex justify-center items-center mt-5 bg-white w-[156px] h-[56px] font-bold py-3 rounded-md text-[#049A5B] hover:text-[#049A5B] mt-10" style={{textDecoration:"none"}}>VISIT OUR FAQ!</Link>
            </div>
            </div>
        </div>
    )
}

export default Anxiety
