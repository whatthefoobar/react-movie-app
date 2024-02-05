import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in the history
  };

  return (
    <button
      className="go-back"
      style={{
        background: "transparent",
        border: "none",
        marginBottom: "20px",
      }}
      onClick={goBack}
    >
      <div
        style={{
          fontSize: "1.6rem",
          display: "flex",
          color: "white",
          cursor: "pointer",
          gap: "5px",
        }}
      >
        <FaArrowLeft className="back-icon" />
        Back
      </div>
    </button>
  );
};

export default GoBack;
