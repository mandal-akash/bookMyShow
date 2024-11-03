import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../Redux_Slices/movies_slices";
const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies("movie"));
  }, [dispatch]);
  return (
    <div className="movie_section grid grid-cols-4 justify-items-center gap-3 text-center">
        {
            movies.map((movie , index) =>(
                <div className="movie_card space-y-3 border border-neutral-400 p-4 rounded-xl shadow-lg bg-white" key={index}>
                <div className="image_Section">
                  <img
                  src={movie.Poster}
                    alt=""
                    className="rounded-xl cursor-pointer"
                  />
                </div>
                <p className="text-xl font-semibold">{movie.Title}</p>
              </div>
            ))
        }
     
    </div>
  );
};

export default Movies;
