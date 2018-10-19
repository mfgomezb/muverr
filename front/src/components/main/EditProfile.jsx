import React, {Component} from 'react'
import UserService from '../UserService'
import classNames from 'classnames';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'




const styles = theme => ({
    textField: {
        width: '92%',
        flexBasis: 200, 
        margin: 10,
    },
    inputLabelShrink: {
        shrink: true
    }
  });


class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirectToProfile: false,
            user: {username: "",
            password: "",
            email: "",
            country: "",
            city: "",
            street: "",
            area_code: ""
            }};
        this.service = new UserService()
    }

    handleFormSubmit = (event) => {
        let {...details} = this.state.user
        event.preventDefault();

        const id = this.props.userInSession._id
        const username = details.username;
        const name = details.name;
        const email = details.email;
        const country = details.country;
        const city = details.city;
        const street = details.street;
        const area_code = details.area_code;
    
        this.service.editUser(id, {username, name, email, country, city, street, area_code})
        .then( response => {
            console.log("Patch?", response)
        })
        .then( () => {
            this.setState({redirectToProfile: true})
        })
        .catch( error => console.log(error) )
    }

      

    getUser = id => {
    this.service.getUser(id).then( user => {
        let updateUser = {...this.state.user, ...user[0]};
        this.setState({ user: updateUser});
    });
    };

    componentDidMount = () => {
    return this.getUser(this.props.userInSession._id);
    };

    handleChange = (event) => {
    const {name, value} = event.target;
    const _user = {...this.state.user};
    _user[name] = value;
    this.setState({user: _user})
    }

    


    render() {

        const { classes } = this.props
        let {...details} = this.state.user
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/profile'}/>)
          }
        
        return (
        <div>
            <Paper className="transaction-holder">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField, classes.inputLabelShrink)}
                    variant="outlined"
                    label="Username" 
                    placeholder={details.username}
                    name="username"
                    
                    InputLabelProps={{
                        shrink: true,
                      }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Name" 
                    name="name"
                    placeholder={details.name}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Email" 
                    name="email"
                    placeholder={details.email}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Country" 
                    name="country"
                    placeholder={details.country}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="City" 
                    name="city"
                    placeholder={details.city}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Street" 
                    name="street"
                    placeholder={details.street}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Area Code" 
                    name="area_code"
                    type="number"
                    placeholder={details.area_code}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <input type="submit" value="Edit Profile" />
            </form>
            </Paper>
        </div>

        )
    }
  }

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired
};


 export default withStyles(styles)(EditProfile);