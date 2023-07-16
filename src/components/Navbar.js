import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleSubmit, searchTerm, handleOnChange }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="logo">MoviesHub</h2>
      </Link>

      <form onSubmit={(e) => handleSubmit(e, navigate)}>
        <input
          className="search"
          type="search"
          value={searchTerm}
          placeholder="Search..."
          onChange={handleOnChange}
        />
      </form>
    </nav>
  );
};

export default Navbar;
