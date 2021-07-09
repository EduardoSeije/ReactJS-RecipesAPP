import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShareImage from '../images/shareIcon.svg';
import FavoriteIconEnabled from '../images/blackHeartIcon.svg';
import AppProvider from '../contexts/app/AppContext';

function CardFavorite({ image, name, category, id, area, alcoholicOrNot, index, type }) {
  const { setRenderFavorites, renderFavorites } = useContext(AppProvider);

  function removeLocalStorage(event) {
    const recipeId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    const arr = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const arrFilter = arr.filter((recipe) => recipe.id !== recipeId);
    setRenderFavorites(!renderFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(arrFilter));
  }

  function shareUrl() {
    return navigator.clipboard.writeText(`${window.location.host}/${type}s/${id}`);
  }

  return (
    <CardRecipe id={ id }>
      <ImageRecipe>
        <Link to={ `${type}s/${id}` }>
          <Image data-testid={ `${index}-horizontal-image` } src={ image } alt={ name } />
        </Link>
      </ImageRecipe>
      <ContentRecipe>
        <TextCategory data-testid={ `${index}-horizontal-top-text` }>
          {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
        </TextCategory>
        <Link to={ `${type}s/${id}` }>
          <TextName data-testid={ `${index}-horizontal-name` }>
            { name }
          </TextName>
        </Link>

        <ShareIcon onClick={ shareUrl }>
          <Image
            data-testid={ `${index}-horizontal-share-btn` }
            src={ ShareImage }
          />
        </ShareIcon>

        <Container>
          <button
            type="button"
            onClick={ removeLocalStorage }
          >
            <img
              data-testid="favorite-btn"
              src={ FavoriteIconEnabled }
              alt="Compartilhar"
            />
          </button>
        </Container>

        {/* <TextDate data-testid={ `${index}-horizontal-done-date` }>
          { recipe.doneDate }
        </TextDate> */}
        {/* <Tags>
          <ul>
            {recipe.tags.map((tagName, i) => (
              <TextTag
                key={ i }
                data-testid={ `${index}-${tagName}-horizontal-tag` }
              >
                { tagName }
              </TextTag>
            ))}
          </ul>
        </Tags> */}
      </ContentRecipe>
    </CardRecipe>
  );
}

CardFavorite.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default CardFavorite;

const Container = styled.div`
width: 100%;
max-height: 150px;
display: flex;

img {
  width: 100%;
  height: 100%;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
`;

const CardRecipe = styled.div`
  width: 90%;
  height: 180px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #f1f1f1;
`;

const ImageRecipe = styled.div`
  width: 35%;
  height: 100%;
`;

const ContentRecipe = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const TextCategory = styled.div`
  width: 80%;
`;

const TextName = styled.div`
  width: 80%;
`;

const ShareIcon = styled.button`
  width: 26px;
  height: 26px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
