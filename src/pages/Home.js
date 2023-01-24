import React from "react";
import Movie from "../components/Movie";

const Home = ({ movies }) => {
  return (
    <div className="movie-container">
      {/* {console.log(movies)} */}
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Home;
