import React from "react";
import CountrySelector from "../components/CountrySelector";
import CountryComparing from "../components/CountryComparing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Compare() {
  return (
    <div className="p-4">
      <div className="text-2xl text-center lg:text-left pb-4 px-2">
        Comparador COVID-19
      </div>
      <div className="grid grid-auto-flow lg:grid-cols-2">
        <div class="px-2">
        <CountrySelector first={true} />
        </div>
        <div class="px-2">
        <CountrySelector first={false} />
      </div>
      </div>
      <div className="block">
        <CountryComparing />
      </div>
    </div>
  );
}
