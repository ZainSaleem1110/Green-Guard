import React from 'react'
import Greenry from '../../../assets/images/greenry.png'
import PlantingImg from '../../../assets/images/planting.svg'

function Planting() {
    return (
        <div>
            <img src={Greenry} alt="" />
            <div className="bg-[#007645] flex justify-between px-20 py-10">
                <div className="w-[500px] h-[993px] mt-[-34%] flex flex-col">
                    <img src={PlantingImg} className="w-[80%] h-[80%]" alt="" />
                    <h1 className="text-[48px] text-[#FFFFDD] font-bold leading-tight">Make the Planet a Better Place</h1>
                    <p className="text-[20px] text-white mt-5">Trees are essential for climate regulation, carbon capture and biodiversity within animals and plants. And, they give us humans clean air, food and medicines. The problem is, they’re being cut down faster than they’re growing. By installing GreenGuard adblocker, you’re helping our world strengthen its lungs and take the breath it deserves. </p>
                </div>
                <div className="w-[568px]">
                    <h1 className="text-[48px] text-[#FFFFDD] font-bold leading-tight">How Are We Planting Trees?</h1>
                    <p className="text-[20px] text-white mt-5">We’ve partnered with thousands of online stores who are as passionate about the environment as we are. With every purchase you make, they give a small donation toward tree planting at no extra cost to you. </p>
                    <p className="text-[20px] text-white mt-7">Each tree is planted by tree-forward organizations like Trees for All and smaller non-profits like *names*.</p>
                    <button className="flex justify-center items-center mt-7 bg-white px-10 py-4 rounded-md text-[#049A5B] mb-10">Go green with us</button>
                    <p className="text-[18px] text-[#FFFFDD] mt-7">Total Trees Planted:</p>
                    <h1 className="text-[96px] text-[#FFFFDD] font-bold">0014972</h1>
                </div>
            </div>
        </div>
    )
}

export default Planting
