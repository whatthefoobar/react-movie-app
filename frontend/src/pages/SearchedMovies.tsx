import { useState } from "react";
import "./SearchedMovies.css";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useFetchMoviesBySearchTermQuery } from "../slices/apiSlice";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import GoBack from "../components/GoBack";

interface ISearchedMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// interface ISearchedMovieResult {
//   page: number;
//   results: ISearchedMovie[];
//   total_pages: number;
//   total_results: number;
// }

const SearchedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { keyword: searchTerm } = useParams();
  // console.log(searchTerm);

  // searchedMovies is of type ISearchedMovieResult
  const { data: searchedMovies, isLoading } = useFetchMoviesBySearchTermQuery(
    searchTerm!
  );
  // console.log("searched movies", searchedMovies);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  //currentMovies is of type ISearchedMovie[]
  const currentMovies: ISearchedMovie[] =
    searchedMovies && searchedMovies.results
      ? searchedMovies.results.slice(firstPostIndex, lastPostIndex)
      : [];

  // console.log("current movies", currentMovies);

  return (
    <>
      <h2>Movies matching {searchTerm} keyword</h2>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <GoBack />
            <div className="movies-container">
              {currentMovies.map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
            </div>
            <Pagination
              totalPosts={searchedMovies!.results.length}
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

// interface ISearchedMovie {
//   adult: boolean;
//   backdrop_path: string | null;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string | null;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

// interface ISearchedMovieResult {
//   page: number;
//   results: ISearchedMovie[];
//   total_pages: number;
//   total_results: number;
// }

// export { SearchedMovie, MovieResult };
