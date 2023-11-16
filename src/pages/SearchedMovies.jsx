import React from "react";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useFetchMoviesBySearchTermQuery } from "../slices/apiSlice";
import Loading from "../components/Loading";

const SearchedMovies = () => {
  const { keyword: searchTerm } = useParams();
  console.log(searchTerm);

  const { data: searchedMovies = [], isLoading } =
    useFetchMoviesBySearchTermQuery(searchTerm);
  //   console.log("searched movies", searchedMovies);

  return (
    <>
      <h2>Movies matching {searchTerm} keword</h2>
      <div className="movies-container">
        {isLoading ? (
          <Loading />
        ) : (
          searchedMovies.results.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))
        )}
      </div>
    </>
  );
};

export default SearchedMovies;
