import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function Ingredients(props) {
  const [recipeIngredients, setRecipeIngredients] = useState([]); // Ingredientes da receita
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]); // Receita em andamento
  const { item } = props;

  const listIngredients = () => {
    const ingredients = [];
    const maxItems = 20;
    for (let i = 1; i <= maxItems; i += 1) {
      if (item[0][`strIngredient${i}`]) {
        const newEl = {
          recipe: item[0][`strIngredient${i}`],
          qnt: item[0][`strMeasure${i}`],
        };
        ingredients.push(newEl);
      }
    }
    return ingredients;
  };

  // console.log(item);
  if (item !== undefined && item.length !== 0) {
    console.log(item[0]);
  }

  const separarIngredientes = () => {
    // const ingredientes = [];
    // item[0].forEach((ele) => console.log(ele));

    // Object.entries(item).filter(([key, value]) => {
    //   if (key.includes('strIngredient') && value !== '') { ingredientes.push(value); }
    //   return null;
    // });
    // console.log(ingredientes);
  };

  // console.log(item[0]);

  separarIngredientes();

  // console.log(item);

  useEffect(() => {
    // setRecipeIngredients(listIngredients());
  }, []);

  // console.log(recipeIngredients);

  return (
    <Container>
      {
        item.length
          && (
            <ul>
              {
                listIngredients()
                  .map(({ recipe, qnt }, index) => (
                    <li
                      data-testid={ `${index}-ingredient-name-and-measure` }
                      key={ index }
                    >
                      { `${recipe} - ${qnt}` }
                    </li>
                  ))
              }
            </ul>
          )
      }
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
  width: 100%;
  height: auto;
  display: flex;

  ul li {
    font-size: 21px;
  }
`;
