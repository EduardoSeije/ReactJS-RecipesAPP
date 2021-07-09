import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [screenActive, setScreenActive] = useState('food');
  const [renderFavorites, setRenderFavorites] = useState(true);

  const value = {
    screenActive,
    setScreenActive,
    renderFavorites,
    setRenderFavorites,
  };
  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
