async function apiDrinks(category = '', icon = 's', str = 'search') {
  const api = await (await (fetch(`https://www.thecocktaildb.com/api/json/v1/1/${str}.php?${icon}=${category}`))).json();
  return api.drinks;
}

export default apiDrinks;
