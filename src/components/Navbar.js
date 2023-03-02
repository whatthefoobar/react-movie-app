import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, searchTerm, handleOnChange }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="logo">MoviesHub</h2>
      </Link>

      <form onSubmit={handleSubmit}>
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
