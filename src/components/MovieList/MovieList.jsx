import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";

function MovieList() {
  const dispatch = useDispatch();
  // use movies reducer from store
  const movies = useSelector((store) => store.movies);

  // add useEffect to fetch movies on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <div>
        <section className="movies">
          {movies.map((movie) => {
            return (
              // pass movie prop to MovieItem component
              <MovieItem key={movie.id} movie={movie} />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default MovieList;
