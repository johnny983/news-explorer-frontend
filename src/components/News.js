import React from 'react';
import './News.css';
import image from '../images/image_08.png'

const News = () => {
  return (
  <section className="news">
    <h2 className="title">Результаты поиска</h2>
    <div className="news__block">
      <figure className="news__item">
        <div className="news__bookmark">
          <div class="news__bookmark_text hidden">Войдите, чтобы сохранять статьи</div>
          <div class="news__bookmark_icon"></div>
        </div>
        <img src={image} alt="какой-то текст" className="news__image" />
        <div className="news__content">
          <p className="news__date">2 августа, 2019</p>
          <h3 className="news__title">Национальгое достояние - парки</h3>
          <div className="news__body">
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          </div>
          <p className="news__source">ЛЕНТА.РУ</p>
        </div>
      </figure>

      <figure className="news__item">
        <div className="news__bookmark">
          <div class="news__bookmark_text hidden">Войдите, чтобы сохранять статьи</div>
          <div class="news__bookmark_icon"></div>
        </div>
        <img src={image} alt="какой-то текст" className="news__image" />
        <div className="news__content">
          <p className="news__date">2 августа, 2019</p>
          <h3 className="news__title">Национальгое достояние - парки</h3>
          <div className="news__body">
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          </div>
          <p className="news__source">Медуза</p>
        </div>
      </figure>

      <figure className="news__item">
        <div className="news__bookmark">
          <div class="news__bookmark_text">Войдите, чтобы сохранять статьи</div>
          <div class="news__bookmark_icon"></div>
        </div>
        <img src={image} alt="какой-то текст" className="news__image" />
        <div className="news__content">
          <p className="news__date">2 августа, 2019</p>
          <h3 className="news__title">Национальгое достояние - парки</h3>
          <div className="news__body">
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
            <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          </div>
          <p className="news__source">РИА</p>
        </div>
      </figure>
    </div>
    <button className="show-again">Показать еще</button>
  </section>
  );
}

export default News;
