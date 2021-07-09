import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import MainRecipes from './pages/MainRecipes';
import Explore from './pages/Explore';
import DrinksProvider from './contexts/drinks/DrinksContext';
import MealsProvider from './contexts/foods/FoodContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsRecipe from './pages/DetailsRecipe';
import FinishedRecipies from './pages/FinishedRecipies';
import FavoriteRecepies from './pages/FavoriteRecepies';
import RecpiesInProgress from './pages/RecpiesInProgress';

function App() {
  const { categoriesDrinks, drinksRecipes,
    setFiltersDrinks } = useContext(DrinksProvider);
  const { categoriesFoods, mealsRecipes, setFiltersFoods } = useContext(MealsProvider);

  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/perfil" component={ Perfil } />
        <Route
          exact
          path="/bebidas"
          render={ (props) => (
            <MainRecipes
              { ...props }
              functionChangeFilter={ setFiltersDrinks }
              categories={ categoriesDrinks }
              arrayCards={ drinksRecipes }
            />) }
        />
        <Route
          exact
          path="/comidas"
          render={ (props) => (
            <MainRecipes
              { ...props }
              functionChangeFilter={ setFiltersFoods }
              categories={ categoriesFoods }
              arrayCards={ mealsRecipes }
            />) }
        />
        <Route path="/comidas/:id/in-progress" component={ RecpiesInProgress } />
        <Route path="/bebidas/:id/in-progress" component={ RecpiesInProgress } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ Explore } />
        <Route exact path="/explorar/bebidas" component={ Explore } />
        <Route path="/explorar/comidas/ingredientes" component={ Explore } />
        <Route path="/explorar/bebidas/ingredientes" component={ Explore } />
        <Route path="/explorar/comidas/area" component={ Explore } />
        <Route path="/receitas-feitas" component={ FinishedRecipies } />
        <Route path="/receitas-favoritas" component={ FavoriteRecepies } />
        <Route path="/comidas/:id" component={ DetailsRecipe } />
        <Route path="/bebidas/:id" component={ DetailsRecipe } />
      </Switch>
    </div>
  );
}

export default App;
