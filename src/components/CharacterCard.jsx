import React from "react";

function CharacterCard({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  episode,
}) {
  return (
    <div className="character-card">
      CharacterCard
      <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
      <h3>Name: {name}</h3>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Origin: {origin}</p>
      <p>Gender: {gender}</p>
      <p>Current location: {location}</p>
      <p>Episode: {episode}</p>
    </div>
  );
}

export default CharacterCard;
