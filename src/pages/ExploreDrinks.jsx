import React from 'react';
import { Link } from 'react-router-dom';

const ExploreDrinks = () => (
  <div>
    <Link to="/explorar/bebidas/ingredientes">
      <button
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
    </Link>
    {/* <Link to=""> */}
    <button
      data-testid="explore-surprise"
      type="button"
    >
      Me Surpreenda!
    </button>
    {/* </Link> */}
  </div>
);

export default ExploreDrinks;
