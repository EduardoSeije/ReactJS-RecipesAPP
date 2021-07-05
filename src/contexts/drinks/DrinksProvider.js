import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiDrinks from '../../service/fetchAPIDrinks';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchBar] = useState('');
  const [categoriesDrinks, setCategories] = useState([]);
  const [filtersDrinks, setFiltersDrinks] = useState('');
  const [drinksRecipes, setDrinks] = useState([]);

  async function fetchApiDrinks() {
    const icon = filtersDrinks ? 'c' : 's';
    const search = filtersDrinks ? 'filter' : 'search';
    setDrinks(await resultApiDrinks(search, icon, filtersDrinks));
    setCategories(await resultApiDrinks('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiDrinks();
  }, [filtersDrinks]);

  const value = {
    searchBar,
    filtersDrinks,
    categoriesDrinks,
    drinksRecipes,
    setFiltersDrinks,
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
