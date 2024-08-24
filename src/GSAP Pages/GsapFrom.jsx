import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapFrom() {
  useGSAP(() => {
    gsap.from('#green-box', {
      x: 250,
      // repeat: -1,
      yoyo: true,
      rotate: 180,
      duration: 2,
      ease: "power1.inOut"
    })
  }, []);

  return (
    <>
      <div id="green-box" className='w-20 h-20 bg-green-500 rounded-lg'> </div>
    </>
  )
}

export default GsapFrom