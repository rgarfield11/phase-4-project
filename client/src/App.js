import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import Login from "./Login"
import Home from "./Home"
import Garage from "./Garage"
import Bikeride from "./Bikeride"


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bikeride/new">
            <Bikeride />
          </Route>
          <Route path="/garage">
            <Garage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
