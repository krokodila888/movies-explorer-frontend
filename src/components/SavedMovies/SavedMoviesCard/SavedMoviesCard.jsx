import React, { useState } from "react";
import poster from '../../../images/poster.jpg';
import './SavedMoviesCard.css';

function SavedMoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <li className="savedMoviesCard__card">
      <img src={poster} alt="Кадр из фильма" className="savedMoviesCard__image" />
      <div className="savedMoviesCard__title-container">
        <h3 className="savedMoviesCard__title">Бег это свобода</h3>
        <button type="button" aria-label="delete" className="savedMoviesCard__del-button"></button>
      </div>
      <p className="savedMoviesCard__duration">1ч 42м</p>
    </li>
  )
}

export default SavedMoviesCard;
