export async function requestMealIngredient(ingredient) {
  const fetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await fetchAPI.json();
  return response;
}

export async function requestMealName(name) {
  const fetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const response = await fetchAPI.json();
  return response;
}

export async function requestMealFirstLetter(firstLetter) {
  const fetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const response = await fetchAPI.json();
  return response;
}
