// auth/auth-service.js
import axios from 'axios';

class ComponentService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/user',
      withCredentials: true
    });
  }

  getUser = (id) => {
    return this.service.get(`/profile/${id}`,)
    .then(response => response.data)
  }

  editUser = (id, {username, name, email, country, city, street, area_code}) => {
    return this.service.patch(`/${id}`, {username, name, email, country, city, street, area_code})
    .then(response => response.data)
  }
  addOperation = (buyer, {operations}) => {
    return this.service.post(`/addOper/${buyer}`, {operations})
    .then(response => response.data)
  }

}

export default ComponentService;

