import React, { useState } from "react";
// import Banner from "../components/Banner";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";

const Home = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentMovies = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {/* <Banner /> */}
      <h2 className="home-title">Most popular releases</h2>
      <div className="movies-container">
        {console.log(movies)}

        {currentMovies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <Pagination
        totalPosts={movies.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;
