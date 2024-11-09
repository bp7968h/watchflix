import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      style={{
        width: "90%",
        paddingBottom: "7%",
        position: "absolute",
        color: "white",
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
        paddingTop: "18%",
        paddingLeft: "10%",
        zIndex: "2",
      }}
    >
      <h1>{title}</h1>
      <p
        style={{
          padding: "4px 0px 4px 4px",
          width: "50%",
          fontWeight: "bold",
        }}
      >
        {overview}
      </p>
      <div style={{ display: "flex", gap: 10, height: "37px" }}>
        <button
          style={{
            background: "white",
            padding: "5px",
            width: "10%",
            border: "none",
            borderRadius: "4px",
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ▶ Play
        </button>
        <button
          style={{
            background: "grey",
            color: "white",
            padding: "5px",
            width: "10%",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
