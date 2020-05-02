import React, { useState, useEffect } from "react";
import Papa from "papaparse";

export default function DeathsPerRegion() {
  const [region, setRegion] = useState("");
  const [regionNumber, setRegionNumber] = useState(1);
  const [actualDate, setFechaHoy] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalRegions, SetTotalRegions] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalGlobal, setGlobalTotal] = useState(1337);

  const loadDeathsInformation = async () => {
    try {
      let csv = await fetch(
        "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto14/FallecidosCumulativo.csv"
      );
      csv = await csv.text();
      const json = Papa.parse(csv);
      const _dates = json.data[0]; // -> fila con fechas

      const region = json.data[regionNumber][0];
      const totalDates = json.data[regionNumber].length;
      const _totalDeaths = json.data[regionNumber][totalDates - page];
      const _totalGlobal = json.data[json.data.length-2][totalDates - page];
      SetTotalRegions(json.data.length - 1);
      setRegion(region);
      setGlobalTotal(_totalGlobal);
      setFechaHoy(_dates[_dates.length - page]);
      setTotalDeaths(_totalDeaths);
      setTotalPages(totalDates);
      /*
      setDisponibles(_disponibles[_disponibles.length - page]); */
    } catch (e) {
      console.log("error ->", e);
    }
  };

  useEffect(() => {
    loadDeathsInformation();
  }, [page, regionNumber]);

  const nextRegion = () => {
    let _regionNumber = regionNumber + 1;
    if (_regionNumber == totalRegions - 1) {
      setRegionNumber(1);
      return;
    }
    setRegionNumber(_regionNumber);
  };

  const prevRegion = () => {
    let _regionNumber = regionNumber - 1;
    if (_regionNumber == 0) {
      setRegionNumber(totalRegions - 2);
      return;
    }
    setRegionNumber(_regionNumber);
  };

  const nextPage = () => {
    let _page = page + 1;
    if (_page == totalPages) return;
    setPage(_page);
  };

  const prevPage = () => {
    let _page = page - 1;
    if (_page == 0) return;
    setPage(_page);
  };

  return (
    <>
      <div className="border p-3 rounded-lg shadow-md">
        <div className="text-lg text-center font-semibold">
          <div className="flex">
            <div className="flex-1 h-12 flex items-center justify-center">
              <a
                href="https://tioprogramador.com"
                className="border p-2 px-3 rounded-full font-bold outline-none text-xs"
                onClick={(event) => {
                  event.preventDefault();
                  prevRegion();
                }}
              >
                Anterior
              </a>
              <span className="w-1/2">
                Fallecidos <u>{region}</u>
              </span>
              <a
                href="https://tioprogramador.com"
                className="border p-2 px-4 rounded-full font-bold outline-none text-xs"
                onClick={(event) => {
                  event.preventDefault();
                  nextRegion();
                }}
              >
                Siguiente
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full my-3">
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{totalGlobal} </div>
            <div className="font-bold text-base">Total en Chile</div>
          </div>
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{totalDeaths}</div>
            <div className="font-bold text-base">Fallecidos</div>
          </div>
        </div>
        <div className="w-full flex py-3 text-lg text-center font-semibold justify-center">
          <div className="border p-3 rounded-lg">
            <a
              href="https://tioprogramador.com"
              className="p-2 text-sm"
              onClick={(event) => {
                event.preventDefault();
                nextPage();
              }}
            >
              Anterior
            </a>
            <a
              href={actualDate}
              className="p-2 text-xs"
              onClick={(event) => event.preventDefault()}
            >
              {actualDate}
            </a>
            <a
              href="https://tioprogramador.com"
              className="p-2 text-sm"
              onClick={(event) => {
                event.preventDefault();
                prevPage();
              }}
            >
              Siguiente
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
