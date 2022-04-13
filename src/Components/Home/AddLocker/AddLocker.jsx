import React from 'react'
import BigTree from '../../../assets/images/bigTree.svg'

function AddLocker() {
    return (
        <div className="bg-[#007645] flex flex-col pt-20 w-[100%]">
            <h1 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[24px] text-[#FFFFDD] font-bold text-center">What Makes Us<br /> the Best Adblocker?</h1>
            <div>
                <img src={BigTree} className="mt-20 w-[100%]" alt="" />
            </div>
        </div>
    )
}

export default AddLocker
