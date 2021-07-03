import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search-input">
        <input data-testid="search-input" id="search-input" type="text" />
      </label>
      <label htmlFor="search-radio">
        <input
          name="search-radio"
          data-testid="name-search-radio"
          type="radio"
        />
        Busca pelo nome
        <input
          name="search-radio"
          data-testid="first-letter-search-radio"
          type="radio"
        />
        Busca pela primeira letra
      </label>
      <button data-testid="exec-search-btn" type="button">Buscar</button>
    </div>
  );
}

export default SearchBar;
