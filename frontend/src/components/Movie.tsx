import { Link } from "react-router-dom";
import moviePlaceholder from "../assets/movie-placeholder.jpg";
const img_Api = "https://www.themoviedb.org/t/p/w1280";
interface IProps {
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  id: number;
}

const Movie = ({ title, poster_path, vote_average, overview, id }: IProps) => {
  const setVoteClass = (vote: number) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img
          src={poster_path ? `${img_Api}${poster_path}` : moviePlaceholder}
          alt="movie poster"
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={setVoteClass(vote_average)}>
            {vote_average.toFixed(2)}
          </span>
        </div>
        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
