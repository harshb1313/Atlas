import { NavLink } from "react-router-dom";

const CountryCard = ({ name, capital, region, population, flag }) => (
  <div className="bg-white text-black rounded-lg shadow-md p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 w-full max-w-sm mx-auto transition-transform hover:scale-105">
    <div className="w-full aspect-video overflow-hidden rounded">
      <img 
        src={flag} 
        alt={`${name} flag`} 
        className="w-full h-full object-cover object-center" 
      />
    </div>
    
    <div className="flex flex-col gap-1 sm:gap-2">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight break-words">
        {name}
      </h2>
      
      <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base text-gray-700 justify-start">
        <p className="break-words">
          <span className="font-medium">Capital:</span> {capital}
        </p>
        <p className="break-words">
          <span className="font-medium">Region:</span> {region}
        </p>
        <p>
          <span className="font-medium">Population:</span> {population?.toLocaleString() || 'N/A'}
        </p>
        <NavLink to={`/country/${encodeURIComponent(name)}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-[12vw] mt-[2vh] cursor-pointer">Read More</button>
        </NavLink>
      </div>
    </div>
  </div>
);

export default CountryCard