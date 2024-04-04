// GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
