import axios from "axios"
import { useEffect, useState } from "react"
import CountryCard from "../Components/Cards"
import { SearchFilter } from "../Components/SearchFilter";

export const Country = () => {
    const [countries, setCountries] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState("")
    const [filter,setFilter] = useState("all")
    async function callApi() {
        try {
            const fetchData = await axios.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population")
            // console.log(fetchData.data)
            const formattedData = fetchData.data.map((c, i) => ({
                id: i,
                name: c.name.common,
                capital: c.capital?.[0] || "N/A",
                region: c.region,
                population: c.population,
                flag: c.flags?.png,
            }))
            setCountries(formattedData)

        } catch (error) {
            console.log("error", error)
        } finally{
            setLoading(false)
        }
    }
    console.log(search,filter)

    useEffect(() => {
        
        callApi()
    }, [])
  
  const searchCountry = (country) => {
  if (search && country.name) {
    return country.name.toLowerCase().includes(search.toLowerCase());
  }
  return country.name;
};

   const filterCountries = countries.filter((country)=>searchCountry(country))
    if (loading) return <h1 className="text-white text-center mt-10">LOADING…</h1>;
  return (
  <section className="text-white bg-black min-h-screen p-4 sm:p-6 lg:p-8">
      
      <div className="max-w-7xl mx-auto mt-[10vh]">
        <h1 className="text-2xl  sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white">
          Countries of the World
        </h1>
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
          {filterCountries.map((country) => (
            <CountryCard
              key={country.id}
              name={country.name}
              capital={country.capital}
              region={country.region}
              population={country.population}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};