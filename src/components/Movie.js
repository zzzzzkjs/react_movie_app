import React from 'react';

function Movie(movieProps) {
  return (
    <h3>제목 : {movieProps.title} / 평점 : {movieProps.score}</h3>
  );
}

export default Movie;
