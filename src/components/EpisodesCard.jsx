import React from "react";

function EpisodesCard({
  id,
  name,
  air_date,
  episode,
  characters,
  url,
  created,
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
      (favorite) => favorite.id === id && favorite.type === "episode"
    );
    if (isFavorite) {
      itemExists();
    } else {
      favorites.push({ type: "episode", id });
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

  return (
    <div
      className="eposides-card"
      style={{ backgroundColor: "gray", margin: "10px" }}
    >
      EpisodesCard
      <p>id: {id}</p>
      <p>Name: {name}</p>
      <p>Air date: {air_date}</p>
      <p>Episode: {episode}</p>
      <p>Url: {url}</p>
      <p>Created: {created}</p>
      <button onClick={addToFavorites}>Agregar a Favoritos</button>
    </div>
  );
}

export default EpisodesCard;
