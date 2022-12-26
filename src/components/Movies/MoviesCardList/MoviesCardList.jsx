import React, { useEffect, useState, useContext } from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

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
