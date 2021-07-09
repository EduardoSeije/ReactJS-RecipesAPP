import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CardFavorite from '../components/CardFavorite';
import Header from '../components/Header';
import AppProvider from '../contexts/app/AppContext';

function FavoriteRecepies() {
  const [arrayRecipes, setArrayRecipes] = useState([]);
  const [value, setValue] = useState('All');
  const { renderFavorites } = useContext(AppProvider);

  function getArrayStorage() {
    const arrStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (value === 'comida') {
      return setArrayRecipes(arrStorage.filter((recipe) => recipe.type === 'comida'));
    }
    if (value === 'bebida') {
      return setArrayRecipes(arrStorage.filter((recipe) => recipe.type === 'bebida'));
    }
    setArrayRecipes(arrStorage);
  }

  useEffect(() => {
    getArrayStorage();
  }, [value, renderFavorites]);

  return (
    <div>
      <Header />
      <Filters>
        <Button
          data-testid="filter-by-all-btn"
          onClick={ ({ target }) => setValue(target.value) }
          value="All"
        >
          All
        </Button>
        <Button
          data-testid="filter-by-food-btn"
          onClick={ ({ target }) => setValue(target.value) }
          value="comida"
        >
          Food
        </Button>
        <Button
          data-testid="filter-by-drink-btn"
          onClick={ ({ target }) => setValue(target.value) }
          value="bebida"
        >
          Drinks
        </Button>
      </Filters>
      {arrayRecipes.map((recipe, index) => (
        <div key={ index }>
          <CardFavorite
            index={ index }
            image={ recipe.image }
            name={ recipe.name }
            category={ recipe.category }
            id={ recipe.id }
            area={ recipe.area }
            alcoholicOrNot={ recipe.alcoholicOrNot }
            type={ recipe.type }
          />
        </div>))}
    </div>
  );
}

export default FavoriteRecepies;

const Filters = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 80px;
  height: 24px;
`;
