import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

// =============================iPhone Web Teacher ==================================

function GsapScrollTrigger() {

    useGSAP(() => {
        gsap.to('#green-box', {
            x:1000,
            y:500,
            rotation:360,
            borderRadius:"50%",
            scrollTrigger:{
                trigger:"#green-box",
                start:"bottom bottom",
                end:"bottom 10%",
                scrub:true,
            },
            // stagger:1,
            // duration:2,
            // ease:"bounce.inOut"
        })
      }, []);
  return (
    <>
        <div className='h-dvh'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto sint voluptate iste ipsa nisi ea, perspiciatis tempora porro aperiam voluptatem molestiae quo laudantium sed cum tenetur mollitia provident, cumque labore quam delectus incidunt veritatis. Quidem, est eaque? Aspernatur facilis velit eos, nihil rem voluptate est nesciunt molestias, quaerat quod quo placeat, sunt excepturi voluptas id ducimus. Soluta possimus maxime, ex praesentium consequuntur laudantium iure et dolore dolores necessitatibus. Suscipit culpa totam, omnis esse dignissimos quidem cum cupiditate voluptatem odio eaque quas porro vitae reprehenderit, quae ex perspiciatis repellendus fugiat consectetur autem. Velit voluptatibus laboriosam ea ut at autem suscipit aut earum libero voluptatem sint dolorum deleniti delectus, accusantium rem quaerat, non quia pariatur iusto soluta, amet assumenda praesentium! Tenetur, obcaecati nostrum nesciunt voluptatum dolorem officia earum fugiat hic natus! Fuga asperiores nemo similique officia laboriosam reiciendis consectetur, accusamus distinctio id nobis mollitia velit corrupti perspiciatis tempora, ex autem sequi. Illo tempore autem, iste saepe vel laudantium maiores corporis numquam nemo ipsa eum repellat modi officia eos asperiores, totam unde labore optio. Repudiandae quae voluptatibus officiis repellendus possimus laboriosam, ipsam alias aut numquam modi, optio a atque voluptas vitae accusantium. Rerum obcaecati dolorem alias praesentium eos! Quibusdam delectus cupiditate sint!
        </div>
        <div className='h-dvh'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto sint voluptate iste ipsa nisi ea, perspiciatis tempora porro aperiam voluptatem molestiae quo laudantium sed cum tenetur mollitia provident, cumque labore quam delectus incidunt veritatis. Quidem, est eaque? Aspernatur facilis velit eos, nihil rem voluptate est nesciunt molestias, quaerat quod quo placeat, sunt excepturi voluptas id ducimus. Soluta possimus maxime, ex praesentium consequuntur laudantium iure et dolore dolores necessitatibus. Suscipit culpa totam, omnis esse dignissimos quidem cum cupiditate voluptatem odio eaque quas porro vitae reprehenderit, quae ex perspiciatis repellendus fugiat consectetur autem. Velit voluptatibus laboriosam ea ut at autem suscipit aut earum libero voluptatem sint dolorum deleniti delectus, accusantium rem quaerat, non quia pariatur iusto soluta, amet assumenda praesentium! Tenetur, obcaecati nostrum nesciunt voluptatum dolorem officia earum fugiat hic natus! Fuga asperiores nemo similique officia laboriosam reiciendis consectetur, accusamus distinctio id nobis mollitia velit corrupti perspiciatis tempora, ex autem sequi. Illo tempore autem, iste saepe vel laudantium maiores corporis numquam nemo ipsa eum repellat modi officia eos asperiores, totam unde labore optio. Repudiandae quae voluptatibus officiis repellendus possimus laboriosam, ipsam alias aut numquam modi, optio a atque voluptas vitae accusantium. Rerum obcaecati dolorem alias praesentium eos! Quibusdam delectus cupiditate sint!
        </div>

        <div className='flex'>
        <div id="green-box" className='w-36 ml-6 h-36 bg-green-500 rounded-lg'> </div>
        <div id="green-box" className='w-36 ml-6 h-36 bg-green-500 rounded-lg'> </div>
        <div id="green-box" className='w-36 ml-6 h-36 bg-green-500 rounded-lg'> </div>

        </div>

        <div className='h-dvh'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto sint voluptate iste ipsa nisi ea, perspiciatis tempora porro aperiam voluptatem molestiae quo laudantium sed cum tenetur mollitia provident, cumque labore quam delectus incidunt veritatis. Quidem, est eaque? Aspernatur facilis velit eos, nihil rem voluptate est nesciunt molestias, quaerat quod quo placeat, sunt excepturi voluptas id ducimus. Soluta possimus maxime, ex praesentium consequuntur laudantium iure et dolore dolores necessitatibus. Suscipit culpa totam, omnis esse dignissimos quidem cum cupiditate voluptatem odio eaque quas porro vitae reprehenderit, quae ex perspiciatis repellendus fugiat consectetur autem. Velit voluptatibus laboriosam ea ut at autem suscipit aut earum libero voluptatem sint dolorum deleniti delectus, accusantium rem quaerat, non quia pariatur iusto soluta, amet assumenda praesentium! Tenetur, obcaecati nostrum nesciunt voluptatum dolorem officia earum fugiat hic natus! Fuga asperiores nemo similique officia laboriosam reiciendis consectetur, accusamus distinctio id nobis mollitia velit corrupti perspiciatis tempora, ex autem sequi. Illo tempore autem, iste saepe vel laudantium maiores corporis numquam nemo ipsa eum repellat modi officia eos asperiores, totam unde labore optio. Repudiandae quae voluptatibus officiis repellendus possimus laboriosam, ipsam alias aut numquam modi, optio a atque voluptas vitae accusantium. Rerum obcaecati dolorem alias praesentium eos! Quibusdam delectus cupiditate sint!
        </div>

        <div className='h-dvh'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto sint voluptate iste ipsa nisi ea, perspiciatis tempora porro aperiam voluptatem molestiae quo laudantium sed cum tenetur mollitia provident, cumque labore quam delectus incidunt veritatis. Quidem, est eaque? Aspernatur facilis velit eos, nihil rem voluptate est nesciunt molestias, quaerat quod quo placeat, sunt excepturi voluptas id ducimus. Soluta possimus maxime, ex praesentium consequuntur laudantium iure et dolore dolores necessitatibus. Suscipit culpa totam, omnis esse dignissimos quidem cum cupiditate voluptatem odio eaque quas porro vitae reprehenderit, quae ex perspiciatis repellendus fugiat consectetur autem. Velit voluptatibus laboriosam ea ut at autem suscipit aut earum libero voluptatem sint dolorum deleniti delectus, accusantium rem quaerat, non quia pariatur iusto soluta, amet assumenda praesentium! Tenetur, obcaecati nostrum nesciunt voluptatum dolorem officia earum fugiat hic natus! Fuga asperiores nemo similique officia laboriosam reiciendis consectetur, accusamus distinctio id nobis mollitia velit corrupti perspiciatis tempora, ex autem sequi. Illo tempore autem, iste saepe vel laudantium maiores corporis numquam nemo ipsa eum repellat modi officia eos asperiores, totam unde labore optio. Repudiandae quae voluptatibus officiis repellendus possimus laboriosam, ipsam alias aut numquam modi, optio a atque voluptas vitae accusantium. Rerum obcaecati dolorem alias praesentium eos! Quibusdam delectus cupiditate sint!
        </div>
    </>
  )
}

export default GsapScrollTrigger