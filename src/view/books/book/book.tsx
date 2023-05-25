import React, { FC } from 'react';

const Book: FC = () => {
  const book = {
    title: 'LOTR 1',
    notes: 'The first book!',
  };

  return (
    <div>
      <h1>{book.title}</h1>
      {book.notes && <p>{book.notes}</p>}
    </div>
  );
};

export default Book;
