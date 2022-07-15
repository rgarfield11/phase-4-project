import React from 'react'
import {useHistory} from "react-router-dom"
import BicycleRace from "./BicycleRace.mp3"

function BikeCard({bike, category, age, returned, image_url, grabBike}){

  const history= useHistory()

  
  const audio = new Audio(BicycleRace)

  function handleFormRoute() {
    grabBike(bike)
    history.push("/bikeride/new")
    // console.log(bike)
    
 
    audio.play()
    
  }


  return (
    // returned ? <div>
    //     <img src={image_url}/>
    //     <h3>{age}</h3>
    //     <h3>{category}</h3>
    // </div> : null

    <div className="bikeCard">
        <img className="bikeImage" src={image_url} alt="bike"/>
        <h3>{age}</h3>
        <h3>{category} Bike</h3>
        {returned ? <button className="rentMe" value={bike.id} onClick={handleFormRoute}>🚲 Rent me! 🚲</button> : null }
    </div>
  )
}

export default BikeCard