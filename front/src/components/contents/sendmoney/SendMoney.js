// auth/Signup.js
import React, { Component } from 'react';
import ComponentService from '../ComponentService'
import SendMoneyForm from './SendMoneyForm'
import OpenTransactionCard from './OpenTransactionCard'

class SendMoney extends Component {
  constructor(props){
    super(props);
    this.state = { 
      activeTransaction: false,
      transactionID: '',
      transaction: {
        id: '',
        classification: "OPEN",
        seller: this.props.userInSession._id,
        currency: "EUR",
        bolivares: '',
        amount: '',
        rate: '',
      }  
    }
    this.service = new ComponentService();
    };

  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const classification = this.state.transaction.classification;
    const seller = this.props.userInSession._id;
    const amount = this.state.transaction.amount;
    const rate = this.state.transaction.rate;
    const currency = this.state.transaction.currency;
    const bolivares = this.state.transaction.bolivares;

    this.service.createTransaction(classification, seller, amount, rate, currency, bolivares)

    .then( response => {
        this.setState({
        activeTransaction: true,
        transactionID: response._id,
        transaction: {
          id: '',
          classification: "OPEN",
          seller: this.props.userInSession._id,
          currency: "EUR",
          bolivares: '',
          amount: '',
          rate: '',
          } 
        })
        console.log(response)
      })
        // this.props.getUser(response.user)
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    const _transaction = {...this.state.transaction};
    _transaction[name] = value;
    this.setState({transaction:  _transaction}, () => {
      if(this.state.transaction.amount && this.state.transaction.rate){
        this.calcTotal();
      }
    });
  }

  calcTotal(){
    const bolivares = this.state.transaction.amount * this.state.transaction.rate
    console.log(bolivares)
    const _transaction = {...this.state.transaction};
    _transaction.bolivares = bolivares;
    this.setState({transaction: _transaction})
  }

  getStatus(){
    this.service.getTransaction(this.props.userInSession._id)
    .then( response => {
      response.forEach( e => {
        if (e.classification === "OPEN" || e.classification === "IN PROCESS") {
          return this.setState(
            {activeTransaction: true,
              transaction: {
                id: e._id,
                classification: e.classification,
                seller: e.seller,
                currency: e.currency,
                bolivares: e.bolivares,
                amount: e.amount,
                rate: e.rate,
            }})
        } else {
          return this.setState(
          {activeTransaction: false,
          transaction: {
            id: '',
            classification: "OPEN",
            seller: this.props.userInSession._id,
            currency: "EUR",
            bolivares: '',
            amount: '',
            rate: '',
            } 
          })
        }
      })
    })};
  
  componentWillMount() {
    this.getStatus()
  }

toggleActive(){
  const active = false
  this.setState({
    activeTransaction: active
  })
}


  render() {


    if(this.state.activeTransaction) {
      return (
        <div>
          <p>OPEN TRANSACTIONS:</p>
          <OpenTransactionCard toggleActive={() => this.toggleActive()} getStatus={() => this.getStatus() } {...this.state.transaction}/>
        </div>
      )
    } else {
    return (
      <div>
        <p>Add you transaction and recipients details</p>
        <SendMoneyForm {...this.state} getStatus={() => this.getStatus() } handleFormSubmit={(e) => this.handleFormSubmit(e)} handleChange = {(e) => this.handleChange(e)}/>
      </div>
      )
    }
  }
}

export default SendMoney;