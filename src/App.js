import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Comidas from './Pages/Comidas';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/comidas" component={ Comidas } />
        {/* <Route path="/bebidas" component={} />
        <Route path="/comidas/{id-da-receita}" component={} />
        <Route path="/comidas/{id-da-receita}/in-progress" component={} />
        <Route path="/bebidas/{id-da-receita}/in-progress" component={} />
        <Route path="/explorar" component={} />
        <Route path="/explorar/comidas" component={} />
        <Route path="/explorar/bebidas" component={} />
        <Route path="/explorar/comidas/ingredientes" component={} />
        <Route path="/explorar/bebidas/ingredientes" component={} />
        <Route path="/explorar/comidas/area" component={} />
        <Route path="/perfil" component={} />
        <Route path="/receitas-feitas" component={} />
        <Route path="/receitas-favoritas." component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
