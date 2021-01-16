import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard'
import Button from '../Button/Button';

const NewsCardList = (props) => {
  return (
  <section className="news">
    <h2 className="title">Результаты поиска</h2>
    <div className="news__block">
      <NewsCard handleOpen={props.handleOpen} />
      <NewsCard handleOpen={props.handleOpen} />
      <NewsCard handleOpen={props.handleOpen} />
      <NewsCard handleOpen={props.handleOpen} />
      <NewsCard handleOpen={props.handleOpen} />
      <NewsCard handleOpen={props.handleOpen} />
    </div>
    <Button className="showmore_button" title={'Показать еще'} />
  </section>
  );
}

export default NewsCardList;
