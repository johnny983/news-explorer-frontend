import React from 'react';
import './Main.css';
import News from './News'

const Main = () => {
  return (
    <main className="main">
      <News />
      <section className="main__content">
        <div className="main__avatar" />
        <div className="main__description">
          <h2 className="title">Об авторе</h2>
          <div className="main__text">
          <p className="main__paragraph">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="main__paragraph">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
