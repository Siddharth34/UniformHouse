import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavBar from "./Componants/NavBar";
import MesurmentForm from "./Componants/MesurmentForm";
import PhotoGalary from "./Componants/PhotoGalary";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/PhotoGalary" component={PhotoGalary} />
          <Route exact path="/" component={MesurmentForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
