import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";
import { Request, Response } from "express";

const app = express();
app.use(cors());
const port = 5000;

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

app.get("/api/featured-movies", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//node : to do can i somehow get all results and paginate through all results not just the fisrt 20 results on a page?

// Endpoint to fetch featured movie by ID
app.get("/api/featured-movies/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

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

//search by key term
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

app.get("/", (req: Request, res: Response) => {
  console.log("Api up and running");
  res.send("Api up and running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
