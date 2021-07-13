import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IngredientCard from '../components/IngredientCard';
import FoodContext from '../contexts/foods/FoodContext';
import DrinksContext from '../contexts/drinks/DrinksContext';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';
import { requestMealIngredient } from '../service/apiRequests';
import { requestDrinkIngredient } from '../service/apiRequestsDrinks';

function ExploreIngredients() {
  const [foodIngred, setFoodIngred] = useState([]);
  const [drinksIngred, setDrinksIngred] = useState([]);
  const { setMeals } = useContext(FoodContext);
  const { setDrinks } = useContext(DrinksContext);
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

  async function fetchIngredMeals(ingredient) {
    setMeals(await requestMealIngredient(ingredient));
  }

  async function fetchIngredDrinks(ingredient) {
    setDrinks(await requestDrinkIngredient(ingredient));
  }

  function ClickMeMeals(event) {
    // setRadio('ingred');
    fetchIngredMeals(event.target.id);
    // console.log(mealsToMap);
    // console.log(event.target.id);
  }

  function ClickMeDrinks(event) {
    fetchIngredDrinks(event.target.id);
  }

  useEffect(() => {
    fetchFoodInfred();
    fetchDrinksIngred();
  }, []);

  return (
    <Container1>
      <Header />
      <Container className="ingredients-wrapper">
        { path === '/explorar/comidas/ingredientes' ? foodIngred
          .slice(0, twelve).map((ingredient, index) => (
            <Link to="/comidas" key={ index } onClick={ ClickMeMeals }>
              <IngredientCard
                key={ index }
                index={ index }
                thumbnail={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                name={ ingredient.strIngredient }
                id="link-ingred"
              />
            </Link>
          )) : ''}
        { path === '/explorar/bebidas/ingredientes' ? drinksIngred
          .slice(0, twelve).map((ingredient, index) => (
            <Link to="/bebidas" key={ index } onClick={ ClickMeDrinks }>
              <IngredientCard
                key={ index }
                index={ index }
                thumbnail={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                name={ ingredient.strIngredient1 }
              />
            </Link>
          )) : ''}
      </Container>
      <LowerMenu />
    </Container1>
  );
}

export default ExploreIngredients;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 360px;
`;

const Container1 = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;
