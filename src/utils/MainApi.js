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
    this._profileInfo = fetch(`${this._bazeUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(this._handleResult);
    return this._profileInfo;
  }

  editUserInfo({ name, email }) {
    this._newProfile = fetch(`${this._bazeUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
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
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    }).then(this._handleResult);
    return this._savedMovies;
  }

  addNewMovie({ country, director, duration, year, description, image, trailerLink, thumbnail, id, nameRU, nameEN }) {
    this._newMovie = fetch(`${this._bazeUrl}/movies`, {
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
      }).then(this._handleResult);
      return this._newMovie;  
  }

  removeMovie(movieID) {
    this._removedMovie = fetch(`${this._bazeUrl}/movies/${movieID}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this._handleResult);
    return this._removedMovie;
  }

  dislikeCard(cardID) {
    this._dislike = fetch(`${this._bazeUrl}/cards/${cardID}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this._handleResult);
    return this._dislike;
  }

  changeLikeCardStatus(cardID, isLiked) {
    if (!isLiked) return (mainApi.likeCard(cardID));
    if (isLiked) return (mainApi.dislikeCard(cardID));
  }

  changeAvatar(data) {
    this._changedAvatar = fetch(`${this._bazeUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({avatar: data})
    }).then(this._handleResult);
    return this._changedAvatar
  }

  signout() {
    return fetch(`${this._bazeUrl}/signout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._handleResponse);
  }

  /*_handleResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }*/

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
    console.log(data);
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
