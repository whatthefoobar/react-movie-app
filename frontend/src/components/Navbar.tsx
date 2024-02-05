import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
    } else {
      navigate("/");
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
