import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import user from './helpers/dataTestIds';

describe('22 - Redirecione a pessoa usuária para uma lista de cocktails'
+ 'ao clicar no ícone de bebidas', () => {
  beforeEach(() => {
    const inputEmail = getByTestId(user.inputEmailTestId);
    userEvent.type(inputEmail, user.validEmail);

    const inputPassword = getByTestId(user.inputPasswordTestId);
    userEvent.type(inputPassword, user.passwordValid);

    const btnSubmit = getByTestId(user.loginSubmitBtnTestId);
    userEvent.click(btnSubmit);
  });

  it('Redireciona para a rota correta', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const btnDrinks = getByTestId(user.drinksButtonBtn);
    expect(btnDrinks.href).toBe('http://localhost/bebidas');
  });
});
