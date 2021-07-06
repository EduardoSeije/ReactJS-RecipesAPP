import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../contexts/foods/FoodContext';
import DrinksContext from '../contexts/drinks/DrinksContext';
import ButtonFilters from '../components/ButtonFilters';
import Header from '../components/Header';
import Cards from '../components/Cards';
import LowerMenu from '../components/LowerMenu';

export default function MainRecipes({ categories, functionChangeFilter }) {
  const { mealsToMap } = useContext(FoodContext);
  const { drinksToMap } = useContext(DrinksContext);
  const twelve = 12;
  return (
    <div>
      <Header />
      <ButtonFilters
        categories={ categories }
        functionChangeFilter={ functionChangeFilter }
      />
      <div id="mapped-cards">
        {mealsToMap && mealsToMap.length > 0 ? mealsToMap
          .slice(0, twelve).map((meal, index) => (
            <Cards
              key={ index }
              index={ index }
              name={ meal.strMeal }
              thumbnail={ meal.strMealThumb }
            />
          )) : ''}
        {drinksToMap && drinksToMap.length > 0 ? drinksToMap
          .slice(0, twelve).map((drink, index) => (
            <Cards
              key={ index }
              index={ index }
              name={ drink.strDrink }
              thumbnail={ drink.strDrinkThumb }
            />
          )) : ''}
        <LowerMenu />
      </div>
    </div>
  );
}

MainRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
};
