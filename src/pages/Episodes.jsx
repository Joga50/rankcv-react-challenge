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
    <div className="episodes">
      <div
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/1276401.jpg')",
          padding: "10px",
        }}
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => {
            if (page > 1) {
              setPage((prevValue) => prevValue - 1);
            }
          }}
        >
          Previous Page
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (page < totalOfRegisters) {
              setPage((prevValue) => prevValue + 1);
            }
          }}
        >
          Next Page
        </button>
        <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-800 to-purple-500 p-6 rounded-md shadow-lg m-5">
          Episodes
        </h1>
      </div>

      {episodes.length > 0 && (
        <div className="episodes-container">
          {episodes.map((episode) => (
            <EpisodesCard
              id={episode.id}
              key={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
              created={episode.created}
              url={episode.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
