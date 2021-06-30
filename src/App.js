import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './Pages/Perfil';
import Home from './Pages/Home';
import MainRecipes from './Pages/MainRecipes';
import Explore from './Pages/Explore';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/perfil" component={ Perfil } />
        {/* <Route path="/comidas" component={} />
        <Route path="/bebidas" component={} />
        <Route path="/comidas/{id-da-receita}" component={} />
        <Route path="/comidas/{id-da-receita}/in-progress" component={} />
        <Route path="/bebidas/{id-da-receita}/in-progress" component={} />
        <Route path="/explorar" component={} />
        <Route path="/explorar/comidas" component={} />
        <Route path="/explorar/bebidas" component={} />
        <Route path="/explorar/comidas/ingredientes" component={} />
        <Route path="/explorar/bebidas/ingredientes" component={} />
        <Route path="/explorar/comidas/area" component={} />
        <Route path="/comidas" component={ MainRecipes } />
        <Route path="/bebidas" component={ MainRecipes } />
        {/* <Route path="/comidas/{id-da-receita}" component={} />
        <Route path="/comidas/{id-da-receita}/in-progress" component={} />
        <Route path="/bebidas/{id-da-receita}/in-progress" component={} /> */}
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
