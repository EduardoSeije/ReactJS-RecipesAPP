import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

const user = {
  inputEmailTestId: 'email-input',
  inputPasswordTestId: 'password-input',
  loginSubmitBtnTestId: 'login-submit-btn',
  validEmail: 'mail@mail.com',
  passwordValid: '1234567',
  footerTestId: 'footer',
  drinksButtonBtn: 'drinks-bottom-btn',
  exploreButtomBtn: 'explore-bottom-btn',
  foodBottomBtn: 'food-bottom-btn',
};

const { getByTestId } = renderWithRouter(<App />);

const inputEmail = getByTestId(user.inputEmailTestId);
userEvent.type(inputEmail, user.validEmail);

const inputPassword = getByTestId(user.inputPasswordTestId);
userEvent.type(inputPassword, user.passwordValid);

const btnSubmit = getByTestId(user.loginSubmitBtnTestId);
userEvent.click(btnSubmit);

describe('19 - Implemente os elementos do menu inferior respeitando'
+ 'os atributos descritos no protótipo', () => {
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

describe('20 - Posicione o menu inferior de forma fixa e apresente 3'
+ 'ícones: um para comidas, um para bebidas e outro para exploração', () => {
  it('O menu inferior deve ficar fixado sempre ao final da página', () => {
    const footer = getByTestId(user.footerTestId);
    expect(footer).toHaveStyle('position: absolute; bottom: 0');
  });

  it('Apresenta os ícones corretos', () => {
    const btnDrinks = getByTestId(user.drinksButtonBtn);
    const imgDrinks = getByRole(btnDrinks, 'img', {
      name: /([/|.|\w|\s|-])(drinkicon)([/|.|\w|\s|-])*\.(?:svg)/i,
    });
    expect(imgDrinks).toBeInTheDocument();

    const btnExplore = getByTestId(user.exploreButtomBtn);
    const imgExplore = getByRole(btnExplore, 'img', {
      name: /([/|.|\w|\s|-])(exploreicon)([/|.|\w|\s|-])*\.(?:svg)/i,
    });
    expect(imgExplore).toBeInTheDocument();

    const btnFoods = getByTestId(user.foodBottomBtn);
    const imgFoods = getByRole(btnFoods, 'img', {
      name: /([/|.|\w|\s|-])(mealicon)([/|.|\w|\s|-])*\.(?:svg)/i,
    });
    expect(imgFoods).toBeInTheDocument();
  });
});
