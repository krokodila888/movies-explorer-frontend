import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';

function MoviesCardList() {
 const cardsArray = [1, 2, 3, 4, 5];
  return (
    <section className="moviesCardList__content">
      <ul className="moviesCardList__container">
        {cardsArray.map((item) => <MoviesCard />)}
      </ul>
      <button className="moviesCardList__button">Еще</button>
    </section>
  );
}  

export default MoviesCardList; 
