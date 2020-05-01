import React, { useContext } from "react";
import { AppContext } from "../state";

export default function CountryComparing() {
  let {
    first,
    second,
    firstConfirmed,
    secondConfirmed,
    firstRecovered,
    secondRecovered,
    firstDeaths,
    secondDeaths,
  } = useContext(AppContext);

  firstConfirmed = parseInt(firstConfirmed || 0).toLocaleString();
  secondConfirmed = parseInt(secondConfirmed || 0).toLocaleString();
  firstRecovered = parseInt(firstRecovered || 0).toLocaleString();
  secondRecovered = parseInt(secondRecovered || 0).toLocaleString();
  firstDeaths = parseInt(firstDeaths || 0).toLocaleString();
  secondDeaths = parseInt(secondDeaths || 0).toLocaleString();

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="px-2 text-center">
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más confirmados</div>
              <div className="flex justify-center py-3 font-light">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstConfirmed}</div>
                </div>
                <div className="flex-1">
                  <div class="text-4xl">
                    {firstConfirmed > secondConfirmed && ">"}
                    {firstConfirmed < secondConfirmed && "<"}
                    {firstConfirmed == secondConfirmed && firstConfirmed > 0 && secondConfirmed > 0 && "="}
                  </div>
                </div>
                <div className="flex-1">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondConfirmed}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más recuperados</div>
              <div className="flex justify-center py-3 font-light">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstRecovered}</div>
                </div>
                <div className="flex-1">
                  <div class="text-4xl">
                    {firstRecovered > secondRecovered && ">"}
                    {firstRecovered < secondRecovered && "<"}
                    {firstRecovered == secondRecovered && firstRecovered > 0 && secondRecovered > 0 && "="}
                  </div>
                </div>
                <div className="flex-1">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondRecovered}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más muertos</div>
              <div className="flex justify-center py-3 font-light">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstDeaths}</div>
                </div>
                <div className="flex-1">
                  <div class="text-4xl">
                    {firstDeaths > secondDeaths && ">"}
                    {firstDeaths < secondDeaths && "<"}
                    {firstDeaths == secondDeaths && firstDeaths > 0 && secondDeaths > 0 && "="}
                  </div>
                </div>
                <div className="flex-1">
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
