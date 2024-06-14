import "dotenv/config";
import fs = require("fs");
import express = require("express");
import path = require("path");
import cors = require("cors");
import axios from "axios";
import { Request, Response } from "express";
import { IMovie } from "./types";

const app = express();
const corsOptions = {
  origin: [
    "https://react-movie-app-op9b.onrender.com/",
    "http://localhost:5173",
  ],
};

app.use(cors(corsOptions));
const port = 5000;
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

app.get("/api/featured-movies", async (req: Request, res: Response) => {
  try {
    let featuredMoviesData;
    try {
      // Try to read data from the JSON file
      featuredMoviesData = fs.readFileSync("featured-movies.json", "utf8");
    } catch (err) {
      console.error("Error reading JSON file:", err);
    }

    if (featuredMoviesData) {
      res.json(JSON.parse(featuredMoviesData));
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  // try {
  //   const response = await axios.get(
  //     `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
  //   );

  //   // Write API response data to a JSON file
  //   fs.writeFile(
  //     "featured-movies.json",
  //     JSON.stringify(response.data),
  //     (err) => {
  //       if (err) {
  //         console.error("Error writing JSON file:", err);
  //         res.status(500).json({ error: "Internal Server Error" });
  //         return;
  //       }
  //       console.log("API response data saved to featured-movies.json");
  //     }
  //   );

  //   res.json(response.data);
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
});

//node : to do can i somehow get all results and paginate through all results not just the fisrt 20 results on a page?

// Endpoint to fetch featured movie by ID
app.get("/api/featured-movies/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  // try {
  //   const featuredMoviesData = fs.readFileSync("featured-movies.json", "utf8");

  //   const featuredMovies = JSON.parse(featuredMoviesData);

  //   const movie = featuredMovies.results.find(
  //     (movie: IMovie) => movie.id.toString() === id
  //   );

  //   if (movie) {
  //     res.json(movie);
  //   } else {
  //     res.status(404).json({ error: "Movie not found" });
  //   }
  // } catch (error) {
  //   console.error("Error fetching featured movie:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }

  try {
    const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(apiUrl);
    const movie = await response.json();

    res.json(movie);
  } catch (error) {
    console.error("Error fetching featured movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//search by key term(the whole db) - rewrite this to search only our local saved api response
// app.get("/api/movies/search", (req: Request, res: Response) => {
//   const searchTerm: string = req.query.searchTerm as string;

//   if (!searchTerm) {
//     return res.status(400).json({ error: "Search term is required" });
//   }

//   fs.readFile("featured-movies.json", "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     try {
//       const movies = JSON.parse(data);
//       const matchingMovies = movies.filter((movie: IMovie) => {
//         return (
//           movie.original_title
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           movie.overview.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       });

//       res.json(matchingMovies);
//     } catch (error) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
// });
app.get("/api/movies/search", async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  if (!searchTerm) {
    return res.status(400).json({ error: "Search term is required" });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=1`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// for deplayment

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // if in production the frontend buikd is served from the published backend
  app.get("*", (req: Request, res: Response) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running....");
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
