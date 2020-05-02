import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-blue-700 text-white p-4 relative border-blue-800 border">
        <div className="absolute h-8 top-0 mt-2 hidden lg:block px-2">
          <div class="text-2xl">
            <a href="https://tioprogramador.com">@tioprogramador</a>
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <Link to="/comparecountries">Comparar Países</Link>
          </div>
          <div className="ml-3 border-l border-gray-200 px-3">
            <Link to="/chile">Resumen Chile</Link>
          </div>
        </div>
      </div>
    </>
  );
}
