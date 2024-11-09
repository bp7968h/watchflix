import React, { useRef } from "react";
import useRecommendation from "../hooks/useRecommendation";

const GptSearchBar = () => {
  const searchTextRef = useRef(null);
  const getRecommendation = useRecommendation();

  const handleButtonClick = () => {
    if (searchTextRef) {
      getRecommendation(searchTextRef.current?.value);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        padding: "10px",
        display: "flex",
        gap: 7,
      }}
    >
      <input
        required
        ref={searchTextRef}
        type="text"
        placeholder="What would you like to watch today?"
        style={{
          borderRadius: "15px",
          padding: "15px",
          width: "400px",
          fontWeight: "bold",
          color: "white",
          background: "rgba(0,0,0,0.8)",
          border: "none",
        }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          border: "none",
          width: "125px",
          padding: "20px",
          borderRadius: "15px",
          background: "rgb(229, 9, 20)",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default GptSearchBar;
