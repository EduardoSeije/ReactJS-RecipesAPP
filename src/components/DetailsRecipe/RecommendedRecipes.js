/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import AppContext from '../../contexts/app/AppContext';
import CardRecommendeds from './CardRecommendeds';

export default function RecommendedRecipes() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const limitCards = 6;

  const { screenActive } = useContext(AppContext);
  const tags = screenActive === 'drink' ? recommendations.meals : recommendations.drinks;

  useEffect(() => {
    setIsLoading(true);
    let active = true;
    const getRecommendations = async () => {
      const API = screenActive === 'drink'
        ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const data = await fetch(`${API}`).then((res) => res.json());
      if (active) {
        setRecommendations(data);
      }
    };
    getRecommendations();
    setIsLoading(false);
    return () => {
      active = false;
    };
  }, [screenActive]);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <Container>
      <h3>Receitas Recomendadas</h3>
      {
        tags
        && (
          <ul>
            {
              tags
                .filter((_, i) => i < limitCards)
                .map((recommend, i) => (
                  <li
                    key={ i }
                    data-testid={ `${i}-recomendation-card` }
                  >
                    <CardRecommendeds
                      title={
                        screenActive === 'food' ? recommend.strDrink : recommend.strMeal
                      }
                      image={
                        screenActive === 'food'
                          ? recommend.strDrinkThumb : recommend.strMealThumb
                      }
                    />
                  </li>
                ))
            }
          </ul>
        )
      }
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ul {
    overflow-x: scroll;
    display: flex;
    padding: 20px;
    margin-bottom: 80px;
  }
  
  ul li {
    display: inline;

    +li {
      margin-left: 10px;
    }
  }
`;
