import React, { useState, useEffect, useContext } from "react";
import Papa from "papaparse";
import { AppContext } from "../state";
import CriticalPatients from "../components/CriticalPatients";
import MechanicalFans from "../components/MechanicalFans";
import DeathsPerRegion from "../components/DeathsPerRegion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Summary() {
  return (
    <div className="p-4">
      <div className="w-full">
        <div className="text-2xl pb-4 lg:text-left text-center">
          Resumen COVID-19 en Chile
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-auto-flow lg:grid-cols-2 gap-3">
          <CriticalPatients />
          <MechanicalFans />
          <DeathsPerRegion />
        </div>
      </div>
    </div>
  );
}
