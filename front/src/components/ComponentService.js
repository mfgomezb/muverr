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

  createTransaction = (classification, seller, amount, rate, currency, bolivares) => {
    return this.service.post('/', {classification, seller, amount, rate, currency, bolivares})
    .then(response => response.data)
  }

  getTransaction = (id) => {
    return this.service.get(`/seller/${id}`,)
    .then(response => response.data)
  }

  deleteTransaction = (id) => {
    return this.service.delete(`/${id}`,)
    .then(response => response.data)
  }

}

export default ComponentService;

