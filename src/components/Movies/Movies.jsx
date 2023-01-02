import React, { useEffect, useState, useContext } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';

function Movies() {

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

export default Movies; 