import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef, } from 'react';
import LocoScrollContext from '../LocoScrollContext';


// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css'



gsap.registerPlugin(ScrollTrigger);




function App() {
  const scrollRef = useRef(null)

  useEffect(() => {

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });


    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: getComputedStyle(scrollRef.current).transform !== "none" ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };

  }, []);

  useEffect(() => {
    window.addEventListener("load", ScrollTrigger.refresh);
    return () => window.removeEventListener("load", ScrollTrigger.refresh);
  }, []);



  return (
   
      <LocoScrollContext.Provider value={scrollRef}>
        <div data-scroll-container ref={scrollRef} className='relative main-container min-h-screen overflow-hidden bg-[#0F0D0D]'>
          {/* <Navbar /> */}
          <Hero />
        </div>
      </LocoScrollContext.Provider>
    

  )
}

export default App
