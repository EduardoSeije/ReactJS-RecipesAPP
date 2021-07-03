import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import MainRecipes from './pages/MainRecipes';
import Explore from './pages/Explore';
import DetailsRecipe from './pages/DetailsRecipe';

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
        {/* <Route path="/perfil" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas." component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
