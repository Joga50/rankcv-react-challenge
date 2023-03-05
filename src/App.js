import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import {
  Home,
  Locations,
  Episodes,
  Characters,
  Register,
  Login,
} from "./pages";
import React from "react";
import { Footer, NavBar } from "./components";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />

            <Route path="/characters" element={<Characters />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
