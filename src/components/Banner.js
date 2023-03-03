import React from "react";
import "./Banner.css";
import banner from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="movie banner" />
    </div>
  );
};

export default Banner;
