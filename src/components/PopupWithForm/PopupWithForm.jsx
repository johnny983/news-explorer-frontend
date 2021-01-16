import React from 'react';
import './PopupWithForm.css';
import ButtonSubmit from '../Button/Button';
import { Link } from 'react-router-dom'


const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'visible' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="закрыть" onClick={props.onClose}></button>
        <h2 className="popup__header">{props.title}</h2>
        <form onSubmit={props.onSubmit} className={`popup__form popup__${props.name}-form`} name={`popup-${props.name}-form`} method="post" action="#" noValidate>
          {props.children}
          <div className="popup__input-error" id="email-input-error" style={{textAlign: 'center'}}>Куку такйо воыдао ововдоы</div>
          {props.buttonTitle && <ButtonSubmit title={'Войти'} className="submit_button wide" /> }
          <div className="popup_hint">или <Link className="popup__link" to="/signin">Зарегистрироваться</Link></div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
