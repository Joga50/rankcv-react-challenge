import React from "react";
import { useQuery, gql } from "@apollo/client";
import EpisodesCard from "../components/EpisodesCard";

export default function Episodes() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  let episodesQuery = gql`query {
    episodes(page: ${page}) {
      info {
        count
      }
      results {
        id
        name
        air_date
        episode
        created
      
      
      }
    }
  }`;
  const { data, loading, error } = useQuery(episodesQuery);

  const episodes = React.useMemo(() => data?.episodes?.results, [data]);

  console.log(episodes, data);

  const totalOfRegisters = React.useMemo(
    () => data?.episodes?.info?.count,
    [data]
  );

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      {episodes.length > 0 && (
        <ul>
          {episodes.map((episode) => (
            <EpisodesCard
              key={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
              created={episode.created}
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
