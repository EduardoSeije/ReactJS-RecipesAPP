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
        ingredients.push(item[0][`strIngredient${i}`]);
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
                  .map((ingredient, index) => (
                    <li
                      data-testid={ `${index}-ingredient-name-and-measure` }
                      key={ index }
                    >
                      { ingredient }
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
  height: 100%;
  max-height: 150px;
  display: flex;

  ul li {
    font-size: 21px;
  }
`;
