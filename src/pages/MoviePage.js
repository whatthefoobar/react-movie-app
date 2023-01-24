import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;

  const search_Api = `https://api.themoviedb.org/3/movie/${id}?api_key=81d9405cdcc5bb67fea79273223ddabd&language=en-US`;

  const [movie, setMovie] = useState({});
  const fetchData = async (API) => {
    const result = await axios(API);

    setMovie(result.data);
  };

  useEffect(() => {
    fetchData(search_Api);
  }, [id]);

  return <div>{movie.title}</div>;
};

export default MoviePage;
