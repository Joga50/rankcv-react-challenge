import React from "react";

function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  episode,
}) {
  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ type: "character", id });

    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} adding to favorites`);
  };

  const logAlert = () => {
    alert("You have to be logged to add characters to favorites!");
  };
  const currentUser = localStorage.getItem("currentUser");
  return (
    <div className="character-card" style={{ backgroundColor: "gray" }}>
      <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
      <h2>id: {id}</h2>
      <h3>Name: {name}</h3>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin}</p>

      <p>Current location: {location}</p>
      {/* <p>Episode: {episode}</p> */}

      <button onClick={currentUser ? addToFavorites : logAlert}>
        Add to Favorites
      </button>
    </div>
  );
}

export default CharacterCard;
