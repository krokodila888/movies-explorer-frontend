import { bazeUrl, urlForPosters } from './constants.js';

export class MainApi {
  constructor(bazeUrl) {
    this._bazeUrl = bazeUrl;
  }

  _handleResult(res) {
    if (res.ok) {
        return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getProfileInfo() {
    return fetch(`${this._bazeUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(this._handleResult)
  }

  editUserInfo({ name, email }) {
    return fetch(`${this._bazeUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(this._handleResult)
  }

  getSavedMovies() {
    return fetch(`${this._bazeUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    }).then(this._handleResult)
  }

  addNewMovie({ country, director, duration, year, description, image, trailerLink, thumbnail, id, nameRU, nameEN }) {
    return fetch(`${this._bazeUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
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
      }).then(this._handleResult)
  }

  removeMovie(movieID) {
    return fetch(`${this._bazeUrl}/movies/${movieID}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this._handleResult)
  }

  signIn(data) {
    return fetch(`${bazeUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password })
    })
    .then(this._handleResult)
  } 

  signUp(data) {
    return fetch(`${bazeUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
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
      },
      credentials: 'include'
    })
  }

  checkToken() {
    return fetch(`${bazeUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._handleResult)
  }
}

export const mainApi = new MainApi(bazeUrl);
