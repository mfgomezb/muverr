// auth/Signup.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './AuthService'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '',
      error: true,
      redirectToHome: false,
    };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });
        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  setRedirect = () =>{
    this.setState({
      redirectToHome: true
    })
  }

  renderRedirect = () => {
    if(this.state.redirectToHome) {
      return <Redirect to='/'/>
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  render() {
        if (this.state.redirectHome){
          this.renderRedirect()
        }

          return (<div>

            
              <Paper className='login-form-holder'>
              <h3>Welcome back!</h3>
                <form onSubmit={this.handleFormSubmit}>
                {!this.state.error && this.renderRedirect()}
                  <TextField className='input-holder' fullWidth type='text' label="Username" name='username' onChange = {(e) => this.handleChange(e)}></TextField>
                  <TextField className='input-holder' fullWidth type='password' label="Password" name='password' onChange = {(e) => this.handleChange(e)}></TextField>
                  <input type="submit" value="Login" class="login-button" onClick={this.setRedirect} />
                </form>
              </Paper>
            
          </div>)
          }
  
}

export default Login;