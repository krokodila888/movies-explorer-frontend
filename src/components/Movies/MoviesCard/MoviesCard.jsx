import React, { useEffect, useState } from "react";
import './MoviesCard.css';
import { urlForPosters } from '../../../utils/constants.js';

function MoviesCard(props) {
  const {foundMovie, onMovieSave, savedMovies, onMovieDelete } = props;
  const [isSaved, setIsSaved] = useState(false);
  const {nameRU, duration, image, _id, trailerLink} = foundMovie;

  function checkForSaved() {
    const result = savedMovies.find(obj => {
      return obj.nameRU === foundMovie.nameRU
    });
    if (result !==undefined)
    return (setIsSaved(true))
  }

  useEffect(() => {
    checkForSaved()
  }, [])

  function handleAddClick(foundMovie) {
    onMovieSave(foundMovie);
    setIsSaved(!isSaved);
  }

  function handleDeleteClick(foundMovie) {
    const result = savedMovies.find(obj => {
      return obj.nameRU === foundMovie.nameRU
    });    
    onMovieDelete(result._id);
    setIsSaved(!isSaved);
  }
  
  return (
    <li className="moviesCard__card" >
      <a href={trailerLink} target="_blank" className="moviesCard__link">
        <div className="moviesCard__title-container">
          <div className="moviesCard__text-container">
            <h3 className="moviesCard__title">{nameRU}</h3>
            <p className="moviesCard__duration">{(`${Math.trunc(duration / 60)}ч ${duration % 60}м`)}</p>
          </div>
        </div>
        <img src={(`${urlForPosters}/${image.url}`)} alt="Кадр из фильма" className="moviesCard__image"/>
      </a>
      <button onClick={() => {isSaved ? handleDeleteClick(foundMovie) : handleAddClick(foundMovie)}} type="button" aria-label="save" className={isSaved ? "moviesCard__add-button moviesCard__add-button-active" : "moviesCard__add-button"}></button>
    </li>
  )
}

export default MoviesCard;
