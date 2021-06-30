import React from 'react';
import renderWithRouter from '../renderWithRouter';
import ScreenRecipes from '../components/ScreenRecipes';
import meals from '../mocks/arrayFoods';
import drinks from '../mocks/arrayDrinks';
import categoriesDrinks from '../mocks/categoriesDrinks';
import categoriesFoods from '../mocks/categoriesFoods';

describe('25 - implemente os elementos da tela principal de receitas'
  + 'respeitando os atributos decrutos no protótipo', () => {
  it('A tela tem os data-testids de todos os 12 cards da tela de comidas', () => {
    const { getByTestId } = renderWithRouter(<ScreenRecipes />);
    meals.forEach((_food, index) => {
      const foodTestIdFoods = getByTestId(`${index}-recipe-card`);
      expect(foodTestIdFoods).toBeIntheDocument();
    });
  });

  it('A tela tem os data-testids de todos ps 12 cards da teça de bebidas', () => {
    const { getByTestId } = renderWithRouter(<ScreenRecipes />);
    drinks.forEach((_drink, index) => {
      const foodTestIdDrinks = getByTestId(`${index}-recipe-card`);
      expect(foodTestIdDrinks).toBeIntheDocument();
    });
  });
});

describe('26 - Carregue as 12 primeiras receitas'
  + 'de comidas ou bebidas, uma em cada card', () => {
  const sizeArray = 12;

  it('Caso as receitas sejam de comida,'
    + 'deve-se carregar as 12 primeiras receitas', () => {
    const { getByTestId } = renderWithRouter(<ScreenRecipes />);
    const arrayMeals = meals
      .filter((_food, index) => getByTestId(`${index}-recipe-card`));
    expect(arrayMeals).toHaveLength(sizeArray);
  });

  it('Caso as receitas sejam de comida,'
    + 'deve-se carregar as 12 primeiras receitas', () => {
    const { getByTestId } = renderWithRouter(<ScreenRecipes />);
    const arrayDrinks = drinks
      .filter((_drink, index) => getByTestId(`${index}-recipe-card`));
    expect(arrayDrinks).toHaveLength(sizeArray);
  });
});

describe('27 - Implemente os botões de categoria para'
  + 'serem utilizados como filtro', () => {
  it('Caso as receitas sejam de bebidas, deve-se'
  + 'exibir as 5 primeiras categorias de comida', () => {
    categoriesFoods.forEach((_drink, index) => {
      const foodTestIdCategoriesFoods = getByTestId(`${index}-category-filter`);
      expect(foodTestIdCategoriesFoods).toBeIntheDocument();
    });
  });

  it('Caso as receitas sejam de bebidas, deve-se'
    + 'exibir as 5 primeiras categorias de comida', () => {
    categoriesDrinks.forEach((_drink, index) => {
      const foodTestIdCategoriesDrinks = getByTestId(`${index}-category-filter`);
      expect(foodTestIdCategoriesDrinks).toBeIntheDocument();
    });
  });
});

// describe('28 - Implemente o filtro das receitas'
//   + 'através da API ao clicar no filtro de categoria', () => {
//   it() 
//   });
