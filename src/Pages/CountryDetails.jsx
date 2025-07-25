import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function CountryDetails() {
    const { name } = useParams();
    // console.log(name);
    const [country, setCountry] = useState(null);
    const [loader, setLoader] = useState(true);

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
    

    return (<section className="text-white p-6 max-w-5xl mx-auto bg-slate-900 min-h-screen rounded-xl shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        {country.name}
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Flag + Coat of Arms */}
        <div className="flex flex-col items-center gap-4 w-full sm:w-1/2">
          <img
            src={country.flag}
            alt={country.flagAlt || `${country.name} flag`}
            className="w-64 rounded"
          />
         
        </div>

        {/* Details */}
        <div className="w-full sm:w-1/2 space-y-3 text-lg">
          <p><strong>Official Name:</strong> {country.officialName}</p>
          <p><strong>Native Name:</strong> {country.nativeName}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Continent:</strong> {country.continents}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages}</p>
          <p><strong>Currencies:</strong> {country.currencies}</p>
          {/* <p><strong>Timezones:</strong> {country.timezones}</p> */}
          <p><strong>Borders:</strong> {country.borders}</p>
          <p><strong>Calling Code:</strong> {country.callingCode}</p>
          <p><strong>UN Member:</strong> {country.unMember}</p>
          <p><strong>Start of Week:</strong> {country.startOfWeek}</p>

          {country.mapLink && (
            <a
              href={country.mapLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline hover:text-blue-200 mt-2 inline-block"
            >
              View on Google Maps
            </a>
          )}
        </div>
      </div>
    </section>
    );

};
