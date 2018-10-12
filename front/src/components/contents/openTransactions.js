import React, { Component } from 'react';
import ComponentService from '../contents/ComponentService'

class OpenTransactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: []
    }
    this.service = new ComponentService();
  }

  componentDidMount() {
    this.service.openTransactions()
    .then(res => {
      this.setState({
        transactions: res
      })
    })
  }
 
  
render() {
    let transactions = this.state.transactions.map( (e) => {

      return (
      <tr key={e._id}>
        <td>{e.amount}</td>
        <td>{e.rate}</td>
        <td>{e.bolivares}</td>
        <td>{e.created_at}</td>
        <td>{e.classificacion}</td>
      </tr> )
    })

    return (
        <div>
          <p>Open Transactions</p>
          <table>
            <tbody>
            <tr>
              <th>$ Amount</th>
              <th>Rate</th>
              <th>Bolivares</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
            { transactions }
            </tbody>
          </table>
        </div>
    )
  }
}

export default OpenTransactions; 

