import { moviesUrl } from './constants.js';

export class MoviesApi {
  constructor(moviesUrl) {
    this._moviesUrl = moviesUrl;
  }

  _handleResult(res) {
    if (res.ok) {
        return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllMovies() {
    this._movies = fetch(this._moviesUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(this._handleResult);
    return this._movies;
  }
}

export const moviesApi = new MoviesApi(moviesUrl);
