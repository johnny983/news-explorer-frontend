import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import logout from '../../images/logout.png';

const Navigation = (props) => {
  return (
    <nav className="header__links">
      <div className="header__link">
        <NavLink exact to="/" activeClassName="header__link-item_active" className="header__link-item">
          Главная
        </NavLink>
      </div>
      { props.loggedIn ?
      <>
        <div className="header__link">
          <NavLink to="/saved-news" activeClassName="header__link-item_active" className="header__link-item">
            Сохраненные статьи
          </NavLink>
        </div>
        <div className="header__link">
          <NavLink to="/saved-news" className="link-button">
            Грета<img src={logout} className="logout" alt="иконка выход"/>
          </NavLink>
        </div>
      </> :
        <div className="header__link" onClick={props.handleOpen}>
          <div className="link-button">Авторизоваться</div>
        </div>
        // <div className="header__link">
        //     <NavLink to="/saved-news" activeClassName="header__link-item_active" className="link-button">
        //       Авторизоваться
        //     </NavLink>
        // </div>
      }
    </nav>
  );
}

export default Navigation;
