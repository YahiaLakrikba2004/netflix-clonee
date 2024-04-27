// MovieDetail.js
import React from "react";
import { Card } from "react-bootstrap";

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <p>Nessun film trovato</p>;
  }

  const { Title, Year, } = movie;

  return (
    <div className="movie-card" style={{ marginBottom: "20px", marginRight: '20px' }}>
      <Card>
        <div style={{ height: "300px", overflow: "hidden", width: "" }}>
        <Card.Img variant="top" src={movie.Poster} style={{ height: "400px", objectFit: "cover" }} />
        </div>
        <Card.Body style={{ maxHeight: "100px", overflow: "hidden" }}>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>Anno: {Year}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetail;
