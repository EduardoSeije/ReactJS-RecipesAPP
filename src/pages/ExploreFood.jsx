import React from 'react';
import { Link } from 'react-router-dom';

const ExploreFood = () => (
  <div>
    <Link to="/explorar/comidas/ingredientes">
      <button
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button
        data-testid="explore-by-area"
        type="button"
      >
        Por Local de Origem
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

export default ExploreFood;
