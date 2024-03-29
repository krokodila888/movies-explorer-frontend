import React, { useState, useEffect } from "react";
import './SearchForm.css';
import magnifier from '../../../images/magnifier.svg';

function SearchForm(props) {

  const {isChecked, makeNewSearch, setBonus, setIndexToRenderFirst } = props;
  const [newSearch, setNewSearch] = useState('');
  const [isCheckedNow, setIsCheckedNow] = useState((typeof(localStorage.getItem("isChecked")) !== 'undefined' && (localStorage.getItem("isChecked")) !== null) && (localStorage.getItem("isChecked")));

  function handleSubmit(e) {
    e.preventDefault();
    setBonus(0);
    if ((window.innerWidth > 1124)) setIndexToRenderFirst(12);
    if ((window.innerWidth <= 1124) && (window.innerWidth >= 768)) setIndexToRenderFirst(8);
    if ((window.innerWidth < 768)) setIndexToRenderFirst(5);
    makeNewSearch(newSearch, isCheckedNow);
  }

  function handleCheck() {
    setIsCheckedNow(!isCheckedNow)
  }

  useEffect(() => {
    setIsCheckedNow(isChecked)
  }, [])

  return (
    <section className="searchForm">
      <form className="searchForm__form" onSubmit={handleSubmit}>
        <div className="searchForm__input-container">
          <input className="searchForm__input" type="name" name="search" id="search" defaultValue={localStorage.getItem('search')} placeholder="Фильм" required onChange={e => setNewSearch(e.target.value)}/>
          <img className="searchForm__img" src={magnifier} alt="Лупа"></img>
          <button className="searchForm__find-button" type='submit'></button>
        </div>
        <div className='searchForm__tumb-container searchForm__text'>
          <label htmlFor="tumb" onClick={() => handleCheck(!isCheckedNow)} className={isCheckedNow ? "searchForm__visible-checkbox" : "searchForm__visible-checkbox1" } >Короткометражки
          </label>
          <input type="checkbox" name="tumb" id="tumb" className="searchForm__invisible-checkbox" />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
