import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardFavorite from '../components/CardFavorite';
import Header from '../components/Header';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

function FavoriteRecepies() {
  const [arrayRecipes, setArrayRecipes] = useState([]);
  const [value, setValue] = useState('All');

  function getArrayStorage() {
    // const arrStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (value === 'comida') {
      return setArrayRecipes(doneRecipes.filter((recipe) => recipe.type === 'comida'));
    }
    if (value === 'bebida') {
      return setArrayRecipes(doneRecipes.filter((recipe) => recipe.type === 'bebida'));
    }
    setArrayRecipes(doneRecipes);
  }

  // function toggleValueButtons() {
  //   if(value === 'Foods')
  // }
  // image, name, category, id, area, alcoholicOrNot, index

  useEffect(() => {
    getArrayStorage();
  }, [value]);

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
