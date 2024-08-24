import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function GsapScrollTrigger2() {
    useGSAP(() => {
        gsap.to('#page2 #box', {
            rotate:180,
            x:1200,
            borderRadius:"50%",
            scrollTrigger:{
                trigger:"#page2 #box",
                start:"top 90%",
                end:"top 20%",
                markers:true,
                scrub:true,
            },
        })
      }, []);
  return (
    <>
        <div>
            <div id="page1" className='h-screen bg-blue-300 '></div>
            <div id="page2" className='h-screen bg-blue-600 flex items-center justify-start'>
                <div id='box' className='w-36 h-36 bg-green-500 rounded-lg'> </div>
            </div>
            <div id="page3" className='h-screen bg-blue-500 '></div>
        </div>
    </>
  )
}

export default GsapScrollTrigger2