import React, { useState } from "react";
import poster from '../../../images/poster.jpg';
import './MoviesCard.css';

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <li className="moviesCard__card">
      <img src={poster} alt="Кадр из фильма" className="moviesCard__image" />
      <div className="moviesCard__title-container">
        <h3 className="moviesCard__title">Бег это свобода</h3>
        <button onClick={() => setIsSaved(!isSaved)} type="button" aria-label="save" className={isSaved ? "moviesCard__add-button moviesCard__add-button-active" : "moviesCard__add-button"}></button>
      </div>
      <p className="moviesCard__duration">1ч 42м</p>
    </li>
  )
}

export default MoviesCard;
