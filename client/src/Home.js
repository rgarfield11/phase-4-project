import React from 'react'
import BikeCard from "./BikeCard"

function Home({grabBike, bikeList}) {

  
  const renderBikes = bikeList.map((bike)=>{
    return <BikeCard key={bike.id} bike={bike} category={bike.category} age={bike.age} returned={bike.returned} image_url={bike.image_url} grabBike={grabBike}/>
  })



  return (
    <div>
      Home
      {renderBikes}
    </div>
    
  )
}

export default Home