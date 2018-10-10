// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: "",
      password: "",
      email: "",
      address: {
        country: "",
        street: "",
        area_code: ""
      }
    };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const country = this.state.address.country;
    const street = this.state.address.street;
    const area_code = this.state.address.area_code;

    this.service.signup(username, password, email, country, street, area_code)
    .then( response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          address: {
            country: "",
            street: "",
            area_code: ""
          }
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          <fieldset>
            <label>email:</label>
            <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Country:</label>
            <input type="text" name="country" value={this.state.address.country} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Street:</label>
            <input type="text" name="street" value={this.state.address.street} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Area code:</label>
            <input type="text" name="area_code" value={this.state.address.area_code} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;