import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">NewsExplorer</div>
        <Navigation />
      </div>
      <div className="header__content">
        <h1 className="header__title">
          Что твориться в мире?
        </h1>
        <p className="header__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
