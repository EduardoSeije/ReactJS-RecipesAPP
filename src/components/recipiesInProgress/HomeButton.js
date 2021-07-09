import React from 'react';
// import PropTypes from 'prop-types';

// import styled from 'styled-components';
import copy from 'clipboard-copy';
import HomeIcon from './HomeIcon.png';

function HomeButton() {
  const copyUrlToCLipBoard = () => {
    copy(window.location.href);
  };

  return (
    <span>
      <button
        type="button"
        data-testid="home-btn"
        onClick={ () => copyUrlToCLipBoard() }
      >
        <img
          data-testid="home-btn"
          width="50px"
          src={ HomeIcon }
          alt="Compartilhar"
        />
      </button>
    </span>
  );
}

export default HomeButton;
