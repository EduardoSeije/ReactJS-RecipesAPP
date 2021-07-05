import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Home() {
  const [userEmail, setEmail] = useState('');
  const [validEmail, seTvalidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // Clear localstorage data when login screen loads;
  useEffect(() => {
    window.localStorage.removeItem('mealsToken');
    window.localStorage.removeItem('cocktailsToken');
    window.localStorage.removeItem('user');
  }, []);

  const changeEmailInState = (email) => {
    setEmail(email);
    const validEmailTest = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
    seTvalidEmail(validEmailTest);
  };

  const changePasswordInState = (value) => {
    const minimumPasswordLength = 7;
    setValidPassword(value.length >= minimumPasswordLength);
  };

  const saveTokenInLocalStorage = () => {
    window.localStorage.setItem('mealsToken', 1);
    window.localStorage.setItem('cocktailsToken', 1);
  };

  const saveUserInfoInLocalStorage = () => {
    const userKeyLocalStore = { email: userEmail };
    const userInfoJson = JSON.stringify(userKeyLocalStore);
    localStorage.setItem('user', userInfoJson);
  };

  const buttonSubmit = () => {
    saveTokenInLocalStorage();
    saveUserInfoInLocalStorage();
    setRedirect(true);
  };

  return (
    <div>
      <div>
        <h3>{validEmail === false ? 'false' : 'true'}</h3>
        <h3>{validPassword === false ? 'false' : 'true'}</h3>
        <label htmlFor="text">
          Email
          <input
            id="text"
            data-testid="email-input"
            type="text"
            placeholder="Digite um email válido"
            onChange={ (event) => { changeEmailInState(event.target.value); } }
          />
        </label>
      </div>
      <div>
        <label htmlFor="text">
          Senha
          <input
            id="text"
            type="password"
            data-testid="password-input"
            placeholder="Pelo menos sete dígitos"
            onChange={ (event) => { changePasswordInState(event.target.value); } }
          />
        </label>
      </div>
      <div>
        <button
          id="loginButton"
          type="button"
          data-testid="login-submit-btn"
          disabled={ validEmail === false || validPassword === false }
          onClick={ buttonSubmit }
        >
          Entrar
        </button>
        {redirect ? <Redirect to="/comidas" /> : null}
      </div>
    </div>
  );
}

export default Home;
