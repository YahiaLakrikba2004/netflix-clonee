import React from "react";

const SingleMovie = ({ img, altDescription, fallbackImg, onClick }) => {
  const handleImageError = (e) => {
    e.target.src = fallbackImg;
  };

  return (
    <img
      src={img}
      className="poster"
      alt={altDescription}
      onError={handleImageError}
      onClick={onClick} 
    />
  );
};

SingleMovie.defaultProps = {
  fallbackImg: "/path/to/fallback-image.jpg",
  altDescription: "Movie Poster",
};

export default SingleMovie;
