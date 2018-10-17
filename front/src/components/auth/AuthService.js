// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/auth',
      withCredentials: true
    });
  }

  signup = (username, password, email, country, city, street, area_code) => {
    return this.service.post('/signup', {username, password, email, country, city, street, area_code})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }

  payment = (token) => {
    console.log(token)
    return fetch('http://localhost:3010/api/auth/charge', {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    })
    .then(response => response)
  }
}


export default AuthService;

