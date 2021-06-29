import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('2 - Crie todos os elementos que devem respeitar os atributos descritos'
+ 'no protótipo para a tela de login', () => {
  const { getByTestId } = renderWithRouter(<App />);
  it('O input de email deve possuir o atributo data-testid="email-input"', () => {
    const idLogin = getByTestId('email-input');
    expect(idLogin).toBeInTheDocument();
  });
  it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
    const idLogin = getByTestId('password-input');
    expect(idLogin).toBeInTheDocument();
  });
  it('O botão "Entrar" deve possuir o atributo data-testid="login-submit-btn"', () => {
    const idLogin = getByTestId('login-submit-btn');
    expect(idLogin).toBeInTheDocument();
  });
});

describe('3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever'
+ 'seu email no input de email', () => {
  const { getByTestId } = renderWithRouter(<App />);
  it('É possível escrever o email', () => {
    const idLogin = getByTestId('email-input');
    const mail = 'mail@mail.com';
    userEvent.type(idLogin, mail);
    expect(idLogin.innerHTML === mail).toBe(true);
  });
});

describe('4 - Desenvolva a tela de maneira que a pessoa deve conseguir'
+ 'escrever sua senha no input de senha', () => {
  const { getByTestId } = renderWithRouter(<App />);
  it('É possível escrever a senha', () => {
    const idLogin = getByTestId('password-input');
    const pass = '123456';
    userEvent.type(idLogin, pass);
    expect(idLogin.innerHTML === pass).toBe(true);
  });
});

describe('5 - Desenvolva a tela de maneira que o formulário só seja válido'
+ 'após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
  const { getByTestId } = renderWithRouter(<App />);
  it('O botão deve estar desativado se o email for inválido', () => {
    const idLogin = getByTestId('email-input');
    const mail = 'teste';
    userEvent.type(idLogin, mail);

    const button = getByTestId('login-submit-btn');
    expect(button).toBeDisabled();
  });
});
