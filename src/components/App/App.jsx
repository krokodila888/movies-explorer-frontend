import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import { ERROR_MESSAGE } from '../../utils/constants.js';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);  
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesToCompare, setSavedMoviesToCompare] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const [searchInSaved, setSearchInSaved] = useState('');
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const [moviesErrorMessage, setMoviesErrorMessage] = useState('');
  const [savedMoviesErrorMessage, setSavedMoviesErrorMessage] = useState('');
  const [bonus, setBonus] = useState(0);
  const [indexToRenderFirst, setIndexToRenderFirst] = useState(0);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedForSaved, setIsCheckedForSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // проверка токена
  function handleCheckToken() {
    mainApi.checkToken()
    .then(() => {
      setLoggedIn(true);
      getUserData()
    })
    .catch((err) => {
      //navigate('/');
      setLoggedIn(false);
      console.log(err)
    })
  }

  // тут пустой поиск
  function setEmptySearch() {
    setSearchInSaved("")
  }

  // получить сохраненные фильмы
  function getAllSavedMovies() {
    setIsLoading(true);
    mainApi.getSavedMovies()
    .then((res) => {
      setSavedMoviesToCompare(res.data);
    })
    .catch((err) => {
      console.log(err)})
    .then(() => {
      setIsLoading(() => false)
    })
  }

  useEffect(() => {
    handleCheckToken()
  }, [])

  useEffect(() => {
    getAllSavedMovies()
  }, [movies])

  useEffect(() => {
    setUserErrorMessage('')
  }, [])

  // регистрация
  function handleRegisterUser(email, password, userName) {
    setUserErrorMessage('');
    mainApi.signUp(email, password, userName)
    .then((data) => {
      if (data) {
        navigate("/sign-in");
        handleLoginUser(email, password)        
      }
    })
      .catch((err) => {
        console.log(err);
        if ((err) && err.includes(409)) setUserErrorMessage(ERROR_MESSAGE.SAME_EMAIL);
        else setUserErrorMessage(ERROR_MESSAGE.SIGNUP_ERROR)
      })
  }

  function setUserData(data) {
    setCurrentUser(data);
  }

  // получение данных пользователя
  function getUserData() {
    mainApi.getProfileInfo()
    .then((res) => {
      setUserData(res.data);
    })
  }

  // логин
  function handleLoginUser(email, password) {
    setUserErrorMessage('');
    mainApi.signIn(email, password)
      .then(() => {
        handleLogin();
      })
      .then(() => {
	      navigate('/movies');
        getAllSavedMovies()
      })
      .then(() => {
        getUserData() 
      })
      .catch((err) => {
        console.log(err);
        setUserErrorMessage(ERROR_MESSAGE.SIGNUP_ERROR)
      })
  }

  // переключение setLoggedIn в компонентах
  function handleLogin() {
    return setLoggedIn(true)
  }

  // выход из профиля
  function handleLogOut() {
    if (loggedIn) {
      mainApi
      .signOut()
        .then(()=>{
          setLoggedIn(false);
          setCurrentUser({ _id: '', email: '', name: '' });
          handleSetMovies([]);
          setSearch("");
          setSearchInSaved("");
          handleSetSavedMovies([]);
          handleSetSavedMoviesToCompare([]);
          setIsChecked(false);
          setIsCheckedForSaved(false);
          localStorage.clear();
          navigate('/')
      })
    }
  }

  // тут про поиск
  function handleSetMovies(data) {
    setMovies(data);
  }

  function handleSetSavedMovies(data) {
    setSavedMovies(data);
  }

  function handleSetSavedMoviesToCompare(data) {
    setSavedMoviesToCompare(data);
  }

  // поиск в фильмах
  function makeNewSearch(data, isChecked1) {
    setIsLoading(true);
    setMoviesErrorMessage('');
    moviesApi.getAllMovies()
    .then((res) => {
      handleSetMovies(res);
    })
    .then(() => {
      setSearch(data);
      setIsChecked(isChecked1);
    })
    .catch((err) => {
      console.log(err);
      setMoviesErrorMessage(ERROR_MESSAGE.DATA_RECEIVE_ERROR)})
    .then(() => {
      setIsLoading(() => false)
    })
  }

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked); 
    localStorage.setItem("search", search)
  }, [search, isChecked])

  useEffect(() => {
    setFilteredMovies(movies.filter((item) => {if (isChecked) return ((item.nameRU.toLowerCase().includes(search.toLowerCase()) && (item.duration <= 41)) /*|| (item.nameEN.toLowerCase().includes(search.toLowerCase()) && (item.duration <= 41) )*/); else return (item.nameRU.toLowerCase().includes(search.toLowerCase()) /*|| item.nameEN.toLowerCase().includes(search.toLowerCase()) */)}))
  }, [movies, search, isChecked])
  

  // поиск в сохраненных фильмах
  function makeNewSearchInSaved(data1, isChecked1) {
    setIsLoading(true);
    setSavedMoviesErrorMessage('');
    mainApi.getSavedMovies()
    .then((res) => {
      handleSetSavedMovies(res.data);
    })
    .then(() => {
      setSearchInSaved(data1);
      setIsCheckedForSaved(isChecked1);
    })
    .catch((err) => {
      console.log(err);
      setSavedMoviesErrorMessage(ERROR_MESSAGE.DATA_RECEIVE_ERROR)})
    .then(() => {
      setIsLoading(() => false)
    })
  }

  useEffect(() => {
    setFilteredSavedMovies(savedMovies.filter((item) => {
      if (!isCheckedForSaved) return (item.nameRU.toLowerCase().includes(searchInSaved.toLowerCase()) && (item.duration <= 41)) /*|| (item.nameEN.toLowerCase().includes(searchInSaved.toLowerCase()) && (item.duration <= 41))*/; else return (item.nameRU.toLowerCase().includes(searchInSaved.toLowerCase()) /*|| item.nameEN.toLowerCase().includes(searchInSaved.toLowerCase())*/) }))
  }, [savedMovies, searchInSaved, isCheckedForSaved])

  // добавить фильм в избранное
  function handleSaveMovie(movie) {
    mainApi.addNewMovie(movie)
      .then((newMovie) => {
        setSavedMoviesToCompare([ ...savedMoviesToCompare, newMovie.data ]);
        setSavedMovies([ ...savedMovies, newMovie.data ]);
      })
      .catch((err) => {
        console.log(err);
        if ((err) && err.includes(401)) 
        setUserErrorMessage(ERROR_MESSAGE.AUTH_ERROR)
      })
  }

  // удалить сохраненный фильм
  function handleMovieDelete(movieID) {
    mainApi.removeMovie(movieID)
      .then(() => {
        const newMovie = savedMovies.filter((item) => item._id !== movieID);
        handleSetSavedMovies(newMovie);
        handleSetSavedMoviesToCompare(newMovie)
      })
      .catch((err) => {
        console.log(err);
        if ((err) && err.includes(401)) 
        setUserErrorMessage(ERROR_MESSAGE.AUTH_ERROR)
      })
  } 

  // редактирование профиля
  function handleUpdateUser(userName, email) {
    setUserErrorMessage('');
    mainApi
      .editUserInfo({ name: userName.userName, email: userName.email })
      .then((newData) => {
        setCurrentUser(newData.data);
        navigate('/profile');
    })
    .catch((err) => {
      console.log(err);
      setUserErrorMessage(ERROR_MESSAGE.SIGNUP_ERROR)
    })
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/" element={
              <Main loggedIn={loggedIn}/>
              }>  
            </Route>
            <Route path="/sign-in" element={<Login 
              handleLogin={handleLogin} 
              loginUser={handleLoginUser}
              userErrorMessage={userErrorMessage}
              setUserErrorMessage={setUserErrorMessage}
              />}>
            </Route>
            <Route path="/sign-up" element={<Register 
              registerUser={handleRegisterUser}
              userErrorMessage={userErrorMessage}
              setUserErrorMessage={setUserErrorMessage}/>}>
            </Route>
            <Route path="*" element={<PageNotFound/>}>
            </Route>
            <Route exact path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies 
                  movies={movies}
                  savedMovies={savedMoviesToCompare}
                  isLoading={isLoading}
                  search={search}
                  onMovieSave = {handleSaveMovie}
                  makeNewSearch = {makeNewSearch}
                  onMovieDelete = {handleMovieDelete}
                  filteredMovies = {filteredMovies}
                  moviesErrorMessage={moviesErrorMessage}
                  setFilteredMovies={setFilteredMovies}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  bonus={bonus}
                  setBonus={setBonus}
                  indexToRenderFirst={indexToRenderFirst}
                  setIndexToRenderFirst={setIndexToRenderFirst}
                  setUserErrorMessage={setUserErrorMessage} />
              </ProtectedRoute>}>      
            </Route>
            <Route exact path="/saved-movies" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies 
                  savedMovies={savedMovies}
                  isLoading={isLoading}
                  searchInSaved={searchInSaved}
                  onMovieDelete = {handleMovieDelete}
                  makeNewSearchInSaved = {makeNewSearchInSaved}
                  filteredSavedMovies = {filteredSavedMovies}
                  setEmptySearch={setEmptySearch}
                  savedMoviesErrorMessage={savedMoviesErrorMessage}
                />
              </ProtectedRoute>}>      
            </Route>
            <Route exact path="/profile" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile 
                  onUpdateUser={handleUpdateUser}
                  exitProfile={handleLogOut}
                  onCheckToken={handleCheckToken}
                  userErrorMessage={userErrorMessage}
                  setUserErrorMessage={setUserErrorMessage} />
              </ProtectedRoute>}>      
            </Route>
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
