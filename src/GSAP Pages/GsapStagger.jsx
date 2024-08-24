import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function GsapStagger() {
    useGSAP(() => {
        gsap.to('.stagger-box1 , .stagger-box2', {
            y: 500,
            delay: 1,
            ease: "bounce.out",
            duration: 3,
            stagger: {
                amount: 1,
                from: "random",
            }
        })

        // gsap.to('.stagger-box2', {
        //     y: 450,
        //     delay: 1,
        //     ease: "bounce.out",
        //     duration: 3,
        //     stagger: {
        //         amount: 1,
        //         from: "random",
        //     }
        // })
    }, []);

    const stagger_box = {
        marginLeft: "5px",
        borderRadius: "30%"
    }

    return (
        <div className='bg-yellow-200 h-dvh'>
            <div className='flex '>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-purple-900 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-blue-900 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-green-400 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-red-500 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-purple-600 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-black rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-gray-400 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-purple-900 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box1 w-20 h-20 bg-pink-400 rounded-lg'></div>
            
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-300 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-400 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-500 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-600 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-700 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-purple-800 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-blue-300 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-green-400 rounded-lg'></div>
                <div style={stagger_box} className='stagger-box2 w-20 h-20 bg-red-500 rounded-lg'></div>
            </div>
        </div>
    )
}

export default GsapStagger