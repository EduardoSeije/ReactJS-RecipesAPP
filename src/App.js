import React, { useContext } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './Pages/Perfil';
import Home from './Pages/Home';
import MainRecipes from './Pages/MainRecipes';
import Explore from './Pages/Explore';
import DrinksProvider from './contexts/drinks/DrinksContext';
import MealsProvider from './contexts/foods/FoodContext';

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
        <Route path="/comidas/{id-da-receita}" component={ MainRecipes } />
        <Route path="/comidas/{id-da-receita}/in-progress" component={ MainRecipes } />
        <Route path="/bebidas/{id-da-receita}/in-progress" component={ MainRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ Explore } />
        <Route exact path="/explorar/bebidas" component={ Explore } />
        <Route path="/explorar/comidas/ingredientes" component={ Explore } />
        <Route path="/explorar/bebidas/ingredientes" component={ Explore } />
        <Route path="/explorar/comidas/area" component={ Explore } />
        {/*
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas." component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
