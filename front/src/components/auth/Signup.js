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
      country: "",
      city: "",
      street: "",
      area_code: "",
      photo: null
      }
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const country = this.state.country;
    const city = this.state.city;
    const street = this.state.street;
    const area_code = this.state.area_code;
    const photo = this.state.photo;
    console.log(photo);
    this.service.signup(username, password, email, country, city, street, area_code, photo)
    .then( response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          country: "",
          city: "",
          street: "",
          area_code: "",
          photo: ""
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;

    if (event.target.name === 'photo'){
      const photo = event.target.files[0];
      this.setState({"photo":photo})
    } else {
      this.setState({[name]: value});
    }
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
            <input type="text" name="country" onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>City:</label>
            <input type="text" name="city" onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Street:</label>
            <input type="text" name="street" onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
            <label>Area code:</label>
            <input type="text" name="area_code" onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <fieldset>
              <label className="btn btn-primary">
                  <input type="file" name='photo' className="" placeholder='Product Photo' onChange={(e) => this.handleChange(e)} />
              </label>
          </fieldset>
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;