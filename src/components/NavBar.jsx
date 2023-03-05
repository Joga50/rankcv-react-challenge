import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { toggleDarkMode } from "../redux/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const currentUser = localStorage.getItem("currentUser");

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-5 navbar">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
            alt="Rick and Morty"
            style={{ height: "110px", width: "110" }}
          />
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Link
            to="/characters"
            className="text-2sm font-bold text-white bg-gradient-to-r from-purple-800 to-purple-500 p-4 rounded-md shadow-lg m-5 hover:opacity-80"
          >
            Characters
          </Link>
          <Link
            to="/episodes"
            className="text-2sm font-bold text-white bg-gradient-to-r from-purple-800 to-purple-500 p-4 rounded-md shadow-lg m-5 hover:opacity-80"
          >
            Episodes
          </Link>
          <Link
            to="/locations"
            className="text-2sm font-bold text-white bg-gradient-to-r from-purple-800 to-purple-500 p-4 rounded-md shadow-lg m-5 hover:opacity-80"
          >
            Locations
          </Link>
          {currentUser && (
            <Link
              to="/favorites"
              className="text-2sm font-bold text-white bg-gradient-to-r from-blue-800 to-blue-500  p-4 rounded-md shadow-lg m-5"
            >
              Favorites
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-end lg:items-center">
          <button
            onClick={handleToggleDarkMode}
            className="icon-button lg:mr-8"
            style={{ color: "white", margin: "15px" }}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
          <Link
            to="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Login page
          </Link>
          <Link
            to="/register"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
          >
            Register page
          </Link>
        </div>
      </div>

      <Logout />
    </nav>
  );
}
export default NavBar;
