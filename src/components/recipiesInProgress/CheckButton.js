import React from 'react';
// import PropTypes from 'prop-types';

// import styled from 'styled-components';
import copy from 'clipboard-copy';
import CheckIcon from './CheckIcon.png';

function CheckButton() {
  const copyUrlToCLipBoard = () => {
    copy(window.location.href);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ () => copyUrlToCLipBoard() }
      >
        <img
          data-testid="finish-recipe-btn"
          width="50px"
          src={ CheckIcon }
          alt="CheckIcon Button"
        />
      </button>
    </div>
  );
}

export default CheckButton;
