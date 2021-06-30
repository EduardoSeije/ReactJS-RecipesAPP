import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import user from './helpers/dataTestIds';

describe('19 - Implemente os elementos do menu inferior respeitando'
+ 'os atributos descritos no protótipo', () => {
  const { getByTestId } = renderWithRouter(<App />);

  const inputEmail = getByTestId(user.inputEmailTestId);
  userEvent.type(inputEmail, user.validEmail);

  const inputPassword = getByTestId(user.inputPasswordTestId);
  userEvent.type(inputPassword, user.passwordValid);

  const btnSubmit = getByTestId(user.loginSubmitBtnTestId);
  userEvent.click(btnSubmit);
  it('O menu inferior deve ter possuir o atributo data-testid="footer"', () => {
    const footer = getByTestId(user.footerTestId);
    expect(footer).toBeInTheDocument();
  });

  it('O elemento que leva para a página de drinks deve possuir'
  + 'o atributo data-testid="drinks-bottom-btn"', () => {
    const btnDrinks = getByTestId(user.drinksButtonBtn);
    expect(btnDrinks).toBeInTheDocument();
  });

  it('O elemento que leva para a página de explorar deve possuir o'
  + 'atributo data-testid="explore-bottom-btn"', () => {
    const btnExplore = getByTestId(user.exploreBottomBtn);
    expect(btnExplore).toBeInTheDocument();
  });

  it('O elemento que leva para a página de comidas deve possuir'
  + 'o atributo data-testid="food-bottom-btn"', () => {
    const btnFoods = getByTestId(user.foodButtomBtn);
    expect(btnFoods).toBeInTheDocument();
  });
});
