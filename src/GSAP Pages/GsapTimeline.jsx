import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function GsapTimeline() {
    const Timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
    })

    useGSAP(() => {
        Timeline.to("#blue-box", {
            x:500,
            borderRadius:"10%",
            duration:2,
            // ease:"back.inOut"
        })

        Timeline.to("#blue-box", {
            x:1000,
            scale:3,
            borderRadius:"70%",
            duration:2,
        })

    }, []);

    return (
        <>
            <button onClick={()=>{
                if(Timeline.paused()){
                    Timeline.play()
                }
                else{
                    Timeline.pause()
                }
            }}>Play / Pause</button>
            <div id="blue-box" className='w-20 h-20 bg-blue-700 rounded-lg'> </div>
        </>
    )
}

export default GsapTimeline