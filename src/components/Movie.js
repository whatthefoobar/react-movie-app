import React from 'react';
const img_Api = 'https://www.themoviedb.org/t/p/w1280';

const Movie = ({ title, poster_path, vote_average, overview }) => {
  // const { title, poster_path } = data;
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <div className="movie">
      <img src={`${img_Api}${poster_path}`} alt="movie poster" />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={setVoteClass(vote_average)}>{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
