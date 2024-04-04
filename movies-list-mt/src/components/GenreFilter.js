// GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres }) => {
  const handleClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div className='genres'>
      <h2>Filter by Genre</h2>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
