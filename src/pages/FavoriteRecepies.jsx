import React from 'react';
import CardFavorite from '../components/CardFavorite';
import Header from '../components/Header';

function FavoriteRecepies() {
  return (
    <div>
      <Header />
      <div>
        <button type="button">All</button>
        <button type="button">Foods</button>
        <button type="button">Drinks</button>
      </div>
      <CardFavorite />
    </div>
  );
}

export default FavoriteRecepies;
