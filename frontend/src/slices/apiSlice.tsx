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
      query: (id) => `/featured-movies/${id}`,
    }),
  }),
});

export const {
  useFetchFeaturedMoviesQuery,
  useFetchMoviesBySearchTermQuery,
  useFetchFeaturedMovieByIdQuery,
} = apiSlice;

export default apiSlice;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Movie {
//   id: number;
//   title: string;
//   // Add other properties based on your movie object
// }

// type MoviesResponse = Movie[];

// const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   endpoints: (builder) => ({
//     fetchFeaturedMovies: builder.query<MoviesResponse, void>({
//       query: () => `/featured-movies`,
//       providesTags: (result) =>
//         result ? [{ type: "Movies", id: "LIST" }] : [],
//     }),
//     fetchMoviesBySearchTerm: builder.query<MoviesResponse, string>({
//       query: (searchTerm) => `/movies/search?searchTerm=${searchTerm}`,
//       providesTags: (result, error, searchTerm) =>
//         result ? [{ type: "Movies", id: searchTerm || "LIST" }] : [],
//     }),
//     fetchFeaturedMovieById: builder.query<Movie, number>({
//       query: (id) => `/featured-movies/${id}`,
//       providesTags: (result, error, id) =>
//         result ? [{ type: "Movies", id }] : [],
//     }),
//   }),
// });

// export const {
//   useFetchFeaturedMoviesQuery,
//   useFetchMoviesBySearchTermQuery,
//   useFetchFeaturedMovieByIdQuery,
// } = apiSlice;

// export default apiSlice;
