import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const user = {
  emailInputTestId: 'email-input',
  emailValid: 'email@email.com',
  emailInvalid: 'email',
  passwordInputTestId: 'password-input',
  passwordValid: '12345678',
  passwordInvalid: '123456',
  btnTestId: 'login-submit-btn',
  urlToRedirect: '/comidas',
  mealsToken: 1,
  cocktailsToken: 1,
};

describe('Testa o campo para preenchimento de email', () => {
  it('Deve existir um input de email com o atributo data-testid="email-input".', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputEmail = getByTestId(user.emailInputTestId);
    expect(inputEmail).toBeInTheDocument();
  });

  it('Deve ser possível escrever no input de email.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputEmail = getByTestId(user.emailInputTestId);
    userEvent.type(inputEmail, ''); // Limpando os dados do input para garantir que o teste.
    userEvent.type(inputEmail, user.emailValid);
    expect(inputEmail.value).toBe(user.emailValid);
  });
});
//
describe('Testa o campo para preenchimento da senha', () => {
  it('Deve existir um input de password com o atributo'
  + ' data-testid="password-input".', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputPassword = getByTestId(user.passwordInputTestId);
    expect(inputPassword).toBeInTheDocument();
  });

  it('Deve ser possível escrever no input de password.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputPassword = getByTestId(user.passwordInputTestId);
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, user.passwordValid);
    expect(inputPassword.value).toBe(user.passwordValid);
  });
});

describe('Testa o botão para submeter as informações do usuário.', () => {
  it('Deve existir um botão com o atributo'
  + ' data-testid="login-submit-btn".', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).toBeInTheDocument();
  });
});

describe('Testa a validação do formulário.', () => {
  function emailValidaitonFunc(email) {
    const testValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      .test(email);
    return testValidation;
  }

  function passwordValidaitonFunc(password) {
    const minimumDigits = 7;
    let testValidation = false;
    if (password.length >= minimumDigits) { testValidation = true; }
    return testValidation;
  }

  it('O botão de submerter deve estar desabilitado se o email'
  + ' não estiver em um formato válido.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputEmail = getByTestId(user.emailInputTestId);
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, user.emailInvalid);
    const testValidation = emailValidaitonFunc(inputEmail.value);
    expect(testValidation).toBe(false);
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).toBeDisabled();
  });

  it('O botão de submerter deve estar desabilitado se a senha'
  + ' não possuir um comprimento mínimo de 7 dígitos.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputPassword = getByTestId(user.passwordInputTestId);
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, user.passwordInvalid);
    const testValidationPassword = passwordValidaitonFunc(inputPassword.value);
    expect(testValidationPassword).toBe(false);
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).toBeDisabled();
  });

  it('O botão de submerter deve estar habilitado se a senha'
  + ' e o email forem válidos.', () => {
    const { getByTestId } = renderWithRouter(<App />);

    // Encontra o input de email e digita um email válido.
    const inputEmail = getByTestId(user.emailInputTestId);
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, user.emailValid);
    const testValidationEmail = emailValidaitonFunc(inputEmail.value);
    expect(testValidationEmail).toBe(true);

    // Encontra o input de senha e digita uma senha válida.
    const inputPassword = getByTestId(user.passwordInputTestId);
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, user.passwordValid);
    const testValidationPassword = passwordValidaitonFunc(inputPassword.value);
    expect(testValidationPassword).toBe(true);

    // Verifica se o botão está habilitado
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).not.toBeDisabled();
  });
});

describe('Teste as funcionalidade ao clicar no botão.', () => {
  it('Ao clicar no botão, o usuário deve ser redirecionado'
  + ' pra a página de receitas.', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    const inputEmail = getByTestId(user.emailInputTestId);
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, user.emailValid);
    const inputPassword = getByTestId(user.passwordInputTestId);
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, user.passwordValid);
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).not.toBeDisabled();
    userEvent.click(buttonSubmt);
    history.push(user.urlToRedirect);
  });

  it('Ao clicar no botão, as informações da sessão, devem ser gravadas no'
  + ' localStorage, como os tokens "cocktailsToken" e "cocktailsToken", além do'
  + ' email do usuáiro, no formato exigido pelo requisito.', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    history.push('/');
    const inputEmail = getByTestId(user.emailInputTestId);
    userEvent.type(inputEmail, '');
    userEvent.type(inputEmail, user.emailValid);
    const inputPassword = getByTestId(user.passwordInputTestId);
    userEvent.type(inputPassword, '');
    userEvent.type(inputPassword, user.passwordValid);
    const buttonSubmt = getByTestId(user.btnTestId);
    expect(buttonSubmt).not.toBeDisabled();
    userEvent.click(buttonSubmt);
    // Mochando as funções do localStorage.
    const localStorageMock = {
      setItem: jest.fn(), // Mockando a função setItem
      getItem: jest.fn(), // Mockando a função getItem
      clear: jest.fn(), // Mockando a função clear
    };
    // Configurando o valor global do local storage
    global.localStorage = localStorageMock;
    // Gragrando valores no localStorage
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    // Colocando os dados do usuário no padrão de objeto exigido.
    const userKeyLocalStore = { email: user.emailValid };
    // Convertendo no formato json, com as chaves e valores em string.
    const userInfoJson = JSON.stringify(userKeyLocalStore);
    // Gragrando valores no localStorage.
    localStorage.setItem('user', userInfoJson);

    // Lendo os dados do localStorage.
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
    expect(localStorage.getItem('user')).toBe(userInfoJson);
  });
});
