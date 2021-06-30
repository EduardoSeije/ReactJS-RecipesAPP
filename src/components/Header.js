import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

const Header = () => (
  <div>
    <Link to="/perfil">
      <button type="button" data-testid="profile-top-btn">
        <img src={ profileIcon } alt="profile-icon" />
      </button>
    </Link>
    <h1 data-testid="page-title">Comida</h1>
    <button type="button" data-testid="search-top-btn">
      <img src={ searchIcon } alt="search-icon" />
    </button>
  </div>
);

export default Header;
