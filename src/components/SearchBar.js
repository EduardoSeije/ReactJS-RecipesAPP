import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search-input">
        <input data-testid="search-input" id="search-input" type="text" />
      </label>
      <label htmlFor="search-ingredient">
        <input
          name="search-radio"
          data-testid="ingredient-search-radio"
          id="search-ingredient"
          type="radio"
        />
        Ingrediente
      </label>
      <label htmlFor="search-name">
        <input
          name="search-radio"
          data-testid="name-search-radio"
          id="search-name"
          type="radio"
        />
        Busca pelo nome
      </label>
      <label htmlFor="search-first-letter">
        <input
          name="search-radio"
          data-testid="first-letter-search-radio"
          id="search-first-letter"
          type="radio"
        />
        Busca pela primeira letra
      </label>
      <button data-testid="exec-search-btn" type="button">Buscar</button>
    </div>
  );
}

export default SearchBar;
