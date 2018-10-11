// auth/auth-service.js
import axios from 'axios';

class ComponentService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/transactions',
      withCredentials: true
    });
  }

  openTransactions = () => {
    return this.service.get('/',)
    .then(response => response.data)
  }
}

export default ComponentService;

