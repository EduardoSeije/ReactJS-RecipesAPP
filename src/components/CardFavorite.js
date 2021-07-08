import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';

function CardFavorite({ image, name, category, id }) {
  return (
    <div>
      <img src={ image } alt={ name } />
      <p id={ id }>{ name }</p>
      <p>{category}</p>
      <button
        type="button"
        // onClick={ () => {
        //   copy(id);
        // } }
      >
        <img
          data-testid="share-btn"
          src={ ShareIcon }
          alt="Compartilhar"
        />
      </button>
    </div>
  );
}

CardFavorite.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default CardFavorite;
