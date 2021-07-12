import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import copy from 'clipboard-copy';
import ShareIcon from '../../images/shareIcon.svg';

export default function ShareButton(props) {
  const showMessageClipboard = () => {
    document.querySelector('.message-clipboard').style.display = 'block';
  };
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <button
              type="button"
              onClick={ () => {
                copy((window.location.href.replace(/\/in-progress/, '')));
                showMessageClipboard();
              } }
            >
              <img
                data-testid="share-btn"
                src={ ShareIcon }
                alt="Compartilhar"
              />
            </button>
          )
      }
    </Container>
  );
}

ShareButton.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ShareButton.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  max-height: 150px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
