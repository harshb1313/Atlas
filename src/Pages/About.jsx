import React from 'react';
import BentoBox from '../Components/Bentobox';


export const About = () => {
    return <div className="text-white flex flex-col gap-4 px-[2rem]">
  <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mt-16 tracking-tight">
    About Us <span className="text-primary">– WorldAtlas</span>
  </h1>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mt-6">
    World Atlas is a modern, interactive platform designed to help you explore detailed information about every country in the world.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
    Our goal is simple — to make global knowledge accessible and engaging. From flags and capitals to population stats, languages, and cultural insights, we organize country-specific data in a way that's easy to browse and understand.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-16">
    Whether you're a student, a researcher, or just curious about the world, World Atlas gives you a clean, structured way to discover facts and patterns across nations — all in one place, with a visual-first approach.
  </p>
  <BentoBox/>
</div>
}