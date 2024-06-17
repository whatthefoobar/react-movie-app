import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IFeaturedMoviesResponse,
  IMovieDetails,
  ISearchedMovieResult,
} from "../types";

// const BASE_URL = "http://localhost:5000/api/";
// for deployment:
const BASE_URL = import.meta.env.BASE_URL;

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    fetchFeaturedMovies: builder.query<IFeaturedMoviesResponse, void>({
      query: () => "api/featured-movies",
    }),
    fetchMoviesBySearchTerm: builder.query<ISearchedMovieResult, string>({
      query: (searchTerm) => `api/movies/search?searchTerm=${searchTerm}`,
    }),
    fetchFeaturedMovieById: builder.query<IMovieDetails, string>({
      query: (id) => `api/featured-movies/${id}`,
    }),
  }),
});

export const {
  useFetchFeaturedMoviesQuery,
  useFetchMoviesBySearchTermQuery,
  useFetchFeaturedMovieByIdQuery,
} = apiSlice;

export default apiSlice;
