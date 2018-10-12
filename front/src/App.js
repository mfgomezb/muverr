import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// import ProjectList from './components/projects/ProjectList';
import Navbar from './components/main/Navbar';
import Home from './components/main/Home';
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Transactions from './components/transactions/Transactions';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
     };
    this.service = new AuthService();
  
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  getTransactions = (transactionsObj) => {
    this.setState({
      transactions: transactionsObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Home userInSession={this.state.loggedInUser} logout={this.logout} />
            <Route exact path='/transactions' render={() => <Transactions userInSession={this.state.loggedInUser}/>}/>
            {/* <Route exact path='/open-transactions' render={() => <OpenTransactions getTransactions={this.getTransactions}/>}/> */}
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header>
        </div>
      );
    }
  }
}

export default App;