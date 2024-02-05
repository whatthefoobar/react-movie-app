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
  //movie is of type MovieDetails
  const {
    data: movie,
    isLoading,
    isError,
  } = useFetchFeaturedMovieByIdQuery(id);

  // console.log("movie page movie", movie);

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

// type for movepage movie:

// interface MovieDetails {
//   adult: boolean;
//   backdrop_path: string;
//   belongs_to_collection: null | {
//     id: number;
//     name: string;
//     poster_path: string;
//     backdrop_path: string;
//   };
//   budget: number;
//   genres: {
//     id: number;
//     name: string;
//   }[];
//   homepage: string;
//   id: number;
//   imdb_id: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   production_companies: {
//     id: number;
//     logo_path: string | null;
//     name: string;
//     origin_country: string;
//   }[];
//   production_countries: {
//     iso_3166_1: string;
//     name: string;
//   }[];
//   release_date: string;
//   revenue: number;
//   runtime: number;
//   spoken_languages: {
//     english_name: string;
//     iso_639_1: string;
//     name: string;
//   }[];
//   status: string;
//   tagline: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

// export default MovieDetails;
