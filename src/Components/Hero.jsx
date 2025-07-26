
import map from '../assets/travel.png';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocoScrollContext from '../../LocoScrollContext';

function Hero() {
  return (
    <section className="hero-part text-white flex flex-col justify-center items-center mt-[10vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold animate-fade-in-up mb-2">
        Discover the world.
      </h1>
      <h2 className="text-4xl font-semibold text-gray-400 animate-fade-in-up delay-150">
        A modern atlas for curious minds.
      </h2>

      <button className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300">
        Get Started
      </button>

      <img
        src={map}
        alt="Map"
        className="mt-16 rounded-lg shadow-xl h-[80vh] object-cover animate-fade-in-up delay-500"
      />
    </section>
  );
}

export default Hero
