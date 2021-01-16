import React from 'react';
import './NewsCard.css';
import image from '../../images/image_08.png'

const NewsCard = () => {
  return (
  <>
  <figure className="news__item">
    <div className="news__bookmark">
      <div className="news__bookmark_text hidden">Войдите, чтобы сохранять статьи</div>
      <div className="news__bookmark_icon"></div>
    </div>
    <img src={image} alt="какой-то текст" className="news__image" />
    <div className="news__content">
      <p className="news__date">2 августа, 2019</p>
      <h3 className="news__title">Национальгое достояние - парки </h3>
      <div className="news__body">
        <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
        <p>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
      </div>
      <p className="news__source">ЛЕНТА.РУ</p>
    </div>
  </figure>
  </>
  );
}

export default NewsCard;
