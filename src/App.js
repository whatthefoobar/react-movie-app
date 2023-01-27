import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

const featured_Api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81d9405cdcc5bb67fea79273223ddabd&page=1";
// const img_Api = 'https://api.themoviedb.org/t/p/w1280';

const search_Api =
  "https://api.themoviedb.org/3/search/movie?&api_key=81d9405cdcc5bb67fea79273223ddabd&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (API) => {
    const result = await axios(API);
    // console.log(result.data.results);

    setMovies(result.data.results.filter(Boolean)); // filters out null properties
  };

  useEffect(() => {
    fetchData(featured_Api);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchData(search_Api + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          handleOnChange={handleOnChange}
        />

        <Routes>
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/" element={<Home movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// featured:
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81d9405cdcc5bb67fea79273223ddabd

// images: https://api.themoviedb.org/t/p/w1280

// search:  https://api.themoviedb.org/3/search/movie?&api_key=81d9405cdcc5bb67fea79273223ddabd

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=81d9405cdcc5bb67fea79273223ddabd
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWQ5NDA1Y2RjYzViYjY3ZmVhNzkyNzMyMjNkZGFiZCIsInN1YiI6IjYyNTk5MDNmZmU2YzE4MDA5ZjEzYWJjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YsD9AyK_PEkd9Fox2nIZmrqFNeI3N8TzEsggoSta1Og
