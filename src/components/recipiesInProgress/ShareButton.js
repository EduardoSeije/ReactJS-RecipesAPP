import React from 'react';
// import PropTypes from 'prop-types';

// import styled from 'styled-components';
import copy from 'clipboard-copy';
import ShareButtonIcon from './ShareButtonIcon.png';

function ShareButton() {
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
          data-testid="share-btn"
          width="50px"
          src={ ShareButtonIcon }
          alt="Compartilhar"
        />
      </button>
    </span>
  );
}

export default ShareButton;
