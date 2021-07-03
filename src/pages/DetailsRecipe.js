/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderPhoto from '../components/DetailsRecipe/HeaderPhoto';
import AppContext from '../contexts/app/AppContext';
import TitleRecipe from '../components/DetailsRecipe/TitleRecipe';
import ShareButton from '../components/DetailsRecipe/ShareButton';
import FavoriteButton from '../components/DetailsRecipe/FavoriteButton';
import TextSubtitle from '../components/DetailsRecipe/TextSubtitle';
import Ingredients from '../components/DetailsRecipe/Ingredients';
import TextInstructions from '../components/DetailsRecipe/TextInstructions';
import VideoRecipe from '../components/DetailsRecipe/VideRecipe';
import RecommendedRecipes from '../components/DetailsRecipe/RecommendedRecipes';
import StartRecipeButton from '../components/DetailsRecipe/StartRecipeButton';

import user from '../configs/configs';

export default function DetailsRecipe(props) {
  const { screens: { drink, food } } = user;
  const url = window.location.href;
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});
  const [doneRecipe, setDoneRecipe] = useState([]);
  const { match: { params: { id } } } = props;
  const { screenActive, setScreenActive } = useContext(AppContext);
  const tags = screenActive === 'food' ? item.meals : item.drinks;

  useEffect(() => {
    const dataLS = JSON.parse(localStorage.getItem('doneRecipes'));
    if (dataLS) {
      setDoneRecipe(dataLS);
    }
  }, []);

  useEffect(() => {
    if (/bebidas/.test(url)) {
      setScreenActive(drink);
    } else {
      setScreenActive(food);
    }
  }, []);

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
  }, [screenActive]);
  if (isLoading) return <p>Carregando...</p>;
  return (
    <Container>
      <HeaderPhoto item={ tags } />
      <Content>
        <TitleRecipe item={ tags } />
        <MessageClipboard className="message-clipboard">
          Link copiado!
        </MessageClipboard>
        <ShareButton item={ tags } />
        <FavoriteButton item={ tags } />
        <TextSubtitle item={ tags } />
        <Ingredients item={ tags } />
        <TextInstructions item={ tags } />
        {
          screenActive === 'food' && <VideoRecipe
            item={ tags }
          />
        }
        <RecommendedRecipes />
        { !doneRecipe.length ? <StartRecipeButton item={ tags } /> : null }
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

const MessageClipboard = styled.span`
  display: none;
  color: green;
`;
