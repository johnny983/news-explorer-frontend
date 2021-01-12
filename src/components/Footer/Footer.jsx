import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import github from '../../images/github.png'
import facebook from '../../images/fb.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        &copy;&nbsp;2021 Yandex.Практикум, Lightsalmon-14, Made by Johnny
      </div>
      <nav className="footer__links">
        <Link className="footer__link">Главная</Link>
        <Link className="footer__link">Яндекс.Практикум</Link>
        <div className="footer__social">
          <Link target="_blank" rel="noreferrer" className="footer__link">
            <img src={github} className="footer__social-image" alt="ссылка на github автора" />
          </Link>
          <Link target="_blank" rel="noreferrer" className="footer__link">
            <img src={facebook} className="footer__social-image" alt="ссылка на fb автора" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
