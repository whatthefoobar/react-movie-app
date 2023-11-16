import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Assuming you're using react-icons library for icons

const GoBack = () => {
  return (
    <button
      className="go-back"
      style={{ background: "transparent", border: "none" }}
    >
      <Link to="/">
        <FaArrowLeft className="back-icon" />
        Go back
      </Link>
    </button>
  );
};

export default GoBack;
