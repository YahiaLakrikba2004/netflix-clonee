import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie"; 

const MovieSlider = ({ movies, handleMovieSelect }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="movie-slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-slide">
            <SingleMovie img={movie.Poster} onClick={() => handleMovieSelect(movie)} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
