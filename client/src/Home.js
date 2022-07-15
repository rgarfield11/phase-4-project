import React from 'react'
import BikeCard from "./BikeCard"

function Home({grabBike, bikeList}) {

  
  const renderBikes = bikeList.map((bike)=>{
    return <BikeCard username={bike.owner.username} location={bike.owner.location} key={bike.id} bike={bike} category={bike.category} age={bike.age} returned={bike.returned} image_url={bike.image_url} grabBike={grabBike}/>
  })



  return (
    <div>
      <center><p className="mastHead">Tandm</p></center>
      {renderBikes}
    </div>
    
  )
}

export default Home