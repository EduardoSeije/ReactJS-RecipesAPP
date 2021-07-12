import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function TextInstructions(props) {
  const { item } = props;
  return (
    <Container>
      <h3>Instructions</h3>
      {
        item.length
          && (
            <p
              data-testid="instructions"
            >
              { item[0].strInstructions }
            </p>
          )
      }
    </Container>
  );
}

TextInstructions.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextInstructions.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
