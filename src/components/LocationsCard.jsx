import React from "react";

function LocationsCard({ props }) {
  const { id, name, type, dimension, residents, created } = props;
  return (
    <div className="location-card">
      LocationsCard
      <p>id : {id}</p>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents}</p>
      <p>Createad at: {created}</p>
    </div>
  );
}

export default LocationsCard;
