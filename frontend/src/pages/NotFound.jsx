import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Sorry, the page you are looking for doesn't exist.</h3>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "1rem",
        }}
      >
        <Link
          to="/"
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            display: "flex",
            gap: "5px",
          }}
        >
          <FaArrowLeft className="back-icon" />
          Go back to home page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
