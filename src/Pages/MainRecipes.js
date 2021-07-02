import React from 'react';
import PropTypes from 'prop-types';
import ButtonFilters from '../components/ButtonFilters';

import LowerMenu from '../components/LowerMenu';

export default function MainRecipes({ arrayCards, categories, functionChangeFilter }) {
  console.log(arrayCards);
  return (
    <div>
      <ButtonFilters
        categories={ categories }
        functionChangeFilter={ functionChangeFilter }
      />
      <LowerMenu />
    </div>
  );
}

MainRecipes.propTypes = {
  arrayCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
};
