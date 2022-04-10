import React from 'react'
import TreesImg from '../../assets/images/trees.svg'
import Greenry from '../../assets/images/greenry.png'
import Video from '../Home/Video/Video'
import Footer from './Footer/Footer'
import FAQSection from './FAQSection/FAQSection'

function FAQ() {
    return (
        <div className="bg-[#049A5B] relative w-[100%]">
            <div className="w-[100%] h-[520px] px-10 z-30 gras flex items-center">
                <img src={TreesImg} className="w-[100%] mt-5" alt="" />
            </div>
            <div>
                <div>
                    <div className="absolute top-[3%] w-[100%]">
                    <FAQSection/>
                    </div>
                    <img src={Greenry} className="mt-40" alt="" />
                    <div className="pt-20 bg-[#007645] flex flex-col items-center">
                        <Video />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
