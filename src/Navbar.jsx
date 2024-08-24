import React from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {
    const navs = {
        marginTop: "-2rem",        
    }

    useGSAP(() => {
        gsap.to('.link', {
            y: 45,
            delay: 1,
            opacity:1,
            ease: "power1.out",
            duration: 1,
            stagger: {
                amount: 0.8,
                from: "center",
            }
        })
    }, []);

    return (
        <>
            <div className=' text-2xl font-bold h-14 w-full bg-black text-white' >
                <div className='flex justify-evenly '>
                    <Link className='link' style={navs} to={"/"}>Home</Link>
                    <Link className='link' style={navs} to={"/from"}>From</Link>
                    <Link className='link' style={navs} to={"/from-to"}>From-To</Link>
                    <Link className='link' style={navs} to={"/timeline"}>Timeline</Link>
                    <Link className='link' style={navs} to={"/stagger"}>Stagger</Link>
                    <Link className='link' style={navs} to={"/scroll"}>Scroll</Link>
                    <Link className='link' style={navs} to={"/text"}>Text</Link>
                    <Link className='link' style={navs} to={"/spline"}>Spline</Link>
                    <Link className='link' style={navs} to={"/scroll-scs2"}>Scroll-SCS2</Link>
                    <Link className='link' style={navs} to={"/scroll-pin"}>Scroll-Pin</Link>
                    <Link className='link' style={navs} to={"/scroll-my"}>Scroll-My</Link>
                    <Link className='link' style={navs} to={"/scrollvideo-my"}>Scroll-Video</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar