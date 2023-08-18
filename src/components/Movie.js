import React from "react";
import { Link } from "react-router-dom";
import moviePlaceholder from "../assets/movie-placeholder.jpg";
const img_Api = "https://www.themoviedb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, overview, id }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img
          src={poster_path ? `${img_Api}${poster_path}` : moviePlaceholder}
          alt="movie poster"
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={setVoteClass(vote_average)}>{vote_average}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
