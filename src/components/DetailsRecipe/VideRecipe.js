import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function VideoRecipe(props) {
  const { item } = props;

  const parseURL = (url) => {
    const discard = 32;
    const newUrl = url.substring(discard);
    return newUrl;
  };
  return (
    <Container>
      <h3>Vídeo</h3>
      {
        item.length
          && (
            <iframe
              title="Recipe"
              data-testid="video"
              height="200"
              src={ `https://www.youtube.com/embed/${parseURL(item[0].strYoutube)}` }
            />
          )
      }
    </Container>
  );
}

VideoRecipe.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

VideoRecipe.defaultProps = {
  item: {},
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
