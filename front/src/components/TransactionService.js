
import axios from 'axios';
require('dotenv').config();

class ComponentService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/transactions`,
      withCredentials: true
    });
  }

  openTransactions = () => {
    return this.service.get('/', )
      .then(response => response.data)
  }

  createTransaction = (seller, amount, rate, currency, bolivares, beneficiaryName, beneficiaryBank, beneficiaryNationalId, beneficiaryBankAccount) => {
    return this.service.post('/createtransaction/', {
      seller,
      amount,
      rate,
      currency,
      bolivares,
      beneficiaryName,
      beneficiaryBank,
      beneficiaryNationalId,
      beneficiaryBankAccount
      })
      .then(response => response.data)
  }

  getTransaction = (id) => {
    return this.service.get(`/transaction/${id}`, )
      .then(response => response.data)
  }

  editTransaction = (id, {buyer , classification}) => {
    return this.service.patch(`/transaction/${id}`, { buyer, classification })
      .then(response => response.data)
  }

  payTransaction = (id, {classification}) => {
    console.log(classification)
    return this.service.patch(`/transactionpaid/${id}`, {classification})
      .then(response => response.data)
  }

  confirmTransaction = (id, {classification}) => {
    console.log(classification)
    return this.service.patch(`/transactionconfirmed/${id}`, {classification})
      .then(response => response.data)
  }


  cancelBuyOrder = ({buyerId, operId}) => {
    return this.service.patch(`/cancelbuyorder/`, {buyerId, operId})
      .then(response => response.data)
  }

  cancelSellOrder = ({sellerId, operId}) => {
    return this.service.patch(`/cancelsellorder/`, {sellerId, operId})
      .then(response => response.data)
  }

  deleteTransaction = (id) => {
    return this.service.delete(`/${id}`, )
      .then(response => response.data)
  }

}

export default ComponentService;