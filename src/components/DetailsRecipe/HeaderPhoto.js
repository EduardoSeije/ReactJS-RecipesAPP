import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function HeaderPhoto(props) {
  const { image } = props;
  return (
    <Container>
      {
        image
          && (
            <img
              data-testid="recipe-photo"
              src={ image[0].strMealThumb }
              alt="Imagem da receita"
            />
          )
      }
    </Container>
  );
}

HeaderPhoto.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
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
