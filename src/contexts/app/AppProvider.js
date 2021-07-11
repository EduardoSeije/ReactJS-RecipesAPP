import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [screenActive, setScreenActive] = useState('food');
  const [recipeInfo, setRecipeInfo] = useState([]); // Informações da receita
  const [recipeIngredients, setRecipeIngredients] = useState([]); // Lista de ingredientes
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]); // Receita em andamento

  const value = {
    screenActive,
    setScreenActive,

    recipeIngredients,
    setRecipeIngredients,

    recipeInfo,
    setRecipeInfo,

    ingredientsInProgress,
    setIngredientsInProgress,
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
