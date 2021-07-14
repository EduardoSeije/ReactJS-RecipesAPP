import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function Ingredients(props) {
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
                      <img src={ `https://www.themealdb.com/images/ingredients/${recipe}-Small.png` } alt="ingredient" />
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
