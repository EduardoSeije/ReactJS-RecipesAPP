import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiDrinks from '../../service/fetchAPIDrinks';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchBar] = useState('');
  const [categoriesDrinks, setCategories] = useState([]);
  const [filtersDrinks, setFiltersDrinks] = useState('');
  const [drinksRecipes, setDrinks] = useState([]);
  const [drinks, setDrinksSearch] = useState([]);
  const [drinksToMap, setDrinksToMap] = useState([]);
  const [toggleDrinks, setToggleDrinks] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  async function fetchApiDrinks() {
    const icon = filtersDrinks ? 'c' : 's';
    const search = filtersDrinks ? 'filter' : 'search';
    setDrinks(await resultApiDrinks(search, icon, filtersDrinks));
    setCategories(await resultApiDrinks('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersDrinks]);

  const value = {
    searchBar,
    filtersDrinks,
    categoriesDrinks,
    drinksRecipes,
    setFiltersDrinks,
    drinks,
    setDrinksSearch,
    drinksToMap,
    setDrinksToMap,
    toggleDrinks,
    setToggleDrinks,
    pageTitle,
    setPageTitle,
    setDrinks,
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
