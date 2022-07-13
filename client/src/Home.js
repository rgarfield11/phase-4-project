import React, { useState, useEffect } from 'react'
import BikeCard from "./BikeCard"

function Home() {

  const [bikeList, setBikeList] = useState([])

  useEffect(()=>{
    fetch("/bikes")
    .then(response => response.json())
    .then(data => setBikeList(data))
}, [])
  
  const renderBikes = bikeList.map((bike)=>{
    return <BikeCard key={bike.id} category={bike.category} age={bike.age} returned={bike.returned} image_url={bike.image_url}/>
  })

  return (
    <div>
      Home
      {renderBikes}
    </div>
    
  )
}

export default Home