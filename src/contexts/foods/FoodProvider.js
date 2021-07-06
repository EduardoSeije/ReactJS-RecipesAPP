import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiMeals from '../../service/fetchAPIMeals';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [searchBar] = useState('');
  const [categoriesFoods, setCategories] = useState([]);
  const [filtersFoods, setFiltersFoods] = useState('');
  const [mealsRecipes, setMeals] = useState([]);

  async function fetchApiMeals() {
    const icon = filtersFoods ? 'c' : 's';
    const seach = filtersFoods ? 'filter' : 'search';
    setMeals(await resultApiMeals(seach, icon, filtersFoods));
    setCategories(await resultApiMeals('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiMeals();
  }, [filtersFoods]);

  const value = {
    searchBar,
    filtersFoods,
    categoriesFoods,
    mealsRecipes,
    setFiltersFoods,
  };

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
