import React, { useEffect, useState } from "react";
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

  const itemExists = () => {
    alert("Card already exists in your favorites");
  };
  const currentUser = localStorage.getItem("currentUser");

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesStored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesStored);
  }, []);

  const isFavorite = favorites.find(
    (favorite) => favorite.id === id && favorite.type === "character"
  );
  if (isFavorite) {
    // El objeto ya existe en el array
  } else {
    // El objeto no existe en el array
  }
  return (
    <div
      className="character-card"
      style={{ backgroundColor: "gray", margin: "10px" }}
    >
      <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
      <h2>id: {id}</h2>
      <h3>Name: {name}</h3>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin}</p>

      <p>Current location: {location}</p>
      {/* <p>Episode: {episode}</p> */}

      <button onClick={() => (currentUser ? addToFavorites : logAlert)}>
        Add to Favorites
      </button>
    </div>
  );
}

export default CharacterCard;
