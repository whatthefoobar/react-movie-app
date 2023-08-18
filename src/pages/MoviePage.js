import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MoviePage.css";
import moviePlaceholder from "../assets/movie-placeholder.jpg";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;

  const search_Api = `https://api.themoviedb.org/3/movie/${id}?api_key=81d9405cdcc5bb67fea79273223ddabd&language=en-US`;
  const img_Api = "https://www.themoviedb.org/t/p/w1280";

  const [movie, setMovie] = useState({});
  const fetchData = async (API) => {
    const result = await axios.get(API);
    setMovie(result.data);
  };

  useEffect(() => {
    fetchData(search_Api);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="movie-container">
      <div className="movie-image">
        <img
          src={
            movie.poster_path
              ? `${img_Api}${movie.poster_path}`
              : moviePlaceholder
          }
          alt="movie poster"
        />
      </div>
      <div className="movie-description">
        <h3>{movie.title}</h3>
        <h3>{movie.tagline}</h3>
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
        <div className="genres">
          {movie.genres?.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
