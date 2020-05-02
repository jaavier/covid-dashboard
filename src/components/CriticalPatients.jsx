import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function CriticalPatients() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCritics, setTotalCritics] = useState(0);
  const [actualDate, setActualDate] = useState("Cargando...");

  const loadCriticPatients = async () => {
    try {
      let csv = await fetch(
        "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/input/ReporteDiario/PacientesCriticos.csv"
      );
      csv = await csv.text();
      const json = Papa.parse(csv);
      const _dates = json.data[0];
      setActualDate(_dates[_dates.length - page]);
      setTotalCritics(json.data[1][json.data[1].length - page]);
      setTotalPages(_dates.length);
      console.log("json ->", json);
    } catch (e) {
      console.log("Error cargando CSV");
    }
  };

  useEffect(() => {
    loadCriticPatients();
  }, [page]);

  const nextPage = () => {
    let _page = page - 1;
    if (_page == 0) return;
    setPage(_page);
  };

  const prevPage = () => {
    let _page = page + 1;
    console.log(_page, totalPages, page);
    if (_page == totalPages) return;
    setPage(_page);
  };

  return (
    <div className="border p-3 rounded-lg shadow-md">
      <div className="text-lg text-center font-semibold h-12 items-center flex justify-center">
        Pacientes Críticos
      </div>
      <div className="flex w-full my-3">
        <div className="flex-1 text-center">
          <div className="font-bold text-2xl">{totalCritics}</div>
          <div className="font-bold text-base">Total</div>
        </div>
      </div>
      <div className="w-full flex text-lg text-center font-semibold justify-center">
        <div className="border p-3 rounded-lg">
          <a
                href="https://tioprogramador.com"
                className="p-2 text-sm"
            onClick={(event) => {
              event.preventDefault();
              prevPage();
            }}
          >
            Anterior
          </a>
          <a href={actualDate} className="p-2 text-xs" onClick={event => event.preventDefault()}>
            {actualDate}
          </a>
          <a
                href="https://tioprogramador.com"
                className="p-2 text-sm"
            onClick={(event) => {
              event.preventDefault();
              nextPage();
            }}
          >
            Siguiente
          </a>
        </div>
      </div>
    </div>
  );
}
