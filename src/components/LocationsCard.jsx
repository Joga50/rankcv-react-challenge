import React from "react";

function LocationsCard({ id, name, type, dimension, created }) {
  return (
    <div className="location-card" style={{ backgroundColor: "gray" }}>
      LocationsCard
      <p>id : {id}</p>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      {/* <p>Residents: {residents}</p> */}
      <p>Createad at: {created}</p>
    </div>
  );
}

export default LocationsCard;
