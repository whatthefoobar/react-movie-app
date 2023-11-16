import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;

// featured:
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81d9405cdcc5bb67fea79273223ddabd

// images: https://api.themoviedb.org/t/p/w1280

// search:  https://api.themoviedb.org/3/search/movie?&api_key=81d9405cdcc5bb67fea79273223ddabd

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=81d9405cdcc5bb67fea79273223ddabd
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWQ5NDA1Y2RjYzViYjY3ZmVhNzkyNzMyMjNkZGFiZCIsInN1YiI6IjYyNTk5MDNmZmU2YzE4MDA5ZjEzYWJjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YsD9AyK_PEkd9Fox2nIZmrqFNeI3N8TzEsggoSta1Og
