import React, { useContext, useEffect } from 'react';
import FoodContext from '../contexts/foods/FoodContext';

function SearchBar() {
  const { ingredient, setIngredient, radio, setRadio } = useContext(FoodContext);
  const handleText = ({ target }) => {
    setIngredient(target.value);
    console.log(ingredient);
  };

  const handleRadios = ({ target }) => {
    setRadio(target.id);
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <label htmlFor="search-input">
        <input
          data-testid="search-input"
          id="search-input"
          type="text"
          onChange={ handleText }
        />
      </label>
      <label htmlFor="search-ingredient">
        <input
          name="search-radio"
          data-testid="ingredient-search-radio"
          id="search-ingredient"
          type="radio"
          value="search-ingredient"
          onChange={ handleRadios }
        />
        Ingrediente
      </label>
      <label htmlFor="search-name">
        <input
          name="search-radio"
          data-testid="name-search-radio"
          id="search-name"
          type="radio"
          value="searc-name"
          onChange={ handleRadios }
        />
        Busca pelo nome
      </label>
      <label htmlFor="search-first-letter">
        <input
          name="search-radio"
          data-testid="first-letter-search-radio"
          id="search-first-letter"
          type="radio"
          value="search-first-letter"
          onChange={ handleRadios }
        />
        Busca pela primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ console.log(radio) }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
