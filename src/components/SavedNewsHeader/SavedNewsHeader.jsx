import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";


const SavedNewsHeader = (props) => {
  return (
    <header className="savednewsheader">
      <div className="header__top">
        <div className="header__logo">
          <NavLink to="/">NewsExplorer</NavLink>
        </div>
        <Navigation loggedIn={props.loggedIn} />
      </div>
      <div className="savednewsheader__content">
        <p className="savednewsheader__title">
            Сохраненные статьи
        </p>
        <h2 className="savednewsheader__header">
            Грета, у вас 5 сохраненных статей
        </h2>
        <p className="savednewsheader__keywords">
            По ключевым словам: <span className="keywords_bold">Природа, тайга и 2-м другим</span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
