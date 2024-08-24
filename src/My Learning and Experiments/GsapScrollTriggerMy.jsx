import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function GsapScrollTriggerMy() {
    const Timeline = gsap.timeline({});

    useGSAP(() => {
        Timeline.to('#page2 #box', {
            y:500,
            scrollTrigger: {
                trigger: "#page2 #box",
                start: "top 60%",
                end: "top 10%",
                markers: true,
                scrub: 1,
            },
        })

        Timeline.to("#page2 #box", {
            y:500,
            scrollTrigger: {
                trigger: "#page3",
                start: "top 60%",
                end: "top 10%",
                // markers: true,
                scrub: 1,
            },
        })

        // Timeline.to("#page2 #box", {
        //     x: 500,
        //     scrollTrigger: {
        //         trigger: "#page3",
        //         start: "top 60%",
        //         end: "top 10%",
        //         // markers: true,
        //         scrub: 1,
        //     },
        // })

        
    }, []);

    return (
        <>
            <div>
                <div id="page1" className='h-screen bg-blue-400 '></div>
                <div id="page2" className='h-screen bg-blue-600 flex items-center justify-center'>
                    <div id='box' className='w-36 h-36 bg-green-500 rounded-lg'> </div>
                </div>
                <div id="page3" className='h-screen bg-blue-500 '></div>
                <div id="page4" className='h-screen bg-blue-700 '></div>
            </div>
        </>
    )
}

export default GsapScrollTriggerMy