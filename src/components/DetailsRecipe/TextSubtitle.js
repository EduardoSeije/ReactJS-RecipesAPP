import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

export default function TextSubtitle(props) {
  const { screenActive } = useContext(AppContext);
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <h2
              data-testid="recipe-category"
            >
              { screenActive === 'food' ? item[0].strCategory : item[0].strAlcoholic }
            </h2>
          )
      }
    </Container>
  );
}

TextSubtitle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextSubtitle.defaultProps = {
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
