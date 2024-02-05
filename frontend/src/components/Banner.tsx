import "./Banner.css";
import banner from "../assets/movie-banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="movie banner" />
    </div>
  );
};

export default Banner;
