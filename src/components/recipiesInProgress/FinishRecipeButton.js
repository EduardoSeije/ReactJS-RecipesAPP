import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

export default function FinishRecipeButton() {
  const {
    recipeInfo,
    recipeIngredients,
    ingredientsInProgress,
  } = useContext(AppContext);
  const [textButton] = useState('Finalizar Receita');
  const [redirect, setRedirect] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const checkRecipieFinalized = () => {
    if (recipeIngredients.length === 0
      || recipeIngredients.length !== ingredientsInProgress.length) {
      return setButtonDisabled(true);
    } return setButtonDisabled(false);
  };

  useEffect(() => {
    checkRecipieFinalized();
  }, [recipeInfo, ingredientsInProgress]);

  const buttonFinalizar = () => {
    setRedirect(true);
  };

  const redirectFunc = () => {
    if (redirect === true) { return (<Redirect to="/receitas-feitas" />); }
    return null;
  };

  return (
    <span>
      <Button
        type="buton"
        data-testid="finish-recipe-btn"
        onClick={ buttonFinalizar }
        disabled={ buttonDisabled }
      >
        { textButton }
      </Button>
      {redirectFunc()}
    </span>
  );
}

const Button = styled.button`
  width: 80%;
  height: 50px;
  background-color: green;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

/*
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
*/
