import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000/api";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchFeaturedMovies: builder.query({
      query: () => `/featured-movies`,
    }),
    fetchMoviesBySearchTerm: builder.query({
      query: (searchTerm) => `/movies/search?searchTerm=${searchTerm}`,
    }),
  }),
});

export const { useFetchMoviesBySearchTermQuery, useFetchFeaturedMoviesQuery } =
  apiSlice;

export default apiSlice;
