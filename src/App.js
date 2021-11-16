import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavBar from "./Componants/NavBar";
import MesurmentForm from "./Componants/MesurmentForm";
import Galary from "./Componants/Galary";
import Home from "./Componants/Home";
import ContactUs from "./Componants/ContactUs";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/MesurmentForm" component={MesurmentForm} />
          <Route exact path="/Galary" component={Galary} />
          <Route exact path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
