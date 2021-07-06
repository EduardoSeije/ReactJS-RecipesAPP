import React, { useContext, useEffect } from 'react';
import FoodContext from '../contexts/foods/FoodContext';
import { requestMealFirstLetter,
  requestMealIngredient, requestMealName } from '../service/apiRequests';

function SearchBar() {
  const { ingredient, setIngredient,
    radio, setRadio, meals, setMealsSearch } = useContext(FoodContext);
  const handleText = ({ target }) => {
    setIngredient(target.value);
  };

  const handleRadios = ({ target }) => {
    setRadio(target.id);
    console.log(radio);
  };

  async function fetchApiSearch() {
    if (radio === 'search-ingredient') {
      setMealsSearch(await requestMealIngredient(ingredient));
    }
    if (radio === 'search-name') {
      setMealsSearch(await requestMealName(ingredient));
    }
    if (radio === 'search-first-letter' && ingredient.length <= 1) {
      setMealsSearch(await requestMealFirstLetter(ingredient));
    } else if (radio === 'search-first-letter' && ingredient.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  useEffect(() => {
    fetchApiSearch();
  }, [ingredient]);

  console.log(meals);
  console.log(ingredient.length);

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
