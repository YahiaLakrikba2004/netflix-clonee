// SearchPage.js
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MovieDetail from "./MovieDetail";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=f032232b&s=${searchTerm}`);

      if (!response.ok) {
        throw new Error("Errore durante la ricerca dei film.");
      }
      const data = await response.json();
      if (data.Response === "True") {
        setSearchResults(data.Search || []);
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 text-white mt-4">Ricerca film</h2>
      <Form onSubmit={handleSearch} onReset={handleReset} className="mb-5">
        <Row className="align-items-end">
          <Col>
            <Form.Group controlId="searchTerm">
              <Form.Control
                type="text"
                placeholder="Cerca un film..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button variant="danger" type="submit" disabled={!searchTerm || loading} className="me-2">
              Cerca
            </Button>
            <Button variant="secondary" type="reset">
              Cancella
            </Button>
          </Col>
        </Row>
      </Form>
      {loading && <p className="text-center">Caricamento...</p>}
      {error && <p className="text-center text-danger">Errore: {error}</p>}
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {searchResults.map((movie) => (
          <div className="col" key={movie.imdbID}>
            <MovieDetail movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
