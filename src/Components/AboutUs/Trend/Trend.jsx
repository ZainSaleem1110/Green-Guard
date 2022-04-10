import React from 'react'
import Icon1 from '../../../assets/images/trend-icon-1.svg'
import Icon2 from '../../../assets/images/trend-icon-2.svg'
import Icon3 from '../../../assets/images/trend-icon-3.svg'

function Trend() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="text-[48px] font-bold text-[#FFFFDD]">Reversing the trend</h1>
            <div className="flex flex-wrap gap-6 mt-10">
                <div className="w-[400px] h-[172px] rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-7">
                    <img src={Icon1} alt="" />
                    <p className="text-[20px] text-white">The UN announced 2021-2030 will be dedicated to Ecosystem Restoration</p>
                </div>
                <div className="w-[400px] h-[172px] rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-5">
                    <img src={Icon2} alt="" />
                    <p className="text-[20px] text-white"> GreenGuard is taking action, so anyone can make an impact without effort</p>
                </div>
                <div className="w-[400px] h-[172px] rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-5">
                    <img src={Icon3} alt="" />
                    <p className="text-[20px] text-white">Planting trees is personal to us, but it’s also what we believe will unify the world</p>
                </div>
            </div>
        </div>
    )
}

export default Trend
