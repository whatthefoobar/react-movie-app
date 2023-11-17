import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Assuming you're using react-icons library for icons

const GoBack = () => {
  return (
    <button
      className="go-back"
      style={{
        background: "transparent",
        border: "none",
        marginBottom: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.6rem",
          display: "flex",
          gap: "5px",
        }}
      >
        <FaArrowLeft className="back-icon" />
        Back
      </Link>
    </button>
  );
};

export default GoBack;
