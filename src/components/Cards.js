import React from 'react';
import ProPTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function Cards({ index, thumbnail, name }) {
  return (
    <div
      id="cards-div"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ thumbnail }
        alt={ `${index} recipe` }
        id="card-img"
      />
      <h2
        data-testid={ `${index}-card-name` }
        id="card-h2"
      >
        { name }
      </h2>
    </div>
  );
}

Cards.propTypes = {
  index: ProPTypes.number,
  thumbnail: propTypes.string,
  name: propTypes.string,
}.isRequired;

export default Cards;
