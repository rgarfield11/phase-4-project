import React from 'react'
import {useHistory} from "react-router-dom"

function BikeCard({bike, category, age, returned, image_url, grabBike}){

  const history= useHistory()

  function handleFormRoute(e) {
    grabBike(bike)
    history.push("/bikeride/new")
    // console.log(bike)
    
  }

  return (
    // returned ? <div>
    //     <img src={image_url}/>
    //     <h3>{age}</h3>
    //     <h3>{category}</h3>
    // </div> : null

    <div className="bikeCard">
        <img className="bikeImage" src={image_url} alt="bike"/>
        <h2>{age}</h2>
        <h2>{category} Bike</h2>
        {returned ? <button value={bike.id} onClick={handleFormRoute}>🚲</button> : null }
    </div>
  )
}

export default BikeCard