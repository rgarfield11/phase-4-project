import React, { useState } from 'react'

function Bikeride({currentBike, user, handleAddBikeride}) {

  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  function handleStart(e) {
    setStart(e.target.value)
  }

  function handleEnd(e) {
    setEnd(e.target.value)
  }

  
  
 

  function handleSubmitBikeride(e) {
    e.preventDefault();
    fetch("/bikerides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner_id: currentBike.owner.id,
        renter_id: user.id,
        bike_id: currentBike.id,
        start: start,
        end: end
      }),
    }).then((r) => {
      r.json().then((newBikeRide) => {
        handleAddBikeride(newBikeRide)
      });
    });
  }


  return (
    <div>
      <h2>Get Rollin!</h2>
      <img className="rideImage" alt="bike"  src={currentBike.image_url}/>
    
      <form onSubmit={handleSubmitBikeride}>
        <label>Pick-up </label>
        <input 
          onChange={handleStart}
          type="datetime-local" 
          id="start_date" 
          name="start_date"
          value={start}
          min={Date.now} 
          max="2024-12-31"/>
          <br/>
          <label>Drop-off </label>
        <input 
          onChange={handleEnd}
          type="datetime-local" 
          id="end_date" 
          name="end_date"
          value={end}
          min={Date.now} 
          max="2024-12-31"/>
          <br/>
        <button type="submit">Confirm Rental</button>
      </form>
    </div>
  )
}

export default Bikeride

// first.start.strftime("%a, %B %d %T %P")