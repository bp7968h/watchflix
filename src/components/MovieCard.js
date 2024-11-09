import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div style={{}}>
      <img
        style={{ borderRadius: "8px" }}
        width="150px"
        src={IMG_CDN + posterPath}
        alt="Background Poster"
      />
    </div>
  );
};

export default MovieCard;
