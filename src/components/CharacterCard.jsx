// import React, { useEffect, useState } from "react";
// function CharacterCard({
//   id,
//   name,
//   status,
//   species,
//   gender,
//   origin,
//   location,
//   image,
//   episode,
// }) {
//   const addToFavorites = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     favorites.push({ type: "character", id });

//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     alert(`${name} adding to favorites`);
//   };

//   const logAlert = () => {
//     alert("You have to be logged to add characters to favorites!");
//   };

//   const itemExists = () => {
//     alert("Card already exists in your favorites");
//   };
//   const currentUser = localStorage.getItem("currentUser");

//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const favoritesStored = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(favoritesStored);
//   }, []);

//   const isFavorite = favorites.find(
//     (favorite) => favorite.id === id && favorite.type === "character"
//   );
//   if (isFavorite) {
//     // El objeto ya existe en el array
//   } else {
//     // El objeto no existe en el array
//   }
//   return (
//     <div
//       className="character-card"
//       style={{ backgroundColor: "gray", margin: "10px" }}
//     >
//       <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
//       <h2>id: {id}</h2>
//       <h3>Name: {name}</h3>
//       <p>Species: {species}</p>
//       <p>Status: {status}</p>
//       <p>Gender: {gender}</p>
//       <p>Origin: {origin}</p>

//       <p>Current location: {location}</p>
//       {/* <p>Episode: {episode}</p> */}

//       <button onClick={() => (currentUser ? addToFavorites : logAlert)}>
//         Add to Favorites
//       </button>
//     </div>
//   );
// }

// export default CharacterCard;

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
      {/* <p>Episodio: {episode}</p> */}

      <button onClick={addToFavorites}>Agregar a Favoritos</button>
    </div>
  );
}

export default CharacterCard;
