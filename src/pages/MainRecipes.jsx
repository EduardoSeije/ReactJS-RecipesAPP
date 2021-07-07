import React from 'react';
import PropTypes from 'prop-types';
import ButtonFilters from '../components/ButtonFilters';
import Header from '../components/Header';
import Cards from '../components/Cards';
import LowerMenu from '../components/LowerMenu';
import '../components/card.css';

export default function MainRecipes({ categories, arrayCards,
  functionChangeFilter, elementFilter, setToggle, toggle }) {
  const twelve = 12;

  return (
    <div>
      <Header />
      <ButtonFilters
        toggle={ toggle }
        setToggle={ setToggle }
        elementFilter={ elementFilter }
        categories={ categories }
        functionChangeFilter={ functionChangeFilter }
      />
      <div className="mapped-cards">
        {arrayCards.filter((_obj, index) => index < twelve).map((recipe, index) => (
          <Cards
            key={ index }
            index={ index }
            name={ recipe.strMeal || recipe.strDrink }
            thumbnail={ recipe.strMealThumb || recipe.strDrinkThumb }
          />))}
        <LowerMenu />
      </div>
    </div>
  );
}

MainRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
  elementFilter: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  arrayCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
