'use client'

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export default function ShowCase() {
const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });


useGSAP(()=>{
  if(!isTablet){
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    })

    timeline.to('.mask img', {
      transform: 'scale(1.1)',
    } ).to('.content', {opacity:1,y:0, ease:'power1.in'})
  }

},[isTablet]);

  return (
    <section id="showcase">
      <div className="media" >
        <video src="/videos/game.mp4" loop muted autoPlay playsInline className="p-8 rounded-2xl"/>
         {/* <div className="mask md:hidden">
          <Image src="/mask-logo.svg" width={300} height={200} alt="man" className="object-center full h-full"
        />
        </div> */}
       
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2 className="title">Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>Introducing {" "}
                <span className="text-white">
                  M4, the ultimate gaming laptop chip.
                </span>
                M4 powers


              </p>
              <p>
                Rocket Chip, the ultimate gaming accessory that takes your gaming experience to new heights. With its sleek design and advanced features, Rocket Chip is engineered to enhance your gameplay and provide unparalleled performance.
              </p>
              <p>
                Experience lightning-fast speeds, seamless connectivity, and immersive graphics that will transport you into the heart of the action. Whether you're a casual gamer or a competitive pro, Rocket Chip is designed to meet the demands of every gamer.
              </p>
              <p className="text-primary">
                Learn more with Rocket Chip.
              </p>

            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>5x Faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5 Faster</h3>
              <p>CPU performance than M2</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}