import React from 'react'
import BigTree from '../../../assets/images/bigTree.svg'

function AddLocker() {
    return (
        <div className="bg-[#007645] flex flex-col items-center pt-20">
            <h1 className="text-[48px] text-[#FFFFDD] font-bold text-center">What Makes Us<br /> the Best Adblocker?</h1>
            <div>
                <img src={BigTree} className="mt-20" alt="" />
            </div>
        </div>
    )
}

export default AddLocker
