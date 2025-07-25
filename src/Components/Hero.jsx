import React, { useContext, useEffect, useRef } from 'react'
import  travellingVideo  from "../assets/travelling.mp4"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocoScrollContext from '../../LocoScrollContext';

function Hero() {
  const scrollRef= useContext(LocoScrollContext)
  const head1Ref = useRef(null);

  useEffect(()=>{
    if(!scrollRef.current)return;
    gsap.to(head1Ref.current,{ x:-30,
      scrollTrigger:{
        trigger:head1Ref.current,
        scroller:scrollRef.current,
        markers: true,
        start:"top 30%",
        end:"top 0%",
        scrub:2,
      }
    })
  },[scrollRef])




  return (
    <section className='hero-part text-white text-left mt-[8vh]'>
      <h2 ref={head1Ref} className='text-[8vw] font-semibold ml-[4vw] leading-[22vh]'>Where Geography</h2>
      <h2 className='text-[8vw] font-semibold ml-[20vw] leading-[22vh]'>Meets Discovery</h2>
      <video
        src={travellingVideo}
        autoPlay
        loop
        muted
        className='w-[60%] mt-[10vh] block mx-auto '
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
