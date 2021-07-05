import React from 'react';
import PropTypes from 'prop-types';
import ButtonFilters from '../components/ButtonFilters';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';

export default function MainRecipes({ categories, functionChangeFilter }) {
  return (
    <div>
      <ButtonFilters
        categories={ categories }
        functionChangeFilter={ functionChangeFilter }
      />
      <Header />
      <LowerMenu />
    </div>
  );
}

MainRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
};
