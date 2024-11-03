import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux_Slices/movies_slices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Recommend = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies("movie"));
  }, [dispatch]);
  

  return (
    <div className="recommend_movies">
      <div className="flex justify-between px-36">
        <h2 className="text-3xl font-bold text-neutral-800">
          Recommended Movies
        </h2>
        <p className="text-rose-500">See All</p>
      </div>
      <div className="w-[80vw] mx-auto my-8">
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div className="movies_card" key={index}>
              <div className="card">
                <div className="movies_poster">
                  <img
                    src={movie.Poster}
                    alt=""
                    className="movie_logo w-[13vw] rounded-lg"
                  />
                </div>
                <p>{movie.Title}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="movie_bar my-24">
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
