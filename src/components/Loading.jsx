import React from "react";
import loading from "../assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={loading}
        alt="Loading..."
        style={{
          width: "50px",
        }}
      />
    </div>
  );
};

export default Loading;
