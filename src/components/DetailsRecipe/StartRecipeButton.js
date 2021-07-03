import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import AppContext from '../../contexts/app/AppContext';

export default function StartRecipeButton(props) {
  const { screenActive } = useContext(AppContext);
  const history = useHistory();
  const { item } = props;
  const type = screenActive === 'food' ? 'comidas' : 'bebidas';

  return (
    item.length
      ? (
        <Button
          data-testid="start-recipe-btn"
          onClick={ () => {
            history.push(
              `/${type}/${screenActive === 'food'
                ? item[0].idMeal
                : item[0].idDrink}/in-progress`,
            );
          } }
        >
          Iniciar Receita
        </Button>
      )
      : null
  );
}

StartRecipeButton.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

StartRecipeButton.defaultProps = {
  item: {},
};

const Button = styled.button`
  width: 80%;
  height: 50px;
  background-color: green;
  position: fixed;
  bottom: 10px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
