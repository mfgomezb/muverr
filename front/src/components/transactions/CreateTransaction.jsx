import React, {Component} from 'react'
import ComponentService from '../TransactionService'
import classNames from 'classnames';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import Paper from '@material-ui/core/Paper'
import '../../stylesheets/style.scss';
import MenuItem from '@material-ui/core/MenuItem';




const styles = theme => ({

    textField: {
    width: '92%',
      flexBasis: 200, 
      margin: 10,
    },
    inputLabelShrink: {
        shrink: true
    },
    numberInput: {
        width: '45%'
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    }
});
    


class CreateTransaction extends Component {
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
            beneficiaryBank:"",
            beneficiaryNationalId: "",
            beneficiaryBankAccount: "",
            }};
        this.service = new ComponentService()
    }

    handleFormSubmit = (event) => {
        console.log("event submit")
        
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
        .then( response => {
            console.log("Create", response)
        })
        .then( () => {
            this.setState({redirectToProfile: true})
        })
        .catch( error => console.log(error) )
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // handleChange = (event) => {
    //     const {name, value} = event.target;
    //     const _deal = {...this.state.deal};
    //     _deal[name] = value;
    //     this.setState({deal: _deal})
    // }

    handleChange = (event) => {
        const {name, value} = event.target;
        const _deal = {...this.state.deal};
        _deal[name] = value;
        this.setState({deal:  _deal}, () => {
          if(this.state.deal.amount && this.state.deal.rate){
            this.calcTotal();
          }
        });
      }

    calcTotal(){
    const bolivares = this.state.deal.amount * this.state.deal.rate
    console.log(bolivares)
    const _deal = {...this.state.deal};
    _deal.bolivares = bolivares;
    this.setState({deal: _deal})
    }

    handleCurrencyChange = name => event => {
        console.log(event.target.value,);
        
        this.setState({
          [name]: event.target.value,
          
        });
      };

    currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        }
    ]

    render() {

        const { classes } = this.props
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/profile'}/>)
          }

        return (
        <Paper className="transaction-holder">
            <h1>Enter transactions details:</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                {_.map(this.state.deal, (val, key) => { 
                    if (key === 'amount' || key === 'rate' || key === 'bolivares' || key === 'currency') {
                        return <TextField
                        key={key}
                        className={classNames(classes.margin, classes.textField, classes.numberInput)}
                        variant="outlined"
                        label={(this.capitalizeFirstLetter(key)).replace( /([A-Z])/g, " $1" )}
                        name={key}
                        placeholder={val}
                        onChange = {(e) => this.handleChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    } else {
                        return <TextField
                        key={key}
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

                    }
                 })}
                <Button type='submit' variant="outlined" className={classes.button}>
                    Send Money
                </Button>
            </form>
        </Paper>

        )
    }
  }

CreateTransaction.propTypes = {
    classes: PropTypes.object.isRequired
};


 export default withStyles(styles)(CreateTransaction);