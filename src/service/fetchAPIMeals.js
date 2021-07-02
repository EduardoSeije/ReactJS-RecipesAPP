async function apiMeals(category = '', icon = 's', str = 'search') {
  const api = await (await (fetch(`https://www.themealdb.com/api/json/v1/1/${str}.php?${icon}=${category}`))).json();
  return api.meals;
}

export default apiMeals;
