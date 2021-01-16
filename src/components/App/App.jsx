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
          <Main handleOpen={handleOpen} />
          <Footer />
          <PopupWithForm
            onClose={handleClose}
            buttonTitle={'Войти'}
            isOpen={isOpen}
            name={'signin'}
            title={'Вход'}
            // onUpdateUser={props.handleUpdateUser}
            // onSubmit={handleSubmit}
          >
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
