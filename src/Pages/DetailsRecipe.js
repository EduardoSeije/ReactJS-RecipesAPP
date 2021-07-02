/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderPhoto from '../components/DetailsRecipe/HeaderPhoto';
import AppContext from '../contexts/app/AppContext';
import TitleRecipe from '../components/DetailsRecipe/TitleRecipe';
import ShareButton from '../components/DetailsRecipe/ShareButton';
import FavoriteButton from '../components/DetailsRecipe/FavoriteButton';
import TextCategory from '../components/DetailsRecipe/TextCategory';
import Ingredients from '../components/DetailsRecipe/Ingredients';
import TextInstructions from '../components/DetailsRecipe/TextInstructions';
import VideoRecipe from '../components/DetailsRecipe/VideRecipe';

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
      <Content>
        <TitleRecipe item={ screenActive === 'food' ? item.meals : item.drinks } />
        <ShareButton item={ screenActive === 'food' ? item.meals : item.drinks } />
        <FavoriteButton item={ screenActive === 'food' ? item.meals : item.drinks } />
        <TextCategory item={ screenActive === 'food' ? item.meals : item.drinks } />
        <Ingredients item={ screenActive === 'food' ? item.meals : item.drinks } />
        <TextInstructions item={ screenActive === 'food' ? item.meals : item.drinks } />
        {
          screenActive === 'food' && <VideoRecipe
            item={
              screenActive === 'food' ? item.meals : item.drinks
            }
          />
        }
        {/* <RecommendedRecipes data-testid="${index}-recomendation-card" />
        <StartRecipeButton data-testid="start-recipe-btn" /> */}
      </Content>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  width: 96%;
  height: 100%;
`;
