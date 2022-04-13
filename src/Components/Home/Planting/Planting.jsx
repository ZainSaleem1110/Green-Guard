import React from 'react'
import Greenry from '../../../assets/images/greenry.png'
import PlantingImg from '../../../assets/images/planting.svg'

function Planting() {
    return (
        <>
        <div className='md:mt-0 mt-10'>
            <img src={Greenry} className="w-[100%]" alt="" />
            <div className="bg-[#007645] lg:flex flex-none justify-between sm:px-20 px-10">
                <div className="lg:w-[500px] lg:mt-[-42%] flex flex-col lg:items-start items-center">
                    <img src={PlantingImg} className="h-[100%] lg:w-[100%] w-[60%]" alt="" />
                    <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[28px] text-[#FFFFDD] font-bold leading-tight lg:mt-0 mt-10 sm:text-left">Make the Planet a Better Place</h1>
                    <p className="sm:text-[20px] text-white lg:mt-5 mt-3 lg:text-left sm:text-center">Trees are essential for climate regulation, carbon capture and biodiversity within animals and plants. And, they give us humans clean air, food and medicines. The problem is, they’re being cut down faster than they’re growing. By installing GreenGuard adblocker, you’re helping our world strengthen its lungs and take the breath it deserves. </p>
                </div>
                <div className="lg:w-[568px] lg:mt-[-2%] mt-10 flex flex-col lg:items-start items-center">
                    <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[28px] text-[#FFFFDD] font-bold leading-tight sm:text-left">How Are We Planting Trees?</h1>
                    <p className="sm:text-[20px] text-white lg:mt-5 mt-3 lg:text-left sm:text-center">We’ve partnered with thousands of online stores who are as passionate about the environment as we are. With every purchase you make, they give a small donation toward tree planting at no extra cost to you. </p>
                    <p className="sm:text-[20px] text-white lg:mt-7 mt-3 lg:text-left sm:text-center">Each tree is planted by tree-forward organizations like Trees for All and smaller non-profits like *names*.</p>
                    <button className="flex justify-center items-center mt-7 bg-white rounded-md text-[#049A5B] mb-10 font-bold w-[221px] h-[56px]">Go green with us</button>
                    <p className="text-[18px] text-[#FFFFDD] mt-7">Total Trees Planted:</p>
                    <h1 className="sm:text-[96px] text-[48px] text-[#FFFFDD] font-bold">0014972</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Planting
