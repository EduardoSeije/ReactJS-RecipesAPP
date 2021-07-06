import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonFilters({ categories, functionChangeFilter,
  elementFilter, setToggle, toggle }) {
  const [filtersButtons, setFiltersButton] = useState([]);

  function showFilters() {
    const number = 5;
    const arr = categories.filter((_category, index) => index < number);
    setFiltersButton(arr);
  }

  function changeFilters({ target }) {
    const element = target.innerHTML;
    setToggle(!toggle);
    functionChangeFilter(element === 'All' ? '' : element);
    if (toggle === true) return functionChangeFilter('');
    console.log(elementFilter);
  }

  useEffect(() => {
    showFilters();
  }, [categories]);

  return (
    <div>
      <button type="button" onClick={ changeFilters }>All</button>
      {filtersButtons.map((category, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ changeFilters }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

ButtonFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionChangeFilter: PropTypes.func.isRequired,
  elementFilter: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
