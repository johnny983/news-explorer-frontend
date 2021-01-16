import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <div className="header__search">
      <input type="text" className="header__input_text" placeholder="Введите тему новости" />
      <Button title={'Искать'} className="submit_button" />
    </div>
  );
}

export default SearchForm;
