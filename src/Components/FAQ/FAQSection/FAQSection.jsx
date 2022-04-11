import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

function FAQSection() {
    const [check, setCheck] = useState(0)
    const [checks, setChecks] = useState(0)
    const [checkss, setCheckss] = useState(0)
    const [checksss, setChecksss] = useState(0)
    const [checkssss, setCheckssss] = useState(0)
    const [checksssss, setChecksssss] = useState(0)
    let handleOpen = () => {
        setCheck(check + 1)
        var div = document.querySelector(".faqDiv1").style
        var h1 = document.querySelector(".faqQ1").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose = () => {
        setCheck(check - 1)
        var div = document.querySelector(".faqDiv1").style
        var h1 = document.querySelector(".faqQ1").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    let handleOpen1 = () => {
        setChecks(checks + 1)
        var div = document.querySelector(".faqDiv2").style
        var h1 = document.querySelector(".faqQ2").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose1 = () => {
        setChecks(checks - 1)
        var div = document.querySelector(".faqDiv2").style
        var h1 = document.querySelector(".faqQ2").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    let handleOpen2 = () => {
        setCheckss(checkss + 1)
        var div = document.querySelector(".faqDiv3").style
        var h1 = document.querySelector(".faqQ3").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose2 = () => {
        setCheckss(checkss - 1)
        var div = document.querySelector(".faqDiv3").style
        var h1 = document.querySelector(".faqQ3").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    let handleOpen3 = () => {
        setChecksss(checksss + 1)
        var div = document.querySelector(".faqDiv4").style
        var h1 = document.querySelector(".faqQ4").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose3 = () => {
        setChecksss(checksss - 1)
        var div = document.querySelector(".faqDiv4").style
        var h1 = document.querySelector(".faqQ4").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    let handleOpen4 = () => {
        setCheckssss(checkssss + 1)
        var div = document.querySelector(".faqDiv5").style
        var h1 = document.querySelector(".faqQ5").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose4 = () => {
        setCheckssss(checkssss - 1)
        var div = document.querySelector(".faqDiv5").style
        var h1 = document.querySelector(".faqQ5").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    let handleOpen5 = () => {
        setChecksssss(checksssss + 1)
        var div = document.querySelector(".faqDiv6").style
        var h1 = document.querySelector(".faqQ6").style
        h1.color = "#005D2D"
        div.background = "#FFFFDD"
    }
    let handleClose5 = () => {
        setChecksssss(checksssss - 1)
        var div = document.querySelector(".faqDiv6").style
        var h1 = document.querySelector(".faqQ6").style
        h1.color = "white"
        div.background = "#05BE70"
    }
    return (
        <div className="w-[100%] overflow-hidden text-white" id="faq">
            <div className="w-[100%] pb-20 rounded-t-full faq flex flex-col
         items-center">
            <h1 className="md:text-[64px] sm:text-[48px] text-[32px] font-bold text-[#FFFFDD] w-[88%]">FAQ</h1>
                <div className='lg:mt-28 mt-12 w-[88%]'>
                    <div className='faqDiv1 faqDiv rounded-t-md'>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">01</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] md:mr-0 mr-3 font-bold faqQ1 ml-4'>What’s an adblocker, anyway?</h1>
                            </div>
                            {check === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {check === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-white flex justify-center items-center' onClick={handleClose}>
                                    <a className="text-[18px] w-5 h-5 flex justify-center items-center text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>

                    <div className='faqDiv faqDiv2 '>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">02</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-bold md:mr-0 mr-3 faqQ2 ml-4'>Why do I need an adblocker?</h1>
                            </div>
                            {checks === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen1}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {checks === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-black flex justify-center items-center' onClick={handleClose1}>
                                    <a className="text-[18px] flex w-5 h-5 justify-center items-center text-white" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample1">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>

                    <div className='aqDiv faqDiv faqDiv3'>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">03</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-bold md:mr-0 mr-3 faqQ3 ml-4'>What’s so special about Green Guard?</h1>
                            </div>
                            {checkss === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen2}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {checkss === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-black flex justify-center items-center' onClick={handleClose2}>
                                    <a className="text-[18px] w-5 h-5 flex justify-center items-center text-white" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample2">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>

                    <div className='faqDiv faqDiv4'>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">04</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-bold faqQ4 md:mr-0 mr-3 ml-4'>Is the GreenGuard adblocker safe?</h1>
                            </div>
                            {checksss === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen3}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {checksss === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-black flex justify-center items-center' onClick={handleClose3}>
                                    <a className="text-[18px] w-5 h-5 flex justify-center items-center text-white" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample3">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>

                    <div className='faqDiv faqDiv5 rounded-b-md'>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">05</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-bold faqQ5 md:mr-0 mr-3 ml-4'>How does GreenGuard make the planet green again?</h1>
                            </div>
                            {checkssss === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen4}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {checkssss === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-black flex justify-center items-center' onClick={handleClose4}>
                                    <a className="text-[18px] w-5 h-5 flex justify-center items-center text-white" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample4">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>

                    <div className='faqDiv faqDiv6 rounded-b-md'>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className="flex items-center">
                                <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] font-bold text-[#049A5B]">06</h1>
                                <h1 className='lg:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] font-bold faqQ6 md:mr-0 mr-3 ml-4'>Why does Green Guard care about the environment?</h1>
                            </div>
                            {checksssss === 0 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] flex justify-center items-center' onClick={handleOpen5}>
                                    <a className="text-white text-[18px] w-5 h-5 flex justify-center items-center" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlinePlus className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                            {checksssss === 1 && (
                                <div className='w-5 h-5 rounded-full bg-[#049A5B] text-black flex justify-center items-center' onClick={handleClose5}>
                                    <a className="text-[18px] w-5 h-5 flex justify-center items-center text-white" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <AiOutlineClose className="text-[14px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="collapse" id="collapseExample5">
                            <div className="pt-0 pb-3 md:pl-24 pl-16 pr-5 md:text-[20px] text-[16px] text-[#005D2D]">
                                An ad blocker is an application that removes advertisements (pop-ups, banners etc.) from an Internet user's browsing experience. They block “bad” ads, letting users surf the web without malware threats or unpleasant distractions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQSection
