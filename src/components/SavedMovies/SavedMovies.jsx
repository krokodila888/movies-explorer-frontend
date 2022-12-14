import React from "react";
import '../Movies/Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList.jsx';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';

function SavedMovies() {
  return (
    <section className="movies__component">
      <HeaderLogin/>
      <Preloader />
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </section>
    )
  }

export default SavedMovies; 