import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
    } else {
      navigate("/");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="logo">MoviesHub</h2>
      </Link>
      <form onSubmit={handleSearch}>
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
