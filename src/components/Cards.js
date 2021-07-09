import React from 'react';
import ProPTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import './Header.css';

function Cards({ index, thumbnail, name, id, type }) {
  const { pathname } = useLocation();

  return (
    <div className="">
      <Link to={ type ? `/comidas/${id}` : `${pathname}/${id}` }>
        <div
          id={ id }
          className="cards-div"
          data-testid={ `${index}-recipe-card` }
        >
          <img
            id={ id }
            data-testid={ `${index}-card-img` }
            src={ thumbnail }
            alt={ `${index} recipe` }
            className="card-img"
          />
          <h2
            id={ id }
            data-testid={ `${index}-card-name` }
            className="card-h2"
          >
            { name }
          </h2>
        </div>
      </Link>
    </div>
  );
}

Cards.propTypes = {
  index: ProPTypes.number,
  thumbnail: propTypes.string,
  name: propTypes.string,
  id: ProPTypes.string,
}.isRequired;

export default Cards;
