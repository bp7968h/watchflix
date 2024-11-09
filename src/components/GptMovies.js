import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovies = () => {
  const recommendedMovies = useSelector(
    (store) => store.recommendation?.recommendedMovies,
  );

  console.log(recommendedMovies);

  if (!recommendedMovies) return null;

  return (
    <div style={{ padding: "4px", maxWidth: "99vw" }}>
      <h1
        style={{
          marginBottom: "4px",
          color: "rgb(229, 9, 20)",
          paddingLeft: "20px",
        }}
      >
        Results{" "}
      </h1>
      <div
        className="scrollable-element"
        style={{ display: "flex", gap: 10, overflowX: "scroll" }}
      >
        {recommendedMovies.map(
          (movie) =>
            movie.poster_path && (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ),
        )}
      </div>
    </div>
  );
};

export default GptMovies;
