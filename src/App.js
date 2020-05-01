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
          <div className="text-2xl text-center lg:text-left py-4">COVID-19 Comparador</div>
          <div className="flex">
            <div class="w-full">
              <CountrySelector first={true} />
            </div>
            <div class="w-full">
              <CountrySelector first={false} />
            </div>
          </div>
          <div className="block">
              <CountryComparing />
            </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
