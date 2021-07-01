import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import user from './helpers/dataTestIds';

describe('20 - Posicione o menu inferior de forma fixa e apresente 3'
+ 'ícones: um para comidas, um para bebidas e outro para exploração', () => {
  const { getByTestId } = renderWithRouter(<App />);

  const inputEmail = getByTestId(user.inputEmailTestId);
  userEvent.type(inputEmail, user.validEmail);

  const inputPassword = getByTestId(user.inputPasswordTestId);
  userEvent.type(inputPassword, user.passwordValid);

  const btnSubmit = getByTestId(user.loginSubmitBtnTestId);
  userEvent.click(btnSubmit);
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

    const btnFoods = getByTestId(user.foodButtomBtn);
    const imgFoods = getByRole(btnFoods, 'img', {
      name: /([/|.|\w|\s|-])(mealicon)([/|.|\w|\s|-])*\.(?:svg)/i,
    });
    expect(imgFoods).toBeInTheDocument();
  });
});
