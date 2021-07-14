import { useContext, useEffect } from 'react';
import DrinksContext from '../contexts/drinks/DrinksContext';

function PageTitle() {
  const { pageTitle, setPageTitle } = useContext(DrinksContext);
  const path = window.location.pathname;
  const searchBtn = 'search-btn';
  function title() {
    if (path === '/explorar') {
      setPageTitle('Explorar');
      document.getElementById(searchBtn).remove();
    } if (path === '/explorar/comidas') {
      setPageTitle('Explorar Comidas');
      document.getElementById(searchBtn).remove();
    } if (path === '/explorar/bebidas') {
      setPageTitle('Explorar Bebidas');
      document.getElementById(searchBtn).remove();
    } if (path === '/explorar/comidas/ingredientes'
      || path === '/explorar/bebidas/ingredientes') {
      setPageTitle('Explorar Ingredientes');
      document.getElementById(searchBtn).remove();
    } if (path === '/comidas') {
      setPageTitle('Comidas');
    } if (path === '/bebidas') {
      setPageTitle('Bebidas');
    } if (path === '/perfil') {
      setPageTitle('Perfil');
      document.getElementById(searchBtn).remove();
    } if (path === '/explorar/comidas/area') {
      return setPageTitle('Explorar Origem');
    } if (path === '/receitas-feitas') {
      setPageTitle('Receitas Feitas');
      document.getElementById(searchBtn).remove();
    } if (path === '/receitas-favoritas') {
      setPageTitle('Receitas Favoritas');
      document.getElementById(searchBtn).remove();
    }
  }
  useEffect(() => {
    title();
  }, [path]);

  return (
    pageTitle
  );
}

export default PageTitle;
