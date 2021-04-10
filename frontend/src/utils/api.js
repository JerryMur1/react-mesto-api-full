/* eslint-disable no-useless-concat */
export class Api {
  constructor({ baseUrl}) {
    this._baseUrl = baseUrl;
    

  }

  getInitialCards() {
    return fetch(this._baseUrl + "cards", {
      method: "GET",
      headers: this.headers(),
      credentials: 'include',
    }).then(this._handleResOk);
  }

  addCards(data) {
    return fetch(this._baseUrl + "cards", {
      method: "POST",
      headers: this.headers(),
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResOk);
  }

  addUserId(data) {
    return fetch(this._baseUrl + "users" + "/" + "me", {
      method: "PATCH",
      headers: this.headers(),
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then(this._handleResOk);
  }

  getUserId() {
    return fetch(this._baseUrl + "users" + "/" + "me", {
      method: "GET",
      headers: this.headers(),
      credentials: 'include',
    }).then(this._handleResOk);
  }

  addAvatarId(data) {
    return fetch(this._baseUrl + "users" + "/" + "me" + "/" + "avatar", {
      method: "PATCH",
      headers: this.headers(),
      credentials: 'include',
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleResOk);
  }

  getAllNeededData() {
    return Promise.all([this.getInitialCards(), this.getUserId()]);
  }

  deleteCard(_id) {
    return fetch(this._baseUrl + "cards/" + _id, {
      method: "DELETE",
      headers: this.headers(),
      credentials: 'include',
    }).then(this._handleResOk);
  }

  likeCard(_id, like) {
    // console.log(isLiked)
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this.headers(),
      credentials: 'include',
      
    }).then(this._handleResOk);
    
  }

signin(body) {
  return fetch(`${this._baseUrl}signin`, {
    method: 'POST',
    headers: this.headers(),
    credentials: 'include',
    body: JSON.stringify(body)
    
  }).then(this._handleResOk);
  
}
signup(body) {
  return fetch(`${this._baseUrl}signup`, {
    method: 'POST',
    headers: this.headers(),
    credentials: 'include',
    body: JSON.stringify(body)
    
  }).then(this._handleResOk);
  
}
  _handleResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  headers(){
    return  {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  }
}

const api = new Api({
  baseUrl: "//localhost:3001/",
 
});

export default api;
