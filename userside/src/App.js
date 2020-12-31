import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css';
// import './App.css';
// import { Parallax } from "react-materialize";
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";

function App() {
  return (<div className="App">

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">{Homepage}</Route>
      </Switch>
     
 
    </BrowserRouter>

  </div>);
}

export default App;
