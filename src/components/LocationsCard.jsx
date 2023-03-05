import React from "react";

function LocationsCard({ id, name, type, dimension, created, residents }) {
  const addToFavorites = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      logAlert();
      return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("favorites:", favorites);
    const isFavorite = favorites.find(
      (favorite) => favorite.id === id && favorite.type === "location"
    );
    if (isFavorite) {
      itemExists();
    } else {
      favorites.push({ type: "location", id });
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
  const currentUser = localStorage.getItem("currentUser");
  return (
    <div className="location-card" style={{ margin: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>
        Residents:{" "}
        {residents?.map((resident, index) => (
          <span key={index}>{resident.name}</span>
        ))}
      </p>
      <p>#R: {residents.length}</p>
      <p>Createad at: {created}</p>
      <button onClick={addToFavorites}>Add to favorites</button>
    </div>
  );
}

export default LocationsCard;
