import React, { useEffect, useState, useContext } from "react";
import '../Movies/Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';

function SavedMovies() {
  return (
    <section className="movies__component">
      <HeaderLogin/>
      <Preloader />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
    )
  }

export default SavedMovies; 