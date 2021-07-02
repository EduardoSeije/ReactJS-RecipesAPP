import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultApiDrinks from '../../service/fetchAPIDrinks';

import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchBar] = useState('');
  const [filters, setFilters] = useState([]);
  const [drinks, setDrinks] = useState([]);

  async function fetchApiDrinks() {
    setDrinks(await resultApiDrinks());
    setFilters(await resultApiDrinks('list', 'c', 'list'));
  }

  useEffect(() => {
    fetchApiDrinks();
  }, []);

  const value = {
    searchBar,
    filters,
    drinks,
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
