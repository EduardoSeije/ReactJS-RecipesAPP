/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderPhoto from '../components/DetailsRecipe/HeaderPhoto';

export default function DetailsRecipe(props) {
  const [meal, setMeal] = useState({});
  const { match: { params: { id } } } = props;
  useEffect(() => {
    const getMeal = async () => {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json());
      setMeal(data);
    };
    getMeal();
  }, []);
  return (
    <Container>
      <HeaderPhoto image={ meal.meals } />
      {/* <TitleRecipe data-testid="recipe-title" />
      <ShareButton data-testid="share-btn" />
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
      id: PropTypes.number,
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
