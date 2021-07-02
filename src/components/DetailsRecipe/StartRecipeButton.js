import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function StartRecipeButton(props) {
  const { item } = props;

  return (
    <Container>
      {
        item.length
          && (
            <Button
              data-testid="start-recipe-btn"
            >
              Iniciar Receita
            </Button>
          )
      }
    </Container>
  );
}

StartRecipeButton.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

StartRecipeButton.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: green;
`;
