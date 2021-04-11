
const BASE_URL = 'https://api.borman.nomoredomains.club'

export const register = (email, password) =>{
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
      })
    .then((response)=> response.json())
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
      
      body: JSON.stringify({email, password})
    })
    .then((response => response.json()))
    .then((data) => {
        console.log(data)
      if (data.token){
        console.log(data)
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
    console.log(token)
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(token)}`,
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
  }
  
  