import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiMeals from '../../service/fetchAPIMeals';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [searchBar] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [radio, setRadio] = useState('');
  const [filters] = useState('');
  const [meals, setMealsSearch] = useState([]);
  const [categoriesFoods, setCategories] = useState([]);
  const [filtersFoods, setFiltersFoods] = useState('');
  const [mealsRecipes, setMeals] = useState([]);
  const [mealsToMap, setMealsToMap] = useState([]);
  const [toggleFoods, setToggleFoods] = useState(false);

  const value = {
    searchBar,
    filters,
    meals,
    ingredient,
    setIngredient,
    radio,
    setRadio,
    filtersFoods,
    categoriesFoods,
    mealsRecipes,
    setFiltersFoods,
    setMealsSearch,
    mealsToMap,
    setMealsToMap,
    toggleFoods,
    setToggleFoods,
    setMeals,
  };

  async function fetchApiMeals() {
    const icon = filtersFoods ? 'c' : 's';
    const seach = filtersFoods ? 'filter' : 'search';
    setMeals(await resultApiMeals(seach, icon, filtersFoods));
    setCategories(await resultApiMeals('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiMeals();
  }, [filtersFoods]);

  return (
    <FoodContext.Provider value={ value }>
      { children }
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
