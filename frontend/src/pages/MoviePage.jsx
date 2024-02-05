import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MoviePage.css";
import moviePlaceholder from "../assets/movie-placeholder.jpg";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import GoBack from "../components/GoBack";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;

  const search_Api = `https://api.themoviedb.org/3/movie/${id}?api_key=81d9405cdcc5bb67fea79273223ddabd&language=en-US`;
  const img_Api = "https://www.themoviedb.org/t/p/w1280";

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (API) => {
    try {
      const result = await axios.get(API);
      setMovie(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(search_Api);
    // eslint-disable-next-line
  }, [id]);

  if (error) {
    return <NotFound />;
  }

  return (
    <article
      className="movie-page"
      style={
        movie.backdrop_path && {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), 
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }
      }
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <GoBack />
          {/* movie detail page */}
          <div className="movie-detail-info">
            <img
              className="movie-poster"
              src={
                movie.poster_path
                  ? `${img_Api}${movie.poster_path}`
                  : moviePlaceholder
              }
              alt={movie.original_title}
            />
            <div className="movie-info">
              <div className="rated-title">
                <h2>{movie.title} </h2>
                <p className="rating">
                  ⭐️ {Number(movie.vote_average).toFixed(1)}
                </p>
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default MoviePage;
