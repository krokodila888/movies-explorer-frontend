import React from "react";
import { Route, Routes } from 'react-router-dom';
// import Header from '../Header/Header.jsx';
// import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

function App() {
 
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/sign-in" element={<Login />}>
          </Route>
          <Route path="/sign-up" element={<Register />}>
          </Route>
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="/movies" 
            element={<Movies />
            }>
            </Route>
            <Route exact path="/" element={
              <>
            <Main />
            </>}>  
            </Route>
            <Route path="/saved-movies" element={<SavedMovies/>}>
            </Route>
            <Route path="*" element={<PageNotFound/>}>
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
