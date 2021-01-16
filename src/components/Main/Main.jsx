import React from 'react';
import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList'
import About from '../About/About'

const Main = (props) => {
  return (
    <main className="main">
      <NewsCardList handleOpen={props.handleOpen} />
      <section className="main__content">
        <About />
      </section>
    </main>
  );
}

export default Main;
