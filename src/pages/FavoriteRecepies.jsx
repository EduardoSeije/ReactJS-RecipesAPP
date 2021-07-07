import React from 'react';
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
    </div>
  );
}

export default FavoriteRecepies;
