import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import FavoriteIconEnabled from '../../images/blackHeartIcon.svg';
import FavoriteIconDisabled from '../../images/whiteHeartIcon.svg';

export default function FavoriteButton(props) {
  const { item } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const dataLS = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (dataLS) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  return (
    <Container>
      {
        item.length
          && (
            <button
              type="button"
              onClick={ () => {
                setIsFavorite(!isFavorite);
              } }
            >
              <img
                data-testid="favorite-btn"
                src={ isFavorite ? FavoriteIconEnabled : FavoriteIconDisabled }
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
