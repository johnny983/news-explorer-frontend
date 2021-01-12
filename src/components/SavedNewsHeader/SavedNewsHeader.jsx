import React from 'react';
import Navigation from '../Navigation/Navigation'


const SavedNewsHeader = (props) => {
  props.loggedIn && import("./SavedNewsHeader.css");

  return (
    <header className="headerlogged-in">
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
      </div>
    </header>
  );
}

export default SavedNewsHeader;
