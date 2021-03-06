import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import PageTitle from './PageTitle';
import SearchBar from './SearchBar';
import './Header.css';

function Header() {
  const [isHidden, setIsHidden] = useState('true');
  const handleToggle = () => {
    setIsHidden(!isHidden);
  };
  // const pageTitle = (window.location.pathname).substr(1);
  // const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <div>
      <div className="header-wrapper">
        <Link to="/perfil">
          <button type="button" data-testid="profile-top-btn" src={ profileIcon }>
            <img src={ profileIcon } alt="profile-icon" />
          </button>
        </Link>
        <h1 data-testid="page-title">
          {' '}
          <PageTitle />
          {' '}
        </h1>
        <button
          id="search-btn"
          type="button"
          data-testid="search-top-btn"
          onClick={ handleToggle }
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="search-icon" />
        </button>
      </div>
      <div id="search-bar" className={ isHidden ? 'hidden' : 'notHidden' }>
        {isHidden ? <div /> : <SearchBar />}
      </div>
    </div>
  );
}

export default Header;
