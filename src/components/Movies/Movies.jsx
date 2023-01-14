import React from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';

function Movies(props) {
  const { savedMovies, isChecked, useWindowSize, isLoading, onMovieSave, search, moviesErrorMessage, makeNewSearch, filteredMovies, onMovieDelete, bonus, setBonus, indexToRenderFirst, setIndexToRenderFirst } = props;

  return (
    <section className="movies__component">
      <HeaderLogin/>
      <SearchForm 
      isChecked={isChecked} 
      makeNewSearch={makeNewSearch}
      setBonus={setBonus}
      setIndexToRenderFirst={setIndexToRenderFirst} />
      <Preloader isLoading={isLoading} />
      <MoviesCardList 
      onMovieSave={onMovieSave} 
      filteredMovies={filteredMovies} 
      moviesErrorMessage={moviesErrorMessage} 
      search={search} 
      savedMovies={savedMovies} 
      onMovieDelete={onMovieDelete}
      useWindowSize={useWindowSize}
      bonus={bonus}
      setBonus={setBonus}
      indexToRenderFirst={indexToRenderFirst} />
      <Footer />
    </section>
    )
  }

export default Movies; 