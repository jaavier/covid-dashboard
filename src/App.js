import React, { useEffect, useState } from "react";
import "./App.css";
import { AppProvider } from "./state";
import Compare from './pages/compare';
import Resumen from './pages/resumen';

// Falta migrar a algún router

function App() {
  const [page, setPage] = useState('resumen');

  return (
    <AppProvider>
      <div className="App">
        <div className="p-2">
          { page === "compare" && <Compare /> }
          { page === "resumen" && <Resumen /> }
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
