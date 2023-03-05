import React from "react";
import { useQuery, gql } from "@apollo/client";
import LocationsCard from "../components/LocationsCard";

export default function Location() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  let locationsQuery = gql`query {
    locations(page: ${page}) {
      info {
        count
      }
      results {
        id
        name
        type
        dimension
        created
        residents {
          name
        }
      
      
      }
    }
  }`;
  const { data, loading, error } = useQuery(locationsQuery);

  const locations = React.useMemo(() => data?.locations?.results, [data]);

  console.log(locations, data);

  const totalOfRegisters = React.useMemo(
    () => data?.locations?.info?.count,
    [data]
  );

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="locations">
      {locations.length > 0 && (
        <div className="locations-container">
          {locations.map((location) => (
            <LocationsCard
              id={location.id}
              key={location.id}
              name={location.name}
              tpye={location.type}
              dimension={location.dimension}
              created={location.created}
              residents={location.residents}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => {
          if (count < totalOfRegisters) {
            setPage((prevValue) => prevValue + 1);
          }
        }}
      >
        Next Page
      </button>
      <button
        onClick={() => {
          if (page > 1) {
            setPage((prevValue) => prevValue - 1);
          }
        }}
      >
        Previous Page
      </button>
    </div>
  );
}
