import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="header__search">
      <input type="text" className="header__input_text" placeholder="Введите тему новости" />
      <input type="submit" className="header__input_button" value="Искать" />
    </div>
  );
}

export default SearchForm;
