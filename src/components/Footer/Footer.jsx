import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import github from '../../images/github.png'
import facebook from '../../images/fb.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy;&nbsp;2021 Yandex.Практикум, Lightsalmon-14, Made by Johnny
      </div>
      <nav className="footer__links">
        <NavLink to="/" className="footer__link">Главная</NavLink>
        <a href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
        <div className="footer__social">
          <a href="https://github.com/johnny983" target="_blank" rel="noreferrer" className="footer__link">
            <img src={github} className="footer__social-image" alt="ссылка на github автора" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link">
            <img src={facebook} className="footer__social-image" alt="ссылка на fb автора" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
