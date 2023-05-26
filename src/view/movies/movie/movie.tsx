import React, { FC } from 'react';

const Movie: FC = () => {
  const movie = {
    title: 'LOTR 1',
    notes: 'The first movie!',
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      {movie.notes && <p>{movie.notes}</p>}
    </div>
  );
};

export default Movie;
