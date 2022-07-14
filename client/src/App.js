import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import Login from "./Login"
import Home from "./Home"
import Garage from "./Garage"
import Bikeride from "./Bikeride"


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
        <Navbar user={user} setUser={setUser}/>
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
