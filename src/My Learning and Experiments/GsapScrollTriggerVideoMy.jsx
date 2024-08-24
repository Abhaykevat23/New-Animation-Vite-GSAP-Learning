import { React, useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function GsapScrollTriggerVideoMy() {

    useEffect(() => {
        const canvas =document.querySelector("canvas");
        const context = canvas.getContext("2d");
        const frames = {
            currentIndex: 0,
            maxIndex: 1951,
        }
        let imageLoaded = 0;
        const images = [];
        const preloadImages = () => {
            for (var i = 1; i <= frames.maxIndex; i++) {
                const imageUrl = `/Video_Frames1/frame_${i.toString().padStart(4, "0")}.jpeg`;
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    imageLoaded++;
                    if (imageLoaded === frames.maxIndex) {
                        loadImage(frames.currentIndex);
                        startAnimation();
                    }
                }
                images.push(img)
            }
        }

        const loadImage = (index) => {
            if (index >= 0 && index <= frames.maxIndex) {
                const img = images[index];

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const scaleX = canvas.width / img.width;
                const scaleY = canvas.height / img.height;
                const scale = Math.max(scaleX, scaleY);

                const newWidth = img.width * scale;
                const newHeight = img.height * scale;

                const offsetX = (canvas.width - newWidth) / 2;
                const offsetY = (canvas.height - newHeight) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.imageSmoothingEnabled = true;
                context.imageSmoothingQuality = "high";
                context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

                frames.currentIndex = index;
            }
        }

        const startAnimation = () => {
            const Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.parent',
                    start: 'top top',
                    scrub: 0.1,
                }
            });

            Timeline.to(frames, {
                currentIndex: frames.maxIndex,
                onUpdate: function () {
                    loadImage(Math.floor(frames.currentIndex))
                }
            })
        }

        preloadImages();
    }, [])

    return (
        <>
            <div className='w-full bg-zinc-900'>
                <div className='parent relative top-0 left-0 w-full h-[700vh]'>
                    <div className='w-full h-screen sticky top-0 left-0 '>
                        <canvas className='w-full h-screen' id='canvasFrame' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GsapScrollTriggerVideoMy