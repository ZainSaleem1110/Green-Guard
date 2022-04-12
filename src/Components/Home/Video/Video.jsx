import React from 'react'
import PlantingVideo from '../../../assets/images/video.mp4'

function Video() {
    return (
        <div className="bg-[#007645] flex flex-col items-center pt-28">
            <h1 className="sm:text-[48px] text-[28px] text-[#FFFFDD] font-bold">Watch Short Video</h1>
            <div className="mt-20">
                <video width="800" height="480" controls>
                    <source src={PlantingVideo} type="video/mp4" />
                    <source src={PlantingVideo} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Video
