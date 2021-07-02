import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function RecommendedRecipes(props) {
  const { item } = props;

  return (
    <Container>
      <h3>Vídeo</h3>
      {
        item.length
          && (
            <ul>
              <li
                data-testid="0-recomendation-card"
              >
                Os card vem aqui
              </li>
            </ul>
          )
      }
    </Container>
  );
}

RecommendedRecipes.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

RecommendedRecipes.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
