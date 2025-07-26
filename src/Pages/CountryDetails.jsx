import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapPin, Users, Globe, Phone, Calendar, Flag, Award, Languages } from 'lucide-react';

export function CountryDetails() {
  const { name } = useParams();
  // console.log(name);
  const [country, setCountry] = useState(null);
  const [loader, setLoader] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const fetchCountry = async () => {
    try {
      const countrydata = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      const data = countrydata.data[0]
      // console.log(data.name)

      setCountry({
        name: data.name?.common,
        officialName: data.name?.official,
        nativeName: data.name?.nativeName
          ? Object.values(data.name.nativeName)[0].common
          : "N/A",
        capital: data.capital?.[0] || "N/A",
        region: data.region,
        subregion: data.subregion,
        population: data.population,
        continents: data.continents?.join(", "),
        flag: data.flags?.png || data.flags?.svg,
        flagAlt: data.flags?.alt,
        coatOfArms: data.coatOfArms?.png,
        languages: data.languages
          ? Object.values(data.languages).join(", ")
          : "N/A",
        currencies: data.currencies
          ? Object.values(data.currencies).map((c) => c.name).join(", ")
          : "N/A",
        borders: data.borders?.join(", ") || "None",
        timezones: data.timezones?.join(", "),
        callingCode: data.idd?.root && data.idd?.suffixes
          ? `${data.idd.root}${data.idd.suffixes[0]}`
          : "N/A",
        mapLink: data.maps?.googleMaps,
        unMember: data.unMember ? "Yes" : "No",
        startOfWeek: data.startOfWeek,
      });

    } catch (error) {
      console.log("Error", error)
    }
    finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    fetchCountry()

  }, [])

  if (loader) return <h1 className="text-white text-center mt-10">Loading country data...</h1>;

  if (!country) return <h1 className="text-white text-center mt-10">Country not found</h1>;


  const statsCards = [
    { icon: Users, label: "Population", value: country.population.toLocaleString(), color: "from-purple-500 to-pink-500" },
    { icon: Languages, label: "Languages", value: country.languages.split(',').length, color: "from-blue-500 to-cyan-500" },
    { icon: Globe, label: "Region", value: country.region, color: "from-green-500 to-emerald-500" },
    { icon: Phone, label: "Calling Code", value: country.callingCode, color: "from-orange-500 to-red-500" }
  ];

  const detailItems = [
    { label: "Official Name", value: country.officialName, icon: Flag },
    { label: "Native Name", value: country.nativeName, icon: Globe },
    { label: "Capital", value: country.capital, icon: MapPin },
    { label: "Subregion", value: country.subregion, icon: Globe },
    { label: "Continent", value: country.continents, icon: Globe },
    { label: "Currencies", value: country.currencies, icon: Award },
    { label: "Borders", value: country.borders || "None", icon: MapPin },
    { label: "UN Member", value: country.unMember ? "Yes" : "No", icon: Award },
    { label: "Start of Week", value: country.startOfWeek, icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-black md:p-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 tracking-tight">
            {country.name}
          </h1>
          <p className="text-xl text-white/70 font-light tracking-wide">
            Discover the beauty and culture
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              onMouseEnter={() => setHoveredCard(`stat-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 text-white mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              </div>
              {hoveredCard === `stat-${index}` && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Flag Section */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <img
                  src={country.flag}
                  alt={country.flagAlt}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">National Flag</h3>
                  <p className="text-white/60">Symbol of national identity</p>
                </div>
              </div>
            </div>

            {/* Map Link Card */}
            {country.mapLink && (
              <a
                href={country.mapLink}
                target="_blank"
                rel="noreferrer"
                className="block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Explore Location</h4>
                    <p className="text-white/60">View on Google Maps</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              Country Details
            </h2>

            <div className="space-y-3">
              {detailItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 transform transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] group"
                  onMouseEnter={() => setHoveredCard(`detail-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white/60 mb-1">{item.label}</p>
                      <p className="text-white font-semibold text-lg leading-tight break-words">{item.value}</p>
                    </div>
                  </div>
                  {hoveredCard === `detail-${index}` && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-xl"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Languages Badge */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Languages className="w-6 h-6 text-indigo-400" />
                Spoken Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.languages.split(',').map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200"
                  >
                    {lang.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};
