// auth/auth-service.js
require('dotenv').config();
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/auth`,
      withCredentials: true
    });
  }

  signup = (username, password, email, country, city, street, area_code, photo) => {
    console.log(photo)
    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)
    formData.append('email', email)
    formData.append('country', country)
    formData.append('city', city)
    formData.append('street', street)
    formData.append('area_code', area_code)
    formData.append('photo', photo)
    console.log(formData.get('photo'))
    return this.service.post('/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }})
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
    return fetch(`${process.env.REACT_APP_API_URL}/api/auth/charge`, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    })
    .then(response => response)
  }
}


export default AuthService;

