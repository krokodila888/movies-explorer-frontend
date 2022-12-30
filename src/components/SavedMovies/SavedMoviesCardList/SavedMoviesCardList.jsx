import React from "react";
import './SavedMoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard.jsx';

function MoviesCardList() {
 const cardsArray = [1, 2, 3, 4, 5];
  return (
    <section className="savedMoviesCardList__content">
      <ul className="savedMoviesCardList__container">

          {cardsArray.map((item) => <SavedMoviesCard />)}

      </ul>
      <button className="savedMoviesCardList__button">Еще</button>
    </section>
  );
}  

export default MoviesCardList; 
