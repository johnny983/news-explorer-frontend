import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard'

const NewsCardList = () => {
  return (
  <section className="news">
    <h2 className="title">Результаты поиска</h2>
    <div className="news__block">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
    <button className="show-again">Показать еще</button>
  </section>
  );
}

export default NewsCardList;
