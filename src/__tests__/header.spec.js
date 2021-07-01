import { getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Header from '../components/Header';
import renderWithRouter from '../renderWithRouter';

describe('9 - Implemente os elementos do header na tela principal de receitas,'
+ 'respeitando os atributos descritos no protótipo', () => {
  it('Tem data-testid profile-top-btn', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const profileBtn = getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
  it('Tem data-testid page-title', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const pageTitle = getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });
  it('Tem data-testid search-top-btn', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const searchBtn = getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });
});

describe('10 - Implemente um ícone para a tela de perfil,'
  + 'um título e um ícone para a busca, caso exista no protótipo', () => {
  it('Testa se o ícone do perfil está na tela', () => {
    const { getByRole } = renderWithRouter(<Header />);
    const profileIcon = getByRole('img', { name: /profile-icon/i });
    expect(profileIcon).toBeInTheDocument();
  });
  it('Testa se o ícone de busca está na tela', () => {
    const { getByRole } = renderWithRouter(<Header />);
    const searchIcon = getByRole('img', { name: /search-icon/i });
    expect(searchIcon).toBeInTheDocument();
  });
  // it('Testa se tem os ícones na tela de explorar', () => {
  //   const { getByRole } = renderWithRouter(<Explore />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de explorar comidas', () => {
  //   const { getByRole } = renderWithRouter(<ExploreFoods />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de explorar bebidas', () => {
  //   const { getByRole } = renderWithRouter(<ExploreDrinks />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de explorar comidas por ingredientes', () => {
  //   const { getByRole } = renderWithRouter(<ExploreFoodsByIngredients />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de explorar bebidas por ingredientes', () => {
  //   const { getByRole } = renderWithRouter(<ExploreDrinksByIngredients />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de explorar comidas por local de origem', () => {
  //   const { getByRole } = renderWithRouter(<ExploreFoodByLocal />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de receitas feitas', () => {
  //   const { getByRole } = renderWithRouter(<FinishedRecipies />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
  // it('Testa se tem os ícones na tela de receitas favoritas', () => {
  //   const { getByRole } = renderWithRouter(<FavoriteRecipies />);
  //   const searchIcon = getByRole('img', { name: /search-icon/i });
  //   const profileIcon = getByRole('img', { name: /profile-icon/i });
  //   expect(searchIcon, profileIcon).toBeInTheDocument();
  // });
});

describe('11 - Redirecione a pessoa usuária para a'
  + 'tela de perfil ao clicar no botão de perfil', () => {
  // it('Testa se perfil está sendo renderizado', () => {
  //   const { getByText } = renderWithRouter(<Perfil />);
  //   const perfilH1 = getByText(/Página de perfil/i);
  //   expect(perfilH1).toBeInTheDocument();
  // });
  it('Testa se ocorre o redirecionamento de tela', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const profileBtn = getByTestId(/profile-top-btn/i);
    expect(profileBtn).toBeInTheDocument();
    userEvent.click(profileBtn);
    const perfilH1 = getByText(/Página de perfil/i);
    expect(perfilH1).toBeInTheDocument();
  });
});
