import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

function FavoriteLocations() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesStored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesStored);
  }, []);
  const favoriteLocationsIds = React.useMemo(
    () =>
      favorites
        .filter((favorite) => favorite.type === "location")
        .map((favLoc) => favLoc.id),
    [favorites]
  );

  let favoriteLocationsQuery = gql`
  query 
  { 
    locationsByIds(ids: [${
      favoriteLocationsIds.length ? favoriteLocationsIds.join(",") : ""
    }]) { 
      id 
      name 
      type 
      dimension 
      created 
      residents { 
        name 
      } 
    } 
  }`;

  console.log(favoriteLocationsIds);

  const { data, error, loading } = useQuery(favoriteLocationsQuery);
  const locationsData = data?.locationsByIds;
  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>;
  console.log(data, locationsData);

  return (
    <div>
      {locationsData.map((favLoc) => (
        <div
          className="locations-card"
          style={{ backgroundColor: "gray", margin: "10px" }}
          key={favLoc.id}
        >
          <p> key={favLoc.id}</p>
          <p> name={favLoc.name}</p>
          <p> tpye={favLoc.type}</p>
          <p> dimension={favLoc.dimension}</p>
          <p> created={favLoc.created}</p>
          <p> residents={favLoc.residents.map((resident) => resident.name)}</p>
          <button>Remove from favorites</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteLocations;
