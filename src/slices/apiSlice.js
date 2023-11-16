import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.themoviedb.org/3"; // Your base API URL
const API_KEY = "81d9405cdcc5bb67fea79273223ddabd"; // Your API key

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchFeaturedMovies: builder.query({
      query: () =>
        `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`,
    }),
    fetchMoviesBySearchTerm: builder.query({
      query: (searchTerm) =>
        `/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=1`,
    }),
  }),
});

export const { useFetchMoviesBySearchTermQuery, useFetchFeaturedMoviesQuery } =
  apiSlice;

export default apiSlice;
