import React from "react";
import { Modal, Button } from "react-bootstrap";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie"; 

import "../App.css";

class Movies extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: null,
    selectedMovie: null,
    showModal: false
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { title } = this.props;
    const apiLink = `http://www.omdbapi.com/?i=tt3896198&apikey=f032232b&s=${title.toLowerCase()}`;

    try {
      const response = await fetch(apiLink);
      if (!response.ok) {
        throw new Error("Errore durante il recupero dei film.");
      }

      const data = await response.json();
      if (data.Response === "True") {
        this.setState({ movies: data.Search, loading: false });
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handleMovieSelect = (movie) => {
    this.setState({ selectedMovie: movie, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { movies, loading, error, selectedMovie, showModal } = this.state;

    if (loading) {
      return (
        <div className="spinner-container">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <>
        <h2>{this.props.category}</h2>
        <Slider {...settings}>
          {movies.map((movie) => (
            <SingleMovie key={movie.imdbID} img={movie.Poster} onClick={() => this.handleMovieSelect(movie)} />
          ))}
        </Slider>

        {/* Modal per i dettagli del film */}
        <Modal show={showModal} onHide={this.handleCloseModal} size="lg" centered>
          <Modal.Body>
            <div className="modal-movie-details">
              <div className="modal-movie-poster text-center">
                {selectedMovie && <img src={selectedMovie.Poster} alt={selectedMovie.Title} />}
              </div>
              <div className="modal-movie-info text-center">
                <h3>{selectedMovie?.Title}</h3>
                <p>{selectedMovie?.Plot}</p>
                <p><strong>Year:</strong> {selectedMovie?.Year}</p>
                <p><strong>Type:</strong> {selectedMovie?.Type}</p>
                <Button variant="danger" onClick={this.handleCloseModal}>Close</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Movies;
