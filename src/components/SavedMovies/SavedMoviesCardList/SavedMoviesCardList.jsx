import React from "react";
import './SavedMoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard.jsx';
import { CurrentUserContext} from '../../../contexts/CurrentUserContext';

function SavedMoviesCardList(props) {
  
  const {savedMovies, onMovieDelete, searchInSaved, filteredSavedMovies, savedMoviesErrorMessage} = props; 
  const currentUser = React.useContext(CurrentUserContext);
  const savedMoviesToRender = filteredSavedMovies;  

  return (
    <section className="savedMoviesCardList__content">
      <ul className="savedMoviesCardList__container">
        {(searchInSaved !== '' && typeof(savedMoviesToRender) !== ('undefined')) && savedMoviesToRender.map((item) => (
          <div key={item._id}>
            <SavedMoviesCard 
              savedMovie = {item}
              onMovieDelete = {onMovieDelete}/>
          </div>
        ))}
        {savedMoviesToRender.length === 0 && searchInSaved !== '' &&<p className="savedMoviesCardList__text">Ничего не найдено</p>}
        {savedMoviesErrorMessage !== '' &&<p className="savedMoviesCardList__text">{savedMoviesErrorMessage}</p>
        }
      </ul>
    </section>
  );
}  

export default SavedMoviesCardList; 
