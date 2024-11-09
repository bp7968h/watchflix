import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (
    !movies.nowPlayingMovies ||
    !movies.topRatedMovies ||
    !movies.popularMovies ||
    !movies.upcomingMovies
  )
    return;

  return (
    <div style={{ background: "rgba(0,0,0,0.96)" }}>
      <div style={{ marginTop: "-200px", position: "relative", zIndex: 3 }}>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
