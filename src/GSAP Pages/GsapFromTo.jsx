import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapFromTo() {
    useGSAP(() => {
        gsap.fromTo('#blue-box', {
            x: 0,
            rotation: 0,
            borderRadius: '0%'
        },
            {
                y: 250,
                repeat: -1,
                yoyo: true,
                borderRadius: '100%',
                rotate: 180,
                delay: 2,
                duration: 2,
                ease: "bounce.out"
            })
    }, []);
    return (
        <>
            <div id="blue-box" className='w-20 h-20 bg-purple-500 rounded-lg'> </div>
        </>
    )
}

export default GsapFromTo