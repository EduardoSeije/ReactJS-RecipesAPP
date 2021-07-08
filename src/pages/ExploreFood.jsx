import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ExploreFood() {
  const [randomMeal, setRandomMeal] = useState([]);
  async function requestRandomMeal() {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const response = await fetchAPI.json();
    // console.log(response);
    setRandomMeal(response.meals[0].idMeal);
  }

  useEffect(() => {
    requestRandomMeal();
  }, []);

  return (
    <div>
      {/* {console.log(random)} */}
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
      <Link to={ randomMeal !== undefined ? `/comidas/${randomMeal}` : null }>
        <button
          data-testid="explore-surprise"
          type="button"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
}

export default ExploreFood;
