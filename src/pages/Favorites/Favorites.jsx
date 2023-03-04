import FavoriteCharacters from "./FavoriteCharacters";
import FavoriteEpisodes from "./FavoriteEpidosdes";
import FavoriteLocations from "./FavoriteLocations";

function Favorites() {
  const currentUser = localStorage.getItem("currentUser");
  return (
    <div>
      {currentUser ? (
        <div>
          Please select a filter for your favorites:
          <FavoriteCharacters />
          <FavoriteLocations />
          <FavoriteEpisodes />
        </div>
      ) : (
        <h2>Please Login or Register to check you favorites cards</h2>
      )}
    </div>
  );
}

export default Favorites;
