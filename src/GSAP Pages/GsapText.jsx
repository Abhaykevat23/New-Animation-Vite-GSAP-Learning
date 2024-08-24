import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function GsapText() {
    useGSAP(() => {
        gsap.to('#h1text', {
            ease: "back.inOut",
            opacity: 1,
            y: 0,
        })

        gsap.fromTo('.para', {
            opacity: 0,
            y: 20,

        }, {
            opacity: 1,
            y: 0,
            delay: .6,
            stagger: .1,
        })
    }, []);
    return (
        <>
            <div className='ml-16 mr-16 mt-4'>
                <h1 id="h1text" className='text-6xl font-bold opacity-0 translate-y-10'>
                    Abhay Kevat
                </h1>
                <br />

                <p className='para text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse veniam reprehenderit quas ipsum illo quibusdam et eveniet ut excepturi. Minima alias rem consequuntur, deserunt delectus veritatis qui quaerat odio itaque.
                </p>

                <br />
                <br />
                <h3 className='para text-3xl font-bold '>my opinions</h3>
                <p className='para text-2xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sequi, consectetur exercitationem facilis molestias quisquam doloremque dolor quae odit eaque. At voluptatibus non magni ut possimus eveniet cumque deleniti ratione?
                </p>

                <br />
                <br />
                <h3 className='para text-3xl font-bold'>my opinions</h3>
                <p className='para text-2xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sequi, consectetur exercitationem facilis molestias quisquam doloremque dolor quae odit eaque. At voluptatibus non magni ut possimus eveniet cumque deleniti ratione?
                </p>
            </div>
        </>
    )
}

export default GsapText