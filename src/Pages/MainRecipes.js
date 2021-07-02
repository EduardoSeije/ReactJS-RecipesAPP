import React from 'react';
import PropTypes from 'prop-types';
import ButtonFilters from '../components/ButtonFilters';

import LowerMenu from '../components/LowerMenu';

export default function MainRecipes({ arrayCards, categories }) {
  console.log(arrayCards);
  return (
    <div>
      <ButtonFilters categories={ categories } />
      <LowerMenu />
    </div>
  );
}

MainRecipes.propTypes = {
  arrayCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
