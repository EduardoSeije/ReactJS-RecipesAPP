import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiMeals from '../../service/fetchAPIMeals';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [searchBar] = useState('');
  const [categoriesFoods, setCategories] = useState([]);
  const [filters] = useState('');
  const [mealsRecipes, setMeals] = useState([]);

  async function fetchApiMeals() {
    setMeals(await resultApiMeals());
    setCategories(await resultApiMeals('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiMeals();
  }, []);

  const value = {
    searchBar,
    filters,
    categoriesFoods,
    mealsRecipes,
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
