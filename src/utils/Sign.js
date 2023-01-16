import { bazeAuthUrl, authorization } from './constants.js';

export class Sign {
  constructor({bazeAuthUrl, authorization}) {
    this._bazeAuthUrl = bazeAuthUrl;
    this._authorization = authorization
  }
  
  _handleResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  signIn(data) {
    return fetch(`${bazeAuthUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'password': data.password,
        'email': data.email })
      })
      //.then((response) => {
      //  return response.json();
     // })
      .then(this._handleResult)
      .then((data) => {
        localStorage.setItem( 'token', data.token );
        })        
  } 

  signUp(data) {
    return fetch(`${bazeAuthUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'password': data.password,
        'email': data.email })
      })
      .then(this._handleResult)
  } 

  headerCheck(token) {
    return fetch(`${bazeAuthUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }})
      .then(res => res.json())
      .then(data => data) 
}}

export const sign = new Sign({ bazeAuthUrl, authorization });

