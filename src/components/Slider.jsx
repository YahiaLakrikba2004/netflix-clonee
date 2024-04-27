import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie"; // Componente che visualizza le copertine dei film

const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="movie-slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-slide">
            <SingleMovie img={movie.Poster} onClick={() => this.handleMovieSelect(movie)} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
