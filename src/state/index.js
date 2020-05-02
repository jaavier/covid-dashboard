import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [information, setInformation] = useState({});
  const [isoCountry, setIsoCountry] = useState({});

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const [firstConfirmed, setFirstConfirmed] = useState(0);
  const [secondConfirmed, setSecondConfirmed] = useState(0);

  const [firstRecovered, setFirstRecovered] = useState(0);
  const [secondRecovered, setSecondRecovered] = useState(0);

  const [firstDeaths, setFirstDeaths] = useState(0);
  const [secondDeaths, setSecondDeaths] = useState(0);

  // Pacientes críticos
  const [criticosHoy, setCriticosHoy] = useState(0);
  const [criticosAyer, setCriticosAyer] = useState(0);

  const [fechaHoy, setFechaHoy] = useState(null);
  const [fechaAyer, setFechaAyer] = useState(null);
  // Fin pacientes críticos

  return (
    <AppContext.Provider
      value={{
        information,
        setInformation,
        isoCountry,
        setIsoCountry,

        first,
        setFirst,
        second,
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

        // pacientes críticos

        criticosHoy,
        setCriticosHoy,
        criticosAyer,
        setCriticosAyer,

        fechaHoy,
        setFechaHoy,
        fechaAyer,
        setFechaAyer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
