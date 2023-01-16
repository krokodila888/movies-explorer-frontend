import React, { useEffect } from "react";
import '../Movies/Movies.css';
import SavedSearchForm from './SavedSearchForm/SavedSearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList.jsx';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';

function SavedMovies(props) {

  const {savedMovies, isLoading, searchInSaved, onMovieDelete, makeNewSearchInSaved, filteredSavedMovies, setEmptySearch, savedMoviesErrorMessage} = props;

  useEffect(() => {
    setEmptySearch()
  }, [])

  return (
    <section className="movies__component">
      <HeaderLogin/>
      <SavedSearchForm 
        makeNewSearchInSaved={makeNewSearchInSaved} 
        savedMovies={savedMovies} 
        filteredSavedMovies={filteredSavedMovies} 
      />
      <Preloader 
        isLoading={isLoading}
      />
      <SavedMoviesCardList 
        savedMovies={savedMovies} 
        searchInSaved={searchInSaved} 
        onMovieDelete={onMovieDelete} 
        filteredSavedMovies={filteredSavedMovies} 
        savedMoviesErrorMessage={savedMoviesErrorMessage}
      />
      <Footer />
    </section>
    )
  }

export default SavedMovies; 
