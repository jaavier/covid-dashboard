import React, { useContext } from "react";
import { AppContext } from "../state";

export default function CountryComparing() {
  const {
    first,
    second,
    firstConfirmed,
    secondConfirmed,
    firstRecovered,
    secondRecovered,
    firstDeaths,
    secondDeaths,
  } = useContext(AppContext);

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="px-2 text-center">
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más confirmados</div>
              <div className="flex justify-center py-3 font-light">
                <div className="mx-auto">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstConfirmed}</div>
                </div>
                <div className="mx-auto">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondConfirmed}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más recuperados</div>
              <div className="flex justify-center py-3 font-light">
                <div className="mx-auto">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstRecovered}</div>
                </div>
                <div className="mx-auto">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondRecovered}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más muertos</div>
              <div className="flex justify-center py-3 font-light">
                <div className="mx-auto">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstDeaths}</div>
                </div>
                <div className="mx-auto">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondDeaths}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
