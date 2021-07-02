/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderPhoto from '../components/DetailsRecipe/HeaderPhoto';
import AppContext from '../contexts/app/AppContext';

export default function DetailsRecipe(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});
  const { match: { params: { id } } } = props;
  const { screenActive } = useContext(AppContext);
  useEffect(() => {
    setIsLoading(true);
    const getItem = async () => {
      const API = screenActive === 'food'
        ? 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
        : 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
      const data = await fetch(`${API}${id}`).then((res) => res.json());
      setItem(data);
      setIsLoading(false);
    };
    getItem();
  }, []);
  if (isLoading) {
    return <p>Carregando...</p>;
  }
  return (
    <Container>
      <HeaderPhoto item={ screenActive === 'food' ? item.meals : item.drinks } />
      {/* <TitleRecipe title={ meal.meals } data-testid="recipe-title" /> */}
      {/* <ShareButton data-testid="share-btn" />
      <FavoriteButton data-testid="favorite-btn" />
      <TextCategory data-testid="recipe-category" />
      <Ingredients data-testid="${index}-ingredient-name-and-measure" />
      <TextIntructions data-testid="instructions" />
      { screenActive === 'food' && <VideoRecipe data-testid="video" /> }
      <RecommendedRecipes data-testid="${index}-recomendation-card" />
      <StartRecipeButton data-testid="start-recipe-btn" /> */}
    </Container>
  );
}

DetailsRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
