import React, { useState } from "react";
import poster from '../../../images/poster.jpg';
import './MoviesCard.css';

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <li className="moviesCard__card">
      <div className="moviesCard__title-container">
        <div className="moviesCard__text-container">
          <h3 className="moviesCard__title">Бег это свобода</h3>
          <p className="moviesCard__duration">1ч 42м</p>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} type="button" aria-label="save" className={isSaved ? "moviesCard__add-button moviesCard__add-button-active" : "moviesCard__add-button"}></button>
      </div>
      <img src={poster} alt="Кадр из фильма" className="moviesCard__image" />
    </li>
  )
}

export default MoviesCard;
