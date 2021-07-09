import React from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function Explore() {
  return (
    <div>
      <Header />
      <Link to="/explorar/comidas">
        <button data-testid="explore-food" type="button">Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks" type="button">Explorar Bebidas</button>
      </Link>
      <LowerMenu />
    </div>
  );
}
