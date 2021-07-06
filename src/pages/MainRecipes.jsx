import React from 'react';
import PropTypes from 'prop-types';
import ButtonFilters from '../components/ButtonFilters';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';

export default function MainRecipes({ categories, functionChangeFilter, elementFilter,
  setToggle, toggle }) {
  return (
    <div>
      <Header />
      <ButtonFilters
        toggle={ toggle }
        setToggle={ setToggle }
        elementFilter={ elementFilter }
        categories={ categories }
        functionChangeFilter={ functionChangeFilter }
      />
      <LowerMenu />
    </div>
  );
}

MainRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
  elementFilter: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
