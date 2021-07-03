import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function StartRecipeButton(props) {
  const { item } = props;

  return (
    item.length
      ? (
        <Button
          data-testid="start-recipe-btn"
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
