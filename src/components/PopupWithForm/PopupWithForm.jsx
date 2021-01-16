import React from 'react';
import './PopupWithForm.css';
import ButtonSubmit from '../Button/Button';
import { Link } from 'react-router-dom'


const PopupWithForm = (props) => {
  const [ registered, setRegistered ] = React.useState(false);

  const setRegister = () => {
    setRegistered(!registered)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'visible' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="закрыть" onClick={props.onClose} />
        <h2 className="popup__header">{ !registered ? 'Войти' : 'Зарегистрироваться' }</h2>
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__${props.name}-form`}
          name={`popup-${props.name}-form`}
          method="post"
          action="#"
          noValidate
        >
          <>
            <label htmlFor="popup-input-link" className="popup__label">Email</label>
            <input type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              // onChange={handleInputChange}
              placeholder="Введите email"
              className="popup__input"
              name="popup-input-email"
              required />
            <div className="popup__input-error" id="email-input-error">
              Куку такйо воыдао ововдоы
            </div>
          </>

          { registered &&
            <>
                <label htmlFor="popup-input-password" className="popup__label">Пароль</label>
                <input type="password"
                  // onChange={handleInputChange}
                  placeholder="Введите пароль"
                  className="popup__input"
                  name="popup-input-password"
                  required />
              <div className="popup__input-error" id="password-input-error">
                Куку такйо воыдао ововдоы
              </div>
            </>
          }
            <label htmlFor="popup-input-name" className="popup__label">Имя</label>
            <input type="text"
              placeholder="Введите своё имя"
              // onChange={handleInputChange}
              className="popup__input"
              name="popup-input-name"
              required />
          <div className="popup__input-error" id="name-input-error">
            Куку такйо воыдао ововдоы
          </div>

          <div className="popup__input-error" id="server-input-error" style={{textAlign: 'center'}}>
            Куку такйо воыдао ововдоы
          </div>

          <ButtonSubmit title={!registered ? 'Войти' : 'Зарегистрироваться'} className="submit_button wide" />

            <div className="popup_hint">
              или <Link to="/" className="popup__link" onClick={setRegister}>
                { !registered ? 'Зарегистрироваться' : 'Войти' }</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
