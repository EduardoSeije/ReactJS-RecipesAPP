import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiMeals from '../../service/fetchAPIMeals';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [searchBar] = useState('');
  const [filters] = useState('');
  const [meals, setMeals] = useState([]);

  async function fetchApiMeals() {
    setMeals(await resultApiMeals());
  }

  useEffect(() => {
    fetchApiMeals();
  }, []);

  const value = {
    searchBar,
    filters,
    meals,
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
