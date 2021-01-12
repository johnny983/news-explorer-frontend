import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="header__links">
      <div className="header__link">
        <Link to="/" className="header__link-item">Главная</Link>
      </div>
      <div className="header__link button">
        <Link to="/signin" className="header__link-item">Авторизоваться</Link>
      </div>
    </nav>
  );
}

export default Navigation;
