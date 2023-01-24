import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
const img_Api = "https://www.themoviedb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, overview, id }) => {
  const navigate = useNavigate();
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  const goToMoviePage = () => {
    console.log("go to movie page");
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie" onClick={goToMoviePage}>
      {/* <Link to={`/movie/${id}`}> */}
      <img src={`${img_Api}${poster_path}`} alt="movie poster" />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={setVoteClass(vote_average)}>{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Movie;
