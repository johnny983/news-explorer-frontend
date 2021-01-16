import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard'
import Button from '../Button/Button';

const NewsCardList = () => {
  return (
  <section className="news">
    <h2 className="title">Результаты поиска</h2>
    <div className="news__block">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
    <Button className="showmore_button" title={'Показать еще'} />
  </section>
  );
}

export default NewsCardList;
