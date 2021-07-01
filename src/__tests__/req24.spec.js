import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import user from './helpers/dataTestIds';

describe('24 - Redirecione a pessoa usuárua para uma lista'
+ 'de comidas ao clicar no ícone de comidas', () => {
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

    const btnFood = getByTestId(user.foodButtomBtn);
    expect(btnFood.href).toBe('http://localhost/comidas');
  });
});
