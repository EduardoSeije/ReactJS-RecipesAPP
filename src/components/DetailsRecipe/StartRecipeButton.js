import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import AppContext from '../../contexts/app/AppContext';

const getInProgressRecipes = () => {
  // const dataLS = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // return dataLS || false;
};

export default function StartRecipeButton(props) {
  const { screenActive } = useContext(AppContext);
  const history = useHistory();
  const { item } = props;
  const type = screenActive === 'food' ? 'comidas' : 'bebidas';
  const [textButton, setTextButton] = useState('Iniciar Receita');

  useEffect(() => {
    const dataLS = getInProgressRecipes();
    if (item.length && dataLS) {
      let check;
      if (type === 'comidas') {
        console.log(dataLS);
        check = !!Object.keys(dataLS.meals).filter(
          (key) => key === item[0].idMeal,
        ).length;
      } else {
        console.log(dataLS);
        console.log(item);
        check = !!Object.keys(dataLS.cocktails).filter(
          (key) => key === item[0].idDrink,
        ).length;
      }
      if (check) {
        setTextButton('Continuar Receita');
      }
    }
  }, [item]);

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
          { textButton }
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
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
