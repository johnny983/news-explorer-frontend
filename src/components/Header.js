import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">NewsExplorer</div>
        <div className="header__links">
          <div className="header__link">
            Главная
          </div>
          <div className="header__link button">
            Авторизоваться
          </div>
        </div>
      </div>
      <div className="header__content">
        <h1 className="header__title">
            Что твориться в мире?
        </h1>
        <p className="header__subtitle">
            Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
        <div className="header__search">
          <input type="text" className="header__input_text" placeholder="Введите тему новости" />
          <input type="submit" className="header__input_button" value="Искать" />
        </div>
      </div>
    </header>
  );
}

export default Header;
