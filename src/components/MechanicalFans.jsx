import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function MechanicalFans() {
  const [fechaHoy, setFechaHoy] = useState(null);
  const [total, setTotal] = useState(0);
  const [disponibles, setDisponibles] = useState(0);
  const [ocupados, setOcupados] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const cargarInformacionVentiladores = async () => {
    console.log("page ->", page, "totalPages ->", totalPages);
    try {
      let csv = await fetch(
        "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/input/ReporteDiario/NumeroVentiladores.csv"
      );
      csv = await csv.text();
      const json = Papa.parse(csv);
      const _fechas = json.data[0]; // -> fila con fechas
      const _total = json.data[1]; // -> Fila con ventiladores total
      const _disponibles = json.data[2]; //-> Fila con ventiladores disponibles
      const _ocupados = json.data[3]; //-> Fila con ventiladores ocupados
      setFechaHoy(_fechas[_fechas.length - page]);
      setTotal(_total[_total.length - page]);
      setTotalPages(_total.length);
      setDisponibles(_disponibles[_disponibles.length - page]);
      setOcupados(_ocupados[_ocupados.length - page]);
    } catch (e) {}
  };

  useEffect(() => {
    cargarInformacionVentiladores();
  }, [page]);

  const nextPage = () => {
    let _page = page - 1;
    if (_page == 0) return;
    setPage(_page);
  };

  const prevPage = () => {
    let _page = page + 1;
    if (_page == totalPages) return;
    setPage(_page);
  };

  return (
    <>
      <div className="border p-3 rounded-lg shadow-md">
        <div className="text-lg text-center font-semibold h-12 items-center flex justify-center">
          Número Ventiladores
        </div>
        <div className="flex w-full my-3 h-12">
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{total} </div>
            <div className="font-bold text-base">Total</div>
          </div>
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{ocupados}</div>
            <div className="font-bold text-base">Ocupados</div>
          </div>
          <div className="flex-1 text-center">
            <div className="font-bold text-lg">{disponibles}</div>
            <div className="font-bold text-base">Disponibles</div>
          </div>
        </div>
        <div className="w-full flex py-3 text-lg text-center font-semibold justify-center">
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
            <a href={fechaHoy} className="p-2 text-xs" onClick={event => event.preventDefault()}>
              {fechaHoy}
            </a>
            <a
                href="https://tioprogramador.com"
                className="p-2 text-sm"
              onClick={(event) => {
                event.preventDefault()
                nextPage();
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
