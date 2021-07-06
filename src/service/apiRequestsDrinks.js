export async function requestDrinkIngredient(ingredient) {
  const fetchAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await fetchAPI.json();
  return response.meals;
}

export async function requestDrinkName(name) {
  const fetchAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await fetchAPI.json();
  return response;
}

export async function requestDrinkFirstLetter(firstLetter) {
  const fetchAPI = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const response = await fetchAPI.json();
  return response;
}
