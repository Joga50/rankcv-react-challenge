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
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      logAlert();
      return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("favorites:", favorites);
    const isFavorite = favorites.find(
      (favorite) => favorite.id === id && favorite.type === "character"
    );
    if (isFavorite) {
      itemExists();
    } else {
      favorites.push({ type: "character", id });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${name} added to favorites`);
    }
  };

  const logAlert = () => {
    alert("you have to be logged to add cards to favorites");
  };

  const itemExists = () => {
    alert("card already exist in you favorites folder");
  };

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesStored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesStored);
  }, []);

  const isFavorite = favorites.find(
    (favorite) => favorite.id === id && favorite.type === "character"
  );

  return (
    <div
      className="character-card"
      style={{ backgroundColor: "gray", margin: "10px" }}
    >
      <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
      <h2>id: {id}</h2>
      <h3>Nombre: {name}</h3>
      <p>Especie: {species}</p>
      <p>Estado: {status}</p>
      <p>Género: {gender}</p>
      <p>Origen: {origin}</p>

      <p>Ubicación actual: {location}</p>

      <button onClick={addToFavorites}>Agregar a Favoritos</button>
    </div>
  );
}

export default CharacterCard;
