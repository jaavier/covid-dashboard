import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../state";

export default function CountrySelector({ first = false }) {
  const name = first ? "first" : "second";

  const {
    isoCountry,
    setIsoCountry,
    setFirst,
    setSecond,
    firstConfirmed,
    setFirstConfirmed,
    secondConfirmed,
    setSecondConfirmed,
    firstRecovered,
    setFirstRecovered,
    secondRecovered,
    setSecondRecovered,
    firstDeaths,
    setFirstDeaths,
    secondDeaths,
    setSecondDeaths,
  } = useContext(AppContext);

  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState(null);
  const [results, setResults] = useState([]);
  const [lastDate, setLastDate] = useState(null);

  let totalConfirmed = 0;
  let totalRecovered = 0;
  let totalDeaths = 0;

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
    try {
      let data = await fetch(
        `https://api.covid19api.com/total/country/${countrySelected}`
      );

      data = await data.json();
      for (let result of data) {
        totalConfirmed = parseInt(result.Confirmed);
        totalRecovered = parseInt(result.Recovered);
        totalDeaths = parseInt(result.Deaths);
        setLastDate(result.Date.split("T")[0]);
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
      <div className="border rounded-lg shadow-lg pt-3 pb-6 mx-2 mb-6">
        <div className="w-full">
          <div className="py-2 text-center text-2xl">País</div>
          <div className="p-2">
            <select
              className="w-full p-2 border border-black"
              onChange={(event) => {
                const countrySlug = event.target.value;
                setCountrySelected(countrySlug);
                if (first) setFirst(isoCountry[countrySlug]);
                else setSecond(isoCountry[countrySlug]);
              }}
            >
              <option value="" defaultValue>
                Seleccionar país
              </option>
              {(countries.length &&
                countries.map(({ Country, Slug, ISO2 }, index) => (
                  <option value={Slug} key={index}>
                    {Country} ({ISO2})
                  </option>
                ))) || <option value="">Cargando Países</option>}
            </select>
          </div>
          <div className="lg:block hidden mt-2">
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
                  <tr className="text-center border-b border-gray-600 font-semibold">
                    <td className="py-2">{lastDate || "#"}</td>
                    <td className="py-2">
                      {first && firstRecovered.toLocaleString() } {!first && secondRecovered.toLocaleString() }
                    </td>
                    <td className="py-2">
                      {first && firstConfirmed.toLocaleString() } {!first && secondConfirmed.toLocaleString() }
                    </td>
                    <td className="py-2">
                      {first && firstDeaths.toLocaleString() }
                      {!first && secondDeaths.toLocaleString() }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
