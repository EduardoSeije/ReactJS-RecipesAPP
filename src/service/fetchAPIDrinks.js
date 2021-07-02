async function apiDrinks() {
  const api = await (await (fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='))).json();
  return api.drinks;
}

export default apiDrinks;
