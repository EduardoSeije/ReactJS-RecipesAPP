import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IngredientCard from '../components/IngredientCard';
import Header from '../components/Header';

function ExploreIngredients() {
  const [foodIngred, setFoodIngred] = useState([]);
  const [drinksIngred, setDrinksIngred] = useState([]);
  const twelve = 12;
  const path = window.location.pathname;

  async function fetchFoodInfred() {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const response = await fetchAPI.json();
    setFoodIngred(response.meals);
  }

  async function fetchDrinksIngred() {
    const fetchAPI = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const response = await fetchAPI.json();
    setDrinksIngred(response.drinks);
  }

  useEffect(() => {
    fetchFoodInfred();
    fetchDrinksIngred();
  }, []);

  return (
    <div>
      <Header />
      <Container className="ingredients-wrapper">
        { path === '/explorar/comidas/ingredientes' ? foodIngred
          .slice(0, twelve).map((ingredient, index) => (<IngredientCard
            key={ index }
            index={ index }
            thumbnail={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            name={ ingredient.strIngredient }
          />)) : ''}
        { path === '/explorar/bebidas/ingredientes' ? drinksIngred
          .slice(0, twelve).map((ingredient, index) => (<IngredientCard
            key={ index }
            index={ index }
            thumbnail={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            name={ ingredient.strIngredient1 }
          />)) : ''}
      </Container>
    </div>
  );
}

export default ExploreIngredients;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 500px;
`;
