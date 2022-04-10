import React from 'react'
import MalvertisingImg from '../../../assets/images/Malvertising.svg'

function Malvertising() {
    return (
        <div className="px-20 flex justify-between items-center py-10">
            <div>
                <h1 className="text-[48px] text-[#005D2D] leading-tight">What is <br/><span className="font-bold">Malvertising?</span></h1>
                <p className="text-[20px] text-[#005D2D] mt-5 w-[80%]">Malvertising is a malicious cyber strategy that uses online advertising to spread malware. It can be difficult to detect because it’s frequently delivered by believable ad networks. Once clicked on, they can change the security access to your system, leaving your computer exposed to hackers and cybercriminals.</p>
            </div>
            <img src={MalvertisingImg} className="w-[40%] h-[40%]" alt="" />
        </div>
    )
}

export default Malvertising
