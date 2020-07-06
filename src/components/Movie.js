import React from 'react';

function Movie({title, score, image}) {
  return (
    <div>
      <img src={image} alt="" title={title}/>
      <h3>제목 : {title}<br/> 평점 : {score} / 10</h3>
    </div>
  );
}

export default Movie;
