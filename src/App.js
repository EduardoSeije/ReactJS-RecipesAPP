import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import MainRecipes from './pages/MainRecipes';
import Explore from './pages/Explore';
import DetailsRecipe from './pages/DetailsRecipe';
import FinishedRecipies from './pages/FinishedRecipies';
import FavoriteRecepies from './pages/FavoriteRecepies';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/perfil" component={ Perfil } />
        <Route exact path="/comidas" component={ MainRecipes } />
        <Route exact path="/bebidas" component={ MainRecipes } />
        <Route path="/comidas/:id" component={ DetailsRecipe } />
        <Route path="/bebidas/:id" component={ DetailsRecipe } />
        <Route path="/comidas/:id/in-progress" component={ MainRecipes } />
        <Route path="/bebidas/:id/in-progress" component={ MainRecipes } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ Explore } />
        <Route exact path="/explorar/bebidas" component={ Explore } />
        <Route path="/explorar/comidas/ingredientes" component={ Explore } />
        <Route path="/explorar/bebidas/ingredientes" component={ Explore } />
        <Route path="/explorar/comidas/area" component={ Explore } />
        <Route path="/receitas-feitas" component={ FinishedRecipies } />
        <Route path="/receitas-favoritas" component={ FavoriteRecepies } />
      </Switch>
    </div>
  );
}

export default App;
