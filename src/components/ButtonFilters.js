import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonFilters({ categories }) {
  const [filtersButtons, setFiltersButton] = useState([]);

  function showFilters() {
    const number = 5;
    const arr = categories.filter((_category, index) => index < number);
    setFiltersButton(arr);
    console.log(filtersButtons);
    console.log(categories);
  }

  useEffect(() => {
    showFilters();
  }, [categories]);

  return (
    <div>
      {filtersButtons.map((category, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${category.strCategory}-category-filter` }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

ButtonFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
