import { bazeUrl, authorization } from './constants.js';

export class Api {
  constructor({bazeUrl, authorization}) {
    this._bazeUrl = bazeUrl;
    this._authorization = authorization
  }

  _handleResult(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  
  getInitialCards() {
    return fetch(`${this._bazeUrl}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._handleResult)
  } 

  getProfileInfo() {
    return fetch(`${this._bazeUrl}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._handleResult)
  }

  editUserInfo(data) {
    return fetch(`${this._bazeUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
    })
    .then(this._handleResult) 
  }

  postNewCard(data) {
    return  fetch(`${this._bazeUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name, link: data.link})})
      .then(this._handleResult)
  }
 
  removeCard(cardID) {
    return fetch(`${this._bazeUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._handleResult) 
  }
  
  likeCard(cardID) {
    return  fetch(`${this._bazeUrl}/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._handleResult)
  }

  dislikeCard(cardID) {
    return fetch(`${this._bazeUrl}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._handleResult)
  }

  changeLikeCardStatus(cardID, isLiked) {
    if (!isLiked) return (api.likeCard(cardID));
    else return (api.dislikeCard(cardID))
  }


  changeAvatar(data) {
    return fetch(`${this._bazeUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({avatar: data})
    }) 
    .then(this._handleResult)
  }
}
  
export const api = new Api({ bazeUrl, authorization });

