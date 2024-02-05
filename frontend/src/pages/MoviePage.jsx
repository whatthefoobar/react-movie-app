import React from "react";
import { useParams } from "react-router-dom";

import "./MoviePage.css";
import moviePlaceholder from "../assets/movie-placeholder.jpg";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import GoBack from "../components/GoBack";
import { useFetchFeaturedMovieByIdQuery } from "../slices/apiSlice";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;

  const img_Api = "https://www.themoviedb.org/t/p/w1280";

  // Use the generated hook for fetching a featured movie by ID
  const {
    data: movie,
    isLoading,
    isError,
  } = useFetchFeaturedMovieByIdQuery(id);

  if (isError) {
    return <NotFound />;
  }

  return (
    <article
      className="movie-page"
      style={
        movie &&
        movie.backdrop_path && {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), 
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }
      }
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <GoBack />
          {/* movie detail page */}
          <div className="movie-detail-info">
            <img
              className="movie-poster"
              src={
                movie && movie.poster_path
                  ? `${img_Api}${movie.poster_path}`
                  : moviePlaceholder
              }
              alt={movie && movie.original_title}
            />
            <div className="movie-info">
              <div className="rated-title">
                <h2>{movie && movie.title} </h2>
                <p className="rating">
                  ⭐️ {movie && Number(movie.vote_average).toFixed(1)}
                </p>
              </div>
              <p>{movie && movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default MoviePage;
