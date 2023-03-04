import React from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  let charactersQuery = gql`query {
    characters(page: ${page}) {
      info {
        count
      }
      results {
        id
        name
        species
        status
        image
        gender
        location {
          name
        }
        origin {
          name
        }
   
      }
    }
  }`;
  const { data, loading, error } = useQuery(charactersQuery);

  const characters = React.useMemo(() => data?.characters?.results, [data]);

  console.log(characters, data);

  const totalOfRegisters = React.useMemo(
    () => data?.characters?.info?.count,
    [data]
  );

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      {characters.length > 0 && (
        <ul>
          {characters.map((character) => (
            <CharacterCard
              image={character.image}
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              origin={character.origin.name}
              gender={character.gender}
              location={character.location.name}
              // episode={character.episode}
            />
          ))}
        </ul>
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
