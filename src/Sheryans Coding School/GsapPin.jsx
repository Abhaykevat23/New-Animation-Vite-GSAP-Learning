import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function GsapPin() {
  useGSAP(() => {
    gsap.to('#page2 h1', {
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller:"body",
        start: "top -10%",
        end: "top -100%",
        // markers: true,
        scrub: 1,
        pin: true,
      },
    })
  }, []);

  return (
    <>
      <div>
        <div id="page1" className='h-screen bg-blue-300 '></div>
        <div id="page2" className='h-[100%] w-[100%] overflow-x-hidden bg-blue-600'>
          <h1 style={{fontWeight:"bold",fontSize:"40vw",color:"whitesmoke"}} >
            EXPERIENCE  
          </h1>
        </div>
        <div id="page3" className='h-screen bg-blue-500 '></div>
      </div>
    </>
  )
}

export default GsapPin