import { NavLink } from "react-router-dom";

const CountryCard = ({ name, capital, region, population, flag }) => (
  <div className="bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-xl shadow-xl p-5 flex flex-col gap-4 w-full max-w-sm mx-auto hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
    
    {/* Flag */}
    <div className="w-full aspect-video overflow-hidden rounded-lg border border-white/20">
      <img 
        src={flag} 
        alt={`${name} flag`} 
        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
      />
    </div>

    {/* Info Section */}
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold tracking-tight">{name}</h2>

      <div className="text-sm text-white/80 leading-snug space-y-1">
        <p>
          <span className="font-medium text-white">Capital:</span> {capital || "N/A"}
        </p>
        <p>
          <span className="font-medium text-white">Region:</span> {region || "N/A"}
        </p>
        <p>
          <span className="font-medium text-white">Population:</span> {population?.toLocaleString() || "N/A"}
        </p>
      </div>

      {/* Read More Button */}
      <NavLink to={`/country/${encodeURIComponent(name)}`}>
        <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg text-sm font-semibold tracking-wide">
          Read More →
        </button>
      </NavLink>
    </div>
  </div>
);

export default CountryCard;