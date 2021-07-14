import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

export default function Ingredients(props) {
  const {
    recipeInfo,
    setRecipeInfo,
    setRecipeIngredients,
    ingredientsInProgress,
    setIngredientsInProgress,
  } = useContext(AppContext);

  const { item } = props;

  useEffect(() => {
    if (item[0] !== undefined) {
      setRecipeInfo(item[0]);
    }
  }, [props, item]);

  const stepsIngredientsFitler = () => {
    if (item !== null || item !== undefined || item.length !== 0) {
      const ingredientes = [];
      Object.entries(recipeInfo).filter(([key, value]) => {
        if (key.includes('strIngredient')) { ingredientes.push(value); }
        return null;
      });

      const quantidade = [];
      Object.entries(recipeInfo).filter(([key, value]) => {
        if (key.includes('strMeasure')) { quantidade.push(value); }
        return null;
      });

      const passos = [];
      ingredientes.forEach((ingredient, index) => {
        const o = {
          recipe: ingredient,
          qnt: quantidade[index],
        };
        passos.push(o);
      });
      const steps = passos.filter((ele) => !(ele.recipe === null || ele.recipe === ''));
      return steps;
    }
  };

  useEffect(() => {
    setRecipeIngredients(stepsIngredientsFitler());
  }, [recipeInfo]);

  // SUBSTITUIR: Na função do componente ../DetailsRecipe/Ingredients.js
  /*
    const ingredientsList = () => {
      const stepsList = stepsIngredientsFitler()
        .map(({ recipe, qnt }, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            { `${recipe} - ${qnt}` }
          </li>
        ));
      return <ul>{stepsList}</ul>;
    };
  */

  const changeClassesWhenIngredientClicked = (event) => {
    if (event.target.parentNode.className === 'stepNotDoneYet') {
      event.target.parentNode.className = 'stepDone';
    } else { event.target.parentNode.className = 'stepNotDoneYet'; }
  };

  const checkIngredientWhenClicked = (event) => {
    if (!ingredientsInProgress.includes(event.target.value)) {
      setIngredientsInProgress(ingredientsInProgress.concat(event.target.value));
    } else if (ingredientsInProgress.includes(event.target.value)) {
      setIngredientsInProgress(ingredientsInProgress.filter((step) => !step
        .includes(event.target.value)));
    }
    return null;
  };

  const ingredientsCheckBox = () => {
    const checkList = stepsIngredientsFitler().map((ele, index) => (
      <div key={ index } data-testid={ `${index}-ingredient-step` }>
        <label
          htmlFor={ `ingredient-step-${index}` }
          className="stepNotDoneYet"
          style={ ingredientsInProgress.includes(ele.recipe)
            ? { textDecoration: 'line-through' } : null }
        >
          <input
            onClick={ (event) => {
              checkIngredientWhenClicked(event);
              changeClassesWhenIngredientClicked(event);
            } }
            value={ ele.recipe }
            id={ `ingredient-step-${index}` }
            type="checkbox"
            // data-testid={ `${index}-ingredient-step` }
            checked={ ingredientsInProgress.includes(ele.recipe) }
          />
          <img src={ `https://www.themealdb.com/images/ingredients/${ele.recipe}-Small.png` } alt="ingredient" />
          { ele.recipe }
        </label>
      </div>
    ));
    return checkList;
  };

  return (
    <Container>
      {/* {ingredientsList()} */}
      {ingredientsCheckBox()}
    </Container>
  );
}

Ingredients.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Ingredients.defaultProps = {
  item: {},
};

const Container = styled.div`
  ul li {
    font-size: 21px;
  }
`;

/*
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  ul li {
    font-size: 21px;
  }
`;
*/
