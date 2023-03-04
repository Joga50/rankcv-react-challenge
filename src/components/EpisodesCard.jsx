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
  return (
    <div className="eposides-card" style={{ backgroundColor: "gray" }}>
      EpisodesCard
      <p>id: {id}</p>
      <p>Name: {name}</p>
      <p>Air date: {air_date}</p>
      <p>Episode: {episode}</p>
      <p>Url: {url}</p>
      <p>Created: {created}</p>
    </div>
  );
}

export default EpisodesCard;
