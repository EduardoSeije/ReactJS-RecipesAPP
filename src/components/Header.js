import React from 'react';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

const Header = () => (
  <div>
    <button type="button" data-testid="profile-top-btn">
      <img src={ searchIcon } alt="profile-icon" />
    </button>
    <h1 data-testid="page-title">Comida</h1>
    <button type="button" data-testid="search-top-btn">
      <img src={ profileIcon } alt="search-icon" />
    </button>
  </div>
);

export default Header;
