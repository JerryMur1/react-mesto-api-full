export const BASE_URL = "https://auth.nomoreparties.co"

export const register = (email, password) =>{
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
    .then((response)=> response.json())
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then((response => response.json()))
    .then((data) => {
        console.log(data)
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
      else {
          return;
      } 
    })
    .catch(err => console.log(err))
  };
  
  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }
  
  