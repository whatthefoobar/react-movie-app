import React, { useState } from "react";
import "./SearchedMovies.css";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useFetchMoviesBySearchTermQuery } from "../slices/apiSlice";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const SearchedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { keyword: searchTerm } = useParams();
  console.log(searchTerm);

  const { data: searchedMovies, isLoading } =
    useFetchMoviesBySearchTermQuery(searchTerm);
  console.log("searched movies", searchedMovies);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentMovies =
    searchedMovies && searchedMovies.results
      ? searchedMovies.results.slice(firstPostIndex, lastPostIndex)
      : [];

  console.log("current movies", currentMovies);

  return (
    <>
      <h2>Movies matching {searchTerm} keyword</h2>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="movies-container">
              {currentMovies.map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
            <Pagination
              totalPosts={searchedMovies.results.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </>
    </>
  );
};

export default SearchedMovies;
