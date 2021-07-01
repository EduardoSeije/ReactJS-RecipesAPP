import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import app from '../configs/configs';
import AppContext from '../contexts/app/AppContext';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function LowerMenu() {
  const { setScreenActive } = useContext(AppContext);
  const history = useHistory();
  return (
    <Container data-testid="footer">
      <ul>
        <li>
          <button
            type="button"
            data-testid="drinks-bottom-btn"
            onClick={ () => {
              setScreenActive(app.screens.drink);
              history.push('/bebidas');
            } }
          >
            <img src={ drinkIcon } alt="Drink icon" />
          </button>
        </li>
        <li>
          <button type="button" data-testid="explore-bottom-btn">
            <img src={ exploreIcon } alt="Explore icon" />
          </button>
        </li>
        <li>
          <button type="button" data-testid="food-bottom-btn">
            <img src={ mealIcon } alt="Meal icon" />
          </button>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  ul li {
    display: inline;
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
