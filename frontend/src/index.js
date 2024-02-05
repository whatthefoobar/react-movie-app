import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import MoviePage from "./pages/MoviePage";
import SearchedMovies from "./pages/SearchedMovies";
// import Loading from "./components/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/search/:keyword" element={<SearchedMovies />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/404" element={<NotFound />} />
      {/* <Route path="/loading" element={<Loading />} /> */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
