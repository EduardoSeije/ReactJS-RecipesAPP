import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import FavoriteIcon from '../../images/blackHeartIcon.svg';

export default function FavoriteButton(props) {
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <button
              type="button"
              onClick={ () => { console.log('Link favoritado'); } }
            >
              <img
                data-testid="favorite-btn"
                src={ FavoriteIcon }
                alt="Compartilhar"
              />
            </button>
          )
      }
    </Container>
  );
}

FavoriteButton.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

FavoriteButton.defaultProps = {
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
