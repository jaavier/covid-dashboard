import React, { useState } from "react";
import "./App.css";
import { AppProvider } from "./state";
import Compare from "./pages/compare";
import Summary from "./pages/summary";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Falta migrar a algún router

function App() {
  const [page, setPage] = useState("resumen");

  return (
    <Router>
      <Switch>
        <AppProvider>
          <div className="App">
            <div className="">
              <Navbar />
              <Route path="/chile">
                <Summary />
              </Route>
              <Route path="/comparecountries">
                <Compare />
              </Route>
            </div>
          </div>
        </AppProvider>
      </Switch>
    </Router>
  );
}

export default App;
