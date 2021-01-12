import React from 'react';
import { Switch, Route } from "react-router-dom";
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import './App.css';

const App = () => {
  const [ loggedIn, setLoggedIn] = React.useState(true)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
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
