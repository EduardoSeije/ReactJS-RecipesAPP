import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Cards from '../components/Cards';

import FoodContext from '../contexts/foods/FoodContext';

function ExploreFoodArea() {
  const maxElements = 12;

  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [list, setList] = useState([]);

  const { mealsRecipes } = useContext(FoodContext);

  const handleChange = (e) => {
    e.preventDefault();
    const { target: { value } } = e;
    setSelectedArea(value);
  };

  useEffect(() => {
    if (!selectedArea) {
      setList(mealsRecipes);
    } else {
      const getRecipesByArea = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`);
        const { meals } = await res.json();
        const newList = [];
        meals.forEach(async (meal) => {
          const elRes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
          const data = await elRes.json();
          newList.push(data.meals[0]);
        });
        setList(newList);
      };
      getRecipesByArea();
    }
  }, [selectedArea, mealsRecipes]);

  useEffect(() => {
    setList(mealsRecipes);
  }, [mealsRecipes]);

  useEffect(() => {
    const getAreas = async () => {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = await res.json();
      setAreas(data.meals);
    };
    getAreas();
    setList(mealsRecipes);
  }, [mealsRecipes]);

  return (
    <Container>
      <Header />
      <Content>
        <SelectArea
          data-testid="explore-by-area-dropdown"
          value={ selectedArea }
          onChange={ handleChange }
        >
          <option defaultValue>Selecione uma opção</option>
          {
            areas.length && areas.map(({ strArea }, i) => (
              <option
                data-testid={ `${strArea}-option` }
                value={ strArea }
                key={ i }
              >
                { strArea }
              </option>
            ))
          }
        </SelectArea>
        <ContainerCards>
          {
            list.filter((_, index) => index < maxElements)
              .map((recipe, index) => (
                <Cards
                  id={ recipe.idMeal }
                  key={ index }
                  index={ index }
                  name={ recipe.strMeal }
                  thumbnail={ recipe.strMealThumb }
                  type="meal"
                />
              ))
          }
        </ContainerCards>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-wrapper {
    display: flex;
    align-items: center;

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  }

`;

const Content = styled.div`
  width: 90%;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
`;

const SelectArea = styled.select`
  width: 60%;
  align-self: flex-end;
`;

const ContainerCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;

  .cards-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img, h2 {
    margin: 0;
  }
`;

export default ExploreFoodArea;
