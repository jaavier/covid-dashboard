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

  firstConfirmed = parseInt(firstConfirmed || 0);
  secondConfirmed = parseInt(secondConfirmed || 0);
  firstRecovered = parseInt(firstRecovered || 0);
  secondRecovered = parseInt(secondRecovered || 0);
  firstDeaths = parseInt(firstDeaths || 0);
  secondDeaths = parseInt(secondDeaths || 0);

  return (
    <>
      <div className="flex mt-1">
        <div className="w-full">
          <div className="px-2 text-center">
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más confirmados</div>
              <div className="flex justify-center py-3 font-light px-2">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstConfirmed.toLocaleString()}</div>
                </div>
                <div className="w-1/4">
                  <div class="text-4xl">
                    {firstConfirmed > secondConfirmed && ">"}
                    {firstConfirmed < secondConfirmed && "<"}
                    {firstConfirmed == secondConfirmed &&
                      firstConfirmed > 0 &&
                      secondConfirmed > 0 &&
                      "="}
                  </div>
                </div>
                <div className="flex-1">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondConfirmed.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más recuperados</div>
              <div className="flex justify-center py-3 font-light">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstRecovered.toLocaleString()}</div>
                </div>
                <div className="flex-1">
                  <div class="text-4xl">
                    {firstRecovered > secondRecovered && ">"}
                    {firstRecovered < secondRecovered && "<"}
                    {firstRecovered == secondRecovered &&
                      firstRecovered > 0 &&
                      secondRecovered > 0 &&
                      "="}
                  </div>
                </div>
                <div className="flex-1">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondRecovered.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="border py-4 mb-2 rounded-lg">
              <div className="text-2xl">Más muertos</div>
              <div className="flex justify-center py-3 font-light">
                <div className="flex-1">
                  <div>{first || "Seleccionar País"}</div>
                  <div>{firstDeaths.toLocaleString()}</div>
                </div>
                <div className="flex-1">
                  <div class="text-4xl">
                    {firstDeaths > secondDeaths && ">"}
                    {firstDeaths < secondDeaths && "<"}
                    {firstDeaths == secondDeaths &&
                      firstDeaths > 0 &&
                      secondDeaths > 0 &&
                      "="}
                  </div>
                </div>
                <div className="flex-1">
                  <div>{second || "Seleccionar País"}</div>
                  <div>{secondDeaths.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <a href="https://github.com/jaavier/covid-dashboard">View in GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
