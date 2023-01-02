import React, { useState } from "react";
import poster from '../../../images/poster.jpg';
import './SavedMoviesCard.css';

function SavedMoviesCard() {

  return (
    <li className="savedMoviesCard__card">
      <div className="savedMoviesCard__title-container">
        <div className="savedMoviesCard__text-container">
          <h3 className="savedMoviesCard__title">Бег это свобода</h3>
          <p className="savedMoviesCard__duration">1ч 42м</p>
        </div>
        <button type="button" aria-label="delete" className="savedMoviesCard__del-button"></button>
      </div>
      <img src={poster} alt="Кадр из фильма" className="savedMoviesCard__image" />
    </li>
  )
}

export default SavedMoviesCard;
