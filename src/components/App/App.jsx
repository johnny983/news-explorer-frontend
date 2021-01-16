import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { Switch, Route } from "react-router-dom";
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import Main from '../Main/Main';
import '../../vendor/fonts.css'
import React from 'react';
import './App.css';

const App = () => {
  const [ loggedIn, setLoggedIn] = React.useState(true)
  const [ isOpen, setIsOpen ] = React.useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header handleOpen={handleOpen} />
          <Main />
          <Footer />
          <PopupWithForm
            isOpen={isOpen}
            onClose={handleClose}
            title={'Вход'}
            name={'signin'}
            buttonTitle={'Войти'}
            // onUpdateUser={props.handleUpdateUser}
            // onSubmit={handleSubmit}
          >
          <div className="popup__inputs">
            <label htmlFor="popup-input-link" className="popup__label">Email</label>
            <input type="email"
              // onChange={handleInputChange}
              className="popup__input"
              name="popup-input-email"
              required />
          </div>
          <div className="popup__input-error" id="email-input-error">
            Куку такйо воыдао ововдоы
          </div>

          <div className="popup__inputs">
            <label htmlFor="popup-input-password" className="popup__label">Пароль</label>
            <input type="password"
              // onChange={handleInputChange}
              className="popup__input"
              name="popup-input-password"
              required />
          </div>
          <div className="popup__input-error" id="password-input-error">
            Куку такйо воыдао ововдоы
          </div>
          </PopupWithForm>
        </Route>

        <Route exact path="/saved-news">
          <SavedNewsHeader loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
