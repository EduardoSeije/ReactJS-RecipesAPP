import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppProvider from './contexts/app/AppProvider';
import FoodProvider from './contexts/foods/FoodProvider';
import DrinksProvider from './contexts/drinks/DrinksProvider';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <FoodProvider>
        <DrinksProvider>
          <App />
        </DrinksProvider>
      </FoodProvider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
