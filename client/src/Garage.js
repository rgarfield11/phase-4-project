import React, { useState, useEffect } from 'react'
import BikeCard from "./BikeCard"

function Garage({user, setUser, handleAddBike, grabBike}) {

  const [updateForm, setUpdateForm] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [newBikeForm, setNewBikeForm] = useState(false)
  const [category, setCategory] = useState("")
  const [age, setAge] = useState("")
  const [imageUrl, setImageUrl] = useState("") 
  
  const [ownedBikes, setOwnedBikes] = useState([])

  useEffect(()=>{
    fetch(`/users/${user.id}`)
    .then(response => response.json())
    .then(data => setOwnedBikes(data.owned_bikes))
}, [user.id])

const renderOwnedBikes = ownedBikes.map((bike)=>{
  return <BikeCard grabBike={grabBike} key={bike.id} bike={bike} category={bike.category} age={bike.age} returned={bike.returned} image_url={bike.image_url}/>
})

  function handleDeleteUser() {
    console.log(user)
    fetch(`/users/${user.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleUpdateUser() {
    setUpdateForm(prevState => !prevState)
  }

  function handleSubmitUpdateUser() {
    fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              location: location,
              username: username,
              password: password,
              password_confirmation: passwordConfirmation
            }),
            }).then((r) => {
              setIsLoading(false);
              r.json().then((user) => setUser(user));
            });
  }

  function handleCreateBike() {
    setNewBikeForm(prevState => !prevState)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleAge(e) {
    setAge(e.target.value)
  }

  function handleImage(e) {
    setImageUrl(e.target.value)
  }

  function handleBikeSubmit(e) {
    fetch("/bikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        age: age,
        image_url: imageUrl,
        owner_id: user.id,
        returned: true
      }),
    }).then((r) => {
      r.json().then((newBike) => {
        handleAddBike(newBike)
        handleCreateBike()
      });
    });
  }

  return (
    <div>
      <h1>Hello, {user.first_name}!</h1>
      {renderOwnedBikes}
      <button onClick={handleCreateBike} >Add a Bike</button>
      { newBikeForm ? 
      <form onSubmit={handleBikeSubmit}>
        <label htmlFor="category">* Category</label>
        <select value={category} onChange={handleCategory}>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Cruiser">Cruiser</option>
          <option value="Tandem">Tandem</option>
        </select>
       <label htmlFor="age">* Age</label>
       <select value={age} onChange={handleAge}>
          <option value="Adult">Adult</option>
          <option value="Child">Child</option>
        </select>
        <label htmlFor="image_url">Image</label>
        <input
          type="text"
          id="image_url"
          value={imageUrl}
          onChange={handleImage}
        />
        <button type="submit">Submit Bike</button>
      </form> : null}
      <button onClick={handleUpdateUser}>Update Account</button>
      <button onClick={handleDeleteUser}>Delete Account</button>
      {updateForm ? 
      <form onSubmit={handleSubmitUpdateUser}>
      <label htmlFor="first_name">* First Name</label>
      <input
        type="text"
        id="first"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
       <label htmlFor="last_name">* Last Name</label>
      <input
        type="text"
        id="last"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
       <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <label htmlFor="password">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
  </form> : null}
    </div>
  )
}

export default Garage