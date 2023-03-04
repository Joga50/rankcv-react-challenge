import React from "react";

function LocationsCard({ id, name, type, dimension, created, residents }) {
  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ type: "location", id });

    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} adding to favorites`);
  };

  const logAlert = () => {
    alert("You have to be logged to add locations to favorites!");
  };
  const currentUser = localStorage.getItem("currentUser");
  return (
    <div
      className="location-card"
      style={{ backgroundColor: "gray", margin: "10px" }}
    >
      LocationsCard
      <p>id : {id}</p>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>
        Residents:{" "}
        {residents?.map((resident) => (
          <span>{resident.name}</span>
        ))}
      </p>
      <p>#R: {residents.length}</p>
      <p>Createad at: {created}</p>
      <button onClick={currentUser ? addToFavorites : logAlert}>
        Add to favorites
      </button>
    </div>
  );
}

export default LocationsCard;
