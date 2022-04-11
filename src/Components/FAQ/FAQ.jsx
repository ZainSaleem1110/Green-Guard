import React from 'react'
import TreesImg from '../../assets/images/trees.svg'
import Greenry from '../../assets/images/greenry.png'
import Video from '../Home/Video/Video'
import Footer from './Footer/Footer'
import FAQSection from './FAQSection/FAQSection'

function FAQ() {
    return (
        <>
        <div className="bg-[#049A5B] relative w-[100%]">
            <div className="w-[100%] h-[520px] px-10 z-30 gras items-center lg:flex hidden">
                <img src={TreesImg} className="w-[100%] mt-5" alt="" />
            </div>
            <div>
                <div>
                    <div className="lg:absolute lg:top-[3%] w-[100%]">
                    <FAQSection/>
                    </div>
                    <img src={Greenry} className="lg:mt-40 mt-0 w-[100%]" alt="" />
                    <div className="lg:pt-20 pt-0 bg-[#007645] flex flex-col items-center">
                        <Video />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FAQ
