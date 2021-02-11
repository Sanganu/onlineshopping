import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import Homepage from "./pages/Homepage";
import Navigation from "./pages/Navigation";

function App() {
  return (<div className="App">

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">{Homepage}</Route>
        <Route exact path="/saved">{Homepage}</Route>
      </Switch>
     
 
    </BrowserRouter>

  </div>);
}

export default App;
