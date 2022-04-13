import React from 'react'
import MalvertisingImg from '../../../assets/images/Malvertising.svg'

function Malvertising() {
    return (
        <>
        <div className="px-20 justify-between items-center py-10 md:flex hidden">
            <div className="sm:w-[568px] w-[80%]">
                <h1 className="text-[48px] text-[#005D2D] leading-tight">What is <br/><span className="font-bold">Malvertising?</span></h1>
                <p className="text-[20px] text-[#005D2D] mt-5 font-medium">Malvertising is a malicious cyber strategy that uses online advertising to spread malware. It can be difficult to detect because it’s frequently delivered by believable ad networks. Once clicked on, they can change the security access to your system, leaving your computer exposed to hackers and cybercriminals.</p>
            </div>
            <img src={MalvertisingImg} className="w-[40%] h-[40%]" alt="" />
        </div>
        <div className="sm:px-10 px-2 py-10 mt-10 md:hidden flex flex-col items-center font-semibold">
            <img src={MalvertisingImg} className="w-[60%] h-[60%]" alt="" />
            <div className='mt-10 md:flex-none flex flex-col items-center'>
                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] text-[#005D2D] leading-tight sm:text-left text-center">What is <span className="font-bold">Malvertising?</span></h1>
                <p className="sm:text-[20px] text-[16px] text-[#005D2D] mt-5 w-[95%] md:text-left sm:text-center text-left">Malvertising is a malicious cyber strategy that uses online advertising to spread malware. It can be difficult to detect because it’s frequently delivered by believable ad networks. Once clicked on, they can change the security access to your system, leaving your computer exposed to hackers and cybercriminals.</p>
            </div>
        </div>
        </>
    )
}

export default Malvertising
