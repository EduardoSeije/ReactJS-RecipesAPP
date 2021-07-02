import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiDrinks from '../../service/fetchAPIDrinks';

import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchBar] = useState('');
  const [categoriesDrinks, setCategories] = useState([]);
  const [filters, setFilters] = useState([]);
  const [drinksRecipes, setDrinks] = useState([]);

  async function fetchApiDrinks() {
    setDrinks(await resultApiDrinks());
    setCategories(await resultApiDrinks('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiDrinks();
  }, []);

  const value = {
    searchBar,
    filters,
    categoriesDrinks,
    drinksRecipes,
  };
  return (
    <DrinksContext.Provider value={ value }>
      { children }
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
