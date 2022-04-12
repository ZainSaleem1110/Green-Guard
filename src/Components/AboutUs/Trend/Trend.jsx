import React from 'react'
import Icon1 from '../../../assets/images/trend-icon-1.svg'
import Icon2 from '../../../assets/images/trend-icon-2.svg'
import Icon3 from '../../../assets/images/trend-icon-3.svg'

function Trend() {
    return (
        <div className="mt-20 flex flex-col items-center">
            <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#FFFFDD]">Reversing the trend</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-10 sm:px-0 px-2">
                <div className="sm:w-[400px] w-[100%] rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-3 py-3">
                    <img src={Icon1} alt="" />
                    <p className="sm:text-[20px] text-white sm:text-left text-center">The UN announced 2021-2030 will be dedicated to Ecosystem Restoration</p>
                </div>
                <div className="sm:w-[400px] w-[100%] sm:py-10 py-3 rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-3">
                    <img src={Icon2} alt="" />
                    <p className="sm:text-[20px] text-white sm:text-left text-center"> GreenGuard is taking action, so anyone can make an impact without effort</p>
                </div>
                <div className="sm:w-[400px] w-[100%] sm:py-10 py-3 rounded-md bg-[#05BE70] flex flex-col justify-center items-center gap-5 px-3">
                    <img src={Icon3} alt="" />
                    <p className="sm:text-[20px] text-white sm:text-left text-center">Planting trees is personal to us, but it’s also what we believe will unify the world</p>
                </div>
            </div>
        </div>
    )
}

export default Trend
