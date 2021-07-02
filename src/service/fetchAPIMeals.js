async function apiMeals() {
  const api = await (await (fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='))).json();
  return api.meals;
}

export default apiMeals;
