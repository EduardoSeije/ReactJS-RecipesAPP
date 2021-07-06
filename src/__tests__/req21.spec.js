import React from 'react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import user from './helpers/dataTestIds';

describe('21 - Exiba o menu inferior apenas nas telas indicadas'
+ 'pelo protótipo', () => {
  it('Não tem footer na tela de login', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const footer = getByTestId(user.footerTestId);
    expect(footer).not.toBeInTheDocument();
  });

  describe('', () => {
    beforeEach(() => {
      const { getByTestId } = renderWithRouter(<App />);

      const inputEmail = getByTestId(user.inputEmailTestId);
      userEvent.type(inputEmail, user.validEmail);

      const inputPassword = getByTestId(user.inputPasswordTestId);
      userEvent.type(inputPassword, user.passwordValid);

      const btnSubmit = getByTestId(user.loginSubmitBtnTestId);
      userEvent.click(btnSubmit);
    });

    it('Tem footer na tela de principal de receitas de comidas', () => {
      const btnFood = getByTestId(user.foodButtomBtn);
      userEvent.click(btnFood);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de principal de receitas de bebidas', () => {
      const btnDrinks = getByTestId(user.drinksButtonBtn);
      userEvent.click(btnDrinks);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Não tem footer na tela de detalhes de uma receita de comida', async () => {
      const btnDrinks = getByTestId(user.drinksButtonBtn);
      userEvent.click(btnDrinks);

      const card = await waitFor(() => getByTestId(user.cardTestId));
      userEvent.click(card);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Não tem footer na tela de detalhes de uma receita de bebida', async () => {
      const btnFood = getByTestId(user.foodButtomBtn);
      userEvent.click(btnFood);

      const card = await waitFor(() => getByTestId(user.cardTestId));
      userEvent.click(card);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Não tem footer na tela de receita em processo de comida', async () => {
      const btnFood = getByTestId(user.foodButtomBtn);
      userEvent.click(btnFood);

      const card = await waitFor(() => getByTestId(user.cardTestId));
      userEvent.click(card);

      const btnStart = getByTestId(user.startRecipeTestId);
      userEvent.click(btnStart);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Não tem footer na tela de receita em processo de bebida', async () => {
      const btnDrinks = getByTestId(user.drinksButtonBtn);
      userEvent.click(btnDrinks);

      const card = await waitFor(() => getByTestId(user.cardTestId));
      userEvent.click(card);

      const btnStart = getByTestId(user.startRecipeTestId);
      userEvent.click(btnStart);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Tem footer na tela de explorar', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de explorar comidas', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const btnExploreFood = getByTestId(user.exploreFoodBtn);
      userEvent.click(btnExploreFood);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de explorar bebidas', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const btnExploreDrink = getByTestId(user.exploreDrinkBtn);
      userEvent.click(btnExploreDrink);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Tem footer na tela de explorar comidas por ingrediente', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const btnExploreFood = getByTestId(user.exploreFoodBtn);
      userEvent.click(btnExploreFood);

      const btnIngredients = getByTestId(user.exploreByIngredient);
      userEvent.click(btnIngredients);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de explorar bebidas por ingrediente', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const btnExploreDrink = getByTestId(user.exploreDrinkBtn);
      userEvent.click(btnExploreDrink);

      const btnIngredients = getByTestId(user.exploreByIngredient);
      userEvent.click(btnIngredients);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de explorar comidas por local de origem', async () => {
      const btnExplore = getByTestId(user.exploreButtomBtn);
      userEvent.click(btnExplore);

      const btnExploreFood = getByTestId(user.exploreFoodBtn);
      userEvent.click(btnExploreFood);

      const btnByArea = getByTestId(user.exploreByAreaTestId);
      userEvent.click(btnByArea);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Tem footer na tela de perfil', async () => {
      const btnProfile = getByTestId(user.profileBtnTestId);
      userEvent.click(btnProfile);

      const footer = getByTestId(user.footerTestId);
      expect(footer).toBeInTheDocument();
    });

    it('Não tem footer na tela de receitas feitas', async () => {
      const btnProfile = getByTestId(user.profileBtnTestId);
      userEvent.click(btnProfile);

      const btnRecipesDone = getByTestId(user.btnRecipesDone);
      userEvent.click(btnRecipesDone);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });

    it('Não tem footer na tela de receitas favoritas', async () => {
      const btnProfile = getByTestId(user.profileBtnTestId);
      userEvent.click(btnProfile);

      const btnFavoriteRecipes = getByTestId(user.btnFavoritesRecipes);
      userEvent.click(btnFavoriteRecipes);

      const footer = getByTestId(user.footerTestId);
      expect(footer).not.toBeInTheDocument();
    });
  });
});
