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
    fetchFeaturedMovieById: builder.query({
      // Adding a query for fetching a featured movie by ID
      query: (id) => `/featured-movies/${id}`,
    }),
  }),
});

export const {
  useFetchMoviesBySearchTermQuery,
  useFetchFeaturedMoviesQuery,
  useFetchFeaturedMovieByIdQuery,
} = apiSlice;

export default apiSlice;
