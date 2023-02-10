import { bazeUrl, urlForPosters } from './constants.js';

export class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _handleResult(res) {
    if (res.ok) {
        return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getProfileInfo() {
    this._profileInfo = fetch(`${this._bazeUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
      //credentials: 'include'
    }).then(this._handleResult);
    return this._profileInfo;
  }

  editUserInfo({ name, email }) {
    this._newProfile = fetch(`${this._bazeUrl}/users/me`, {
      method: 'PATCH',
      //credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(this._handleResult);
    return this._newProfile;
  }

  getSavedMovies() {
    this._savedMovies = fetch(`${this._bazeUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
      //credentials: 'include',
    }).then(this._handleResult);
    return this._savedMovies;
  }

  addNewMovie({ country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN }) {
    this._newMovie = fetch(`${this._bazeUrl}/movies`, {
      method: 'POST',
      //credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
      body: JSON.stringify({
        country: country, 
        director: director, 
        duration: duration, 
        year: year, 
        description: description, 
        image: `${urlForPosters}${image.url}`, 
        trailerLink: trailerLink, 
        thumbnail: `${urlForPosters}${image.url}`,
        movieId: id,
        nameRU: nameRU, 
        nameEN: nameEN
      })
      }).then(this._handleResult);
      return this._newMovie;  
  }

  removeMovie(movieID) {
    this._removedMovie = fetch(`${this._bazeUrl}/movies/${movieID}`, {
      method: 'DELETE',
      //credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    }).then(this._handleResult);
    return this._removedMovie;
  }

  signIn(data) {
    return fetch(`${bazeUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      //credentials: 'include',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password })
    })
    .then(this._handleResult)
  } 

  signUp(data) {
    console.log(data);
    return fetch(`${bazeUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      //credentials: 'include',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password,
        'name': data.userName })
    })
    .then(this._handleResult)
  } 

  signOut() {
    return fetch(`${bazeUrl}/signout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
      //credentials: 'include'
    })
  }

  checkToken() {
    return fetch(`${bazeUrl}/users/me`, {
      method: 'GET',
      //credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    })
    .then(this._handleResult)
  }
}

export const mainApi = new MainApi({
  baseUrl: bazeUrl,
  headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
