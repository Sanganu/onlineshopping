import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import { Parallax } from "react-materialize";
import Homepage from "./pages/Homepage";

function App() {
  return (<div className="App">

    <BrowserRouter>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax1.jpg" />}
        options={{
          responsiveThreshold: 0
        }}
      />
      <Switch>
        <Route exact path="/">{Homepage}</Route>
      </Switch>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg" />}
        options={{
          responsiveThreshold: 0
        }}
      />
    </BrowserRouter>

  </div>);
}

export default App;
