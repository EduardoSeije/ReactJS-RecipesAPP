import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import user from './helpers/dataTestIds';

describe('23 - Redirecione a pessoa usuária para a tela de'
+ 'explorar ao clicar no ícone de exploração', () => {
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

    const btnExplore = getByTestId(user.exploreButtomBtn);
    expect(btnExplore.href).toBe('http://localhost/explorar');
  });
});
