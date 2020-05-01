import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../state";

export default function CountrySelector({ first = false }) {
  const name = first ? "first" : "second";

  const {
    isoCountry,
    setIsoCountry,
    setFirst,
    setSecond,
    setFirstConfirmed,
    setSecondConfirmed,
    setFirstRecovered,
    setSecondRecovered,
    setFirstDeaths,
    setSecondDeaths,
  } = useContext(AppContext);

  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [results, setResults] = useState([]);

  const loadCountriesList = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/countries");
      const countries = await response.json();
      setCountries(countries);
      for (let country of countries) {
        setIsoCountry(
          Object.assign(isoCountry, {}, { [country.Slug]: country.Country })
        );
      }
    } catch (e) {
      console.log("loadCountriesList -> e", e);
    }
  };

  const loadData = async () => {
    if (countrySelected === null) return;

    let totalConfirmed = 0;
    let totalRecovered = 0;
    let totalDeaths = 0;

    try {
      let data = await fetch(
        `https://api.covid19api.com/total/country/${countrySelected}`
      );

      data = await data.json();
      setResults(data);

      for (let result of data) {
        totalConfirmed = totalConfirmed + result.Confirmed;
        totalRecovered = totalRecovered + result.Recovered;
        totalDeaths = totalDeaths + result.Deaths;
      }

      if (first) {
        setFirstConfirmed(totalConfirmed);
        setFirstRecovered(totalRecovered);
        setFirstDeaths(totalDeaths);
      } else {
        setSecondConfirmed(totalConfirmed);
        setSecondRecovered(totalRecovered);
        setSecondDeaths(totalDeaths);
      }
    } catch (e) {
      console.log("loadCountriesList -> e", e);
    }
  };

  useEffect(() => {
    loadCountriesList();
  }, []);

  useEffect(() => {
    if (countrySelected === null) return;
    loadData();
  }, [countrySelected]);

  return (
    <>
      <div className="flex border rounded-lg shadow-lg pt-3 pb-6">
        <div className="w-full">
          <div className="py-2 text-center text-2xl">País</div>
          <div className="py-2 px-8">
            <select
              className="w-full p-2 border border-black h-8"
              onChange={(event) => {
                const countrySlug = event.target.value;
                setCountrySelected(countrySlug);
                if (first) setFirst(isoCountry[countrySlug]);
                else setSecond(isoCountry[countrySlug]);
              }}
            >
              <option value="" defaultValue>
                Selecciona un país
              </option>
              {(countries.length &&
                countries.map(({ Country, Slug, ISO2 }, index) => (
                  <option value={Slug} key={index}>
                    {Country} ({ISO2})
                  </option>
                ))) || <option value="">Cargando Países</option>}
            </select>
          </div>
          <div className="w-full mt-2">
            <div>
              <table className="bg-blue-800 text-blue-200 w-full">
                <thead>
                  <tr>
                    <th className="py-3">Fecha</th>
                    <th>Recuperados</th>
                    <th>Confirmados</th>
                    <th>Muertos</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-300 text-gray-700">
                  {(results.length &&
                    results.map((result, index) => {
                      const FullDate = result.Date.split("T")[0];
                      const { Recovered, Confirmed, Deaths } = result;
                      return (
                        <tr
                          className="text-center border-b border-gray-600 font-semibold"
                          key={index}
                        >
                          <td className="py-2">{FullDate}</td>
                          <td className="py-2">{Recovered}</td>
                          <td className="py-2">{Confirmed}</td>
                          <td className="py-2">{Deaths}</td>
                        </tr>
                      );
                    })) || <tr></tr>}
                </tbody>
              </table>
              {!results.length && (
                <div className="text-center">Selecciona un país </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
