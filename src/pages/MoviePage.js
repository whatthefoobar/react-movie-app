import React from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  // fetch movie by id from params
  return <div>MoviePage</div>;
};

export default MoviePage;
