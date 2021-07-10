import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

const getInProgressRecipes = () => {
  const dataLS = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return dataLS || false;
};

function StartRecipeButton(props) {
  const { screenActive } = useContext(AppContext);
  const { item } = props;
  const type = screenActive === 'food' ? 'comidas' : 'bebidas';
  const [textButton, setTextButton] = useState('Iniciar Receita');
  const [redirect, setRedirect] = useState(false);

  const buttonIniciar = () => {
    setRedirect(true);
  };

  const redirectFunc = () => {
    if (redirect === true) {
      return (
        <Redirect
          to={ `/${type}/${screenActive === 'food' ? item[0].idMeal
            : item[0].idDrink}/in-progress` }
        />);
    }
    return null;
  };

  useEffect(() => {
    const dataLS = getInProgressRecipes();
    if (item.length && dataLS) {
      let check;
      if (type === 'comidas') {
        check = !!Object.keys(dataLS.meals).filter(
          (key) => key === item[0].idMeal,
        ).length;
      } else {
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
    <span>
      <Button
        type="buton"
        data-testid="start-recipe-btn"
        onClick={ buttonIniciar }
      >
        { textButton }
      </Button>
      {redirectFunc()}
    </span>
  );
}

StartRecipeButton.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

StartRecipeButton.defaultProps = {
  item: {},
};

export default StartRecipeButton;

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
