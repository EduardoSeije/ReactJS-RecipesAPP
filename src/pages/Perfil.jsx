import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';

const Perfil = () => {
  const [user, setUser] = useState('Faça login...');
  const userEmail = () => {
    if ((window.localStorage).length > 0) {
      setUser(JSON.parse(window.localStorage.getItem('user')));
    }
  };

  useEffect(() => {
    userEmail();
  }, []);

  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push('/');
  };
  return (
    <div>
      <Header title="Perfil" />
      <h2 data-testid="profile-email">
        { Object.values(user) }
      </h2>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn" type="button">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          data-testid="profile-favorite-btn"
          type="button"
        >
          Receitas Favoritas
        </button>
      </Link>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ logout }
      >
        Sair
      </button>
      <LowerMenu />
    </div>
  );
};
export default Perfil;
