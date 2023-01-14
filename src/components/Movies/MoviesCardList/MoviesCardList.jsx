import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';
function MoviesCardList(props) {
  const {onMovieSave, filteredMovies, savedMovies, search, onMovieDelete, moviesErrorMessage, setBonus, bonus, indexToRenderFirst} = props;
  const moviesToRender = filteredMovies;

  const moviesToRender1 = moviesToRender.slice([0], [(indexToRenderFirst + bonus)]);

  function addBonusToRender() {
    console.log(indexToRenderFirst % 2);    
    console.log(indexToRenderFirst % 3);
    if ((window.innerWidth > 1124) && ((moviesToRender1.length % 3) === 0)) setBonus(bonus + 3);
    if ((window.innerWidth <= 1124) && (window.innerWidth >= 768) && ((moviesToRender1.length % 2) === 0)) setBonus(bonus + 2);
    if ((window.innerWidth < 768)) setBonus(bonus + 1);
    if ((window.innerWidth <= 1124) && ((moviesToRender1.length % 2) !== 0)) setBonus(bonus + 1);
    if ((window.innerWidth > 1124) && ((moviesToRender1.length % 3) !== 0)) setBonus(bonus + (3 - (moviesToRender1.length % 3)));
  }

  return (
    <section className="moviesCardList__content">
      <ul className="moviesCardList__container">
        {(moviesErrorMessage === '' && typeof(moviesToRender) !== 'undefined' && (moviesToRender) !== null) && moviesToRender1.map((item) => (
        <div key={item.id}>
          <MoviesCard 
            foundMovie = {item}
            onMovieSave = {onMovieSave}
            savedMovies = {savedMovies}
            onMovieDelete = {onMovieDelete}
          />
        </div>
       ))}
        {((moviesToRender) !== null) && moviesToRender.length === 0 && search !== '' && <p className="moviesCardList__text">Ничего не найдено</p>
        }
        {moviesErrorMessage !== '' && <p className="moviesCardList__text">{moviesErrorMessage}</p>
        }
      </ul>
      <button onClick={addBonusToRender} className={((((moviesToRender) !== null) && (moviesToRender.length !== 0) && (moviesToRender.length >= (indexToRenderFirst + bonus))) ? "moviesCardList__button" : "moviesCardList__button_disabled")}>Еще</button>
    </section>
  );
}  

export default MoviesCardList; 
