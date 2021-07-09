import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

export default function TitleRecipe(props) {
  const { screenActive } = useContext(AppContext);
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <h3
              data-testid="recipe-title"
            >
              { screenActive === 'food' ? item[0].strMeal : item[0].strDrink }
            </h3>
          )
      }
    </Container>
  );
}

TitleRecipe.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TitleRecipe.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 150px;
  display: flex;

  h3 {
    color: black;
    margin: 0;
    font-size: 30px;
    font-weight: 400;
    margin-top: 10px;
  }
`;
