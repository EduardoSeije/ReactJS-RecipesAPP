import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function TextCategory(props) {
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <h2
              data-testid="recipe-category"
            >
              { item[0].strCategory }
            </h2>
          )
      }
    </Container>
  );
}

TextCategory.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextCategory.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  max-height: 150px;
  display: flex;

  h2 {
    font-size: 21px;
    color: #A9A9A9;
  }
`;
