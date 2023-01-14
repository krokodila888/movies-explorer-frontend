import React, { useState } from "react";
import './SavedSearchForm.css';
import magnifier from '../../../images/magnifier.svg';

function SavedSearchForm(props) {

  const { makeNewSearchInSaved } = props;
  const [newSearch, setNewSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    makeNewSearchInSaved(newSearch, isChecked);
  }

  function handleCheck(e) {
    setIsChecked(!isChecked)
  }

  return (
    <section className="savedSearchForm">
      <form className="savedSearchForm__form" onSubmit={handleSubmit}>
        <div className="savedSearchForm__input-container">
          <input className="savedSearchForm__input" type="name" name="search" id="search" placeholder="Фильм" required value={newSearch} onChange={e => setNewSearch(e.target.value)}/>
          <img className="savedSearchForm__img" src={magnifier} alt="Лупа"></img>
          <button className="savedSearchForm__find-button" type='submit'></button>
        </div>
        <div className='savedSearchForm__tumb-container savedSearchForm__text'>
          <label htmlFor="tumb" onClick={() => handleCheck(!isChecked)} className={isChecked ? "savedSearchForm__visible-checkbox1" : "savedSearchForm__visible-checkbox"}>Короткометражки
          </label>
          <input type="checkbox" name="tumb" id="tumb" className="savedSearchForm__invisible-checkbox"/>
        </div>
      </form>
    </section>
  )
}

export default SavedSearchForm;
