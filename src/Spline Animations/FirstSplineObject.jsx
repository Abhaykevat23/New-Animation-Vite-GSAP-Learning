import React from 'react'
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function FirstSplineObject() {
    useGSAP(() => {
        gsap.to('.spline', {
            rotateY: 360,
            scrollTrigger: {
                trigger: ".spline",
                start: "top 30%",
                end: "top -20%",
                markers: true,
                scrub: true,
            },
        })

        gsap.to('.gsap', {
            // rotateY: 360,
            y:400,
            x:900,
            delay:1,
            duration:1,
            ease:"bounce.out"
        })
    }, []);

    return (
        <>
            <div className='plate'>

                <div id="page1" className='h-screen bg-black '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 140" aria-hidden="true" className='gsap h-36 '>
                        <path stroke="#FFFCE1" stroke-width="5" d="M215.725 0c0 142.962-208.252 144.087-208.252 0"></path>
                        <path stroke="#FFFCE1" stroke-dasharray="4 4" d="M8.024.704v137.333M215.15.704v137.333"></path>
                        <path fill="#0AE448" stroke="#FFFCE1" stroke-miterlimit="10" d="M14.475 134.278c1.881-2.817.944-6.514-2.092-8.259-3.037-1.745-7.024-.876-8.905 1.941-1.88 2.817-.944 6.514 2.093 8.259s7.023.875 8.904-1.941ZM219.522 134.278c1.881-2.817.944-6.514-2.093-8.259s-7.023-.876-8.904 1.941c-1.881 2.817-.944 6.514 2.092 8.259 3.037 1.745 7.024.876 8.905-1.941Z"></path>
                    </svg>
                </div>
                <div id="page2" className='h-screen bg-blue-600 flex items-center justify-start'>
                    {/* <div id='box' className='w-36 h-36 bg-green-500 rounded-lg'> </div> */}



                    <Spline className='spline' scene="https://prod.spline.design/iHW7cpex0uaaoOeL/scene.splinecode" />

                    {/* <Spline className='spline' scene="https://prod.spline.design/TRA5rfonCjkmdH7V/scene.splinecode" /> */}

                    {/* <Spline className='spline' scene="https://prod.spline.design/26aenhRNSw-eurHP/scene.splinecode" /> */}

                </div>
                <div id="page3" className='h-screen bg-blue-500 '></div>



            </div>
        </>
    )
}

export default FirstSplineObject