import React from 'react';

export default function LowerMenu() {
  return (
    <div data-testid="footer">
      <ul>
        <li><button type="button" data-testid="drinks-bottom-btn">Drinks</button></li>
        <li><button type="button" data-testid="explore-bottom-btn">Explorar</button></li>
        <li><button type="button" data-testid="food-bottom-btn">Comidas</button></li>
      </ul>
    </div>
  );
}
