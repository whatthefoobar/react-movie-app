import React, { useState } from "react";
import Banner from "../components/Banner";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";

import Loading from "../components/Loading";
import { useFetchFeaturedMoviesQuery } from "../slices/apiSlice";
import { IFeaturedMovie } from "../types";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 10;

  const { data: movies, isLoading } = useFetchFeaturedMoviesQuery();
  // console.log("feat movies", movies);

  const lastPostIndex: number = currentPage * postsPerPage;
  const firstPostIndex: number = lastPostIndex - postsPerPage;

  // movies is of type IFeaturedMoviesResponse
  const currentMovies: IFeaturedMovie[] =
    movies && movies.results
      ? movies.results.slice(firstPostIndex, lastPostIndex)
      : [];

  return (
    <>
      <Banner />
      <h2 className="home-title">Most popular releases</h2>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="movies-container">
              {currentMovies.map((movie: IFeaturedMovie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
            <Pagination
              totalPosts={movies?.results.length || 0}
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

export default Home;
