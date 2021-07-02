import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function HeaderPhoto(props) {
  const { item } = props;
  return (
    <Container>
      {
        item.length
          && (
            <img
              data-testid="recipe-photo"
              src={ item[0].strMealThumb }
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
  width: 100vw;
  height: 100%;
  max-height: 150px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`;
