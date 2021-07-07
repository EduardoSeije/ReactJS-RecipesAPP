import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import FavoriteIconEnabled from '../../images/blackHeartIcon.svg';
import FavoriteIconDisabled from '../../images/whiteHeartIcon.svg';

import AppContext from '../../contexts/app/AppContext';

const checkIsFavorite = (item, screenActive, setIsFavorite) => {
  const dataLS = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (item[0] && dataLS) {
    if (screenActive === 'food') {
      const check = !!dataLS.filter((recipe) => recipe.id === item[0].idMeal).length;
      if (check) setIsFavorite(true);
    } else {
      const check = !!dataLS.filter((recipe) => recipe.id === item[0].idDrink).length;
      if (check) setIsFavorite(true);
    }
  } else {
    setIsFavorite(false);
  }
};

export default function FavoriteButton(props) {
  const { item } = props;

  const [isFavorite, setIsFavorite] = useState(false);
  const { screenActive } = useContext(AppContext);

  useEffect(() => {
    checkIsFavorite(item, screenActive, setIsFavorite);
  }, [item]);

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
