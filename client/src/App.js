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
  const [currentBike, setCurrentBike] = useState([])
  const [bikeList, setBikeList] = useState([])
  const [bikerideList, setBikerideList] = useState([])

  useEffect(()=>{
    fetch("/bikes")
    .then(response => response.json())
    .then(data => setBikeList(data))
}, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  function grabBike(e){
    setCurrentBike(e)
  }

  function handleAddBike(newBike) {
    setBikeList([...bikeList, newBike])
  }

  function handleAddBikeride(newBikeride) {
    setBikerideList([...bikerideList, newBikeride])
  }

  return (
    <div className="App">
        <Navbar user={user} setUser={setUser}/>
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home grabBike={grabBike} handleAddBike={handleAddBike} bikeList={bikeList} setBikeList={setBikeList}/>
          </Route>
          <Route path="/bikeride/new">
            <Bikeride handleAddBikeride={handleAddBikeride} currentBike={currentBike} user={user}/>
          </Route>
          <Route path="/garage">
            <Garage user={user} grabBike={grabBike} setUser={setUser} handleAddBike={handleAddBike}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
