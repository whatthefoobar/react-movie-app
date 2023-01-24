import React from "react";

const Navbar = ({ handleSubmit, searchTerm, handleOnChange }) => {
  return (
    <nav>
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
