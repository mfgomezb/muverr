import React, {Component} from 'react'
import ComponentService from '../TransactionService'
import classNames from 'classnames';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom'
import _ from 'lodash'




const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      flexBasis: 200,
    },
    inputLabelShrink: {
        shrink: true
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    }
});
    


class Payment extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirectToProfile: false,
            deal: {
            amount: 0,
            rate: 0,
            currency: 'EUR',
            bolivares: 0,
            beneficiaryName: "",
            beneficiaryBank:0,
            beneficiaryNationalId: 0,
            beneficiaryBankAccount: 0,
            }};
        this.service = new ComponentService()
    }

    handleFormSubmit = (event) => {        
        let {...details} = this.state.deal
        event.preventDefault();
    
        const seller = this.props.userInSession._id
        const amount = parseInt(details.amount)
        const rate = parseInt(details.rate)
        const currency = details.currency
        const bolivares = parseInt(details.bolivares)
        const beneficiaryName = details.beneficiaryName
        const beneficiaryBank = parseInt(details.beneficiaryBank)
        const beneficiaryNationalId = parseInt(details.beneficiaryNationalId)
        const beneficiaryBankAccount = parseInt(details.beneficiaryBankAccount)

        this.service.createTransaction(
            seller, 
            amount,
            rate,
            currency,
            bolivares,
            beneficiaryName,
            beneficiaryBank,
            beneficiaryNationalId,
            beneficiaryBankAccount
            )
        .then( () => {
            this.setState({redirectToProfile: true})
        })
        .catch( error => console.log(error) )
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        const _deal = {...this.state.deal};
        _deal[name] = value;
        this.setState({deal: _deal})
    }

    render() {

        const { classes } = this.props
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/profile'}/>)
          }

        return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                {_.map(this.state.deal, (val, key) => { 
                    return <TextField
                    key={key}
                    id="outlined-simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    label={(this.capitalizeFirstLetter(key)).replace( /([A-Z])/g, " $1" )}
                    name={key}
                    placeholder={val}
                    onChange = {(e) => this.handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                 })}
                <Button type='submit' variant="outlined" className={classes.button}>
                    Send Money
                </Button>
            </form>
        </div>

        )
    }
  }

Payment.propTypes = {
    classes: PropTypes.object.isRequired
};


 export default withStyles(styles)(Payment);