import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GSAPTo() {
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 180,
      duration: 2,
      ease: "elastic"
    })
  }, []);

  return (
    <>
      <div id="blue-box" className='w-20 h-20 bg-blue-500 rounded-lg'> </div>
    </>
  )
}

export default GSAPTo