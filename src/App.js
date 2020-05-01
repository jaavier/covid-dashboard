import React, { useEffect, useState } from "react";
import "./App.css";
import CountrySelector from "./components/CountrySelector";
import CountryComparing from "./components/CountryComparing";
import { AppProvider } from "./state";

function App() {
  return (
    <AppProvider>
    <div className="App">
      <div className="p-2">
        <div className="text-2xl">COVID-19 Dashboard</div>
        <div className="flex w-full">
          <div className="flex-1">
            <CountrySelector first={true} />
          </div>
          <div className="flex-1">
            <CountryComparing />
          </div>
          <div className="flex-1">
            <CountrySelector first={false} />
          </div>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
