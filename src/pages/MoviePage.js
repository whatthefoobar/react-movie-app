import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  //   const search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=81d9405cdcc5bb67fea79273223ddabd&query=${id}`;
  const search_Api = `https://api.themoviedb.org/3/movie/${id}?api_key=81d9405cdcc5bb67fea79273223ddabd&language=en-US`;

  const [movie, setMovie] = useState({});
  const fetchData = async (API) => {
    const result = await axios(API);

    setMovie(result.data); // filters out null properties
    // console.log(movie.title);
  };

  useEffect(() => {
    fetchData(search_Api);
    // console.log(movie);
  }, [id]);

  return <div>{movie.title}</div>;
};

export default MoviePage;
