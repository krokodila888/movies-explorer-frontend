import React, { useState } from "react";
import './SearchForm.css';
import magnifier from '../../../images/magnifier.svg';

function SearchForm() {

  const [isChecked, setIsChecked] = useState(true);

  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__input-container">
          <input className="searchForm__input" type="name" name="search" id="search" placeholder="Фильм" required />
          <img className="searchForm__img" src={magnifier} alt="Лупа"></img>
          <button className="searchForm__find-button" type='submit'></button>
        </div>
        <div className='searchForm__tumb-container searchForm__text'>
          <label htmlFor="tumb" onClick={() => setIsChecked(!isChecked)} className={isChecked ? "searchForm__visible-checkbox" : "searchForm__visible-checkbox1"}>Короткометражки
          </label>
          <input type="checkbox" name="tumb" id="tumb" className="searchForm__invisible-checkbox"/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;

/*           <label for="tumb" className="searchForm__text">Короткометражки
	          <input className="searchForm__invisible-checkbox" type="checkbox" name="tumb" id="tumb" />
            <span className="searchForm__visible-checkbox"></span> 
          </label>*/