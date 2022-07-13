import React, { useState } from 'react'

function BikeCard({category, age, returned, image_url}){

  const [showForm, setShowForm] = useState(false)

  function handleShowForm(e) {
    setShowForm(prevState => !prevState)
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
        {returned ? <button onClick={handleShowForm}>🚲</button> : null }
        {showForm ? 
          <form>

          </form> 
        : null }
    </div>
  )
}

export default BikeCard