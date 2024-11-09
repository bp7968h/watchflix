import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovies = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const data = await response.json();

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerMovies && getMovieVideos();
    // eslint-disable-next-line
  }, [trailerMovies]);
};

export default useMovieTrailer;
