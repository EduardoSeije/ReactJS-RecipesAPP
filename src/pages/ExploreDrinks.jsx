import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ExploreDrinks() {
  const [randomDrink, setRandomDrink] = useState([]);
  async function requestRandomDrink() {
    const fetchAPI = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const response = await fetchAPI.json();
    // console.log(response);
    setRandomDrink(response.drinks[0].idDrink);
  }

  useEffect(() => {
    requestRandomDrink();
  }, []);

  return (
    <div>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${randomDrink}` }>
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

export default ExploreDrinks;
