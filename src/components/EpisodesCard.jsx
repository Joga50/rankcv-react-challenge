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
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ type: "episode", id });

    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} adding to favorites`);
  };

  const logAlert = () => {
    alert("You have to be logged to add espisodes to favorites!");
  };
  const currentUser = localStorage.getItem("currentUser");
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
      <button onClick={currentUser ? addToFavorites : logAlert}>
        Add to favorites
      </button>
    </div>
  );
}

export default EpisodesCard;
