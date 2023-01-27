import React from "react";
// import Banner from "../components/Banner";
import Movie from "../components/Movie";

const Home = ({ movies }) => {
  return (
    <>
      {/* <Banner /> */}
      <h2 className="home-title">Most popular releases</h2>
      <div className="movie-container">
        {/* {console.log(movies)} */}

        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
