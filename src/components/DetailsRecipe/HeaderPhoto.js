import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';

export default function HeaderPhoto(props) {
  const { screenActive } = useContext(AppContext);
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <img
              data-testid="recipe-photo"
              src={
                screenActive === 'food' ? item[0].strMealThumb : item[0].strDrinkThumb
              }
              alt="Imagem da receita"
            />
          )
      }
    </Container>
  );
}

HeaderPhoto.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

HeaderPhoto.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  display: flex;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
