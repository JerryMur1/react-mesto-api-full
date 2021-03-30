/* eslint-disable no-useless-concat */
export class Api {
  constructor({ baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    

  }

  getInitialCards() {
    return fetch(this._baseUrl + "cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResOk);
  }

  addCards(data) {
    return fetch(this._baseUrl + "cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResOk);
  }

  addUserId(data) {
    return fetch(this._baseUrl + "users" + "/" + "me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then(this._handleResOk);
  }

  getUserId() {
    return fetch(this._baseUrl + "users" + "/" + "me", {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResOk);
  }

  addAvatarId(data) {
    return fetch(this._baseUrl + "users" + "/" + "me" + "/" + "avatar", {
      method: "PATCH",
      headers: this._headers,
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
      headers: this._headers,
    }).then(this._handleResOk);
  }

  likeCard(_id, like) {
    // console.log(isLiked)
    return fetch(`${this._baseUrl}cards/likes/${_id}`, {
      method: like ? "PUT" : "DELETE",
      headers: this._headers,
      
    }).then(this._handleResOk);
    
  }


  _handleResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-18/",
  headers: {
    authorization: "a40cc85c-64a0-4b1f-ad4a-926989d9eacf",
    "Content-Type": "application/json",
  },
});

export default api;
