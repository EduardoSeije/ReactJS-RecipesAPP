import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [searchBar] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [radio, setRadio] = useState('');
  const [filters] = useState('');
  const [meals] = useState([]);

  const value = {
    searchBar,
    filters,
    meals,
    ingredient,
    setIngredient,
    radio,
    setRadio,
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
