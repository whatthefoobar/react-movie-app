import Banner from "../components/Banner";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import { useState } from "react";

import { useFetchFeaturedMoviesQuery } from "../slices/apiSlice";
import Loading from "../components/Loading";

const Home = () => {
  // const featured_Api =
  //   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81d9405cdcc5bb67fea79273223ddabd&page=1";

  // const search_Api =
  //   "https://api.themoviedb.org/3/search/movie?&api_key=81d9405cdcc5bb67fea79273223ddabd&query=";

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { data: movies, isLoading } = useFetchFeaturedMoviesQuery();
  // console.log("feat movies", movies);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentMovies =
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
              {currentMovies.map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
            <Pagination
              totalPosts={movies.results.length}
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
