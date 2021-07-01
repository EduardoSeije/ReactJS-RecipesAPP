import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [searchBar] = useState('');
  const [filters] = useState('');
  const [drinks] = useState([]);

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
