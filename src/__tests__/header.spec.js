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
});