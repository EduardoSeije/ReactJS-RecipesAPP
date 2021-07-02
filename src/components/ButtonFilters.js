import React, { useContext, useEffect, useState } from 'react';
import DrinksContext from '../contexts/drinks/DrinksContext';

export default function ButtonFilters() {
  const [filtersButtons, setFiltersButton] = useState([]);

  const { filters } = useContext(DrinksContext);

  function showFilters() {
    const number = 5;
    const arr = filters.filter((cate, index) => index < number);
    setFiltersButton(arr);
    console.log(filtersButtons);
    console.log(filters);
  }

  useEffect(() => {
    showFilters();
  }, [filters]);

  return (
    <div>
      {filtersButtons.map((category, index) => (
        <button type="button" key={ index }>{category.strCategory}</button>
      ))}
    </div>
  );
}
