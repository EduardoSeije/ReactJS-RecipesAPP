import React from 'react';
// import PropTypes from 'prop-types';

// import styled from 'styled-components';
import copy from 'clipboard-copy';
import FavoriteIcon from './FavoriteIcon.png';

function FavoriteButton() {
  const copyUrlToCLipBoard = () => {
    copy(window.location.href);
  };

  return (
    <span>
      <button
        type="button"
        onClick={ () => copyUrlToCLipBoard() }
      >
        <img
          data-testid="favorite-btn"
          width="50px"
          src={ FavoriteIcon }
          alt="Favorite Button"
        />
      </button>
    </span>
  );
}

export default FavoriteButton;
