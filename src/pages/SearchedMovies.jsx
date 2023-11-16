import React from "react";

import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useFetchMoviesBySearchTermQuery } from "../slices/apiSlice";
import Layout from "../components/Layout";

const SearchedMovies = () => {
  const { keyword: searchTerm } = useParams();
  console.log(searchTerm);

  const { data: searchedMovies = [], isLoading } =
    useFetchMoviesBySearchTermQuery(searchTerm);
  console.log("searched movies", searchedMovies);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div className="movies-container">
      {searchedMovies.results.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      bla
    </div>
  );
};

export default SearchedMovies;
